# 🚀 Daily High-Star Recommendations

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/DoTrungHuy/Daily-HighStar-Recommendations?style=social)
![GitHub forks](https://img.shields.io/github/forks/DoTrungHuy/Daily-HighStar-Recommendations?style=social)
![License](https://img.shields.io/badge/license-MIT-green)
![Node.js](https://img.shields.io/badge/Node.js-20+-green)

**🤖 每 5 小时自动检查高 Star 开源项目 | AI、机器学习、深度学习、LLM、Agent 领域精选**

</div>

---

## 📖 项目介绍

**Daily High-Star Recommendations** 是一个自动化开源项目推荐平台。项目通过 GitHub Actions **每 5 小时**自动运行一次，抓取并推荐在 **人工智能、机器学习、深度学习、LLM、AI Agent** 等领域中高星的新项目。

**核心特点：**
- ⭐ **每 5 小时自动检查** - GitHub Actions 定时运行推荐任务
- 🤖 **聚焦 AI 技术方向** - 覆盖 AI、机器学习、深度学习、LLM、Agent 等领域
- 🌍 **基于 GitHub API** - 使用 GitHub Search API 获取项目数据
- 🔐 **支持 GitHub Token** - 在 Actions 中使用 `GITHUB_TOKEN`，降低 API 限流影响
- 💡 **智能中文翻译** - 自动将英文项目描述翻译为中文
- ⚡ **自动提交更新** - 有新内容时自动写入推荐文件并推送
- 📊 **详细信息展示** - 包含星标数、语言、标签、更新时间档等
- 🔄 **智能去重** - 优先推荐未出现过的项目，避免重复刷屏

---

## ⚠️ 重要说明

- 本项目通过 GitHub Actions **每 5 小时**触发一次。
- GitHub Actions 的定时任务使用 **UTC 时间**，当前配置为每天 `00:00`、`05:00`、`10:00`、`15:00`、`20:00` UTC 运行。
- 每次运行会按当前 **5 小时时间档**生成一个推荐区块，例如：`2026-05-28 10:00 UTC 高 Star 项目推荐`。
- 如果当前 5 小时时间档已经更新过，脚本会自动跳过，避免重复生成同一时间档内容。
- 如果没有未推荐过的新项目，脚本会从热门项目中选取兜底内容，保证推荐文件尽量持续更新。

---

## 🎯 核心功能

- 每 5 小时自动搜索高星 AI/ML/LLM/Agent 项目
- 使用多个搜索条件提升项目多样性
- 使用 `GITHUB_TOKEN` 调用 GitHub API，减少限流问题
- 智能去重，优先推荐未出现过的项目
- 自动翻译英文描述为中文
- 生成结构化 Markdown 推荐文档

---

## 📁 项目结构

```text
Daily-HighStar-Recommendations/
├── .github/workflows/
│   └── daily_recommendations.yml    # 每 5 小时运行的 GitHub Actions 工作流
├── update_recommendations.js        # 主要推荐脚本
├── package.json                     # Node.js 项目配置
├── daily_recommendations.md         # 推荐内容输出文件
├── .last_run                        # 最近一次 Actions 运行时间记录
└── README.md
```

---

## 🚀 快速开始

### 本地运行

```bash
# 1. 克隆仓库
git clone https://github.com/DoTrungHuy/Daily-HighStar-Recommendations.git
cd Daily-HighStar-Recommendations

# 2. 运行脚本
node update_recommendations.js

# 3. 查看结果
cat daily_recommendations.md
```

### GitHub Actions 自动运行

- **定时触发**：每 5 小时自动运行一次。
- **手动触发**：进入 [Actions 页面](https://github.com/DoTrungHuy/Daily-HighStar-Recommendations/actions) 点击 `Run workflow`。

---

## 🔐 GitHub API 速率限制处理

GitHub API 有请求限制：
- 无 Token：限制较低，容易受限
- 有 Token：限制更高，更适合定时任务

本项目在 GitHub Actions 中通过 `${{ secrets.GITHUB_TOKEN }}` 自动传入 Token，脚本会在请求 GitHub API 时使用它。

---

## 📝 使用说明

- 推荐内容保存在 `daily_recommendations.md` 中。
- 每次更新会把最新推荐插入文件顶部。
- 可 Star / Watch 本仓库获取更新通知。
- 欢迎提交 Issue 反馈。

---

## 📞 联系方式

- **GitHub**：[@DoTrungHuy](https://github.com/DoTrungHuy)
- **Issues**：[提交问题](https://github.com/DoTrungHuy/Daily-HighStar-Recommendations/issues)

---

**Made with ❤️ by DoTrungHuy**
