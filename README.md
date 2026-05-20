# 🚀 Daily High-Star Recommendations

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/CoderCurryZhang/Daily-HighStar-Recommendations?style=social)
![GitHub forks](https://img.shields.io/github/forks/CoderCurryZhang/Daily-HighStar-Recommendations?style=social)
![License](https://img.shields.io/badge/license-MIT-green)
![Python](https://img.shields.io/badge/Python-3.8+-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)

**🤖 每日自动推荐高 Star 开源项目 | AI、机器学习、深度学习领域精选**

[English](#english) | [中文](#中文)

</div>

---

## 📖 中文

### 📚 项目介绍

**Daily High-Star Recommendations** 是一个完全自动化的开源项目推荐平台。通过 GitHub Actions 每天早上 9:00（北京时间）自动爬取并推荐在 **人工智能、机器学习、深度学习** 等领域中最新的高星项目。

**核心特点：**
- ⭐ **自动化推荐** - 每天自动更新高星项目
- 🤖 **AI/ML 专注** - 专注于人工智能、机器学习、深度学习领域
- 🌍 **实时更新** - 基于 GitHub API 的实时数据
- 💡 **智能翻译** - 自动将项目描述翻译成中文
- ⚡ **零手动维护** - 完全自动化工作流
- 📊 **详细信息** - 包含星标数、编程语言、技术标签等

---

### 🎯 核心功能

#### 1. **自动爬取高星项目**
- 每天早上 9:00（北京时间）自动触发
- 从 GitHub 搜索 API 获取最新热门项目
- 支持多个技术话题搜索（AI、ML、DL 等）

#### 2. **智能推荐展示**
- 展示项目名称、简介、星标数
- 自动翻译项目描述到中文
- 显示编程语言、技术标签等详细信息
- 按时间倒序排列，最新推荐优先

#### 3. **完全自动化工作流**
```
GitHub Actions (每日 9:00) 
    ↓
运行 Node.js 脚本
    ↓
爬取 GitHub API 数据
    ↓
生成 Markdown 文档
    ↓
自动提交推送到仓库
```

#### 4. **重复检测**
- 防止推荐重复项目
- 智能去重机制
- 每日只推荐 3 个新项目

---

### 📁 项目结构

```
Daily-HighStar-Recommendations/
├── .github/
│   └── workflows/
│       └── daily_recommendations.yml    # GitHub Actions 工作流配置
├── update_recommendations.js            # 主要推荐脚本
├── package.json                         # Node.js 依赖配置
├── daily_recommendations.md             # 推荐内容输出文件
└── README.md                            # 项目文档
```

---

### 🔧 技术栈

| 技术 | 用途 |
|------|------|
| **GitHub Actions** | 自动化工作流触发 |
| **Node.js 18+** | 脚本运行环境 |
| **GitHub API** | 数据获取 |
| **Google Translate API** | 中文翻译 |
| **Markdown** | 内容展示格式 |

---

### ⚙️ 工作原理

#### 脚本执行流程

```javascript
1. 检查已有推荐历史
2. 调用 GitHub API 搜索高星项目
   - 搜索条件: AI + ML + DL 话题
   - 排序方式: 按星标数降序
   - 获取数量: 60 个项目
3. 对比去重
   - 跳过已推荐过的项目
   - 只取前 3 个新项目
4. 翻译处理
   - 使用 Google Translate API
   - 将英文描述翻译成中文
5. 生成 Markdown
   - 格式化推荐内容
   - 保留历史记录
6. 自动提交推送
   - Git 配置 Actions Bot 身份
   - 提交并推送到主分支
```

---

### 📊 数据示例

```markdown
## 📅 2026-05-20 每日高 Star AI 项目推荐

### 🌟 TensorFlow
- **项目语言**: Python
- **星标数量**: ⭐ 185,000+
- **核心概述**: Google 开源的机器学习框架，支持深度学习
- **技术标签**: machine-learning, deep-learning, tensorflow

### 🌟 PyTorch
- **项目语言**: Python/C++
- **星标数量**: ⭐ 78,000+
- **核心概述**: Meta 开源的深度学习框架
- **技术标签**: deep-learning, pytorch, neural-networks
```

---

### 🚀 快速开始

#### 本地运行

```bash
# 1. 克隆项目
git clone https://github.com/CoderCurryZhang/Daily-HighStar-Recommendations.git
cd Daily-HighStar-Recommendations

# 2. 安装依赖
npm install

# 3. 本地测试脚本
node update_recommendations.js

# 4. 查看生成的推荐文件
cat daily_recommendations.md
```

#### GitHub Actions 自动运行

该项目已配置 GitHub Actions，无需任何手动操作：

- **定时触发**: 每天早上 9:00（北京时间）
- **手动触发**: 访问 [Actions 页面](./actions) 点击 "Run workflow"
- **推送触发**: 对 main 分支进行 push 时自动运行

---

### 🔐 权限配置

确保以下设置正确，以启用自动推送功能：

1. **Settings → Actions → General**
   - ✅ Actions permissions: "Allow all actions and reusable workflows"
   
2. **Workflow permissions**
   - ✅ Read and write permissions
   - ✅ Allow GitHub Actions to create and approve pull requests

---

### 📝 定制配置

#### 修改定时时间

编辑 `.github/workflows/daily_recommendations.yml`:

```yaml
on:
  schedule:
    - cron: '0 1 * * *'  # UTC 时间 1:00 = 北京时间 9:00
```

**Cron 表达式说明：**
- `分 小时 日期 月份 星期`
- `0 1 * * *` = 每天 UTC 1:00
- `0 9 * * *` = 每天 UTC 9:00
- [Cron 时间转换工具](https://crontab.guru)

#### 修改搜索条件

编辑 `update_recommendations.js` 中的 API URL:

```javascript
// 修改搜索话题
const apiUrl = 'https://api.github.com/search/repositories?' +
  'q=topic:your-topic+sort:stars&order=desc&per_page=60';
```

**支持的搜索条件：**
- `topic:artificial-intelligence` - 人工智能
- `topic:machine-learning` - 机器学习
- `topic:deep-learning` - 深度学习
- `topic:nlp` - 自然语言处理
- `topic:computer-vision` - 计算机视觉

---

### 📚 推荐内容位置

所有推荐内容保存在：
- **文件名**: `daily_recommendations.md`
- **位置**: 仓库根目录
- **格式**: Markdown
- **更新频率**: 每日一次（早上 9:00）

---

### 🐛 故障排除

#### 自动推送不工作？

**解决步骤：**

1. 检查 Actions 权限
   ```
   Settings → Actions → General
   → "Allow all actions and reusable workflows" ✅
   ```

2. 检查工作流文件
   ```bash
   cat .github/workflows/daily_recommendations.yml
   ```

3. 查看运行日志
   - 访问 [Actions 页面](./actions)
   - 点击最新的运行记录
   - 查看详细日志

4. 手动触发测试
   - Actions 页面 → Run workflow
   - 观察是否成功执行

#### API 请求失败？

- GitHub API 有速率限制（60 req/hour 未认证，6000 req/hour 认证）
- 使用 GitHub Token 提高限额：
  ```javascript
  const options = {
    headers: {
      'Authorization': 'token YOUR_GITHUB_TOKEN'
    }
  };
  ```

#### 翻译结果不准确？

- Google Translate API 可能受网络影响
- 脚本会自动降级至英文原文
- 可改用其他翻译服务（如百度翻译 API）

---

### 📈 性能指标

| 指标 | 值 |
|------|-----|
| **平均执行时间** | < 30 秒 |
| **每日新增推荐** | 3 个项目 |
| **GitHub API 调用** | ~2-3 次 |
| **推送成功率** | > 99% |
| **每月推荐项目数** | ~90 个 |

---

### 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

**贡献方式：**
1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

---

### 📄 许可证

本项目采用 [MIT License](LICENSE) 许可证。

---

### 🌟 项目亮点总结

| 亮点 | 说明 |
|------|------|
| 🤖 **完全自动化** | 无需手动操作，每日自动更新 |
| 🔄 **持续集成** | 基于 GitHub Actions 的 CI/CD |
| 📊 **智能推荐** | AI/ML 专业领域聚焦 |
| 🌍 **中文本地化** | 自动翻译项目描述 |
| ⚡ **高效运行** | 平均执行时间 < 30 秒 |
| 📝 **完善文档** | 详细的配置和使用说明 |

---

### 📞 联系方式

- **GitHub**: [@CoderCurryZhang](https://github.com/CoderCurryZhang)
- **Issues**: [提交问题](../../issues)
- **Discussions**: [讨论](../../discussions)

---

### 🎯 后续规划

- [ ] 支持多个技术领域推荐（Web、DevOps、Blockchain 等）
- [ ] 添加项目评分和热度排名
- [ ] 支持邮件通知功能
- [ ] 提供 Web 仪表板
- [ ] 多语言支持

---

<div align="center">

**⭐ 如果觉得有用，请给个 Star 鼓励一下！**

Made with ❤️ by [CoderCurryZhang](https://github.com/CoderCurryZhang)

</div>
