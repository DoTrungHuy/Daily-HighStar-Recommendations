const fs = require('fs');
const https = require('https');

const FILE_PATH = 'daily_recommendations.md';
const REPOS_PER_RUN = 6;
const FIVE_HOURS_MS = 5 * 60 * 60 * 1000;
const README_SUMMARY_MAX_CHARS = 1100;

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

function buildSearchQueries() {
  return [
    'stars:>5000+created:>2024-01-01',
    'stars:>2000+created:>2025-01-01+topic:ai',
    'stars:>1000+created:>2025-01-01+topic:machine-learning',
    'stars:>1000+created:>2025-01-01+topic:llm',
    'stars:>1000+created:>2025-01-01+topic:agent'
  ];
}

async function fetchCandidateRepos() {
  const collected = [];
  const seen = new Set();

  for (const query of buildSearchQueries()) {
    const apiUrl = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&per_page=30`;
    const searchResult = await httpGet(apiUrl);
    const repos = searchResult.items || [];

    for (const repo of repos) {
      if (!seen.has(repo.html_url)) {
        seen.add(repo.html_url);
        collected.push(repo);
      }
    }
  }

  return collected.sort((a, b) => b.stargazers_count - a.stargazers_count);
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
  if (/llm|large-language-model|rag|chatbot|prompt/.test(source)) {
    return '适合用于大语言模型应用开发、知识库问答、聊天机器人或 Prompt/RAG 工作流参考。';
  }
  if (/machine-learning|deep-learning|pytorch|tensorflow|model/.test(source)) {
    return '适合用于机器学习、深度学习模型训练、实验复现或算法工程实践。';
  }
  if (/ui|web|app|dashboard|frontend/.test(source)) {
    return '适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。';
  }
  if (/dataset|data|benchmark/.test(source)) {
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

    const repos = await fetchCandidateRepos();

    const newRepos = [];
    for (const repo of repos) {
      if (!existingContent.includes(repo.html_url)) {
        newRepos.push(repo);
      }
      if (newRepos.length >= REPOS_PER_RUN) break;
    }

    if (newRepos.length === 0 && repos.length > 0) {
      console.log('没有未推荐过的新项目，将从热门项目中选取兜底内容。');
      newRepos.push(...repos.slice(0, REPOS_PER_RUN));
    }

    if (newRepos.length === 0) {
      console.log('没有找到合适项目');
      return;
    }

    let newMarkdown = `${sectionTitle}\n\n`;
    newMarkdown += `> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。\n\n`;

    for (const repo of newRepos) {
      newMarkdown += await buildRepoDetailMarkdown(repo);
    }

    const finalContent = newMarkdown + existingContent;
    fs.writeFileSync(FILE_PATH, finalContent, 'utf8');

    console.log(`✅ 已成功添加 ${currentSlot} 的 ${newRepos.length} 个项目`);
  } catch (error) {
    console.error('更新失败:', error.message);
    process.exit(1);
  }
}

main();
