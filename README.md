# 🚀 Daily High-Star Recommendations

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/DoTrungHuy/Daily-HighStar-Recommendations?style=social)
![GitHub forks](https://img.shields.io/github/forks/DoTrungHuy/Daily-HighStar-Recommendations?style=social)
![License](https://img.shields.io/badge/license-MIT-green)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)

**🤖 每小时自动检查高 Star 开源项目 | AI、机器学习、深度学习领域精选**

</div>

---

## 📖 项目介绍

**Daily High-Star Recommendations** 是一个完全自动化的开源项目推荐平台。通过 GitHub Actions **每小时**自动运行，抓取并推荐在 **人工智能、机器学习、深度学习** 等领域中高星的新项目。

**核心特点：**
- ⭐ **每小时自动检查** - 每小时运行一次推荐任务
- 🤖 **专注 AI/ML 领域** - 专注于人工智能、机器学习、深度学习相关项目
- 🌍 **基于 GitHub API** - 实时获取最新数据
- 💡 **智能中文翻译** - 自动将项目描述翻译成中文
- ⚡ **零手动维护** - 全自动化运行
- 📊 **详细信息展示** - 包含星标数、语言、标签、更新时间等
- 🔄 **智能去重** - 避免重复推荐

---

## ⚠️ 重要说明

- 本项目**每小时**触发一次 GitHub Actions。
- **并非每个小时都会有新内容推送**。只有当 GitHub 上出现新的、符合筛选条件的高星项目（且未被推荐过）时，脚本才会生成更新并提交 commit。
- 如果一段时间内没有新项目符合要求，仓库不会产生新的提交，这是正常现象。

---

## 🎯 核心功能

- 每小时自动搜索高星 AI/ML 项目
- 智能去重，避免重复推荐
- 自动翻译英文描述为中文
- 生成结构化的 Markdown 推荐文档

---

## 📁 项目结构

```
Daily-HighStar-Recommendations/
├── .github/workflows/
│   └── daily_recommendations.yml    # 每小时运行的工作流
├── update_recommendations.js        # 主要推荐脚本
├── package.json
├── daily_recommendations.md         # 推荐内容
└── README.md
```

---

## 🚀 快速开始

### 本地运行

```bash
# 1. 克隆仓库
git clone https://github.com/DoTrungHuy/Daily-HighStar-Recommendations.git
cd Daily-HighStar-Recommendations

# 2. 安装依赖
npm install

# 3. 运行脚本
node update_recommendations.js

# 4. 查看结果
cat daily_recommendations.md
```

### GitHub Actions 自动运行

- **手动触发**：进入 [Actions 页面](https://github.com/DoTrungHuy/Daily-HighStar-Recommendations/actions) 点击 "Run workflow"

---

## 🔐 GitHub API 速率限制处理

GitHub API 有请求限制：
- 无 Token：60 次/小时
- 有 Token：5000 次/小时（推荐）

GitHub Actions 会自动提供 `GITHUB_TOKEN`，无需手动添加。

---

## 📝 使用说明

- 推荐内容保存在 `daily_recommendations.md` 中
- 可 Star / Watch 本仓库获取更新通知
- 欢迎提交 Issue 反馈

---

## 📞 联系方式

- **GitHub**：[@DoTrungHuy](https://github.com/DoTrungHuy)
- **Issues**：[提交问题](https://github.com/DoTrungHuy/Daily-HighStar-Recommendations/issues)

---

**Made with ❤️ by DoTrungHuy**