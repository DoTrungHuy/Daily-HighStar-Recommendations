const fs = require('fs');
const https = require('https');

const FILE_PATH = 'daily_recommendations.md';

function httpGet(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    };
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
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
    return text;
  }
}

async function main() {
  try {
    let existingContent = '';
    if (fs.existsSync(FILE_PATH)) {
      existingContent = fs.readFileSync(FILE_PATH, 'utf8');
    }

    const apiUrl = 'https://api.github.com/search/repositories?q=topic:artificial-intelligence+topic:machine-learning+topic:deep-learning&sort=stars&order=desc&per_page=60';
    const searchResult = await httpGet(apiUrl);
    const repos = searchResult.items || [];

    const newRepos = [];
    for (const repo of repos) {
      if (!existingContent.includes(repo.html_url)) {
        newRepos.push(repo);
      }
      if (newRepos.length >= 3) break;
    }

    if (newRepos.length === 0) {
      return;
    }

    const today = new Date().toISOString().split('T')[0];
    let newMarkdown = `## 📅 ${today} 每日高 Star AI 项目推荐\n\n`;
    newMarkdown += `> 🤖 算法在云端昼夜运转，灵感在市井游街寻觅。\n\n`;

    for (const repo of newRepos) {
      const translatedDesc = await translateToChinese(repo.description);
      newMarkdown += `### 🌟 [${repo.name}](${repo.html_url})\n`;
      newMarkdown += `- **项目语言**: ${repo.language || 'TypeScript/Python/Other'}\n`;
      newMarkdown += `- **星标数量**: ⭐ ${repo.stargazers_count}\n`;
      newMarkdown += `- **核心概述**: ${translatedDesc}\n`;
      newMarkdown += `- **技术标签**: ${repo.topics ? repo.topics.slice(0, 5).join(', ') : '无'}\n\n`;
    }

    newMarkdown += `---\n\n`;

    const finalContent = newMarkdown + existingContent;
    fs.writeFileSync(FILE_PATH, finalContent, 'utf8');

  } catch (error) {
    process.exit(1);
  }
}

main();
