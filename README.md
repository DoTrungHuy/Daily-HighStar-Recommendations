# 🚀 Daily High-Star Recommendations

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/DoTrungHuy/Daily-HighStar-Recommendations?style=social)
![GitHub forks](https://img.shields.io/github/forks/DoTrungHuy/Daily-HighStar-Recommendations?style=social)
![License](https://img.shields.io/badge/license-MIT-green)
![Node.js](https://img.shields.io/badge/Node.js-20+-green)

**🤖 每 5 小时更新一批高 Star 开源项目 | AI、机器学习、深度学习、LLM、Agent、开发工具领域精选**

</div>

---

## 📖 项目介绍

**Daily High-Star Recommendations** 是一个自动化开源项目推荐平台。项目通过 GitHub Actions 自动检查，并由脚本按 **每 5 小时时间档**生成推荐内容，抓取并推荐在 **人工智能、机器学习、深度学习、LLM、AI Agent、MCP、开发工具** 等领域中具有一定热度和活跃度的新项目。

**核心特点：**
- ⭐ **每 5 小时更新内容** - GitHub Actions 定时检查，脚本控制 5 小时时间档
- 🤖 **聚焦 AI 技术方向** - 覆盖 AI、机器学习、深度学习、LLM、Agent、MCP、开发工具等领域
- 🌍 **基于 GitHub API** - 使用 GitHub Search API 获取项目数据
- 🔐 **支持 GitHub Token** - 在 Actions 中使用 `GITHUB_TOKEN`，降低 API 限流影响
- 💡 **智能中文翻译** - 自动将英文项目描述翻译为中文
- ⚡ **自动提交更新** - 有新内容时自动写入推荐文件并推送
- 📊 **详细信息展示** - 包含星标数、语言、标签、更新时间档等
- 🔄 **智能去重** - 只推荐未出现过的新项目，避免重复刷屏
- 🧭 **多维度筛选** - 综合星标、最近更新、描述完整度、技术标签等因素排序

---

## ⚠️ 重要说明

- GitHub Actions 目前设置为 **每小时检查一次**。
- 真正的内容更新由脚本控制为 **每 5 小时最多生成一次**。
- 这样做是因为 GitHub Actions 的 cron 表达式不能稳定表达跨日期的严格“每 5 小时一次”；如果直接写 `0 */5 * * *`，当天 `20:00 UTC` 到第二天 `00:00 UTC` 实际只有 4 小时。
- 每次真正更新时，会按当前 **5 小时时间档**生成一个推荐区块，例如：`2026-05-28 10:00 UTC 高 Star 项目推荐`。
- 如果当前 5 小时时间档已经更新过，脚本会自动跳过，workflow 也不会提交空更新。
- 为了尽量保证每次都有新内容，脚本会通过多个主题、语言、星标区间、更新时间范围和翻页搜索来扩大候选项目池。
- 脚本不会再用已经推荐过的热门项目进行兜底。如果 GitHub API 在极端情况下没有返回任何新的未推荐项目，本次会跳过，避免重复推荐。

---

## 🎯 核心功能

- 每小时自动检查，内容每 5 小时最多更新一次
- 自动搜索高星 AI/ML/LLM/Agent/MCP/开发工具项目
- 使用多个搜索条件、语言和星标区间提升项目多样性
- 通过评分函数综合考虑 star、更新时间、创建时间、描述完整度和标签信息
- 自动过滤 archived、fork、描述过少或星标过低的项目
- 使用 `GITHUB_TOKEN` 调用 GitHub API，减少限流问题
- 智能去重，只推荐未出现过的新项目
- 自动翻译英文描述为中文
- 生成结构化 Markdown 推荐文档

---

## 📁 项目结构

```text
Daily-HighStar-Recommendations/
├── .github/workflows/
│   └── daily_recommendations.yml    # 每小时检查，配合脚本实现每 5 小时内容更新
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

- **定时检查**：每小时自动运行一次 workflow。
- **内容更新**：脚本按 5 小时时间档控制，同一个时间档不会重复生成。
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
