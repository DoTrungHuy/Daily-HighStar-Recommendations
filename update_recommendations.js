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

    // 放宽搜索条件：高星 + 2024年后创建的项目，增加多样性
    const apiUrl = 'https://api.github.com/search/repositories?q=stars:>5000+created:>2024-01-01&sort=stars&order=desc&per_page=80';
    const searchResult = await httpGet(apiUrl);
    const repos = searchResult.items || [];

    const today = new Date().toISOString().split('T')[0];

    // 检查今天是否已经添加过section
    if (existingContent.includes(`## 📅 ${today}`)) {
      console.log(`今天 (${today}) 已经更新过，跳过。`);
      return;
    }

    const newRepos = [];
    for (const repo of repos) {
      if (!existingContent.includes(repo.html_url)) {
        newRepos.push(repo);
      }
      if (newRepos.length >= 6) break;
    }

    // 如果没有新项目，也从热门中挑选一些
    if (newRepos.length === 0 && repos.length > 0) {
      newRepos.push(...repos.slice(0, 6));
    }

    if (newRepos.length === 0) {
      console.log('没有找到合适项目');
      return;
    }

    let newMarkdown = `## 📅 ${today} 每日高 Star 项目推荐\n\n`;
    newMarkdown += `> 🤖 每日精选高质量开源项目，持续为你带来灵感\n\n`;

    for (const repo of newRepos) {
      const translatedDesc = await translateToChinese(repo.description);
      const language = repo.language || '多语言';
      newMarkdown += `### 🌟 [${repo.name}](${repo.html_url})\n`;
      newMarkdown += `- **项目语言**: ${language}\n`;
      newMarkdown += `- **星标数量**: ⭐ ${repo.stargazers_count.toLocaleString()}\n`;
      newMarkdown += `- **核心概述**: ${translatedDesc}\n`;
      newMarkdown += `- **技术标签**: ${repo.topics ? repo.topics.slice(0, 6).join(', ') : '开源'}\n\n`;
      newMarkdown += `---\n\n`;
    }

    // 【关键修改】新内容插入到最顶部
    const finalContent = newMarkdown + existingContent;
    fs.writeFileSync(FILE_PATH, finalContent, 'utf8');

    console.log(`✅ 已成功添加 ${today} 的 ${newRepos.length} 个项目`);

  } catch (error) {
    console.error('更新失败:', error.message);
    process.exit(1);
  }
}

main();
