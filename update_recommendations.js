const fs = require('fs');
const https = require('https');

const FILE_PATH = 'daily_recommendations.md';
const REPOS_PER_RUN = 6;
const FIVE_HOURS_MS = 5 * 60 * 60 * 1000;
const README_SUMMARY_MAX_CHARS = 1100;
const SEARCH_RESULTS_PER_PAGE = 40;
const BASE_MIN_STARS = 20;
const MIN_DESCRIPTION_LENGTH = 12;

function httpGet(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Daily-HighStar-Recommendations',
        'Accept': 'application/vnd.github+json',
        ...(process.env.GITHUB_TOKEN
          ? { 'Authorization': `Bearer ${process.env.GITHUB_TOKEN}` }
          : {})
      }
    };

    https.get(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (res.statusCode < 200 || res.statusCode >= 300) {
            reject(new Error(`Request failed: ${res.statusCode} ${parsed.message || data}`));
            return;
          }
          resolve(parsed);
        } catch (e) {
          reject(new Error(`Invalid JSON response from ${url}: ${e.message}`));
        }
      });
    }).on('error', reject);
  });
}

async function translateToChinese(text) {
  if (!text) return '暂无该开源项目的具体文字描述。';

  const cleanText = String(text).replace(/\s+/g, ' ').trim();
  if (!cleanText) return '暂无该开源项目的具体文字描述。';

  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=zh-CN&dt=t&q=${encodeURIComponent(cleanText)}`;
    const res = await httpGet(url);
    if (res && res[0]) {
      return res[0].map(item => item[0]).join('');
    }
    return cleanText;
  } catch (error) {
    console.log(`翻译失败，保留原文：${error.message}`);
    return cleanText;
  }
}

function getFiveHourSlot(date = new Date()) {
  const slotStartMs = Math.floor(date.getTime() / FIVE_HOURS_MS) * FIVE_HOURS_MS;
  const slotStart = new Date(slotStartMs);
  return slotStart.toISOString().replace('T', ' ').slice(0, 16) + ' UTC';
}

function getDateNDaysAgo(days, date = new Date()) {
  const result = new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
  return result.toISOString().slice(0, 10);
}

function buildSearchStages(date = new Date()) {
  const active90 = getDateNDaysAgo(90, date);
  const active180 = getDateNDaysAgo(180, date);
  const active365 = getDateNDaysAgo(365, date);
  const active730 = getDateNDaysAgo(730, date);
  const created365 = getDateNDaysAgo(365, date);
  const created730 = getDateNDaysAgo(730, date);

  return [
    {
      name: '核心 AI / LLM / Agent 项目',
      pages: 2,
      queries: [
        { query: `stars:300..20000 pushed:>${active180} topic:ai`, sort: 'updated' },
        { query: `stars:300..15000 pushed:>${active180} topic:llm`, sort: 'updated' },
        { query: `stars:200..15000 pushed:>${active180} topic:agent`, sort: 'updated' },
        { query: `stars:100..12000 pushed:>${active180} topic:mcp`, sort: 'updated' },
        { query: `stars:100..12000 pushed:>${active180} topic:rag`, sort: 'updated' }
      ]
    },
    {
      name: '开发工具 / 自动化 / 效率工具',
      pages: 2,
      queries: [
        { query: `stars:100..12000 pushed:>${active365} topic:developer-tools`, sort: 'updated' },
        { query: `stars:100..12000 pushed:>${active365} topic:cli`, sort: 'updated' },
        { query: `stars:100..12000 pushed:>${active365} topic:automation`, sort: 'updated' },
        { query: `stars:100..12000 pushed:>${active365} topic:productivity`, sort: 'updated' },
        { query: `stars:100..12000 pushed:>${active365} topic:open-source`, sort: 'updated' }
      ]
    },
    {
      name: '最近创建的多语言项目',
      pages: 2,
      queries: [
        { query: `stars:50..8000 created:>${created365} language:Python`, sort: 'stars' },
        { query: `stars:50..8000 created:>${created365} language:TypeScript`, sort: 'stars' },
        { query: `stars:50..8000 created:>${created365} language:JavaScript`, sort: 'stars' },
        { query: `stars:50..8000 created:>${created365} language:Rust`, sort: 'stars' },
        { query: `stars:50..8000 created:>${created365} language:Go`, sort: 'stars' }
      ]
    },
    {
      name: '机器学习 / 视觉 / 教育扩展池',
      pages: 2,
      queries: [
        { query: `stars:50..6000 pushed:>${active730} topic:machine-learning`, sort: 'updated' },
        { query: `stars:50..6000 pushed:>${active730} topic:deep-learning`, sort: 'updated' },
        { query: `stars:50..6000 pushed:>${active730} topic:computer-vision`, sort: 'updated' },
        { query: `stars:50..6000 pushed:>${active730} topic:chatbot`, sort: 'updated' },
        { query: `stars:50..6000 pushed:>${active730} topic:education`, sort: 'updated' }
      ]
    },
    {
      name: '低门槛新项目兜底池',
      pages: 1,
      queries: [
        { query: `stars:${BASE_MIN_STARS}..3000 pushed:>${active90} topic:ai`, sort: 'updated' },
        { query: `stars:${BASE_MIN_STARS}..3000 pushed:>${active90} topic:llm`, sort: 'updated' },
        { query: `stars:${BASE_MIN_STARS}..3000 pushed:>${active90} topic:agent`, sort: 'updated' },
        { query: `stars:${BASE_MIN_STARS}..3000 created:>${created730} language:Python`, sort: 'updated' },
        { query: `stars:${BASE_MIN_STARS}..3000 created:>${created730} language:TypeScript`, sort: 'updated' }
      ]
    }
  ];
}

function isUsableCandidate(repo) {
  if (!repo) return false;
  if (repo.archived || repo.disabled || repo.fork) return false;
  if ((repo.stargazers_count || 0) < BASE_MIN_STARS) return false;

  const description = (repo.description || '').trim();
  if (description.length < MIN_DESCRIPTION_LENGTH) return false;

  return true;
}

function scoreRepo(repo) {
  let score = 0;

  const stars = repo.stargazers_count || 0;
  score += Math.log10(stars + 1) * 20;

  const pushedAt = repo.pushed_at ? new Date(repo.pushed_at).getTime() : 0;
  if (pushedAt > 0) {
    const daysSincePushed = (Date.now() - pushedAt) / (1000 * 60 * 60 * 24);
    if (daysSincePushed <= 7) score += 35;
    else if (daysSincePushed <= 30) score += 25;
    else if (daysSincePushed <= 90) score += 15;
    else if (daysSincePushed <= 180) score += 8;
    else if (daysSincePushed <= 365) score += 3;
    else score -= 8;
  }

  const createdAt = repo.created_at ? new Date(repo.created_at).getTime() : 0;
  if (createdAt > 0) {
    const daysSinceCreated = (Date.now() - createdAt) / (1000 * 60 * 60 * 24);
    if (daysSinceCreated <= 365) score += 10;
    else if (daysSinceCreated <= 730) score += 5;
  }

  const description = repo.description || '';
  if (description.length >= 30) score += 8;
  if (description.length >= 80) score += 4;

  const topics = repo.topics || [];
  if (topics.length > 0) score += 8;
  if (topics.length >= 3) score += 5;

  if (repo.language) score += 4;
  if (repo.has_issues) score += 3;
  if (repo.homepage) score += 3;

  return score;
}

function sortCandidates(repos) {
  return repos.sort((a, b) => scoreRepo(b) - scoreRepo(a));
}

function isAlreadyRecommended(existingContent, repo) {
  return existingContent.includes(repo.html_url) || existingContent.includes(repo.full_name);
}

function selectNewRepos(repos, existingContent) {
  const sortedRepos = sortCandidates([...repos]);
  const selected = [];
  const ownerCount = new Map();
  const languageCount = new Map();

  for (const repo of sortedRepos) {
    if (isAlreadyRecommended(existingContent, repo)) continue;

    const owner = repo.owner && repo.owner.login ? repo.owner.login : 'unknown';
    const language = repo.language || 'unknown';

    if ((ownerCount.get(owner) || 0) >= 1) continue;
    if ((languageCount.get(language) || 0) >= 2) continue;

    selected.push(repo);
    ownerCount.set(owner, (ownerCount.get(owner) || 0) + 1);
    languageCount.set(language, (languageCount.get(language) || 0) + 1);

    if (selected.length >= REPOS_PER_RUN) return selected;
  }

  for (const repo of sortedRepos) {
    if (selected.some(item => item.html_url === repo.html_url)) continue;
    if (isAlreadyRecommended(existingContent, repo)) continue;

    selected.push(repo);
    if (selected.length >= REPOS_PER_RUN) return selected;
  }

  return selected;
}

async function fetchCandidateRepos(existingContent) {
  const collected = [];
  const seen = new Set();
  let searchedQueries = 0;
  let lastStageName = '未开始搜索';
  let selected = [];

  for (const stage of buildSearchStages()) {
    lastStageName = stage.name;

    for (const { query, sort } of stage.queries) {
      for (let page = 1; page <= stage.pages; page += 1) {
        const params = new URLSearchParams({
          q: query,
          sort,
          order: 'desc',
          per_page: String(SEARCH_RESULTS_PER_PAGE),
          page: String(page)
        });
        const apiUrl = `https://api.github.com/search/repositories?${params.toString()}`;

        try {
          searchedQueries += 1;
          const searchResult = await httpGet(apiUrl);
          const repos = searchResult.items || [];

          for (const repo of repos) {
            if (!seen.has(repo.html_url) && isUsableCandidate(repo)) {
              seen.add(repo.html_url);
              collected.push(repo);
            }
          }

          selected = selectNewRepos(collected, existingContent);
          if (selected.length >= REPOS_PER_RUN) {
            return {
              candidates: sortCandidates(collected),
              selected,
              searchedQueries,
              lastStageName
            };
          }

          if (repos.length < SEARCH_RESULTS_PER_PAGE) break;
        } catch (error) {
          console.log(`搜索失败，已跳过该查询：${query} - ${error.message}`);
          break;
        }
      }
    }
  }

  selected = selectNewRepos(collected, existingContent);
  return {
    candidates: sortCandidates(collected),
    selected,
    searchedQueries,
    lastStageName
  };
}

function decodeBase64Content(content) {
  return Buffer.from(content.replace(/\n/g, ''), 'base64').toString('utf8');
}

function cleanReadmeMarkdown(markdown) {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
    .replace(/\[[^\]]*\]\([^)]+\)/g, (match) => match.replace(/\[|\]\([^)]+\)/g, ''))
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_`~|]/g, ' ')
    .replace(/\r/g, '\n')
    .split('\n')
    .map(line => line.trim())
    .filter(line => {
      if (!line) return false;
      if (/^(badge|build|license|stars?|forks?|downloads?)[:\s-]/i.test(line)) return false;
      if (/^[-=]{3,}$/.test(line)) return false;
      if (/^\[!\[/.test(line)) return false;
      return line.length >= 20;
    })
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function pickReadmeKeyPart(markdown) {
  const cleaned = cleanReadmeMarkdown(markdown);
  if (!cleaned) return '';

  const paragraphs = cleaned
    .split(/\n\s*\n/)
    .map(p => p.replace(/\s+/g, ' ').trim())
    .filter(Boolean);

  const keywordParagraphs = paragraphs.filter(p =>
    /(what is|overview|introduction|features|why|usage|quick start|about|简介|介绍|特性|功能|使用|快速开始)/i.test(p)
  );

  const selected = (keywordParagraphs.length > 0 ? keywordParagraphs : paragraphs).slice(0, 4);
  let result = selected.join(' ');

  if (result.length < 260 && paragraphs.length > selected.length) {
    result = `${result} ${paragraphs.slice(selected.length, selected.length + 2).join(' ')}`;
  }

  return result.slice(0, README_SUMMARY_MAX_CHARS);
}

async function fetchReadmeKeyPart(repo) {
  try {
    const readmeApiUrl = `${repo.url}/readme`;
    const readme = await httpGet(readmeApiUrl);
    if (!readme || !readme.content) return '';

    const markdown = decodeBase64Content(readme.content);
    return pickReadmeKeyPart(markdown);
  } catch (error) {
    console.log(`读取 README 失败：${repo.full_name} - ${error.message}`);
    return '';
  }
}

function inferProjectUse(repo, translatedDesc, translatedReadme) {
  const source = `${repo.name} ${repo.description || ''} ${(repo.topics || []).join(' ')}`.toLowerCase();

  if (/agent|multi-agent|autonomous/.test(source)) {
    return '适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。';
  }
  if (/mcp|model-context-protocol|context-protocol/.test(source)) {
    return '适合学习 MCP / 工具调用 / 上下文扩展相关生态，也可以作为 AI 工具接入的参考项目。';
  }
  if (/llm|large-language-model|rag|chatbot|prompt/.test(source)) {
    return '适合用于大语言模型应用开发、知识库问答、聊天机器人或 Prompt/RAG 工作流参考。';
  }
  if (/machine-learning|deep-learning|pytorch|tensorflow|model/.test(source)) {
    return '适合用于机器学习、深度学习模型训练、实验复现或算法工程实践。';
  }
  if (/ui|web|app|dashboard|frontend/.test(source)) {
    return '适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。';
  }
  if (/\bdataset\b|benchmark|evaluation|leaderboard/.test(source)) {
    return '适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。';
  }

  const basis = translatedReadme || translatedDesc;
  if (basis && basis !== '暂无该开源项目的具体文字描述。') {
    return `从项目说明看，它主要围绕“${basis.slice(0, 80)}”展开，可用于学习、研究或二次开发。`;
  }

  return '适合先收藏观察，后续可以结合 README、示例代码和 Issues 判断是否适合自己的学习或项目开发。';
}

async function buildRepoDetailMarkdown(repo) {
  const translatedDesc = await translateToChinese(repo.description);
  const readmeKeyPart = await fetchReadmeKeyPart(repo);
  const translatedReadme = readmeKeyPart
    ? await translateToChinese(readmeKeyPart)
    : 'README 关键内容暂时读取失败或内容较少，建议点进项目主页查看完整说明。';

  const language = repo.language || '多语言';
  const topics = repo.topics && repo.topics.length > 0
    ? repo.topics.slice(0, 6).join(', ')
    : '开源';
  const projectUse = inferProjectUse(repo, translatedDesc, translatedReadme);

  let markdown = `### 🌟 [${repo.name}](${repo.html_url})\n`;
  markdown += `- **项目语言**: ${language}\n`;
  markdown += `- **星标数量**: ⭐ ${repo.stargazers_count.toLocaleString()}\n`;
  markdown += `- **核心概述**: ${translatedDesc}\n`;
  markdown += `- **大概是做什么的**: ${translatedReadme}\n`;
  markdown += `- **有什么用**: ${projectUse}\n`;
  markdown += `- **技术标签**: ${topics}\n\n`;
  markdown += `---\n\n`;

  return markdown;
}

function buildNoNewRepoMarkdown(sectionTitle, searchStats) {
  let markdown = `${sectionTitle}\n\n`;
  markdown += `> 🤖 本时间档已运行搜索，但没有找到新的未推荐项目。为了避免重复刷屏，本次记录搜索状态，不重复写入旧项目。\n\n`;
  markdown += `- **搜索候选数量**: ${searchStats.candidates.length}\n`;
  markdown += `- **已执行搜索请求**: ${searchStats.searchedQueries}\n`;
  markdown += `- **最后扩展到的搜索池**: ${searchStats.lastStageName}\n`;
  markdown += `- **处理策略**: 保留更新记录，但不重复推荐已出现过的项目。\n\n`;
  markdown += `---\n\n`;
  return markdown;
}

async function main() {
  try {
    let existingContent = '';
    if (fs.existsSync(FILE_PATH)) {
      existingContent = fs.readFileSync(FILE_PATH, 'utf8');
    }

    const currentSlot = getFiveHourSlot();
    const sectionTitle = `## 🕔 ${currentSlot} 高 Star 项目推荐`;

    if (existingContent.includes(sectionTitle)) {
      console.log(`当前 5 小时档 (${currentSlot}) 已经更新过，跳过。`);
      return;
    }

    const searchStats = await fetchCandidateRepos(existingContent);
    const newRepos = searchStats.selected;

    let newMarkdown = '';
    if (newRepos.length === 0) {
      console.log('没有找到新的未推荐项目，将写入搜索状态，避免重复推荐。');
      newMarkdown = buildNoNewRepoMarkdown(sectionTitle, searchStats);
    } else {
      newMarkdown = `${sectionTitle}\n\n`;
      newMarkdown += `> 🤖 每 5 小时精选一批高质量开源项目。本次从 ${searchStats.candidates.length} 个候选项目中筛选出 ${newRepos.length} 个未推荐过的新项目。\n\n`;

      for (const repo of newRepos) {
        newMarkdown += await buildRepoDetailMarkdown(repo);
      }
    }

    const finalContent = newMarkdown + existingContent;
    fs.writeFileSync(FILE_PATH, finalContent, 'utf8');

    console.log(`✅ 已成功添加 ${currentSlot} 的更新内容，新增项目数：${newRepos.length}`);
  } catch (error) {
    console.error('更新失败:', error.message);
    process.exit(1);
  }
}

main();
