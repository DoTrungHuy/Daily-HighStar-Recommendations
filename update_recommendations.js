const fs = require('fs');
const https = require('https');

const FILE_PATH = 'daily_recommendations.md';
const REPOS_PER_RUN = 6;

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
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-CN&dt=t&q=${encodeURIComponent(text)}`;
    const res = await httpGet(url);
    if (res && res[0]) {
      return res[0].map(item => item[0]).join('');
    }
    return text;
  } catch (error) {
    console.log(`翻译失败，保留原文：${error.message}`);
    return text;
  }
}

function getFiveHourSlot(date = new Date()) {
  const datePart = date.toISOString().split('T')[0];
  const hour = date.getUTCHours();
  const slotStartHour = Math.floor(hour / 5) * 5;
  return `${datePart} ${String(slotStartHour).padStart(2, '0')}:00 UTC`;
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
      const translatedDesc = await translateToChinese(repo.description);
      const language = repo.language || '多语言';
      const topics = repo.topics && repo.topics.length > 0
        ? repo.topics.slice(0, 6).join(', ')
        : '开源';

      newMarkdown += `### 🌟 [${repo.name}](${repo.html_url})\n`;
      newMarkdown += `- **项目语言**: ${language}\n`;
      newMarkdown += `- **星标数量**: ⭐ ${repo.stargazers_count.toLocaleString()}\n`;
      newMarkdown += `- **核心概述**: ${translatedDesc}\n`;
      newMarkdown += `- **技术标签**: ${topics}\n\n`;
      newMarkdown += `---\n\n`;
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
