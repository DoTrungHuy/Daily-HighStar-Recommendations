## 🕔 2026-06-10 19:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目。本次从 40 个候选项目中筛选出 6 个未推荐过的新项目。

### 🌟 [oh-story-claudecode](https://github.com/worldwonderer/oh-story-claudecode)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 2,184
- **核心概述**: 网文/小说写作 skill 包，覆盖长篇与短篇网络小说的扫榜、拆文、写作、去AI味、封面图全流程
- **大概是做什么的**: 网文写作 skill 包，覆盖长篇与短篇网络小说的扫榜、拆文、写作、去AI味、封面图全流程。适配 Claude Code、OpenClaw。 1. 扫榜 ：分析热门榜单，洞察题材、人设、切入点。 2. 拆文 ：拆解大纲节奏与剧情素材，建立个人模块库。 3. 商业化写作 ：学习并运用钩子、爽感、期待感等核心技巧。 围绕四条线展开：爆款逆向 · 剧情模块化重组 · 上下文状态分层管理 · 人机协同。 方式一 直接告诉 Claude Code / OpenClaw： -g 全局安装，所有目录可用；去掉 -g 则只装到当前目录。更新时重新执行同一条命令即可。 升级后如果项目里已经跑过 /story-setup ，建议在项目根重跑一次 /story-setup ，同步 hooks / agents / references。每版变更见 CHANGELOG.md 与 Releases。 :------ :----- :----- story-setup /story-setup /准备写书 环境部署 · hooks/rules/agents/CLAUDE.md 一键部署（已有配置安全合并） story /story /网文 工具箱路由 · 模糊意图自动分发到对应 skill story-long-write /story-long-write /写长篇 长篇写作 · 大纲搭建、人物设定、正文输出 story-long-analyze /story-long-analyze 长篇拆文 · 黄金三章、爽点设计、节奏分析 story-long-scan /story-long-scan 长篇扫榜 · 起点/番茄/晋江市场趋势 story-short-write /story-short-write 短篇写作 · 情绪设计、反转构思、精修出稿 story-short-analyze /story-short-analyze ���篇拆文 · 故事核、结构分析、情感线、反转设计、写作手法、共鸣分析 story-short-scan /story-short-scan 短篇扫榜 · 知乎盐言/番茄短篇风口数据 story-deslop /story-deslop /去AI味 去AI味 · 检测并清除 AI 写作痕迹 story-import /story-import /导入小说 逆向导入 · 将已有小说反向解析为标准项目结构 story-review /story-review /审查 多视角审查 · 4 Agent 多视角审稿 + 番茄/起点/知乎评分标准 story-cover /s
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, ai-writing, chinese-novel, claude-code, claude-skills, creative-writing

---

### 🌟 [ClawWork](https://github.com/clawwork-ai/ClawWork)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 520
- **核心概述**: OpenClaw 客户端 — 将 ClawWork 连接到您自己的 OpenClaw 并解锁 10 倍多会话生产力。
- **大概是做什么的**: English · 简体中文 · 繁体中文 · 日本语 · 한국어 Agent OS 时代的本地优先工作区。 OpenClaw 桌面客户端 — 并行运行代理任务、保持工件持久性并稍后查找文件。 ⚠️ 官方存储库 这是官方 ClawWork 项目：https://github.com/clawwork-ai/clawwork 已发现一个模仿存储库 (ClawWorkAi/ClawWork) 和网站 (clawworkai.store)，但没有适当的归属。请注意并使用上面的官方链接。官方网站：https://clawwork-ai.github.io/ClawWork/ 代理正在成倍增加。瓶颈不再是能力，而是操作员界面。随着代理运行时的激增，用户最终会在聊天窗口、Web UI 和终端之间处理会话，每个会话都有自己的上下文，并且没有共享内存。正如 IDE 成为 Unix 的代码和终端的操作层一样，代理操作系统也需要一个工作区层。 ClawWork 正在构建该层 - 从 OpenClaw 的一流客户端开始，可扩展到多运行时的未来。今天：OpenClaw，没有聊天历史泥 OpenClaw 很强大。普通聊天是一个糟糕的容器
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, ai-tools, desktop-app, developer-tools, electron, git

---

### 🌟 [Hermes-CN-Desktop](https://github.com/Eynzof/Hermes-CN-Desktop)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 335
- **核心概述**: Hermes Agent CN 桌面应用程序，Windows-First，使用 Tauri、Typescript 和 Rust 构建。隔离 Hermes Agent 核心内部。
- **大概是做什么的**: Hermes Agent CN Desktop Hermes Agent CN Desktop 是 Hermes Agent 中文社区推出的桌面客户端，原生支持 Windows 与 macOS 系统。项目基于 Tauri v2、Rust、React 和 TypeScript 构建，包含 Hermes-CN-Core 中文社区修改版的 Hermes Agent 内核。 官网与下载页见 desktop.hermesagent.org.cn。桌面端隶属于 Hermes Agent 中文社区 生态，社区主站提供中文文档、实践指南、社群入口和更多生态项目。 当前版本是 v0.3.2 。项目仍在快速迭代，API、打包流程、运行时分发策略和界面细节都可能继续调整。 Hermes Agent CN Desktop 由 Hermes Agent 中文社区维护。你可以访问 Hermes Agent 中文社区主站 了解项目动态，通过 中文文档 学习使用方式，在 实践指南 查看落地案例，也可以进入 社群入口 加入更多讨论渠道。 扫码加入 Hermes Agent 中文社区微信群；如果二维码过期，请访问 最新微信群入口。 可以在 hermes-cn-ui-prototypes-sans.vercel.app 浏览高保真 UI 原型图。 点击下方预览图，或直接打开 MP4 演示视频。README 渲染器对本地视频内嵌播放支持不稳定，因此这里用可点击预览图链接到视频文件。 下面的截图同步自官网 landing 仓库，覆盖工作台、归档、对话、LaTeX/Markdown、任务控制台、飞书接入、用量统计、健康状态、Skills、Memory、模型服务商配置、运行时诊断和日志等页面。 工作台（深色���题） 工作台（浅色主题） 归档工作台（深色主题） 归档工作台（浅色主题） LaTeX 与 Markdown 渲染 任务控制台输出 日志查看 项目 Review 工作流 Hermes Agent 已经提供本地 Dashboard。本仓库专注于 Dashboard 之外的桌面体验：原生窗口、本地进程管理、文件对话框、托管运行时安装、运行时诊断，以及生产模式下更安全的 REST 和 SSE 代理层。 本仓库是桌面端外壳。Agent runtime 和 Dashboard 源码位于 Hermes-CN-Core。 - 一键安装，使用门槛极低 ：针对 Windows 和 macOS 用户适配，下载安装后配置 API Key 或本地模型端点即可使用。 - 轻量，跨平台 ：Tauri 使用系统 WebView，不需要
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, desktop-app, hermes-agent, react, rust, tauri

---

### 🌟 [VulnClaw](https://github.com/Unclecheng-li/VulnClaw)
- **项目语言**: Python
- **星标数量**: ⭐ 445
- **核心概述**: 基于 AI Agent + MCP 工具链 + 渗透 Skill 编排， 配合大语言模型， 自然语言输入 → 自动完成「信息收集 → 漏洞发现 → 漏洞利用 → 报告生成」全流程。
- **大概是做什么的**: AI 驱动的渗透测试 CLI 工具 — 说人话，打漏洞。 🌐 English version : README EN.md 本项目是可独立运行的 AI 渗透测试 Agent。 基于 LLM Agent + MCP 工具链 + 渗透 Skill 编排， 配合 OpenAI / MiniMax / DeepSeek 等兼容模型， 自然语言输入 → 自动完成「信息收集 → 漏洞发现 → 漏洞利用 → 报告生成」全流程。 快速开始 · 架构设计 · Skill 体系 输入自然语言，AI 自动执行渗透测试全流程： 适用于已授权的渗透测试、CTF 竞赛、安全教学、红队演练等场景。 - 自然语言驱动 — 用人话描述渗透意图，自动识别阶段和工具 - 13 个 LLM Provider — OpenAI / MiniMax / DeepSeek / 智谱 / Moonshot / 千问 / SiliconFlow / 豆包 / 百川 / 阶跃星辰 / 商汤 / 零一万物，一键切换 - MCP 工具链 — 已内置 12 个 MCP 服务配置和 23 个工具定义；当前 fetch / memory 以稳定的 local 模式运行，其余 MCP 集成多仍处于预览或占位阶段，待完整 session 生命周期管理落地后再逐步恢复真实协议接入 - AI Agent 核心 — OpenAI 兼容协议 + Tool Calling + 自主渗透循环 - 20 个渗透 Skill — 7 核心 + 13 专项 Skill（含 CTF Web/Crypto/Misc + osint-recon），含 138 个参考文档 - 编解码/加解密工具 — 29 种操作（Base64/Hex/URL/AES/JWT/Morse 等），LLM 可精确调用，不再靠猜测 - Python 代码执行 — 内置 python execute 工具，适合 payload 构��和响应解析；当前仍属高风险实验能力，不应视为强隔离沙箱 - 持续性渗透测试 — 周期循环（默认 100 轮/周期 × 10 周期 = 1000 轮），每周期自动生成报告，直到手动终止 - 推理过程显示控制 — think on/off 一键切换 LLM 思考过程的显示/隐藏，默认关闭，干净输出只看结论 - 沙盒模式提示词 — 解锁 AI 安全测试能力，CTF / 授权渗透场景专用 - 自动报告 & PoC — 生成结构化 Markdown 报告和可运行的 Python PoC 脚本 - Web UI 模式 — vulnclaw web 启动本地 W
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-tools, ctf, cybersecurity, openclaw

---

### 🌟 [Locus](https://github.com/r1n7aro/Locus)
- **项目语言**: Rust
- **星标数量**: ⭐ 515
- **核心概述**: 开源 Unity Dev Agent
- **大概是做什么的**: Locus for Unity - 开源 Unity Dev Agent 提高游戏开发效率，并将创作者从繁琐、重复的工作中解放出来。 Locus for Unity 是一个适用于 Unity 项目的开源 AI 代理。 - 编辑器内操作：编写C代码，读取和修改Unity对象和资产，完成完整的功能开发工作流程 - 运行时分析和调试：自主操作和捕获运行时状态，以帮助修复错误和优化性能 - 自动化知识系统：自动将对话需求汇总到设计文档中，并将项目理解保留在长期记忆中 - 可视化版本控制：为Unity YAML资产提供语义差异分析和冲突处理的可视化版本控制界面 - 多模型支持：支持订阅帐户登录并兼容多个LLM API功能 Locus 目前正处于早期测试阶段 ( v0.2.8 )。我们欢迎您尝试并通过问题分享反馈。您的意见对我们非常有价值。 Locus 在技术上有何不同？ Locus 是一个独立的 Rust + Tauri + Vue.js 应用程序
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, codex, gamedev, llm, rust

---

### 🌟 [pilot](https://github.com/qf-studio/pilot)
- **项目语言**: Go
- **星标数量**: ⭐ 474
- **核心概述**: 人工智能为您运送门票。
- **大概是做什么的**: ██████╗ ██╗██╗ ██████╗ ████████╗ ██╔══██╗██║██║ ██╔═══██╗╚══██╔══╝ ██████╔╝██║██║ ██║ ██║ ██║ ██╔═══╝ ██║██║ ██║ ██║ ██║ ██║ ██║███████╗╚██████╔╝ ██║ ╚═╝ ╚═╝╚══════╝ ╚═════╝ ╚═╝ 为你寄票的人工智能当你睡觉时 你的待办事项中有 47 张票。你苦苦思索该优先考虑哪一个。一半是“快速修复”，不知何故每次需要 2 个小时。您的 PM 请求状态更新。听起来很熟悉吗？ Pilot 从 GitHub、Linear、Jira 或 Asana 获取票证 — 规划实施、编写代码、运行测试并打开 PR。您审查并合并。就是这样。 Homebrew（推荐） ---------- ---------- macOS（通用） Pilot-Desktop-macOS-universal.dmg Windows (x64) Pilot-Desktop-Windows-amd64-setup.exe Linux (x64) Pilot-Desktop-Linux-amd64.tar.gz - Go 1.22+（仅限构建） - Claude Code CLI 2.1.17+ - OpenAI API 密钥（可选，用于语音转录）就是这样。去喝咖啡吧。 ☕ 跨执行、智能、集成和基础设施实施的 133 项功能。功能描述 --------- ------------- Autopilot CI 监控、自动合并、反馈循环（开发/阶段/生产模式） Ep
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agentic, agentic-workflow, ai-agent, ai-bots, ai-tools, autonomous-coding

---

## 🕔 2026-06-10 14:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目。本次从 40 个候选项目中筛选出 6 个未推荐过的新项目。

### 🌟 [bitterbot-desktop](https://github.com/Bitterbot-AI/bitterbot-desktop)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 2,298
- **核心概述**: 本地优先的人工智能代理，具有持久记忆、情商和点对点技能经济。
- **大概是做什么的**: 本地优先的个人人工智能，具有生物记忆、梦想引擎和 P2P 技能经济。大多数 AI 代理都是 LLM API 的无状态包装器。关闭终端，他们就会忘记你的存在。比特机器人则不同。它是一个生活在你的设备上的个人人工智能，会记住你的生活，并实际做事、浏览网页、运行代码、在 WhatsApp 上与你交谈。当你睡觉时，它会做梦：巩固知识，发现新技能，并发展持久的个性。它将所学到的技能打包，并在 USDC 的 P2P 市场上与其他代理进行交易。关于 · 文档 · 入门 运行时：节点 ≥ 22 · 包管理器：pnpm 运行入门向导 — 它会引导您完成模型身份验证（API 密钥）、内存嵌入、网络搜索、通道、钱包和工作区设置，并在最后为您提供生成网关 + 控制 UI：向导完成后，接受“准备好启动它了吗？”提示并在后台运行 pnpm dev:all 并打开浏览器。如果您跳过它或稍后再回来：打开 http://localhost:5173 — 这是您可以在其中的 Bitterbot Control UI
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: a2a-protocol, agent-economy, agent-memory, ai-agent, chatbot, cognitive-architecture

---

### 🌟 [auto-browser](https://github.com/LvcidPsyche/auto-browser)
- **项目语言**: Python
- **星标数量**: ⭐ 543
- **核心概述**: 为您的人工智能代理提供一个真正的浏览器——有人参与其中。开源 MCP 本机浏览器代理。
- **大概是做什么的**: 为您的人工智能代理提供一个真正的浏览器，并由人类参与其中。 Auto Browser 是用于授权工作流程的 MCP 本机浏览器控制平面。它为 MCP 客户、LLM 代理和操作员提供了一个共享的 Playwright 浏览器，具有人工接管、可重复使用的身份验证配置文件、批准、审计跟踪和本地优先部署功能。 - 任何可以进行 HTTP 或 stdio 通信的 MCP 客户端 - 当您需要curl-first 控制时，直接 REST 调用者 - 从第一天起就采用 MCP 原生。浏览器界面已被打包为 MCP 服务器，而不是事后附加。 - 当网络变得脆弱时，人类会接管。当有人需要介入时，noVNC 会保持相同的实时会话可用。 - 登录一次，稍后重复使用。保存命名的身份验证配置文件并重新打开已登录的新会话。 - 默认情况下本地优先。使用 Docker Compose 在您自己的机器上运行完整堆栈，或使用 Codespaces 进行快速托管演示。 - 内置安全栏。批准、操作员身份、PII 清理、见证收据和策略预设都是产品表面的一部分。 - 受控技能归纳。经过验证的浏览器痕迹可以成为阶段性的
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, ai-agents, browser-automation, claude, docker, fastapi

---

### 🌟 [agent-ci](https://github.com/redwoodjs/agent-ci)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 700
- **核心概述**: Agent-CI 是您的代理的本地 GitHub 操作。
- **大概是做什么的**: 在您的计算机上运行 GitHub Actions。 0 毫秒内缓存。失败时暂停。修复并重试——在提交之前、推送之前。 Agent CI 是 GitHub Actions 编排层的彻底重写，完全在您自己的计算机上运行。它不会包装或填充运行器：它取代了官方 GitHub Actions Runner 所使用的云 API，因此在 GitHub.com 上执行作业的同一运行器二进制文件会在本地逐位执行它们。像 actions/checkout 、 actions/setup-node 和 actions/cache 这样的操作是开箱即用的——没有补丁，没有分叉，没有对 GitHub 的网络调用。在 GitHub 的运行程序上安装需要几分钟的依赖项在第二次运行时只需几秒钟即可安装，因为缓存是绑定安装的 - 不是上传、下载或解压。远程 CI 是最后的看门人——它在每次推送时运行并决定发送什么。这就是它的工作。问题是失败时会发生什么：你推送，你等待，你读取日志，你再次推送。每次重试都会支付重新运行的全部成本，而网守最终会被用作调试器。 CI 特工正在飞行前
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: act-alternative, ai-agent, ci-cd, developer-experience, devtools, github-actions

---

### 🌟 [GeoAgent](https://github.com/opengeos/GeoAgent)
- **项目语言**: Python
- **星标数量**: ⭐ 371
- **核心概述**: 用于地理空间数据分析和交互式可视化的多模式人工智能代理
- **大概是做什么的**: GeoAgent 是一个用于地理空间 Python 包、实时地图小部件和 QGIS 插件的共享 AI 代理层。借助一个一致的接口，leafmap、anymap、geoai、geemap、STAC 和 NASA Earthdata 等项目可以将其工具公开给大型语言模型，因此每个库不再需要构建和维护自己的代理堆栈。 GeoAgent 基于 Strands Agents 构建，添加了地理空间上下文、结构化工具元数据、可选包适配器、提供程序配置以及在破坏性、昂贵或其他不可逆操作之前暂停代理的确认挂钩。 - 简短演示：QGIS OpenGeoAgent 插件演示 - 完整教程：OpenGeoAgent���用于自动地理空间分析和可视化的多模式 AI 代理 许多地理空间库需要相同的代理功能： - 将代理绑定到实时地图、QGIS 会话、数据集或工作流对象； - 将包函数公开为带有文档字符串和元数据的结构化工具； - 支持 OpenAI、ChatGPT/Codex OAuth、Anthropic、Google Gemini、Bedrock、OpenRouter、LiteLLM、vLLM 和本地 Ollama 模型； - 保留可选的地理空间 stac
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, geospatial, open-source, python, qgis, qgis-plugin

---

### 🌟 [agent-systems-handbook](https://github.com/Prompthon-IO/agent-systems-handbook)
- **项目语言**: MDX
- **星标数量**: ⭐ 314
- **核心概述**: 一本实用的人工智能代理手册，涵盖代理系统、代理工作流程、LangGraph、MCP/A2A、上下文工程、代理内存、评估、可观察性和多代理架构。当前趋势焦点：开放代理培训环境、新兴代理运行时和生产人工智能工作流程模式。
- **大概是做什么的**: Prompthon 的代理系统手册 AI 代理演示很容易找到。生产就绪的代理系统更难理解。本手册映射了现实世界人工智能代理背后的工作流程、工具、内存系统、上下文工程、MCP/A2A 互操作性、评估、可观察性和多代理架构。用它来理解、设计、构建和操作具有生产意识的人工智能代理——从基本原理到框架选择和实施模式。 Prompthon Agentic Labs 出版了 Prompthon 的代理系统手册：一本人工智能原生领域指南，供学生、从业者和构建者从不同角度探索现代代理系统。该实验室以学习、提问和创新为基础，由学习者塑造并扎根于真实的行业实践。它可以帮助读者了解这个空间，有效地应用人工智能，或者通过并行路径而不是单一轨道构建真实的系统。为什么这个实验室适合人工智能原生学习者、从业者和构建者 建立在学习、提问和创新的基础上 该存储库鼓励主动学习、批判性思维和实验，而不是
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: a2a, agent-framework, agent-memory, agentic-ai, agentic-workflow, ai-agent

---

### 🌟 [plugNmeet-server](https://github.com/mynaparrot/plugNmeet-server)
- **项目语言**: Go
- **星标数量**: ⭐ 495
- **核心概述**: 开源、自托管视频会议软件。可扩展、可定制，并具有强大的 AI 会议代理。
- **大概是做什么的**: Plug-N-Meet - 可扩展、可定制的开源网络会议系统 Plug-N-Meet 是一个强大的开源网络会议解决方案，构建于 LiveKit 的高性能 WebRTC 基础设施之上。 Plug-N-Meet 专为可扩展性和轻松定制而设计，可让您将功能丰富、自托管且人工智能驱动的视频会议体验无缝集成到任何现有网站、应用程序或系统中。有疑问或想法吗？加入我们的 Discord 开发者社区，与团队联系并讨论您的建议。高性能和可扩展：使用 Go 构建并利用 LiveKit 的强大功能，确保系统稳健且轻量。自适应流媒体：Simulcast 和 Dynacast 支持通过智能管理视频质量和带宽，即使在网络较差的情况下也能确保稳定的通话。支持的编解码器包括 H264、VP8、VP9 和 AV1。丰富的协作工具：通过高清音频/视频、屏幕共享、虚拟背景、支持办公文件（PDF、DOCX、PPTX）的协作白板、共享记事本、投票和分组讨论室吸引用户。安全和私密
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, communication, livekit, pion, video-chat

---

## 🕔 2026-06-10 09:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目。本次从 40 个候选项目中筛选出 6 个未推荐过的新项目。

### 🌟 [team9](https://github.com/team9ai/team9)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 1,369
- **核心概述**: Team9 是人工智能代理的协作工作区，目前基于 OpenClaw 及其生态系统构建。
- **大概是做什么的**: Team9 是人工智能代理的协作工作区，目前基于 OpenClaw 及其生态系统构建。大多数人工智能工具都位于选项卡中。大多数机器人平台都生活在配置地狱中。 Team9 是代理与您的团队一起生活的地方：在频道、线程和共享文档中。 OpenClaw 为您提供代理运行时； Team9 为其提供了生存空间：通道、文档、内存和共享审计跟踪。 - 一键启动并运行 OpenClaw — 无需复杂的设置 - 无缝创建多个代理 — 无需烦人的应用程序配置 - 共享文档，共���构建知识 - 可选择连接到您的计算机 (TODO) 也非常适合单独的高级用户。 Team9 = 团队协作 + AI 代理，开箱即用。 🗣️ 即时消息 — 公共频道、私人频道、实时同步的 DM 🤖 原生 AI 代理支持 — 一键创建代理，将其添加到任何频道 🦞 OpenClaw 开箱即用 — 内置支持、零配置、创建和使用 💻 跨平台 — macOS、Windows 桌面 + Web 💬 丰富消息 — 话题、@提及、反应、文件共享 🏢多工作空间——不同项��、不同团队，完全隔离
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, openclaw, team9

---

### 🌟 [agent](https://github.com/stakpak/agent)
- **项目语言**: Rust
- **星标数量**: ⭐ 1,596
- **核心概述**: 自动发送您的代码。一个开源代理，24/7 驻留在您的计算机上并保持您的应用程序运行。 🦀
- **大概是做什么的**: 自动发送您的代码。一个开源代理，24/7 全天候驻留在您的机器上，让您的应用程序保持运行，并且仅在需要人工时才进行 ping 操作。 PaaS 的所有优点，没有任何锁定。 :star: 帮助我们接触更多开发者并发展 Stakpak 社区。给这个仓库加注星标！如需更多安装选项...您不能信任大多数 AI 代理与您的 DevOps。犯一个错误，你的作品就完蛋了。 Stakpak 的构建方式有所不同： - 秘密替换 - LLM 无需查看您的凭证即可使用 - Warden Guardrails - 网络级策略在运行前阻止破坏性操作 - DevOps Playbooks 内置 - Stakpak 规则手册中精选的 DevOps 知识库 生成基础设施代码、调试 Kubernetes、配置 CI/CD、自动化部署，无需向 LLM 提供生产密钥。 🤖 Autopilot（24/7 自主运行时） 使用新的生命周期别名进行单命令设置/启动/停止：您还可以使用规范的子命令： Autopilot 先决条件 在远程虚拟机上运行 Autopilot 之前： - Docker 必须已安装并且当前用户可以访问
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, ai-agent, autonomous-agent, devops, devops-agents, devtool

---

### 🌟 [deepseek-pp](https://github.com/zhu1090093659/deepseek-pp)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 685
- **核心概述**: DeepSeek Web 浏览器扩展：具有 MCP 工具、内存、技能、自动化、Web 搜索和对话导出的 AI 代理工作区。
- **大概是做什么的**: DeepSeek 浏览器插件：把 DeepSeek 网页版扩展成支持 MCP、记忆、Skill、自动化和对话导出的 AI Agent 工作台 DeepSeek++ 是面向 DeepSeek 网页版的开源浏览器扩展，支持 Chrome、Edge 和 Firefox。它把 DeepSeek Web 扩展成 AI agent workspace，让用户在同一浏览器工作流里使用 MCP 工具、长期记忆、Skill、系统提示词预设、联网搜索、网页读取、对话导出和定时自动化。 如果你在寻找 DeepSeek Chrome extension、DeepSeek MCP tools、DeepSeek memory plugin、DeepSeek conversation export 或 DeepSeek AI agent，DeepSeek++ 对应的是同一个本地优先的 DeepSeek 浏览器增强工作台。 ------ ---------------- AI agent browser extension / AI Agent 工作台 把 DeepSeek Web 扩展成可以持续执行任务、调用工具、复用记忆和调度自动化的浏览器内工作台。 DeepSeek browser extension / DeepSeek Chrome extension 在 DeepSeek 网页版中加入侧边栏对话、右键发送文本、工具执行结果展示和 Chrome / Edge / Firefox 支持。 DeepSeek MCP tools 在侧边栏管理 MCP 服务、工具权限和执行状态，并把工具结果带回同一会话继续生成。 DeepSeek memory / 长期记忆 自动保存、筛选和注入长期记忆，让不同对话可以复用用户偏好、项目背景和常用信息。 DeepSeek Skills / /skill 工作流 通过内置、自定义或 GitHub 导入的 Skill 快速切换专家模式和任务模板。 DeepSeek conversation export / 对话导出 在 DeepSeek 回复工具栏里选择格式导出当前对话，支持 HTML、Markdown 和 PDF，并保留附件引用和元数据。 DeepSeek automation / 自动化任务 把固定任务放入独立 DeepSeek 会话，支持立即运行、定时触发、状态追踪和手动停止。 DeepSeek web search / 网页获取 在需要实时信息或指定网页内容时搜索互联网、读取网页文本，并继续生成最终回答。 - 希望把 DeepSeek 网页版扩展成带工
- **有什么用**: 适合用于深度学习、CNN/Conv 算法、PyTorch/TensorFlow 模型训练和实验复现。
- **技术标签**: agentic-ai, ai-agent, ai-memory, automation, browser-extension, chrome-extension

---

### 🌟 [pbi-cli](https://github.com/MinaSaad1/pbi-cli)
- **项目语言**: Python
- **星标数量**: ⭐ 360
- **核心概述**: Power BI CLI - 语义模型 (.NET TOM) 和 PBIR 报告，用于令牌高效的 AI 代理使用，专为 Claude Code 构建
- **大概是做什么的**: 为 Claude Code 提供所需的 Power BI 技能。安装一次，然后只需要求 Claude 使用您的语义模型和报告即可。所有命令 • 累计下载量，每天通过 GitHub Actions 从 pypistats.org 刷新。使用 .pbix 文件打开 Power BI Desktop，运行上面的三个命令，然后开始询问 Claude。要求：运行 Python 3.10+ 和 Power BI Desktop 的 Windows。替代方案：为 Claude 提供存储库 URL Claude 将自动克隆、安装、连接和设置技能。使用 pip 代替 pipx？在 Windows 上，pip install 通常会将 pbi 命令放置在 PATH 之外的目录中。修复：将 Scripts 目录添加到 PATH 将打印的路径添加到系统 PATH，然后重新启动终端。我们建议使用 pipx 来完全避免这种情况。语义模型层 要求 Claude 使用您的 Power BI 语义模型。需要 pbi 连接。批量创建度量 快照并恢复模型 审核模型是否存在问题 测试行级安全性 要求 Claude 构建和管理您的 Power BI 报告。无需连接——直接处理 PBIR 文件。视觉效果、页面、
- **有什么用**: 适合用于深度学习、CNN/Conv 算法、PyTorch/TensorFlow 模型训练和实验复现。
- **技术标签**: ai-agent, analysis-services, claude-code, cli, datamodel, dax

---

### 🌟 [aish](https://github.com/AI-Shell-Team/aish)
- **项目语言**: Rust
- **星标数量**: ⭐ 465
- **核心概述**: 赋予 Shell 思考的能力。发展运营。
- **大概是做什么的**: 赋予 Shell 思考的能力。发展运营。真正的AI Shell：完整的PTY +可配置的安全和风险控制 - 安全和风险控制 - 社区和支持 - 开发和测试 - 真正的交互式Shell：完整的PTY支持，运行vim / ssh / top等交互式程序 - AI原生集成：用自然语言描述任务，生成、解释和执行命令 - 安全可控：AI命令具有风险分级和确认流程；可选的沙箱预运行用于变更评估 - 可扩展：具有热加载和优先级覆盖的技能插件系统 - 低迁移成本：与常规命令和工作流程兼容，默认情况下终端中的所有功能 AISH Claude 代码 --------- ------ ------------- 🎯 核心定位 Ops/系统故障排除 CLI 开发编码助手 �� 多模型支持 ✅ 完全开放 ⚠️ 主要是 Claude 🔧 子代理系统✅ ReAct 诊断代理 ✅ 多种代理类型 🧩 技能支持 ✅ 热加载 ✅ 🖥️ 原生终端集成 ✅ 完整的 PTY 支持 ⚠️ 有限支持 🛡️ 安全风险评估 ✅ 安全确认
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, aishell, fish, shell, zsh

---

### 🌟 [clawcodex](https://github.com/agentforce314/clawcodex)
- **项目语言**: Python
- **星标数量**: ⭐ 376
- **核心概述**: Claude Code 完整的 Python 重建。 180K LoC 纯 Python 中的 AI 编码代理！
- **大概是做什么的**: English 中文 Français Русский हिन्दी العربية Português A production-oriented Python rebuild of Claude Code — real architecture, reliable CLI agent Ported from the TypeScript reference implementation and extended with a Python-native runtime 🔥 Active Development • New Features Weekly 🔥 - 2026-05-29: Codebase stats — Total Python files: 977文件； Python 代码总行数：213,777 行（高于 2026 年 5 月 21 日的 183,768 行；来自远程桥奇偶校验端口（阶段 0-18）加上 /buddy 配套子系统和 CLI 传输层的 +30k 行）。 - 2026-05-29：远程桥奇偶校验 + CLI 传输 (200–226) — 跨阶段 0–18 的远程控制��的完整端口：桥 API 客户端、子 CLI 会话运行程序、无环境 v2 协调器、多会话守护进程、工作树生成、就地重新连接、具有崩溃恢复功能的永久模式、JWT 刷新和 v1 WebSocketTransport / SerialBatchEventUploader 写入混合调度的路径。加上 CLI 传输工厂、合并工作状态上传器和 RemoteIO 桥 (226)；新的 /buddy 虚拟伴侣命令 — 孵化 / 宠物 / 状态
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, ai, ai-agent, ai-coding, claude, claude-code

---

## 🕔 2026-06-10 04:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目。本次从 40 个候选项目中筛选出 6 个未推荐过的新项目。

### 🌟 [ai-agents-from-zero](https://github.com/didilili/ai-agents-from-zero)
- **项目语言**: Python
- **星标数量**: ⭐ 1,838
- **核心概述**: 🚀 2026 最系统的 AI Agent 速成指南｜智能体实战教程 · 完整学习路径 + 实战项目 + 面试题库 · 对标大模型应用开发工程师岗位 · 覆盖LangChain / LangGraph / Coze / Dify / MCP / skills / LLM / RAG / 提示词 · 企业级部署与微调 · 从0到企业级落地 + 从学习到上线项目 + 面试准备一体化
- **大概是做什么的**: 🚀 全网最系统的 AI 智能体实战速成指南（从零到企业级落地） 2026 持续更新中 · 目标打造 「地表最强」 AI Agent 教程 —— 系统教程 + 可跑源码 + 面试题库 + 企业级实战项目 + 长期技术栈更新 ，全面对齐「AI 智能体 / 大模型应用开发工程师」 培训课表 与 招聘 JD 的一条龙学习路线 快速开始 • 教程大纲 • 案例汇总 • 更新日志 • 面试题库 • 新手入门与常见问题 📢 更新说明 ： AI 不停，更新不止 。本仓库将伴随 AI 大模型技术栈持续进化 ，坚持 开源、系统化、长期更新 。模型、框架、Agent、实战项目，都会随着生态变化持续完善和升级。它不只是帮你入门，而是陪你一路成长，从零基础到能真正落地。 目前 概念篇 已全部更新完毕，两个完整实战项目也已更新完毕： NL2SQL + LangGraph 实战项目 电商问数（源码仓库）已于 5 月 3 日完成。 DeepAgents 多智能体实战项目 深度研搜（源码仓库）已于 5 月 17 日完成。你可以点击更新日志，了解最新仓库动态。 市面上 AI 大模型应用内容很多，但绝大多数是碎片化帖子、收费训练营等；本仓库就是让你不用先花大几千甚至上万，也能系统进入大模型应用开发。若对你有帮助，欢迎 Star ⭐ 感谢 优云智算 赞助本项目！优云智算是 UCloud 旗下 AI 云平台。主打包月、按次的高性价比国模 Agent Plan 套餐，低至 49 元/月起；同时提供官转稳定海外模型，支持接入 Claude Code、Codex 及 API 调用，面向企业提供高并发、7\ 24 技术支持与自助开票。 🎁 通过 此链接 注册的用户，可得免费 5 元平台体验金。 - 🌱 全网首个系统开源的 AI 智能体教程 ：这是一套长期维护的 AI 大模型应用开发路线图。市面上不缺零散帖子，也不缺收费训练营，但真正系统、持续更新，并且覆盖 教程 + 源码 + 实战项目 + 面试题库 的 AI 大模型应用教程极少。本仓库要做的就是把这条路线公开、做深、做完整，陪你从入门、进阶、项目实战一路成长。 - 🧭 一条线拉通大模型应用全栈 ：从大模型与提示词，到低代码（Coze/Dify）与代码框架（LangChain/LangGraph），再到企业级 RAG/Agent、微调与工程规范——按知识体系统一编排， 完整链路 闭环，适合系统吃透而不是碎片化收藏。 - 🐍 聚焦 Python 生态，直击 Agent 工程 ：很多课程会围绕 Spring AI 、 langchain4j 展开，更偏
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, agent-framework, agentic-ai, ai-agent, aigc, coze

---

### 🌟 [moai-adk](https://github.com/modu-ai/moai-adk)
- **项目语言**: Go
- **星标数量**: ⭐ 1,059
- **核心概述**: SPEC-First Agentic Development Kit for Claude Code — 24 AI agents + 52 skills with TDD/DDD quality gates, 16-language projects, 4-language docs. Go CLI, zero deps.
- **大概是做什么的**: Agentic Development Kit for Claude Code 官方文档 📚 官方文档 “vibe 编码的目的不是快速生产力而是代码质量。” MoAI-ADK是Claude Code的高性能AI开发环境。 24 名专业 AI 代理和 52 种技能协作生成高质量代码。它自动将 TDD（默认）应用于新项目和功能开发，或将 DDD 应用于具有最小测试覆盖率的现有项目，并支持子代理和代理团队的双重执行模式。用 Go 编写的单个二进制文件可以在任何平台上立即运行，并且零依赖。我们用 Go 完全重写了基于 Python 的 MoAI-ADK（73,000 行）。方面 Python 版 Go 版 -------- --------------- ------------ 分发 pip + venv + 依赖项 单个二进制文件，零依赖项 启动时间 800ms 解释器启动 5ms 本机执行 并发异步/线程 本机 goroutine 类型安全 运行时（mypy 可选） 编译时强制 需要跨平台 Python 运行时 预构建二进制文件（macOS、Linux、Windows） 钩子执行 Shell 包装器 + Pyt
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent-teams, agentic-ai, agentic-coding, agentic-workflow, ai-agent, ai-coding

---

### 🌟 [wesight](https://github.com/freestylefly/wesight)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 528
- **核心概述**: 开源桌面 AI 代理工作区，具有一键式 Claude Code、Codex、OpenClaw、Hermes Agent 设置和自定义 LLM 模型路由。
- **大概是做什么的**: 用于本地编码代理的桌面 AI 代理工作区 WeSight 是用于本地 AI 代理的开源桌面控制台。它可以帮助您安装或重用 Claude Code、Codex、OpenClaw、Hermes Agent、OpenCode、Qwen Code、DeepSeek-TUI 和内置代理运行时，然后为它们提供聊天、工具、文件、IM 渠道、技能、模型提供程序、运行时指标和桌面配套工作流程的可视化工作区。早期公开版本搭载 macOS Apple Silicon 和 Intel 版本。如果 WeSight 有助于您的代理工作流程，那么星星可以让项目更容易被更多构建者发现。 - 网站：wesight.ai - 最新版本：github.com/freestylefly/wesight/releases/latest - 屏幕截图：屏幕截图 - 核心功能：核心功能 - 代理引擎：代理引擎 - 产品路线图：产品路线图 - 开发：快速入门 终端原生编码代理功能强大，但它们的设置、模型路由、权限、IM 入口点、文件更改和运行时指标通常位于不同的位置。 WeSight 将这些移动部件转变为一个桌面工作区： - 安装、检测和重用本地代理 CLI
- **有什么用**: 适合用于深度学习、CNN/Conv 算法、PyTorch/TensorFlow 模型训练和实验复现。
- **技术标签**: agent-workspace, ai-agent, claude-code, codex, desktop-app, electron

---

### 🌟 [deepcode-cli](https://github.com/lessweb/deepcode-cli)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 1,180
- **核心概述**: Deep Code 是专为 deepseek-v4 模型优化的终端 AI 编码助手，��持深度思考、推理强度控制以及 Agent Skills。
- **大概是做什么的**: Deep Code 是专为 deepseek-v4 模型优化的终端 AI 编码助手，支持深度思考、推理强度控制、Agent Skills 以及 MCP 集成。 在任意项目目录下运行 deepcode 即可启动。 创建 /.deepcode/settings.json 文件，内容如下： 配置文件与 Deep Code VSCode 插件 共享，无需重复配置。 完整配置说明（多层级优先级、环境变量等）请参阅 docs/configuration.md。 Deep Code CLI 支持 agent skills，允许您扩展助手的能力： Scope Path Purpose :------ :-------------------- :---------------------------- Project ./.deepcode/skills/ Deep Code 原生位置 Project ./.agents/skills/ 跨客户端互操作 User /.deepcode/skills/ Deep Code 原生位置 User /.agents/skills/ 跨客户端互操作 - 专门为 DeepSeek 模型性能调优。 ------------- ---------------------------------- / 打开 skills / 命令菜单 /resume 选择历史对话继续 /continue 继续当前对话，或选择历史对话恢复 /model 切换模型、思考模式和推理强度 /raw 切换显示模式（Normal / Lite / Raw 滚动回溯） /init 初始化 AGENTS.md 文件 /skills 列出可用 skills /mcp 查看 MCP 服务器状态和可用工具 /undo 将代码和/或对话恢复到之前的状态 /exit 退出（也可用连续 Ctrl+D ） --------------- -------------------- Shift+Enter 插入换行（也可用 Ctrl+J ） Ctrl+V 从剪贴板粘贴图片 Esc 中断当前模型回复 - deepseek-v4-pro （推荐使用） - deepseek-v4-flash Deep Code 是否有 VSCode 插件？ 有的。Deep Code 提供功能完整的 VSCode 插件，可在 VSCode Marketplace 安装。插件与 CLI 共享 /.deepcode/settings.json 配置文件，可以在终端和编辑器之间无缝切换。 Deep Code 支持多模态，可使
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, deepseek

---

### 🌟 [sutando](https://github.com/sonichi/sutando)
- **项目语言**: Python
- **星标数量**: ⭐ 345
- **核心概述**: 我的人工智能站。白天实时，晚上重写。召唤我的人工智能超能力。
- **大概是做什么的**: -FFD700?logo=github&logoColor=white) My AI Stand — Realtime by Day, Rewriting Itself by Night. Summon my AI superpower. Voice, vision, screen, meetings, calls when I'm engaged. Learns my patterns, ships its own code when I'm not. Runs across my Macs, interacts with people & their Stands. It belongs entirely to you. 🛠 Open source: this repo — clone, build, run locally on your own Mac. 🍎 Native app preview: sutando.ai — packaged Mac app, request access. No Claude Extra usage required. Sutando runs on your existing Claude Code subscription ($20, $100, or $200/month) with minimal extra costs — no separate Anthropic API key to top up — unlike agents that route every action through pay-per-token APIs and hosted services. Named after Stands from JoJo's Bizarre Adventure — a personal spirit that fights on your behalf. Like a Stand, Sutando starts unnamed. As it learns your style and earns real capabilities, it names itself and generates its own avatar — your Stand, unique to you. https://github.com/user-attachments/assets/a86ec34e-3b26-4011-824c-d2d124753c25 24 tool calls. 6 tasks. 7 minut
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, automation, claude, gemini, macos, multi-agent

---

### 🌟 [openclaw.net](https://github.com/clawdotnet/openclaw.net)
- **项目语言**: C#
- **星标数量**: ⭐ 372
- **核心概述**: 自托管 OpenClaw 网关 + .NET 代理运行时（原生 AOT 友好）
- **大概是做什么的**: 免责声明：本项目不隶属于 OpenClaw，不受 OpenClaw 认可，也与 OpenClaw 无关。它是一个独立的 .NET 实现，其灵感来自于他们的工作。 OpenClaw.NET 是一个 NativeAOT 友好的 AI 代理运行时和 .NET 网关，具有实用的 OpenClaw 生态系统兼容性。它适用于需要具有显式诊断、第一方 .NET 工具、OpenAI 兼容 HTTP 表面以及从源签出到 NativeAOT 发布工件的路径的本地或自托管代理网关的 .NET 开发人员和操作员。文档：AgentQi.dev 是 OpenClaw.NET 的文档和生态系统主页。 OpenClaw.NET 保留当前运行时和存储库标识。 AgentQi 文档 AgentQi 是 OpenClaw.NET 背后更广泛的开发人员基础设施方向：面向 .NET 开发人员的实用、可观察、自托管 AI 代理系统。 OpenClaw.NET 是您现在可以使用的运行时和存储库。 AgentQiX 可能是未来的运行时身份。 - 适用于 .NET 代理工作负载的 NativeAOT 友好运行时和网关 - 具有工具执行、流式传输、取消、重试、内存和会话支持的代理运行时
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent-harness, agent-runtime, agentqi, ai-agent, automation, csharp

---

## 🕔 2026-06-09 23:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目。本次从 40 个候选项目中筛选出 6 个未推荐过的新项目。

### 🌟 [Acontext](https://github.com/memodb-io/Acontext)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 3,520
- **核心概述**: 特工技能作为记忆层
- **大概是做什么的**: Acontext 是人工智能代理的开源技能记忆层。它自动捕获代理运行中的学习内容并将其存储为代理技能文件 - 您可以在代理、LLM 和框架之间读取、编辑和共享的文件。如果您希望您构建的代理能够从错误中吸取教训并重用有效的内容（而不是不透明的内存污染您的上下文），请尝试一下 Acontext。技能就是你所需要的代理内存变得越来越复杂🤢——难以理解、难以调试、用户也难以检查或纠正。 Acontext 采用了不同的方法：如果代理技能可以��代理所需的每条知识表示为简单的文件，那么内存也可以。 - Acontext 以代理技能格式构建记忆，因此每个人都可以看到并理解记忆实际包含的内容。 - 技能就是记忆，记忆就是技能。无论一项技能来自您从 Clawhub 下载的技能还是您自己创建的技能，Acontext 都可以遵循它并随着时间的推移不断发展。 Acontext 的哲学 - 普通文件，任何框架 - 技能记忆是 Markdown 文件。将它们与 LangGraph���Claude、AI SDK 一起使用，
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, agent-development-kit, agent-observability, ai-agent, anthropic, context-data-platform

---

### 🌟 [sandboxd](https://github.com/tastyeffectco/sandboxd)
- **项目语言**: Go
- **星标数量**: ⭐ 536
- **核心概述**: 带有预览 URL 的自托管开发沙箱。一声令下。没有 Kubernetes，非常适合编码代理和 Saas 工厂
- **大概是做什么的**: AI 应用程序构建器产品的开源引擎。为每个用户提供一个独立的云开发环境、一个内置编码代理和一个实时预览 URL — 在一台计算机上通过一个命令进行自托管。什么是沙盒？ （从这里开始）想象一下您输入“为我构建一个待办事项应用程序”的应用程序，几秒钟后，一个工作网站就会出现在其自己的链接上 - 例如 Lovable、Bolt、v0 或 Replit。 sandboxd 是使这一切成为可能的开源后端，运行在下面，简单来说就是它的作用。你向它发送一个 HTTP 请求，它会： 1. 创建一个沙箱——一个私有的、隔离的 Linux 容器（有自己的文件系统，有自己的内存限制），因此用户的代码永远看不到；或者 2. 在其中运行一个 AI 编码代理——你给它一个提示，它就会将代码写入该沙箱。 （OpenCode 和 Claude Code CLI 3.0 为应用程序提供了一个实时 URL — 可以通过可共享的预览链接立即访问沙箱内运行的开发服务器。运行起来也很便宜：当没有人使用沙箱时，沙箱会进入睡眠状态（释放内存），并在有人再次打开其链接时立即唤醒 — 文件保存在
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, dev-environment, docker, isolation, pinokio

---

### 🌟 [Patter](https://github.com/PatterAI/Patter)
- **项目语言**: Python
- **星标数量**: ⭐ 508
- **核心概述**: 开源语音AI SDK。为想要拥有堆栈的构建者提供 Vapi/Retell 替代方案。为您的 AI 代理提供 4 行电话号码 - Python 和 TypeScript、MIT 许可、Twilio、Telnyx 和 Plivo。
- **大概是做什么的**: Patter 是一款开源 SDK，可为您的 AI 代理提供电话号码。您构建代理； Patter 处理它和电话网络之间的一切——代理循环、语言模型、语音到文本、文本到语音、实时语音、音频处理和电话运营商。 - 使用 Python 或 TypeScript 中的一个 API 进行构建 — 相同的表面、相同的钩子、相同的事件，完全同等。 - 为每一层选择提供商 - LLM、STT、TTS、实时引擎、运营商 - 并用一条线路交换其中任何一个。 - 使用内置隧道和仪表板在本地运行，或从您的终端模拟整个呼叫 - 无需电话。 Patter 是应用程序和电话网络之间的完整语音堆栈，而不仅仅是法学硕士和运营商之间的粘合剂。它运行代理循环并拥有每一层调用，您可以为每一层选择提供者。以 Realtime 、 Pipeline 或 Hybrid 模式编写它们。跨语音堆栈的 27 多个提供商集成 · 3 种语音模式 · 2 个 SDK（Python 和 TypeScript）同等。 LLM — 文本生成 OpenAI · Anthropic · Google Gemini · Groq · Cerebras STT — 语音到文本 D
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, ai-phone-agent, hermes-agent, llm, mastra, open-source

---

### 🌟 [piclaw](https://github.com/rcarmo/piclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 724
- **核心概述**: 彩色网状风衣中的 pi 编码剂
- **大概是做什么的**: piclaw — 您的自托管 AI 工作区 PiClaw 将 Pi 编码代理打包到自托管工作区中，具有流式 Web UI、持久状态、多提供商 LLM 支持以及包含许多附加组件的实用内置工具集。它适合那些想要一个有状态的代理工作区的人，他们可以在本地或容器中运行，而无需将六个单独的服务拼接在一起。 - 一个工作区，一个应用程序 — 同一 Web UI 中的聊天、编辑器、终端、查看器、看板、上传和自动化 - 持久状态 — SQLite 支持的消息、媒体、任务、令牌使用、加密钥匙串和会话范围的 SSH / Proxmox / Portainer 配置文件 - 实用的内置组件 — 代码编辑、Office/PDF/CSV/图像/视频查看、draw.io、VNC、浏览器自动化、图像处理、MCP、基础设施工具和可选的跨实例用于配对远程对等点的 IPC - 代理优先工作流程 - 引导、排队跟进、侧面提示、自动研究循环、计划任务和可视化工件生成 - 上下文保护 - 小型始终活动的工具基线，通过列表工具/列表脚本进行分阶段发现 - Opti
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: adaptive-cards, ai-agent, bun, coding-agent, docker, llm

---

### 🌟 [clawmetry](https://github.com/vivekchand/clawmetry)
- **项目语言**: Python
- **星标数量**: ⭐ 371
- **核心概述**: 看你的经纪人怎么想。 12 个 AI 代理运行时的实时可观测性 — OpenClaw、NVIDIA NemoClaw、Claude Code、Codex 等 8 个。
- **大概是做什么的**: 看你的经纪人怎么想。 12 个 AI 代理运行时的实时可观测性：OpenClaw、NVIDIA NemoClaw、Claude Code、OpenAI Codex 等 8 个。适用于整个代理团队的一个仪表板。 🌐 阅读以下版本：英语 · 简体中文 · 日本语 · 한국어 · 西班牙语 · 葡萄牙语 (BR) · 法语 · 德语 · हिन्दी · Русский · 更多 → 一个命令。零配置。自动检测一切。打开 http://localhost:8900 就完成了。可与 12 个代理运行时配合使用 ClawMetry 最初是作为 OpenClaw 的可观察性，现在在一个仪表板中计量整个代理队列，自动检测计算机上的每个运行时： 🦞 OpenClaw · 🟩 NVIDIA NemoClaw · ◆ Claude Code · ⬡ OpenAI Codex · Cursor · 🪿 Goose · ⚡ Hermes · opencode · ◈ Qwen Code · Aider · NanoClaw · PicoClaw OpenClaw 和 NemoClaw 在开源应用程序中免费；其他运行时则使用 ClawMetry Cloud 或自托管 Pro 许可证。从标题和每个选项卡切换运行时 - 成本、令牌、工具、跟踪 - 重新范围到该运行时。 - 流程 - 实时动画图显示消息流经通道、大脑、工具和返回 - 概述 - 健康检查
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, clawmetry, dashboard, monitoring, observability, openclaw

---

### 🌟 [dexto](https://github.com/truffle-ai/dexto)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 631
- **核心概述**: 用于构建和编排代理应用程序的编码代理和通用代理工具。
- **大概是做什么的**: 用于人工智能应用程序的开放代理工具 - 附带强大的编码代理。 Dexto 是一个代理工具，它是一个编排层，可将 LLM 转变为可靠的、有状态的代理，可以采取操作、记住上下文并从错误中恢复。将其视为 AI 代理的操作系统： 组件类比 角色 ----------- --------- ------ LLM CPU 原始处理能力 上下文窗口 RAM 工作内存 Dexto 操作系统 编排、状态、工具、恢复 您的代理应用程序 特定于域的逻辑和客户端 - 配置驱动：在 YAML 中定义代理。无需接触代码即可交换模型和工具。 - 包括电池：会话管理、工具编排、内存、多模式支持和可观察性——开箱即用。 - 随处运行：本地、云或混合。 CLI、Web UI、REST API、Discord、Telegram 或嵌入您的应用程序中。 - 编码代理 – 自主构建、调试和重构代码 - 自主代理 – 计划、执行和适应用户目标 - 数字伴侣 – 记住上下文并预测需求的助手 - MCP 客户端和服务器 – 连接工具、文件
- **有什么用**: 适合用于深度学习、CNN/Conv 算法、PyTorch/TensorFlow 模型训练和实验复现。
- **技术标签**: ai, ai-agent, ai-agents, ai-tools, contributions-welcome, function-calling

---

## 🕔 2026-06-09 18:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目。本次从 40 个候选项目中筛选出 6 个未推荐过的新项目。

### 🌟 [zeroshot](https://github.com/covibes/zeroshot)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 1,500
- **核心概述**: CLI 中的自主工程团队。将 Zeroshot 指向问题，然后离开，然后返回到生产级代码。支持 Claude Code、OpenAI Codex、OpenCode 和 Gemini CLI。
- **大概是做什么的**: 🎉 v5.4 中的新增功能：现在支持 OpenCode CLI！使用 Claude、Codex、Gemini 或 OpenCode 作为您的 AI 提供商。还支持 GitHub、GitLab、Jira 和 Azure DevOps 作为问题后端。请参阅提供商和多平台问题支持。 npm install -g @covibes/zeroshot 演示（100 倍速度，90 分钟运行，5 次迭代才能批准）Zeroshot 是一个开源 AI 编码代理编排 CLI，它运行多代理工作流程来自动实施、审查、测试和验证代码更改。它在隔离的环境中运行计划者、实施者和独立验证者，循环直到更改被验证或因可操作、可重现的故障而被拒绝。专为正确性比速度更重要的任务而设计。 - 计划：将任务转化为具体的验收标准 - 实施：在隔离的工作区（本地、工作树或 Docker）中进行更改 - 验证：使用独立的验证器运行自动检查 - 迭代：重复直到验证，或返回可操作的失败 - 恢复：为恢复保留崩溃安全状态 或者内联描述复杂的任务：为什么不只使用单个 AI 代理？阿普罗
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent-orchestration, agentic-workflow, ai-agent, ai-agents, autonomous-agents, claude

---

### 🌟 [vm0](https://github.com/vm0-ai/vm0)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 1,122
- **核心概述**: 零，您在实际工作中值得信赖的 AI 队友。
- **大概是做什么的**: 零，您在实际工作中值得信赖的 AI 队友。 Zero 连接到 100 多个工具并完成工作 - 报告、分类、外展、研究。在 Slack 或网络上。 ⭐ 在 GitHub 上为我们加注星标——这极大地激励了我们！ ⭐ Zero 为您的团队所拥有的不是另一个聊天机器人或严格的自动化。这是您在 Slack 中 @提及并交给真实角色的队友。 🪄 对于创始人和首席执行官 - 只有创始人才会携带的溢出 - 每日业务简报 - 日历、线性、Slack 和 X 被纳入一个早晨摘要中，在站立前交付。 - 投资者和董事会更新 - 根据实时指标和本月发货起草的每月电子邮件。您编辑音调，而不是数字。 - 收件箱分类 — 对您的邮件进行排序，用您的声音起草回复，显示只有您可以回复的内容。 - 决策日志 — 每个埋藏在 Slack 中的“我们决定 X”都会成为可搜索的 Notion 记录。 📣 对于销售和营销 - 研究、撰写和发送的 SDR - KOL 和前景研究 - 将 X 和开放网络抓取到包含简介、关注者数量、参与信号�� Notion 跟踪器中。 - 个性化外展——根据每个潜在客户自己的情况写出冷冰冰的电子邮件
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agentic-workflow, ai-agent, ai-runtime, ai-sandbox, claude-code, dev-tools

---

### 🌟 [openclaw-guardian](https://github.com/LeoYeAI/openclaw-guardian)
- **项目语言**: Shell
- **星标数量**: ⭐ 588
- **核心概述**: 🛡️ OpenClaw Gateway 的 Guardian 看门狗 — 自动监控、通过 doctor --fix 进行自我修复、基于 git 的回滚、每日快照和 Discord 警报。由 MyClaw.ai 提供支持
- **大概是做什么的**: 🛡️ OpenClaw Guardian 英语 · 中文 · 法语 · 德语 · Русский · 日本语 · 意大利语 · 西班牙语 🤖 由 MyClaw.ai 提供支持 MyClaw.ai 是一个人工智能个人助理平台，为每个用户提供一个在专用服务器上运行的功能齐全的人工智能代理 - 具有完整的代码控制、互联网访问和工具集成。将其视为您自己的私人人工智能，它实际上可以做事，而不仅仅是回答问题。 OpenClaw Guardian 是一个诞生于 MyClaw.ai 生产基础设施的开源项目。我们全天候 (24/7) 运行数千个 AI 代理实例，Guardian 是让它们保持活力的强化层。我们将其开源，以便每个人都能受益。 🌐 尝试 MyClaw.ai ：https://myclaw.ai - 自动监控 — 每 30 秒检查网关运行状况 - 自动修复 — 失败时运行 openclaw doctor --fix（最多 3 次尝试） - 自动回滚 — 如果修复失败，将工作区重置为最后一个稳定的 git 提交 - 每日快照 — 工作区每日自动 git 提交 - Discord 警报 — 有关故障和恢复的可选 webhook 通知 ⚡ 单行部署 (OpenClaw)用户）已经在使用 OpenClaw？只是告诉
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, bash, devops, guardian, openclaw, self-healing

---

### 🌟 [OpenOSINT](https://github.com/OpenOSINT/OpenOSINT)
- **项目语言**: Python
- **星标数量**: ⭐ 586
- **核心概述**: 具有交互式 REPL、MCP 服务器和 CLI 的 AI 支持的 OSINT 代理。 16 个工具。适用于 Claude、GPT-4 或本地模型。仅用于授权的安全研究。
- **大概是做什么的**: mcp-name：io.github.OpenOSINT/openosint AI 支持的 OSINT 代理。交互式 REPL · CLI · MCP 服务器 · Web UI 16 种工具。由 Anthropic Claude 或当地的 Ollama 提供支持。仅用于授权的安全研究。请参阅 DISCLAIMER.md 了解法律和道德使用信息。法律免责声明：OpenOSINT 仅供合法和授权使用。用户全权负责确保其使用遵守所有适用的法律和法规。作者对滥用不承担任何责任。请参阅 DISCLAIMER.md。 OpenOSINT 是开源智能的 AI 代理，具有三个接口：交互式终端 REPL、直接 CLI 和可暴露给 Claude Code、Claude Desktop 或任何 MCP 兼容客户端的 MCP 服务器，以及 v2.12.0 中添加的基于浏览器的 Web UI。 AI 层使用 Anthropic 的本机工具使用 API（或本地 Ollama 模型，或任何 OpenAI 兼容端点）：模型在需要工具时发出硬停止，您的代码执行真正的二进制文件，实际输出返回 - 工具结果中的幻觉在结构上是不可能的。 - AI 工具链——代理决定 16 个工具中的哪一个
- **有什么用**: 适合用于深度学习、CNN/Conv 算法、PyTorch/TensorFlow 模型训练和实验复现。
- **技术标签**: ai-agent, anthropic, claude, cli, cybersecurity, holehe

---

### 🌟 [openops](https://github.com/openops-cloud/openops)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 1,032
- **核心概述**: 包含电池的无代码 FinOps 自动化平台，具有您信任的 AI。
- **大概是做什么的**: OpenOps 是一个无代码 FinOps 自动化平台，可帮助组织降低云成本并简化财务运营。它提供可定制的工作流程来自动化关键的 FinOps 流程，例如分配、单位经济性、异常管理、工作负载优化、安全取消配置等等。它还捆绑了自己的类似 Excel 的数据库 (OpenOps Tables) 和自己的可视化系统 (OpenOps Analytics)。同时，OpenOps 实现了 FinOps 团队、工程师、DevOps、财务和领导层之间的协作，确保成本节约措施不仅得到确定，而且得到有效实施。 OpenOps 与主要云提供商、许多第三方 FinOps 工具、各种通信平台和一些项目管理工具无缝集成。 🏁 只是想开始吗？点击这里。预构建的 FinOps 工作流程 – 根据 FinOps 领导者的意见设计的最佳实践工作流程库。涵盖成本优化、标记、预算、分配和报告。无代码经验 – 适合非技术从业者，
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, ai-agents, cloud-governance, cloud-optimization, enterprise-automation, finops

---

### 🌟 [AI_Tutorial](https://github.com/cbamls/AI_Tutorial)
- **项目语言**: 多语言
- **星标数量**: ⭐ 3,673
- **核心概述**: 大厂发布的AI落地实践、顶尖实验室的最新论文、工业界的真实踩坑记录
- **大概是做什么的**: 大模型时代，百科式的内容 AI 已能自动生成海量。 但真正珍贵的增量信息，恰恰是来自一线实战的工程经验—— 大厂落地实践、顶尖实验室最新论文、工业界真实踩坑记录 ，才是这个时代最有价值的知识增量。 Google EEAT 所强调的 Experience（经验） ，正变得愈发稀缺且不可替代。 AIQ 专注于此，全面整理高质量的 AI / ML / 大数据技术资料，内容来自： 国内外知名互联网公司技术博客（FAANG、Alibaba、Meituan 等）、 开源项目官网与综合技术社区（InfoQ、Stack Overflow、GitHub 等） 及知名技术公众号（DataFunTalk、阿里技术等）。 苦练基本功 ：随着全球工业界在 AI 道路上的不断探索与沉淀，笔耕不辍，很多很多年后，AIQ 终将成为人工智能领域的"史家之绝唱，无韵之离骚"。 坚持做正确的事，而不是容易的事 ：随着工业界不断的分享实践，未来无数的 AI 工程师们都能在这里找到解决方案、对标前沿，收获志同道合的朋友。智能时代里遍地生花、百家争鸣。 每天前进三十公里 ：通过持续提升 AI 技术信息获取的效率，降低信息不对称壁垒，加速行业周期，助力人类智能化的翅膀飞得更高更远。 ------ ------ ------ 🏢 AI 业界实践 FAANG、阿里、美团、字节等大厂一线工程师的真实落地经验。不造神话，只讲干货。 ✅ 已上线 📰 AI 动态资讯 论文速览、新模型发布、行业动态、AI 领袖推文精选——每天自动聚合，不错过任何重要进展。 🚧 建设中 🧭 AI 精选产品导航 精心筛选的 AI 工具与产品导航，帮你在信息爆炸的时代快速找到真正好用的东西。 ✅ 已上线 - arXiv · Papers With Code - Google · Meta · Microsoft Research - Alibaba · Meituan · ByteDance - InfoQ · Stack Overflow · GitHub - DataFunTalk · 阿里技术 · 美团技术 - AI 领袖 X/Twitter 精选 - 质量优先 ：只收录有实质性工程价值或学术贡献的内容，拒绝标题党与营销软文。 - 来源可溯 ：每篇内容均保留原始出处，尊重原作者的劳动成果。 - 经验导向 ：大模型时代，我们更重视 Experience——一线实战经验比理论综述更难复制。 - 广泛覆盖 ：内容来源覆盖全球顶尖公司博客、学术机构、技术社区，不设地域与语言边界。 GitHub 资料库：https://github.co
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, artificial-intelligence, artificial-intelligence-algorithms, llm, machine-learning, recommender-systems

---

## 🕔 2026-06-09 13:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目。本次从 40 个候选项目中筛选出 6 个未推荐过的新项目。

### 🌟 [html-video](https://github.com/nexu-io/html-video)
- **项目语言**: HTML
- **星标数量**: ⭐ 2,449
- **核心概述**: 用于编码代理的程序化视频 — HTML 到笔记本电脑上的视频。使用可插拔渲染引擎、21 个模板、AI 配乐将 HTML、CSS 和数据转换为真正的 MP4。 Apache-2.0，无每次渲染费用。开放设计团队的官方项目。
- **大概是做什么的**: HTML 在您的笔记本电脑上变成视频。带上您本地的编码代理（Open Design · Windsurf CLI · Trae CLI · Claude Code · Cursor · Codex · Gemini · Grok · Qwen · OpenCode · Copilot · Aider · Hermes · 或 Anthropic API）。描述视频，或粘贴文章链接/GitHub 存储库，代理将其转换为多帧、完全动画的视频，然后将其渲染为您计算机上的真实 MP4。一个代理循环、可插入渲染引擎、精选模板库、可选 AI 配乐。 Apache-2.0，无每次渲染费用，无供应商锁定。开放设计团队的官方项目 · open-design.ai 下面的每个模板都是真实的动画单文件 HTML 视频 - 这些是实时渲染，而不是模型。放入一份，让代理将您的内容填充到其中，然后导出为 MP4。 frame-data-chart-nyt · data-viz 编辑 NYT 风格的动画折线图 — 标题、带注释的数据点、源行。对于“数字上升”的故事。帧故障标题 · 标题卡 带有扫描线的色差故障标题。用于开瓶���、掉落物和“系统在线”能量。框架液体背景英雄 · 英雄奥罗拉
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, apache-2, coding-agent, css, ffmpeg, html

---

### 🌟 [boxlite](https://github.com/boxlite-ai/boxlite)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 2,116
- **核心概述**: AI 代理的计算基础：足够轻，可以在笔记本电脑上运行，足够有弹性，可以扩展到云端并释放无限的资源。
- **大概是做什么的**: AI 代理的计算基础：足够轻，可以在笔记本电脑上运行，足够有弹性，可以扩展到云端并释放无限的资源。 BoxLite 允许您启动轻量级虚拟机（“盒子”）并在其中运行 OCI 容器。与每次执行后都会破坏状态的临时沙箱不同，BoxLite Box 是持久的工作空间 - 安装包、创建文件、构建环境状态，然后返回并从上次中断的地方继续。 - 有状态：盒子在停止/重新启动时保留包、文件和环境。每次交互都无需重建。 - 轻量级：占用空间小、启动快、异步优先 API 实现高并发。 - 硬件隔离：每个 Box 运行自己的内核——而不仅仅是命名空间或容器。 - 无守护进程：嵌入为库，无需 root，无后台服务。 - OCI 兼容：使用标准 Docker 镜像（ python:slim 、 node:alpine 、 alpine:latest ）。 - 网络策略 + 秘密占位符：通过允许网络限制出站访问并从主机端秘密注入真实的 HTTP(S) 秘密。 - 本地优先��完全在您的计算机上运行 - 无云
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agentic, ai-agent, embedded, rust, sandbox, security

---

### 🌟 [beeai-framework](https://github.com/i-am-bee/beeai-framework)
- **项目语言**: Python
- **星标数量**: ⭐ 3,288
- **核心概述**: 使用 Python 和 Typescript 构建可投入生产的 AI 代理。
- **大概是做什么的**: 日期语言更新说明 ---------- ---------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 2025/08/25 Python 🚀 ACP 现已成为 Linux 基金会下 A2A 的一部分！ 👉 了解更多 2025/06/03 Python 发布实验性 Requirement Agent。 2025/05/15 Python 新协议集成：ACP 和 MCP。 2025/02/19 Python 推出 Python 库 alpha。请参阅入门指南。 2025/02/07 TypeScript 引入了后端模块来简化 AI 服务（聊天、嵌入）的使用。 2025/01/28 TypeScript 添加了对 DeepSeek R1 的支持，查看竞争分析工作流程示例。 2025/01/09 TypeScript 引入了工作流程，这是一种构建多代理系统的方法。添加了对模型上下文协议的支持。 2024/12/09 TypeScript 添加了对 LLaMa 3.3 的支持。请参阅使用 watsonx 的多代理工作流程示例或探��其他可用的提供程序。 2024年11月21日
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agents, ai, ai-agent, beeai, framework, llm

---

### 🌟 [FlyEnv](https://github.com/xpf0000/FlyEnv)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 2,929
- **核心概述**: 适用于 Windows、macOS 和 Linux 的多合一本机本地开发环境。 PHP、Node.js、Python 等的 Docker 替代品。通过数据库、Cron 作业和运行时管理，更快地替代 XAMPP、Laragon、MAMP 和 Laravel Herd。
- **大概是做什么的**: 本机安装、切换和运行本地开发堆栈 FlyEnv 是一款桌面应用程序，用于管理 Windows、macOS 和 Linux 上的本地开发环境。从一个 UI 安装并运行 PHP、Node.js、Python、Java、.NET、Flutter、Web 服务器、数据库、队列、AI 工具、SSL、本地域、反向代理和 cron 作业。使用本机二进制文件，切换每个项目的版本，并保持系统路径干净——无需 Docker。最适合希望本地服务而不需要容器开销的 Web、后端、移动和全栈开发人员。 FlyEnv 可以做什么？按需安装运行时：PHP、Node.js、Python、Java、.NET、Flutter、Go、Rust、Ruby、Bun、Deno 等。运行本地服务：Nginx、Apache、Caddy、MySQL、PostgreSQL、MongoDB、Redis、RabbitMQ、Elasticsearch、Minio/RustFS 以及其他常见开发依赖项。管理项目：切换每个项目的运行时版本，定义启动/停止命令，通过本地域、反向代理、HTTPS 和 Cloudflare Tunnel 公开项目。处理日常开发任务：编辑配置和日志、检查端口、安排 cron 作业、管理 Git、生成证书
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, cron-jobs, development-environment, docker-alternative, laragon, laravel-herd

---

### 🌟 [AIGC-Interview-Book](https://github.com/WeThinkIn/AIGC-Interview-Book)
- **项目语言**: 多语言
- **星标数量**: ⭐ 3,888
- **核心概述**: 【三年面试五年模拟】AIGC/LLM/AI Agent算法工程师面试秘籍。涵盖AIGC、LLM大模型、AI Agent、传统深度学习、自动驾驶、机器学习、计算机视觉、自然语言处理、强化学习、大数据挖掘、具身智能、元宇宙、AGI等AI行业面试笔试干货经验与核心知识。
- **大概是做什么的**: 🔥【三年面试五年模拟】AIGC算法岗/开发岗的面试求职秘籍 【Three Years of Interviews, Five Years of Practice】The Ultimate Guide to AIGC Interview、LLMs Interview、AI Agent Interview、Deep Learning Interview、Algorithm Engineer Interview 🏆 AIGC算法岗方向： 涵盖AIGC、LLM大模型、AI Agent、传统深度学习、自动驾驶、机器学习、计算机视觉、自然语言处理、强化学习、大数据挖掘、具身智能、元宇宙、AGI等。 🏆 AIGC开发岗方向： 涵盖Python、Java、C/C++、Go、嵌入式、前端、后端、测试、运维等。 🚀 本项目凝聚了AIGC时代众多一线AIGC算法专家的行业经验与深度洞察 ，涵盖AIGC完整知识架构、AIGC大厂内推、AIGC面试经验、AIGC公司指南/辛秘、AI校招时间表、AIGC面试准备、AIGC薪资爆料、AIGC刷题指南、AIGC求职答疑等干货资源。本项目的核心内容均取材于编者们在AI行业中的工作、研究、竞赛经验，以及对各互联网大厂/AIGC明星公司的AIGC岗位笔试/面试题提炼。 💡 本项目也可作为高等学府AIGC相关专业的研究、教学、竞赛以及学习的参考用书 ；还可为AIGC、传统深度学习以及自动驾驶领域的初、中级技术人员提供思路参考， 尤其适合AIGC求职者和提供相关AIGC算法岗位的面试官阅读研究 。 👍 本项目的持续构建/维护十分不易，希望大家能多多star～。Star本项目，你就获得了0.5个心仪的offer；再分享本项目，你就获得了0.75个心仪offer！在这里，Rocky祝大家求职顺利、工作顺利！ - :star: AIGC/LLM/AI Agent算法岗面试求职经验指南（包含简历模版、求职攻略、面试经验、面试技巧等通用AI岗位面试技巧） - :art: AIGC图像创作&AI绘画基础 - :video game: AI Agent基础 - :abacus: 数学&物理本质原理基础 - :closed book: 深度学习基础 - :blue book: 机器学习基础 - :european castle: 模型部署基础 - :snake: 编程基础：Python - :bar chart: 编程基础：C和C++ - :boom: 大厂高频面试题（实时更新） - :battery: 数据结构&算法基础 - :chart with upw
- **有什么用**: 适合用于计算机视觉、图像处理、分类检测分割任务学习，也可以参考其中的数据处理、模型结构和实验流程。
- **技术标签**: ai-agent, aigc, computer-vision, deep-learning, interview, interview-preparation

---

### 🌟 [boss-agent-cli](https://github.com/can4hou6joeng4/boss-agent-cli)
- **项目语言**: Python
- **星标数量**: ⭐ 1,119
- **核心概述**: AI-agent-first CLI for BOSS 直聘 — 职位搜索、福利筛选、招聘者工作流、MCP 工具与 AI 简历优化
- **大概是做什么的**: 专为 AI Agent 设计的 BOSS 直聘本地辅助 CLI 工具 默认低风险模式：本地辅助 · 只读优先 · 用户主动触发 · 不规避风控 · 不批量触达 · 不抓取平台数据 求职者：搜索 · 福利筛选 · 详情查看 · 候选池 · 本地简历与 AI 辅助 快速上手 · 安装 · 快速开始 · 角色模式 · Agent 集成 · 命令参考 · 排障 · 架构 · 更新日志 · 路线图 观看完整展示视频 · 查看终端交互演示 · schema 驱动 · 福利筛选 · JSON 信封 · 开源工程质量 Doloffer Guide 致力于让优质 AI 工具的获取更简单。平台主打 GPT 与 Claude 等主流 AI 服务的正版会员充值，提供一站式订阅管理，主打安全稳定与无忧售后。 💡 极速订阅 ： 专属链接（输入优惠码 AI8888 享 9 折特惠） A local-assist CLI for AI Agents working around BOSS Zhipin data already available to the user. Default low-risk mode is read-only first, user-triggered, and does not automate outreach, bulk actions, risk-control bypasses, or candidate personal-data workflows. See README.en.md for the English version. 本项目默认启用低风险辅助模式，目标是收缩为“本地辅助 / 只读优先 / 用户主动触发 / 不规避风控 / 不批量触达 / 不抓取平台数据”的低风险工具。CLI 默认会阻断打招呼、批量打招呼、投递、联系方式交换、招聘者候选人搜索、候选人简历、聊天记录、附件简历请求和消��回复等敏感能力。需要投递、沟通、候选人处理或联系方式交换时，请回到 BOSS 直聘官方页面由用户手动完成。 💡 为什么用 boss-agent-cli？ 传统求职：打开网页 → 翻几十页 → 逐个看详情 → 手动整理候选岗位 → 忘了跟进谁。 boss-agent-cli 让 AI Agent 帮你做本地整理和只读辅助 ： 所有输出为 结构化 JSON ，Agent 一调用就能理解；涉及投递、沟通和候选人个人信息处理的动作默认回到平台官网手动完成。 - 为什么用 boss-agent-cli ------ ------ ---------- 项目展示动
- **有什么用**: 适合用于深度学习、CNN/Conv 算法、PyTorch/TensorFlow 模型训练和实验复现。
- **技术标签**: agent-skill, agent-tools, ai-agent, automation, boss-zhipin, cli

---

## 🕔 2026-06-09 08:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目。本次从 40 个候选项目中筛选出 6 个未推荐过的新项目。

### 🌟 [AgentGuide](https://github.com/adongwanai/AgentGuide)
- **项目语言**: HTML
- **星标数量**: ⭐ 5,730
- **核心概述**: https://adongwanai.github.io/AgentGuide | AI Agent开发指南 | LangGraph实战 | 高级RAG | 转行大模型 | 大模型面试 | 算法工程师 | 面试题库 | 强化学习｜数据合成
- **大概是做什么的**: 🔥 AI Agent 开发 × 面试求职 = 一站式解决方案 对标 JavaGuide 的 AI Agent 学习指南 从入门到拿 Offer，系统化 + 实战化 + 求职导向 📌 本项目定位：资源整合 + 系统化路径 + 实战导向 - ✅ 站在巨人的肩膀上 - 互联网已有的优质资源（课程、教程、论文），我们直接引用，不重复造轮子 - ✅ 只分享干货 - （坚持更新中，欢迎催更） - ✅ 提供系统化路径 - 将碎片化资源串联成完整学习路线，告诉你先学什么、再学什么 - ✅ 求职导向 - 每个知识点都标注"面试怎么考"、"简历怎么写" 💪 AgentGuide 的独特价值 ：不是简单的资源堆砌，而是 系统化 + 求职导向 + 实战验证 的完整解决方案！ - 💡 关于本项目 - Agent开发指南、转行大模型、高级RAG、大模型面试 - 🆕 求职新范式 - 1-2-5框架、个人品牌、投递策略 - 🧭 Agent 求职通关 Todo List - 当前优先级、8阶段学习产出、项目落地5步法 - 🚦 6步学习路径 - 从岗位选择到拿Offer - 🔬 算法岗 vs 🛠️ 开发岗 - 岗位选择决策树 - 📚 学习路线图 - 算法岗10-15周 开发岗8-12周 - 💼 实战项目 - 开源优质项目合集+N X Agent项目 - 📖 技术教程 - LangGraph、RAG、上下文工程、监督微调、强化学习 - 🎯 面试题库 - 1000+题、系统设计、编程题 - 🚀 10分钟快速开始 💬 加入学习社群 ❓ 常见问题 - 🧭 新手��速开始 🧭 2026 Agent 求职路线 🛠️ Agent 项目落地方法 🧩 Agent Harness Engineering - 📄 Paper Agent 🧳 Travel Agent 🌐 Web Agent 🖼️ Multimodal RAG 3 分钟了解为什么你需要 AgentGuide - ❌ 学了一堆 LLM API 调用，但不知道 Agent 和普通对话有什么区别 - ❌ 看了无数篇 LangChain 文档，却依然不知道从哪里开始 - ❌ 做了一些 Demo 项目，但简历上写不出亮点，面试讲不清楚 - ❌ 想转 AI Agent 方向，但不知道算法岗和开发岗应该准备什么 - ❌ 网上资料又多又杂，缺少一条清晰的学习路线 AI Agent 开发学习指南 转行大模型 LangGraph 实战 高级RAG 大模型面试 一份系统化、求职导向的 AI Agent 学习与面试指南，涵盖： - A
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agenticrag, ai-agent, crewai, graphrag, grpo, interview

---

### 🌟 [mercury-agent](https://github.com/cosmicstack-labs/mercury-agent)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 2,601
- **核心概述**: 灵魂驱动的人工智能代理，具有权限强化的工具、代币预算和多渠道访问。通过 CLI 或 Telegram 24/7 运行。
- **大概是做什么的**: 灵魂驱动的人工智能代理，具有权限强化的工具、代币预算和多渠道访问。记住重要的事情。在行动之前询问。通过 CLI、Telegram 或 Web 24/7 运行。 31 个内置工具、看板、可扩展技能、SQLite 支持的第二大脑内存。 🔖 当前稳定版：v1.1.9 单行安装（不需要 Node.js） — 为您的操作系统下载最新的独立二进制文件：或者如果您已经有 Node.js 20+，则通过 npm：或者全局安装 npm 包：第一次运行会触发设置向导（名称、提供商、可选的 Telegram）。设置完成后，Mercury 将打开 Ink TUI 启动屏幕，并在聊天开始之前询问您的权限模式（“询问”或“全部允许”）。稍后重新配置（更改密钥、名称、设置）：每个 AI 代理都可以读取文件、运行命令和获取 URL。大多数人都是默默地做。水星首先询问——并且记住什么是重要的。 - 权限强化 — Shell 阻止列表（ sudo 、 rm -rf / 等从不执行）。文件���级读/写范围。待批准流程。每个会话询问我或允许全部。没有什么惊喜。 - Second Brain — 使用 SQLite + F 实现持久的结构化记忆
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, ai-assistant, llm

---

### 🌟 [ouroboros](https://github.com/Q00/ouroboros)
- **项目语言**: Python
- **星标数量**: ⭐ 4,503
- **核心概述**: 代理操作系统：停止提示。开始指定。
- **大概是做什么的**: English 한국어 简体中文 停止提示。开始指定。用于可重玩、规范优先的 AI 编码工作流程的代理操作系统将模糊的想法转变为经过验证的、可工作的代码库 - 涵盖 Claude Code、Codex CLI、OpenCode、Hermes、Gemini、Kiro、Copilot 和 Pi。 Ouroboros 是一个用于人工智能编码的代理操作系统：一个本地优先的运行时层，它将非确定性代理工作转变为可重播、可观察、受策略约束的执行合约。它用结构化的规范优先工作流程取代了临时提示：面试、结晶、执行、评估。 Ouroboros 代理操作系统堆栈 与任何操作系统一样，Ouroboros 分为稳定的原语操作系统层、域工作流程的应用程序层以及人类实际坐在前面的外壳。三个存储库，一个堆栈：层存储库角色 它为您提供什么 :--- :--- :--- :--- Shell (终端客户端) Q00/ourocode 本机终端 UI，用于在一个会话中跨 Claude / Codex / Gemini CLI 运行 ooo 工作流程 TUI、wonderTool 决策选择器、MCP 窗格状态、命令发现 应用程序（域工作流程） Q00/ouroboros-plugins 用户级插件合同 — 组成
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent-os, ai-agent, llm-orchestration, llm-runtime, python

---

### 🌟 [Auto-Empirical-Research-Skills](https://github.com/brycewang-stanford/Auto-Empirical-Research-Skills)
- **项目语言**: Stata
- **星标数量**: ⭐ 1,774
- **核心概述**: 🔬 A curated collection of 23,000+ agent skills for empirical research across 8 social science disciplines. | 精选 23,000+ AI Agent 技能库，覆盖8大社会科学学科的实证研究。CoPaper.AI 20分钟完成一篇可复现的规范实证论文，并支持用户上传 Skills。-- Maintained by CoPaper.AI from Stanford REAP.
- **大概是做什么的**: 自动实证研究技能 (AERS) 🌐 语言：英语 简体中文 繁体中文 日本语 한국어 斯坦福大学 REAP × CoPaper.AI · 用于实证研究的学术-工业人工智能工具包 由斯坦福大学实证方法团队构建 - 从数据清理到顶级期刊提交的完整流程 实证研究专家的代理技能分布。不是营销列表 - 此存储库中提供和编录了 1,072 种技能，包含在数字基准、评估工具、安全审计和 CI 中，以及更广泛的生态系统中 119 个存储库中 23,000 多种技能的精心策划的地图。 AERS 同时包含两件事：(1) 运行完整实证管道的一小组第一方旗舰技能——数据清理→识别→估计→��健性→表格/图表→准备提交的草稿——以及(2)按研究工作流程阶段组织的实证研究技能生态系统的精心策划的、具有安全意识的目录。差异化因素不是计数，而是计数。这是旗舰行为是根据已知答案进行验证的，而不是断言的。已更名。该项目以前称为 Awesome Agent Skills for Empirical
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: academic-research, agent-skills, ai-agent, awesome-list, communication, copaper

---

### 🌟 [antigravity-workspace-template](https://github.com/study8677/antigravity-workspace-template)
- **项目语言**: Python
- **星标数量**: ⭐ 1,272
- **核心概述**: 为您的代码库提供 Claude Code、Cursor、Codex CLI 的 ChatGPT。多代理知识引擎，带有文件路径和行号的接地问答。适用于任何 AI IDE。
- **大概是做什么的**: 适用于您的代码库的 ChatGPT — 适用于 Claude Code、Cursor、Codex、Windsurf 等 4 种语言。 English · 中文 · Español 赞助安置：DolOffer（GitHub 项目）提供 GPT 和 Claude 会员充值折扣、官方订阅和售后支持。使用代码 AI8888 可享受 10% 折扣。免责声明：这是付费赞助商安置。 DolOffer 服务、定价、可用性和支持由 DolOffer 提供；请在购买前查看他们的条款。 99% 真实 · 比 Codex CLI 快 2.1 倍 · 适用于任何 AI IDE。面对面基准测试 ↓ Codex CLI 用户 — 删除 antigravity: 前缀；同样的四个斜线命令也在那里。用于基础代码库问答的跨 IDE 存储库知识引擎。每个 IDE 都会读取相同的 .antigravity/ 知识层；一个引擎，每个主机。 AI Agent的能力上限=它可以读取的上下文的质量。 ag-refresh 部署一个多代理集群，��动读取您的代码 - 每个模块都有自己的代理来生成知识文档。 ag-ask 将问题路由到正确的代理，该代理基于带有文件路径和行号的真实代码。因斯泰亚
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agents-sdk, ai-agent, claude-code, code-intelligence, code-search, codebase-qa

---

### 🌟 [skales](https://github.com/skalesapp/skales)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 1,050
- **核心概述**: 适用于 Windows、macOS、Linux 和 Android 的个人 AI 桌面代理。设定一个目标，它就会自行发挥作用。团队（配对两个桌面、代理 + 人员）、Agent2Agent、工作流程、Codework、多代理组织、桌面 + 浏览器自动化。 15+ AI 提供商，BYOK。没有 Docker，没有终端。代理技能 (SKILL.md)。移民进口商。重复的自主任务。
- **大概是做什么的**: 私人人工智能驻留在您的计算机上并执行实际工作，而不仅仅是聊天。 macOS (Apple Silicon) · Skales Mobile：📱 Android 一键安装。没有 Docker，没有终端。超过 15 个 AI 提供商，或与 Ollama 完全离线。您的文件永远不会离开您的机器。问它一些事情，给它一个目标并合上盖子，或者让它通过 WhatsApp 和 Telegram 到达你。一处应有尽有，适合 6 岁至 60 岁以上的所有人。从 OpenClaw、Hermes Agent 或 ChatGPT 切换？ Skales 有一个内置的迁移导入器。从另一个工具导入设置。 📋 目录 - 🚀 Skales 可以做什么 - 🎯 背景目标 - 🛠️ Skales 代码工作 - 🗣️ 语音：与 Skales 交谈 - 🌐 内联 HTML 预览 - 🦁 Lio AI（代码生成器） - 🌐 内置浏览器代理 - 📅 规划器、日历和 AI 任务 - 🧠 记忆和梦想 - 🧠 15+ AI 提供商 - 🛡️ 隐私和安全 - 🆓 免费试用 Skales 如果您觉得这很有用，⭐ 可以帮助其他人发现它 文档 · 博客 · 变更日志 · 社区 “从我在这个领域测试过的每一个工具中，我还没有找到��个能够提供智能且不复杂的工具，一个替代工具
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agentic-ai, ai-agent, ai-assistant, ai-companions, android, automation

---

## 🕔 2026-06-09 03:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目。本次从 40 个候选项目中筛选出 6 个未推荐过的新项目。

### 🌟 [claude-code-guide](https://github.com/zebbern/claude-code-guide)
- **项目语言**: Python
- **星标数量**: ⭐ 4,241
- **核心概述**: Claude 代码指南 - 从初学者到高级用户的设置、命令、工作流程、代理、技能和技巧！
- **大概是做什么的**: 如需参考和贡献，请访问官方 Claude Code 文档部分 状态 其他资源 -------------------------------------------------------------------------------------------------------------- 入门 ✅ Claude-Code 文档配置和环境变量 ✅ 通过 Discord 命令和使用的 Claude-Code ✅ 安全代理 SKILL.md 接口和输入 ✅ 让代理创建 SKILL.md 高级功能 ✅ 954+ 代理技能自动化和集成 ✅ 免费人工智能资源帮助和故障排除✅ 250 多个 Mermaid 模板 第三方集成 ✅ Discord 通信 MCP 快速路径：安装 · 命令 · 配置 · MCP · 代理 · 故障排除区域 从这里开始 也很有用 入门 快速入门 初始设置、系统要求 配置 环境变量 配置文件 命令 斜线命令 CLI 快速参考 界面键盘快捷键 Vim 模式 高级功能 计划模式、自动模式、MCP 子代理、技能、挂钩 安全 安全和权限 危险模式、最佳实践 自动化 自动化 &脚本编写
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agent-tools, anthropic-claude, claude, claude-ai

---

### 🌟 [agents](https://github.com/inkeep/agents)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 1,189
- **核心概述**: 在无代码可视化生成器或 TypeScript SDK 中创建具有完全 2 路同步的 AI 代理。用于交付 AI 助手和多代理 AI 工作流程。
- **大概是做什么的**: 从文档开始或 1 分钟快速入门。无代码可视化生成器拖放画布，因此任何团队都可以创建并拥有他们关心的代理。 TypeScript Agents SDK 一个代码优先的框架，使工程团队可以使用类型安全、智能感知、CI/CD 以及他们期望的工具进行构建。 Visual Builder 和 TypeScript SDK 完全可互操作：技术和非技术团队可以以任一格式编辑和管理代理，并随时与其他人协作。 Inkeep 代理可以作为实时 AI 聊天助理运行，例如： - 帮助中心、技术文档或应用内体验的客户体验代理 - 协助您的支持、销售、营销、运营和其他团队的内部副驾驶 代理还可以用于 AI 工作流程自动化，例如： - 创建和更新知识库、文档和博客 - 更新 CRM、分类帮助台票证以及处理重复任务 Inkeep 开源包括：具有 2 路同步功能的 Builder 和 TypeScript SDK - 支持代理团队的多代理架构 - 具有凭证管理功能的 MCP 工具 - A U
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, agent-builder, agent-framework, agents-sdk, ai, ai-agent

---

### 🌟 [ktx](https://github.com/Kaelio/ktx)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 956
- **核心概述**: ktx 是数据和分析代理的可执行上下文层🐙 允许 Claude Code、Codex 或任何其他 AI 代理准确查询数据并了解您公司的完整上下文
- **大概是做什么的**: 由 Kaelio ktx 构建和维护的数据代理上下文层是一个自我改进的上下文层，它教代理如何准确查询您的仓库 - 从批准的指标定义、可连接列以及它为您构建和维护的业务知识。使用您自己的 LLM API 密钥或本地代理登录运行 ktx - 通过 Claude Code 的 Claude Pro/Max 订阅，或您的本地 Codex 身份验证。 ktx 不收取额外的使用费用。通用代理在数据任务上苦苦挣扎。他们会针对每个问题重新探索您的仓库，发明自己的度量逻辑，并返回与批准的定义不匹配的数字。传统的语义层无法解决这个问题。它们需要持续的手动维护，并且不会吸收公司的其他知识。 ktx 自动执行这两件事： - 从公司知识中学习。提取 wiki 内容，对其进行组织，删除重复项，并标记矛盾以供人工审核。 - 映射数据堆栈。对表进行采样，捕获元数据和使用模式，检测可连接列，并对源进行注释以便代理写入 - 构建语义 la
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, agent-skills, agents, ai-agent, ai-agents, analytics

---

### 🌟 [LazyLLM](https://github.com/LazyAGI/LazyLLM)
- **项目语言**: Python
- **星标数量**: ⭐ 3,843
- **核心概述**: 构建多代理 LLM 应用程序的最简单和最懒的方法。
- **大概是做什么的**: LazyLLM：用于构建多代理 LLM 应用程序的低代码开发工具。 LazyLLM 是一种低代码开发工具，用于构建多智能体大型语言模型应用程序。它帮助开发者以极低的成本创建复杂的人工智能应用，并实现持续迭代优化。 LazyLLM 为应用程序构建提供了便捷的工作流程，并为应用程序开发过程的各个阶段提供了大量标准流程和工具。基于LazyLLM的AI应用开发流程遵循原型构建-数据反馈-迭代优化，这意味着您可以使用LazyLLM快速构建原型应用，然后使用特定任务的数据分析不良案例，随后在应用的关键���段迭代算法和微调模型，逐步提高应用的整体性能。 LazyLLM 致力于敏捷性和效率的统一。开发者可以高效地迭代算法，然后将迭代后的算法应用到工业生产中，支持多用户、容错、高性能等。
- **有什么用**: 适合用于深度学习、CNN/Conv 算法、PyTorch/TensorFlow 模型训练和实验复现。
- **技术标签**: agents, ai-agent, data, deep-learning, documentation-tool, finetuning

---

### 🌟 [late-cli](https://github.com/mlhher/late-cli)
- **项目语言**: Go
- **星标数量**: ⭐ 342
- **核心概述**: 在 5GB VRAM 上协调整个 AI 开发团队。临时子代理，精确匹配差异。单个静态二进制文件，任何模型。零配置，零上下文膨胀。
- **大概是做什么的**: 后期：高杠杆率的 AI 代理编排 每个其他编码代理都会用编辑、重试和实现细节淹没自己的上下文，直到模型失去线程。 Late 将所有这些委托给临时子代理——执行一项任务并被销毁的隔离上下文。协调者只看到计划和结果，而不是混乱。单个静态二进制文件、零依赖性、任何模型。投入任何项目并开始构建。不到 10 秒即可到达第一个提示。其他安装方法 - Arch Linux：yay -S Late-cli-bin - Linux / macOS / Native Windows：下载最新的二进制文件并将其放入您的 PATH 中。 （macOS 手动下载：如果被阻止，请运行 xattr -d com.apple.quarantine /path/to/late ）连接到云模型？本地模型（llama.cpp 位于 :8080 上，是 llama-server 的默认值）开箱即用。无需配置。对于云提供商（DeepSeek、Claude、Gemini、OpenRouter），请设置 OPENAI BASE URL 、 OPENAI API KEY 和 OPENAI MODEL 环境变量。首席架构师制定计划并生成原子子代理以进行外科手术编辑。晚课
- **有什么用**: 适合用于深度学习、CNN/Conv 算法、PyTorch/TensorFlow 模型训练和实验复现。
- **技术标签**: agent, ai-agent, ai-agents, ai-coding-agent, ai-coding-assistant, ai-skills

---

### 🌟 [clay](https://github.com/chadbyte/clay)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 305
- **核心概述**: 多人克劳德代码和法典。 Claude Code 和 Codex 的自托管团队工作区。多用户、基于浏览器的人工智能与记忆相结合。
- **大概是做什么的**: 多人克劳德代码和法典。加入队友的实时会话。或者与具有记忆力和反击能力的人工智能伙伴配对。自托管，在供应商之间进行一次切换。您整个团队所在的浏览器选项卡。人类、人工智能代理、项目、会话、决策。害怕将您的个人或团队知识锁定在一个供应商身上？有了 Clay，您的会议、会议和决策就可以保存在您的磁盘上。想什么���候切换就什么时候切换。用于 Claude Code 和 Codex CLI 的团队共享、自托管 GUI。 - 基于浏览器的 Claude Code 和 Codex 工作区。在任何设备上打开它，单独或与整个团队一起打开。 - 您的团队跨项目协作的地方。工程师、项目经理、设计师和领域专家共享一个工作空间，在项目之间跳转，加入彼此的会话。 - 您的虚拟团队。与名字、记忆和角色相匹配���—建筑师、审稿人、设计师，无论你需要什么。他们会学习您的代码库，抵制不好的想法，并且不会在会话之间重置。 - 多项目仪表板。机器上的每个存储库都位于一个侧栏中。并行运行多个代理；权限请求并完成
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, ai-agents, ai-team, automation, claude, claude-agent-sdk

---

## 🕔 2026-06-08 22:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目。本次从 40 个候选项目中筛选出 6 个未推荐过的新项目。

### 🌟 [MonkeyCode](https://github.com/chaitin/MonkeyCode)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 3,237
- **核心概述**: 企业级 AI 开发平台，内置了开发环境管理、AI 模型管理、AI 任务管理、项目需求管理等能力，是真正面向专业开发团队的 AI 助手
- **大概是做什么的**: MonkeyCode 是一款开源的 企业级 AI 开发平台 ，内置了开发环境管理、AI 模型管理、AI 任务管理、项目需求管理等能力，区别于其他的 vibe coding 工具，MonkeyCode 是真正面向专业开发团队的 AI 助手。 - 你可以部署在 企业内网 ，分享给研发团队使用，让你的研发团队可以方便、快捷地启动开发任务；作为研发负责人的你可以对企业内的 AI 开发流程进行统一管理。 - 你可以直接使用我们的 在线环境 ，内置了开发环境，内置了大模型，支持手机客户端，可以随时随地使用最领先的 AI Agent。 你不需要自己拼工具、搭环境、来回切流程。把需求交给 MonkeyCode，它会从开发到验证一路接住，真正把 AI 编程变成可持续的工作流。 - 免费即用 ：无需下载客户端，也不用折腾环境。浏览器打开、注册账号，几秒钟就能开始执行第一个 AI 开发任务。 - 云端开发环境 ：不依赖本地开发机。每个任务背后都有一台真实服务器提供运行环境，编译、测试、预览都在云上完成。 - 全量主流模型 ：GLM、Kimi、MiniMax、Qwen、DeepSeek 等都已接入，支持按任务类型切换，也能手动指定。 - 移动端原生支持 ：深度适配 iOS / Android，PC 和手机数据实时同步。通勤路上也能把任务交给 Agent 继续跑。 - 完全开源 ：核心代码全部公开在 GitHub。任何人都能审计、fork��二次开发，技术选型和安全策略自己掌控。 - 私有化离线部署 ：对数据隐私要求高的企业和团队，可以把 MonkeyCode 独立部署到自己的内网中，数据不出本地。 直接访问 MonkeyCode 在线版即可开始使用： https://monkeycode-ai.com/ 1. 安装 MonkeyCode 控制台。 - MonkeyCode 控制台：最低 2C / 4 GB / 40 GB - 开发环境宿主机：最低建议 8C / 16 GB / 100 GB 1. 安装 MonkeyCode 控制台 进入控制台，在管理后台添加开发环境宿主机。宿主机用于运行 MonkeyCode Agent 沙箱，建议单独准备资源。 添加团队成员后，即可让研发团队开始使用 MonkeyCode。 对比维度 MonkeyCode Cursor Claude Code Codex --- :---: :---: :---: :---: 在线使用 🟢 🟢 🟢 🟢 本地 IDE 🔴 🟢 🟢 🟢 本地 CLI 🔴 🟢 🟢 🟢 需求与 SPEC 管理 🟢 🔴
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-coding, ai-coding-assistant, aicoding, claude

---

### 🌟 [nano-banana-pro-prompts-recommend-skill](https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 1,627
- **核心概述**: OpenClaw 和 Claude Code 的 AI 技能 - 10000+ Nano Banana Pro (Gemini) 图像提示推荐。按用例、内容混音、示例图像进行智能搜索。
- **大概是做什么的**: AI 图像提示推荐器 — 10,000 多个 Nano Banana Pro 提示 无需花费大量时间寻找合适的 AI 图像提示。用一句话告诉您的 AI 助手您需要什么 - 它会搜索 10,000 多个精选的 Nano Banana Pro 提示，并返回前 3 个匹配项和示例图像，可供使用。 🖼️ 浏览提示库 → 一项 AI 代理技能，使 Claude、OpenClaw、Cursor 和其他 AI 助手能够智能搜索包含 10,000 多个 Nano Banana Pro（Gemini 图像模型）提示的精选库，推荐最适合您的用例的匹配项，甚至根据您的内容自定义提示。 Nano Banana Pro 是 Google 的 Gemini 图像生成模型 - 当今功能最强大的 AI 图像生成器之一。高质量的提示是获得良好结果的关键。 - ✅ 10,000 多个提示，按用例组织 - 不是随机转储，而是专业分类 - ✅ 每个提示都包含示例图像 - 在复制之前查看结果 - ✅ 智能语义搜索 - 描述您需要的内容，AI 找到匹配 - ✅ 内容混音模式 - 粘贴您的文章或视频脚本，获取自定义内容
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, ai-image, claude-code-skill, clawhub, content-creation, gemini

---

### 🌟 [TokenTracker](https://github.com/mm7894215/TokenTracker)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 671
- **核心概述**: 跟踪 22 个 AI 编码工具（Claude Code、Codex、Cursor、Gemini、Roo Code、Zed Agent、Goose 等）的代币使用情况 — 本地优先、零配置、带有漂亮的仪表板、原生 macOS 菜单栏应用程序和 4 个桌面小部件。
- **大概是做什么的**: English · 简体中文 · 日本语 · 한국어 准确了解您在 AI 上的支出 — 跨每个 CLI 自动收集 22 个 AI 编码工具的代币计数，在本地进行汇总，并在漂亮的仪表板中查看真实的成本趋势。无需云帐户、无需 API 密钥、无需设置 — 只需一个命令。 ⭐ 如果 TokenTracker 节省了您的时间，请在 GitHub 上为其加注星标 — 它可以帮助其他开发人员找到它。要求：Node.js 20+（CLI 在 macOS / Linux / Windows 上运行；本机桌面应用程序适用于 macOS（菜单栏）和 Windows（系统托盘）。光标标记读取使用系统 sqlite3 CLI（如果可用），并在支持的 Node 版本上回退到 node:sqlite）。就是这样。首次运行会​​安装挂钩、同步数据并在 http://localhost:7680 打开仪表板。 30 秒内您将获得： - 📊 localhost:7680 上的本地仪表板，包含使用趋势、模型细分、成本分析 - 🔌 自动检测您安装的每个受支持的 AI 工具的挂钩 - 🏠 100% 本地 — 无帐户、无 API 密钥、无网络调用（可选排行榜除外） - 🧩 可选：一个技能选项卡，可浏览 250 多种公共技能并将其同步
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-tools, antigravity, claude-code, cli

---

### 🌟 [OpenBiliClaw](https://github.com/whiteguo233/OpenBiliClaw)
- **项目语言**: Python
- **星标数量**: ⭐ 666
- **核心概述**: OpenBiliClaw 是纯本地、私有、开源的自进化跨平台内容发现 Agent：从跨平台使用、项目反馈与对话中持续深化心理画像，带着对你的理解主动去 B 站、小红书、抖音、YouTube 等来源找内容 / Fully local, private, open-source, self-improving discovery agent that learns from usage, feedback, and dialogue to find content across Bilibili, Xiaohongshu, Douyin, YouTube, and more.
- **大概是做什么的**: 通用个性化内容推荐 Agent——本地运行、跨平台理解你、只为你一个人构建 A general-purpose personalized content discovery Agent — runs on your machine, understands only you 一个纯本地、私有、开源的自进化跨平台内容发现 Agent：从你的跨平台使用、反馈和对话中持续深化心理画像，带着对你的理解主动去 B 站、小红书、抖音、YouTube 等来源找内容。 B 站 / 小红书 / 抖音 / YouTube / Web 数据默认留在本机 SQLite 喜欢、不感兴趣、聊天反馈都会改变后续推荐 喜欢这个方向？ 欢迎 Star 支持项目继续适配更多平台 。 普通用户先走这四步；Firefox、Docker 和手动部署等备用路径保留在后面的 安装与部署详情。 1. 安装浏览器插件 ：推荐从 Releases 下载最新 extension-v 的 zip 手动安装（版本最新）；也可从 Chrome 应用商店一键安装（自动更新，但受审核排期影响，版本可能滞后于 Releases）。 2. 部署后端（两种方式，按需选一，都推荐） ： - 🖥️ 下载桌面安装包（最省事） ：到 Releases 下载 macOS .dmg / Windows .exe ，装好双击即用 —— 自带本地 embedding、常驻菜单栏/托盘。当前为 未签名的实验性预发布 ，首次打开需绕过系统拦截，详见 安装与部署详情。 - 🤖 让 AI 助手部署（想改源码 / 深度定制选它） ：把下面整句粘给 Claude Code、Codex CLI、Cursor、Windsurf ��其他 AI 编程助手。 3. 在同一个浏览器登录内容平台 ：至少登录 B 站，需要多源信号时再登录 小红书 / 抖音 / YouTube。 4. 打开桌面端或移动端 Web ：后端启动后访问 http://127.0.0.1:8420/web ；手机可扫插件二维码打开 http:// :8420/m/ 。 名字起源于 B 站（ Bili = Bilibili， Claw = 爪子），项目最早只支持 B 站。从 v0.3.0 起已扩展为通用跨平台 Agent —— 已落地 B 站 / 小红书 / 抖音 / YouTube 初始化信号、抖音 search / hot / feed 内容发现和通用 Web 多类源，持续接入更多内容平台。 推荐系统本质上是一个 中间商 ——平台站在海量内容和海量用户之间做匹配分发。现代推荐系统远比「优化点击
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, bilibili, browser-extension, chrome-extension, content-discovery, cross-platform

---

### 🌟 [flow-next](https://github.com/gmickel/flow-next)
- **项目语言**: Python
- **星标数量**: ⭐ 627
- **核心概述**: 适用于 Claude Code、OpenAI Codex 和 Factory Droid 的规范驱动的 AI 工作流程插件。零深度任务跟踪、工作子代理、Ralph 自治模式、跨模型审查。
- **大概是做什么的**: 规划优先的人工智能工作流程。零外部依赖。 📖 完整文档索引 → · 🌐 flow-next.dev · 👥 团队指南 · 💬 Discord Flow-Next 是一个 AI 代理编排插件。整个生命周期的 26 种代理原生技能：想法 → 规范 → 任务 → 审查 → 交付 → 维护。捆绑任务跟踪、依赖图、每个任务之前重新锚定、多模型审查、衰减感知项目内存、GitHub PR 创建和解决、代理就绪审核。一切都在你的存储库中——没有外部服务，没有全局配置。卸载：删除 .flow/ 。 - 规格第一。每个工作单元都属于一个规范 fn-N 。任务 fn-N.M 继承上下文。 - 新环境工作者。每个任务都在其自己的子代理中运行。任务之间没有令牌流失。 - 跨模型评论。不同的模型（RepoPrompt / Codex / Copilot）控制每个实现。 - R-ID 在移交时冻结。验收标准编号一次，从未重新编号。在 Claude Code、OpenAI Codex（CLI + 桌面）和 Factory Droid 上都是一流的。还可以在 xAI Grok Build 和 Cursor（本地插件）上运行，以及通过社区端口的 OpenCode。 🆕 v1.0+ — 流程
- **有什么用**: 适合用于深度学习、CNN/Conv 算法、PyTorch/TensorFlow 模型训练和实验复现。
- **技术标签**: agentic-workflow, ai-agent, ai-workflow, anthropic, autonomous-agent, claude-code

---

### 🌟 [mateclaw](https://github.com/matevip/mateclaw)
- **项目语言**: Java
- **星标数量**: ⭐ 564
- **核心概述**: 🤖 MateClaw — 您的第二大脑，具有多代理编排、MCP 协议、技能和记忆、梦想和多渠道支持。基于 Spring AI 阿里巴巴构建。
- **大概是做什么的**: 代理工具 · 内置 Spring Boot · 一个 JAR 即可发布 网站] 现场演示] 文档] 中文] 其他个人 AI 代理是为一个人构建的。 MateClaw 是您的 IT 部门真正可以批准的一款。多用户工作区。敏感行为需要审批。完整的审计跟踪。 Spring Boot 执行器健康状况监控。每个通道的错误隔离，因此一个聊天平台的中断不会影响其他平台。您自己��机器上有一个 JAR，零数据出口。下面是真正的特工安全带。在 StateGraph 运行时上进行 ReAct + 计划和执行 — 不是一次性的 RAG 调用。工具、技能、MCP 和 ACP 汇聚在一个注册表中，并与每个员工进行绑定。敏感工具调用会通过您可以实际检查的批准门。当供应商不运行时，多供应商故障转移可以保持循环运行。大多数人工智能工具在其供应商表现不佳时就会消亡。大多数人在标签关闭的那一刻就忘记了你。大多数人都会给你一个聊天框，并将其称为产品。 MateClaw 是整个小部件。一次部署。推理、知识、记忆、工具、渠道——构建在一起，而不是固定在一起。当你的主要模式
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, agent-harness, ai-agent, dingtalk-robot, feishu-bot, llm-wiki

---

## 🕔 2026-06-08 17:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目。本次从 40 个候选项目中筛选出 6 个未推荐过的新项目。

### 🌟 [kite](https://github.com/kite-org/kite)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 2,751
- **核心概述**: 🪁 一款轻量级的现代 Kubernetes 仪表板，将多集群和资源管理、企业级用户治理（OAuth、RBAC 和审核日志）以及 AI 代理统一在一个工作区中。不仅仅是一个工具，而更像是一个平台。
- **大概是做什么的**: Kite - 现代 Kubernetes 仪表板现代 Kubernetes 仪表板实时演示文档 Kite 是一种轻量级的现代 Kubernetes 仪表板，它将实时可观察性、多集群和资源管理、企业级用户治理（OAuth、RBAC 和审核日志）以及 AI 代理统一在一个工作区中。不仅仅是一个工具，而更像是一个平台。 - 具有系统偏好检测的深色/浅色/颜色主题 - 跨所有资源的全局搜索 - 适用于桌面、平板电脑和移动设备的响应式设计 - i18n 支持（英语和中文） 多集群管理 - 在多个 Kubernetes 集群之间切换 - 每个集群独立的 Prometheus 配置 - 从 kubeconfig 自动发现 - 细粒度的集群访问权限 - 全面覆盖：Pod、部署、服务、ConfigMap、Secret、PV、PVC、节点等 - 实时 YAML使用 Monaco 编辑器进行编辑（语法突出显示和验证） - 包含容器、卷、事件和条件的详细视图 - 资源关系（例如，部署 → Pod） - 创建、更新、删除、扩展和重新启动操作 - 自定义资源
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, cloud-native, dashboard, helm-manager, kubernetes, kubernetes-addons

---

### 🌟 [tabularis](https://github.com/TabularisDB/tabularis)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 2,359
- **核心概述**: 面向开发人员的轻量级跨平台数据库客户端。支持 MySQL、PostgreSQL 和 SQLite。可通过插件进行破解。专为速度、安全性和美观而打造。
- **大概是做什么的**: 适用于现代数据库的开源桌面客户端。支持 PostgreSQL、MySQL/MariaDB 和 SQLite，可通过插件进行破解，内置笔记本、AI 和 MCP。提供以下语言版本：英语、意大利语、西班牙语、中文（简体）、法语、德语、日语、俄语 Discord - 加入我们的 Discord 服务器与维护人员交谈、分享反馈并从社区获取帮助。 💡 起源故事：这个项目最初是一个人工智能辅助开发实验，探索智能代理可以在多大程度上加速从头开始构建功能齐全的工具。 -turboSMTP - 专业 SMTP 中继 - 您的电子邮件直接发送到收件箱，永远不会成为垃圾邮件 - Kilo Code - 开源 AI 编码代理 - 使用 500 多个模型更快地构建、发布和迭代 - DigitalOcean - 为开发人员和成长中的团队提供简单、可预测的云基础设施。 - Usero — 反馈变成代码。自动地。 - DevGlobe — 连接您的 IDE，出现在地球上，并向构建者社区展示您的项目。 - 连接管理 - 键盘快捷键 - 可视化查询生成器 - 配置存储 - AI 功能
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, ai-assistant, cross-platform, database-client, database-gui, database-management

---

### 🌟 [AgentsMesh](https://github.com/AgentsMesh/AgentsMesh)
- **项目语言**: Go
- **星标数量**: ⭐ 2,197
- **核心概述**: AI 代理劳动力平台——团队规模超出人员规模。为每个团队成员提供一个人工智能特工小队。
- **大概是做什么的**: 团队规模超出人员规模。人工智能代理劳动力平台。为每个团队成员提供一个人工智能代理小队——分配任务、跟踪进度并让他们自主协作。 X·X（创始人）·AgentsMesh 是人工智能代理劳动力平台——团队规模超出了人员数量。 AgentsMesh 无需在本地计算机上一次运行一个代理，而是可以启动远程 AI 工作站 (AgentPods)，通过通道和 Pod 绑定协调多代理协作，并通过集成任务管理跟踪所有内容 — 所有这些都来自单个 Web 控制台。个人生产力已经达到顶峰。下一个前沿是组织。 AgentsMesh 将人工智能代理从单独的工具转变为协调的劳动力。 BYOK（自带密钥）— 您提供自己的 AI API 密钥。无使用上限。全面成本控制。 - AgentPod — 具有 Web 终端、Git 工作树隔离和实时流的远程 AI 工作站。运行多个并发 Pod。 - 多代理协作——通过通道和 Pod 绑定协调代理。实时可视化协作拓扑。 - 任务管理——Ka
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent-orchestration, agentsmesh, ai-agent, ai-agent-workforce-platform, ai-coding, aider

---

### 🌟 [EvoScientist](https://github.com/EvoScientist/EvoScientist)
- **项目语言**: Python
- **星标数量**: ⭐ 3,430
- **核心概述**: 🔬 与自我进化的人工智能科学家一起利用 Vibe 研究
- **大概是做什么的**: EvoScientist 旨在通过让人工智能科学家能够自主探索、产生见解并迭代改进，来利用氛围研究。它被设计成固执己见，开箱即用，提供了一个活生生的研究系统，随着代理技能、工具集和记忆库的不断发展而不断发展。 EvoScientist 超越了传统的“人在环”系统，采用了“人在环”范式，其中人工智能充当研究伙伴，与人类研究人员共同进化，并将学术品味和科学判断内化。 🏆 奖项和表彰 最佳论文和评审奖 AI 生成的最佳论文 1 篇 DeepResearch Bench II 1 篇 DeepResearch Bench 1 篇 AstaBench 代码和执行 1 篇 AstaBench 数据分析 ⚡ 统一控制，不同界面 🖥️ CLI / TUI / WebUI - 🤖 多代理团队 — 6 个子代理（计划、研究、编码、调试、分析、编写）工作在音乐会中。 - 🧠 自我进化记忆——用户个人资料和观察结果每轮都会自动提炼，并在会话中不断增长。 - 🌐 多提供商 — Anthropic、OpenAI、Google、MiniMax、NVIDIA — 一个配置
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, ai4science, multi-agent-system, vibe-research

---

### 🌟 [awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh)
- **项目语言**: Python
- **星标数量**: ⭐ 2,008
- **核心概述**: A trilingual (繁中 / English / 简中) learning roadmap for agentic AI: from LLM basics to multi-agent systems, with 240+ curated resources and hands-on examples. 中文 AI agent 学习地图。
- **大概是做什么的**: 繁体中文 简体中文 English awesome-agentic-ai-zh 🤖 AI Agent 学习地图 — 从基本 LLM 概念到自己打造多 agent 系统 学习路线图 + 240+ 资源 curation + 简单 illustrative 案例 结构化 8 阶段、从「LLM 是什么、token 怎么算」走到 multi-agent 编排、Computer Use / Browser Use / Sandbox 本 repo 角色定位 ： 学习路线图 + 240+ 资源 curation + 简单 illustrative 案例 ——三件事为核心、帮想学 AI / AI agent 的人从「不知道从哪开始」走到「能设计多 agent 系统」。 学习路线图 把网路散落的高品质专案、教材、必修阅读，按 从零开始、循序渐进 整理成 8 个阶段 （含 Stage 5 + Stage 8 两个共用 hub）+ 2 条学习路线 + 5 条延伸路径 8 stages、2 tracks 资源 curation 每阶段精选 240+ 个 project（含星等、适合谁、教什么、怎么跑），加���中文 AI 生态(DeepSeek / Zhipu / Kimi 等)MCP / Skill 完整 catalog 240+ projects、65 MCP/Skill 简单 illustrative 案例 每阶段附 1-5 个 基础练习 （70-150 行 starter + dual-path Ollama/Anthropic SDK 对照 + mock-based test） 23 个练习 folder 走完整条路线，你会从「 LLM 使用者 」进阶到「 agent 系统建构者 」——能看懂 framework 在做什么、能设计多 agent 协作、能写自己的 MCP server。 📖 关于中英文混用 ：本专案保留 AI Agent 领域常见英文术语（Prompt Engineering / Context Engineering / Harness / MCP / Skills / RAG 等），因为官方文件、paper、GitHub repo 与 API 文件多以英文为主��每个重要概念会提供 中文理解名 + 英文正式术语 + 一句白话定位 ，让读者能先理解概念，再对接英文生态。完整对照见 resources/glossary.md 。 🚀 第一次接触 AI agent / 没写过 code？ 先看 resources/setup-guide.md — 30-45
- **有什么用**: 适合用于深度学习、CNN/Conv 算法、PyTorch/TensorFlow 模型训练和实验复现。
- **技术标签**: agentic-ai, agentic-workflows, ai-agent, ai-agents, awesome-list, chinese-llm

---

### 🌟 [neo](https://github.com/neomjs/neo)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 3,199
- **核心概述**: Neo.mjs 是一个自我进化的软件有机体：一个专业的端到端 AI 工程团队，其跨模型群体通过 Neural Link、Active Hybrid GraphRAG、DreamService 和自我修复循环驻留在实时应用程序中。
- **大概是做什么的**: Neo.mjs 是一个自我进化的软件有机体——一个专业的端到端人工智能工程团队，位于自己的开源存储库中。当业界运行一个人工智能代理并变得糟糕时，Neo.mjs 运行着来自竞争对手实验室（Claude、Gemini、GPT）的一群思想，这些实验室通过共享内存和主动混合 GraphRAG 读取彼此的推理，捕捉到任何单一模型本身无法看到的东西。通过 Neural Link 拥有接口，群体不仅可以读取代码，还可以读取代码。它存在于实时应用程序中——检查语义运行时状态、实时改变 UI 和数据、将会话 UI 从聊天面板转变为在应用程序内协作的代理。它自主运行整个工程生命周期：构思、构建和交叉审查生产多线程引擎，运行 DreamService 周期以重新引导优先级，并关闭自我修复循环，其中运行时故障、代码缺陷、代理错误和架构摩擦将成为下一个周期的修复、票证、技能、内存和新图形拓扑。 2026 年 5 月，规范仓库记录了 706 个合并 PR
- **有什么用**: 适合用于深度学习、CNN/Conv 算法、PyTorch/TensorFlow 模型训练和实验复现。
- **技术标签**: agent-memory, ai, ai-agent, ai-memory, context-engineering, frontend

---

## 🕔 2026-06-08 12:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目。本次从 40 个候选项目中筛选出 6 个未推荐过的新项目。

### 🌟 [learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 8,006
- **核心概述**: 线束工程初学者教程，从0到1
- **大概是做什么的**: 学习利用工程基于项目的课程，介绍如何构建使 AI 编码代理可靠工作的环境、状态管理、验证和控制机制。 🌍 本课程提供 14 种语言版本：英语、简体中文、繁体中文、日本语、한국어、西班牙语、法语、Русский、德语、​​巴里语、Tiếng Việt、O´zbekcha、Türkçe、葡萄牙语（巴西）。从上面的徽章中选择您的语言。 Learn Harness Engineering 是一门致力于人工智能编码代理工程的课程。我们深入研究并综合了行业内最先进的线束工程理论��实践。我们的核心参考资料包括： - OpenAI：线束工程：在代理优先的世界中利用 Codex - Anthropic：长期运行代理的有效线束 - Anthropic：用于长期运行的应用程序开发的线束设计 - 很棒的线束工程 快速入门？ Skills/harness-creator/ Skill 可以帮助您在几分钟内为自己的项目构建生产级的工具（AGENTS.md、功能列表、init.sh、验证工作流程）。 - 线束工程的实际含义 - 快速入门：Im
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, agentic, agentic-ai, ai, ai-agent, harness

---

### 🌟 [mini-swe-agent](https://github.com/SWE-agent/mini-swe-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 5,021
- **核心概述**: 100 行 AI 代理可以解决 GitHub 问题或在命令行中为您提供帮助。极其简单，没有庞大的配置，没有巨大的单一存储库，但在 SWE-bench 验证上得分 >74%！
- **大概是做什么的**: 最小的 AI 软件工程代理📣 在我们新的且极具挑战性的基准 ProgramBench 上运行 mini-swe-agent 📣 有关构建最小 AI 代理的新教程📣 Gemini 3 Pro 在经过 mini-swe-agent 验证的 SWE 基准上达到 74％！ 📣 新博文：在 GPT-5 和 Sonnet 4 之间随机切换可提高性能这是 mini-swe-agent v2 。阅读迁移指南。对于以前的版本，请查看 v1 分支。 2024 年，我们构建了 SWE-bench 和 SWE-agent，并帮助启动了编码代理革命。现在我们要问：如果我们的代理简单 100 倍，并且仍然能正常工作，会怎样？ - 广泛采用：被 Meta、NVIDIA、Essential AI、IBM、Nebius、Anyscale、普林斯顿大学、斯坦福大学等使用。 - 最小：代理类只需大约 100 行 Python（环境、模型和运行脚本多一点）——没有花哨的依赖项！ - 高性能：在 SWE-bench 验证基准上得分为 74%；启动速度比 Claude Code 快得多 - 可部署：支持本地环境、docker/podman、singularity/apptainer、bublewrap、contree 等 - Comp
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, agentic-ai, agentic-ai-cli, ai, ai-agent, textual

---

### 🌟 [ChatLab](https://github.com/ChatLab/ChatLab)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 6,635
- **核心概述**: Local-first chat history analyzer with AI. | 本地优先的 AI 聊天记录分析工具
- **大概是做什么的**: 你的聊天记录终于是你的了。官方网站·文档·快速入门·路线图·发布 ChatLab 是一款开源桌面应用程序，用于了解您的社交对话。它将灵活的 SQL 引擎与 AI 代理相结合，因此您可以在自己的计算机上探索模式、提出更好的问题并从聊天数据中提取见解。目前支持：WhatsApp、LINE、微信、QQ、Discord、Instagram 和 Telegram。接下来：iMessage、Messenger 和 KakaoTalk。新安装？从这里开始：入门 - 🚀 专为大型历史记录而构建：流解析和多工作进程处理使导入和分析保持响应，即使在百万条消息规模下也是如此。 - 🔒 默认私有：您的聊天数据和设置保留在本地。没有强制将原始对话上传到云端。 - 🤖 可以实际操作数据的人工智能：代理 + 函数调用工作流程（24+ 工具）可以搜索、总结和分析带有上下文的聊天记录。 - 📊 富有洞察力的视觉视图：在一处查看趋势、时间模式、互动频率、排名等。 - 🧩 跨平台标准化：不同的导出格式
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, ai-agents, chat-analyzer, chat-history, data-analysis, data-visualization

---

### 🌟 [clawpanel](https://github.com/qingchencloud/clawpanel)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 2,828
- **核心概述**: 🦞 OpenClaw & Hermes Agent 多引擎 AI 管理面板 — 内置 AI 助手（工具调用 + 图片识别 + 多模态），一键安装 | Tauri v2 跨平台桌面应用 | 11 种语言
- **大概是做什么的**: 内置 AI 助手的 OpenClaw & Hermes Agent 管理面板 — 多引擎 AI 框架管理 🇨🇳 中文 🇺🇸 English 🇹🇼 繁体中文 🇯🇵 日本语 🇰🇷 한국어 🇻🇳 Tiếng Việt 🇪🇸 Español 🇧🇷 Português 🇷🇺 Русский 🇫🇷 Français 🇩🇪 Deutsch ClawPanel 是支持多 AI Agent 框架的可视化管理面板，目前支持 OpenClaw 和 Hermes Agent 双引擎。 内置智能 AI 助手 ，帮你一键安装、自动诊断配置、排查问题、修复错误。 8 大工具 + 4 种模式 + 交互式问答，从新手到老手都能轻松管理。 🌐 官网 : claw.qt.cool 📦 下载 : 官网下载中心 备用: GitHub Releases ✨ Hermes Agent 第二引擎：会话、记忆、人格与工具全景管理 把 Agent 从一次性聊天���口，升级为可持续运营的智能体系统。 查看 Hermes Agent 图文指南 → Notes / User Profile / Soul 三份 Markdown 沉淀上下文。 追踪对话过程、上下文质量和真实运行表现。 定位工具调用、运行步骤和 Agent 执行链路。 - 长期记忆可视化 — 在线编辑 Notes、User Profile、Soul，让事实、偏好与人格持续沉淀。 - 会话可运营 — 统一查看对话、消息流、运行状态和工具调用细节。 - 人格可维护 — 把 Agent 的表达风格、价值观和偏好固化为可编辑资产。 - 渠道可扩展 — 面向 QQ、Telegram、Discord 等外部​​渠道集中管理连接能力。 内部技术测试平台，面向部分用户开放体验。签到领额度，邀请得更多。 - 签到领测试额度 — 每日签到 + 邀请好友，持续获取测试额度 - 兼容 OpenAI 接口 — 无缝对接 OpenClaw，即开即用 - 资源策略 — 限速 + 请求上限，高峰期可能排队 - 模型可用性 — 模型/接口以实际页面为准，可能灰度或版本切换 配合 OpenClaw 使用：在 gpt.qt.cool 注册并签到领取测试额度，获取 API Key 后，初始化 OpenClaw 时选择 OpenAI Compatible 提供商，填入地址和 Key 即可使用。 ⚠️ 合规与责任边界 ：本平台仅提供技术测试，禁止用于违法违规、绕过安全机制等用途。违规将限制访问并保留处置权。妥善保管 API Key，勿在截图/日志/代码库中泄露
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: admin-panel, ai-agent, ai-assistant, ai-chat, ai-tools, chatgpt

---

### 🌟 [ArcReel](https://github.com/ArcReel/ArcReel)
- **项目语言**: Python
- **星标数量**: ⭐ 2,507
- **核心概述**: AI Agent 驱动的开源视频生成工作台 — 小说→角色/场景/道具设计→剧本→分镜图→视频，跨镜头角色与场景一致 | Open-source AI video workspace powered by AI Agents, Nano Banana 2 & Veo 3.1 / Grok / Seedance / OpenAI
- **大概是做什么的**: 开源 AI 视频生成工作台 — 从小说到短视频，全程 AI Agent 驱动 基于 Claude Agent SDK ，编排 Skill + 聚焦 Subagent 多智能体协作，自动完成从剧本创作到视频合成的完整流水线 Gemini 、 火山方舟 、 Grok 、 OpenAI 、 Vidu 及自定义供应商，角色设计图确保角色一致性，线索追踪保证道具/场景跨镜连贯 Veo 3.1 、 Seedance 、 Grok 、 Sora 2 、 Vidu Q3 及自定义供应商，全局/项目级可切换 RPM 速率限制 + Image/Video 独立并发通道，lease-based 调度，支持断点续传 Web UI 管理项目、预览素材、版本回滚、实时 SSE 任务追踪，内置 AI 助手 ⚠️ 操作系统 ：推荐 Linux / macOS / WSL2 / Docker。Windows 原生可运行项目创建与基础流程，但 Bash 沙箱、bwrap 等 POSIX-only 隔离机制会自动降级，生产部署仍建议 WSL2 或 Docker Desktop 首次启动后，使用默认账号登录（用户名 admin ，密码在 .env 中通过 AUTH PASSWORD 设置；未设置则首次启动时自动生成并回写到 .env ），前往 设置页 （ /settings ）完成配置： 1. ArcReel 智能体 — 配置驱动 AI 助手的供应商凭据，支持 Anthropic 官方及多种兼容供应商，自定义 Base URL 与模型 2. AI 生图/生视频/生文本 — 配置至少一个供应商的 API Key（Gemini / 火山方舟 / Grok / OpenAI / Vidu），或添加自定义供应商 - 完整生产流水线 — 小说 → 剧本 → 角色设计 �� 分镜图片 → 视频片段 → 成片，一键编排 - 多智能体架构 — 编排 Skill 检测项目状态并自动调度聚焦 Subagent，每个 Subagent 独立完成一项任务后返回摘要 - 沙箱化 Agent 运行环境 — Agent 工具调用默认运行在 bwrap 沙箱内，文件系统、网络、子进程能力按白名单授权；Linux/macOS 自动启用，Windows 原生不支持沙箱时自动降级 - 多供应商支持 — 图片/视频/文本生成均支持 Gemini、火山方舟、Grok、OpenAI、Vidu 五大预置供应商，全局/项目级可切换；AI 助手凭据同样支持多供应商配置 - 自定义供应商 — 接入任何 OpenAI 兼容 / Google 兼容 API（
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, ai-video-generator, claude-agent-sdk, docker, gemini, grok

---

### 🌟 [thClaws](https://github.com/thClaws/thClaws)
- **项目语言**: Rust
- **星标数量**: ⭐ 1,082
- **核心概述**: 原生 Rust 中的开源 AI 代理工具 — 来自一个二进制文件的 GUI、CLI、headless 和 webapp。多提供商、MCP、技能、插件、代理团队。
- **大概是做什么的**: 开源代理工具位于您的终端和桌面上。原生 Rust AI 代理工作区，可在您自己的机器上运行，进行编码、自动化、记忆和协调。一个二进制。主权的设计。由一个公开黑客的小团队构建。网站 · 下载 · 手册 · 讨论 · 贡献 ✨ v0.32 中的新增功能 — 在 thClaws 内运行 Claude 代码 2026 年 6 月 15 日，Anthropic 将 Claude Agent SDK 和 claude -p 的订阅使用从您计划的正常限制中解绑到单独的每月上限信用额度 — 20 美元（专业版）、100 美元（最多 5 次）、200 美元（最多 20 次），计量为标准 API 列表费率，无展期，无池化。一旦信用耗尽，SDK 调用就会失败，除非您选择按需付费溢出。终端中的交互式 Claude 代码、Claude.ai 聊天和 Cowork 都继续从您的正常订阅中提取 — 只有无头 SDK / claude -p 路径会转移到积分上。 thClaws 的人类代理提供商通过具有订阅身份验证的 Agent SDK 进行路由，因此它在 6 月 15 日之后完全符合新的上限信用额。本机提供商（直接 API 密钥）不受影响 - 它一直是
- **有什么用**: 适合用于深度学习、CNN/Conv 算法、PyTorch/TensorFlow 模型训练和实验复现。
- **技术标签**: agent-harness, agent-teams, ai-agent, anthropic, claude-code, cli

---

## 🕔 2026-06-08 07:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目。本次从 40 个候选项目中筛选出 6 个未推荐过的新项目。

### 🌟 [OpenSandbox](https://github.com/opensandbox-group/OpenSandbox)
- **项目语言**: Python
- **星标数量**: ⭐ 11,399
- **核心概述**: 适用于 AI 代理的安全、快速且可扩展的沙箱运行时。
- **大概是做什么的**: 文档中文文档 OpenSandbox是一个面向AI应用的通用沙箱平台，为编码Agent、GUI Agent、Agent评估、AI代码执行、RL训练等场景提供多语言SDK、统一沙箱API和Docker/Kubernetes运行时。 OpenSandbox 现已列入 CNCF Landscape 中。 - 多语言 SDK ：提供 Python、Java/Kotlin、JavaScript/TypeScript、C /.NET、Go 等沙箱 SDK。 - 沙箱协议：定义沙箱生命周期管理 API 和沙箱执行 API，以便您可以扩展自定义沙箱运行时。 - Sandbox运行时：内置生命周期管理，支持Docker和高性能Kubernetes运行时，支持本地运行和大规模分布式调度。 - 沙盒环境：内置命令、文件系统和代码解释器实现。示例包括编码代理（例如 Claude Code）、浏览器自动化（Chrome、Playwright）和桌面环境（VNC、VS Code）。 - 网络策略：具有多种路由策略以及每个沙箱出口控制的统一入口网关。 - 强隔离：支持
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-infra, kubernetes, sandbox

---

### 🌟 [inkos](https://github.com/Narcooo/inkos)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 7,010
- **核心概述**: 自主小说写作人工智能代理——代理通过人工审查门来撰写、审核和修改小说
- **大概是做什么的**: Autonomous Novel Writing AI Agent 自动化小说写作 AI Agent English 中文 日本语 AI Agent 自主写小说——写、审、改，全程接管。覆盖玄幻、仙侠、都市、科幻等多种风格，支持续写、番外、同人、仿写等创作形式。人工审核门控确保你始终掌控全局。已发布为 OpenClaw skill。 v1.4.0 短篇写作与 Studio Chat 协作更新 — Studio Chat 和 CLI 现在可以生成独立短篇、简介卖点和封面提示词 / 封面图；普通聊天支持持久化 session，生成物可直接预览和编辑；Studio 模型配置内置 kkaiapi ，方便接入全球主流模型聚合服务。 InkOS Studio 2.0 正式发布！ — 直接运行 inkos 启动本地 Web 工作台。书籍管理、章节审阅编辑、实时写作进度、市场雷达、数据分析、AI 检测、文风分析、题材管理、守护进程控制、真相文件编辑——CLI 能做的，Studio 全部可视化。 InkOS TUI 正式发布！ — 运行 inkos tui 进入全屏交互仪表盘。对话式创作、自然语言操作书籍、slash 命令补全、主题动效——TUI、Studio、OpenClaw 共享同一套交互内核。 InkOS Short — Studio 对话和 CLI 现在可以直接产出独立短篇：完整正文、大纲记录、审稿记录、简介卖点、封面提示词，并在配置封面服务后生成封面图。 短篇开篇示例：宋词三个多月没坐过这辆车了。蓝牙自动连上她的手机，屏幕弹出“子账号登录中”。她点进常用地址统计：新城花园 187 次，妇幼医院 38 次，月子中心 9 次。后备箱传来闷响，徐晋安放完东西坐进来，冲她笑笑：“今晚加班，你自己打车回去？”她抬头看他，也笑了。 Native English novel writing now supported！ Set --lang en to write in English. See English README for details. 当前更新相对频繁，后续会持续新增功能与优化写作效果。 欢迎加群反馈问题、提出需求，也欢迎关注项目动态 — 我们的目标是做最强的基于小说的内容生态创作 AI Agent。 InkOS 已发布为 OpenClaw Skill，可被任何兼容 Agent（Claude Code、OpenClaw 等）直接调用： 通过 npm 安装或克隆本项目时， skills/SKILL.md 已包含在内，🦞 可直接读取——无需额外从 ClawHub 安装。
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, ai, ai-agent, ai-novel, ai-writing, chinese-novel

---

### 🌟 [presenton](https://github.com/presenton/presenton)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 8,016
- **核心概述**: 开源 AI 演示生成器和 API（Gamma、Beautiful AI、Decktopus Alternative）
- **大概是做什么的**: 快速入门 · 开源 AI 演示生成器和 API（Gamma、Canva、Beautiful AI、Decktopus、Presentations AI Alternative）了解 Presenton 的功能，从 AI 支持的演示生成到编辑、导出和灵活的模型提供程序。 ▶ 观看 Presenton 实际操作 无 SaaS 锁定 · 无强制订阅 · 完全控制模型和数据 Presenton 有何不同？ - 通过 Docker 包在 Web 中使用完全自托管 - 或下载桌面应用程序（Mac、Windows 和 Linux） - 可与 OpenAI、Gemini、Vertex AI、Azure OpenAI、Amazon Bedrock、Fireworks、Together AI、Anthropic、LM Studio、Ollama 或自定义模型配合使用 - 附带 AI 演示生成 API - 完全开源 (Apache 2.0) - 使用您自己的设计/模板 - 完全可编辑的 PPTX 导出 💻 Presenton 桌面创建使用您自己的模型提供商 (BYOK) 进行人工智能驱动的演示，或在您自己的计算机上本地运行所有内容，以实现完全控制和数据隐私。 Apple Silicon / Intel 部署到云提供商 Presenton 让您可以完全控制 AI 演示工作流程。选择您的型号，c
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, ai-presentation, api, gamma, powerpoint-automation, powerpoint-free

---

### 🌟 [E2B](https://github.com/e2b-dev/E2B)
- **项目语言**: Python
- **星标数量**: ⭐ 12,511
- **核心概述**: 开源、安全的环境，具有适用于企业级代理的实际工具。
- **大概是做什么的**: E2B 是一种开源基础设施，可让您在云中安全隔离的沙箱中运行 AI 生成的代码。要启动和控制沙箱，请使用我们的 JavaScript SDK 或 Python SDK。运行您的第一个 Sandbox JavaScript / TypeScript 2. 获取您的 E2B API 密钥 1. 在此处注册 E2B。 2. 在此处获取您的 API 密钥。 3. 使用 API 密钥设置环境变量 3. 启动沙箱并运行命令 JavaScript / TypeScript 4. 使用代码解释器执行代码 如果您需要使用 runCode() / run code() 执行代码，请安装代码解释器 SDK：访问 E2B 文档。访问我们的食谱，从不同法学硕士和人工智能框架的示例中获得灵感。阅读自托管指南，了解如何自行设置 E2B 基础设施。基础设施是使用 Terraform 部署的。支持的云提供商： - 🟢 Google Cloud (GCP) - [ ] 通用 Linux 机器
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, ai, ai-agent, ai-agents, code-interpreter, copilot

---

### 🌟 [OpenClawChineseTranslation](https://github.com/1186258278/OpenClawChineseTranslation)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 3,802
- **核心概述**: 🦞 OpenClaw (Clawdbot/Moltbot) 汉化版 - 开源个人 AI 助手中文版 | Claude/ChatGPT LLM 接入 | WhatsApp/Telegram/Discord 多平台 | 每小时自动同步 | CLI + Dashboard 全中文 | 全流程搭建教程，以及排错指南！
- **大概是做什么的**: 每小时自动同步 OpenClaw 官方更新，汉化版延迟 🦀 ClawPanel — 内置 AI 助手的可视化管理面板 📱 ClawApp — 手机端聊天客户端 查看生态工具 → - 安装指南 — 前提条件 · 安装 · 初始化配置 · 验证运行 · 进阶配置 · 模型配置 · 守护进程 - Docker 部署指南 — 一键部署 · 本地启动 · 远程部署 · Token 认证 · Nginx 反代 · Docker Compose · 错误排查 - 常见问题 — 安装问题 · 启动问题 · Dashboard 连不上 · 内网/远程访问 · 模型和对话 · 其他问题 - 贡献指南 — 环境准备 · 项目结构 · 添加新翻译 · 提交 PR - 翻译规范 — 术语表 · 翻译原则 · 风格指南 OpenClaw 是 GitHub 195,000+ Stars 的 开源个人 AI 助手平台 。它运行在你的电脑上，通过 WhatsApp、Telegram、Discord 等聊天应用与你的 AI 助手交互，帮你处理邮件、日历、文件等日常事务。 本项目 = OpenClaw + 全中文界面 ，CLI 命令行和 Dashboard 网页控制台均已深度汉化。 内部公益平台，免费使用主流 AI 模型！ 签到领额度，邀请得更多，持续免费用 AI！ - � 签到领免费额度 — 每日签到 + 邀请好友，持续获取免费使用额度 - 💰 不满意可退 — 用着不爽随时退款，零风险体验 - ⚡ 兼容 OpenAI 接口 — 无缝对接 OpenClaw，即开即用 - 🔒 内部公益项目 — 长期维护，安全稳定 在 gpt.qt.cool 注册并签到���取免费额度，获取 API Key 后，初始化 OpenClaw 时选择 OpenAI Compatible 提供商，填入地址和 Key 即可使用。 💡 小贴士 ：每日签到 + 邀请好友即可持续获取免费额度，搭配 OpenClaw 等于拥有一个免费私人 AI 助手！ 胜算云 - 国内 AI API 聚合平台，新用户注册送额度，充值尊享 7 折优惠！ 内置 AI 助手 的 OpenClaw 可视化管理面板 🤖 AI 助手 — 8 大工具 + 4 种模式，自动诊断配置 🖼️ 图片识别 — 粘贴截图，AI 一眼看懂 ⚡ 一键安装 — 自动检测环境，无需终端 🎛️ 可视化管理 — 模型、Gateway、Agent 用手机浏览器和 OpenClaw AI 智能体聊天 💬 流式聊天 — WebSocket 实时对话 📷 图片收发 — 拍照上传，A
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, ai-assistant, chatbot, chinese, claude-ai, clawd

---

### 🌟 [agent-deck](https://github.com/asheshgoplani/agent-deck)
- **项目语言**: Go
- **星标数量**: ⭐ 2,653
- **核心概述**: AI 编码代理的终端会话管理器。适用于 Claude、Gemini、OpenCode、Codex 等的一个 TUI。
- **大概是做什么的**: 您的人工智能代理指挥中心功能。指挥。安装 。快速启动。文档。不和谐。常见问题解答 向 AI 询问 Agent Deck 选项 1：Claude Code 技能（推荐 Claude Code 用户）然后问：“如何设置 MCP 池化？”选项 2：OpenCode（内置 Claude 技能兼容性） OpenCode 会自动从 /.claude/skills/ 发现技能。选项 3：任何 LLM（ChatGPT、Claude、Gemini 等） https://github.com/user-attachments/assets/e4f55917-435c-45ba-92cc-89737d0d1401 快速入门：编排一组 AI 代理 从零到一个 Telegram 机器人需要五分钟，该机器人会监视您正在运行的每个 Claude 会话。就是这样。从现在开始，您运行的所有其他代理平台会话都由一个“指挥”会话监督，该会话回答常规问题，将有趣的问题升级到您的手机，并且永远不会让等待的工作人员腐烂。接下来要阅读的两个简短指南： - docs/CONDUCTOR-SETUP.md — 五分钟演练、Telegram/Slack/Discord 接线、陷阱（为什么插件会全局自动禁用、通道拓扑、多导体模式）。 - docs/WATCHER-SETUP.md — 添加“门铃”，以便
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, ai-agents, ai-coding-assistant, aider, bubble-tea, claude-code

---

## 🕔 2026-06-08 02:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目。本次从 40 个候选项目中筛选出 6 个未推荐过的新项目。

### 🌟 [GenericAgent](https://github.com/lsdefine/GenericAgent)
- **项目语言**: Python
- **星标数量**: ⭐ 12,662
- **核心概述**: 自进化代理：从 3.3K 行种子中生长技能树，以减少 6 倍的代币消耗实现完整的系统控制
- **大概是做什么的**: 一个最小的、自我进化的自主代理框架 3K 行种子代码 · 9 个原子工具 · 100 行代理循环 📌 官方频道 — 此 GitHub 存储库是 GenericAgent 的唯一官方来源。我们与任何使用 GenericAgent 名称的第三方网站没有任何隶属关系。 GenericAgent 是一个最小的、自我进化的自主代理框架。其核心只有3K行代码。通过 9 个原子工具 + 100 行代理循环，它授予任何 LLM 对本地计算机的系统级控制 - 涵盖浏览器、终端、文件系统、键盘/鼠标输入、屏幕视觉和移动设备 (ADB)。设计理念——不要预先加载技能，而是不断发展它们。 GenericAgent 每次解决新任务时，都会自动将执行路径具体化为可重用的 Skill 。使用时间越长，积累的技能就越多——形成完全由 3K 行种子代码生长的个人技能树。 🤖 自引导证明——这个存储库中的所有内容，从安装 Git 和运行 git init 到每条提交消息，都是由 GenericAgent 自主完成的。作者从未打开过终端
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, automation, autonomous-agent, browser-automation, claude, computer-control

---

### 🌟 [oh-my-pi](https://github.com/can1357/oh-my-pi)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 11,104
- **核心概述**: ⌥ 终端的 AI 编码代理 — 哈希锚定编辑、优化工具工具、LSP、Python、浏览器、子代理等
- **大概是做什么的**: 连接 IDE 的编码代理。附带的功能最强大的代理表面。根据实际使用情况不断调整 - 完全开箱即用，一路向下打开。 40 多个提供商 · 32 个内置工具 · 13 个 lsp 操作 · 27 个 DAP 操作 · 27k 行 Rust 核心。 Windows (PowerShell) 固定版本 (mise) macOS · Linux · Windows · Bun ≥ 1.3.14 omp 从实时命令/标志元数据中为 bash 、 zsh 和 Fish 生成自己的完成脚本，因此它们永远不会偏离实际的 CLI。子命令、标志和枚举值静态完成；模型名称（ --model 、 --smol 、 --slow 、 --plan ）根据捆绑的模型目录进行解析， --resume 根据磁盘会话进行解析。每一个工具，benchmaxxed。第一次尝试就完成的编辑。读取总结文件而不是转储其内容。立即返回的搜索。选择任何模型 - omp 都会做对的。模型指标是什么 ---------------- ------------------------ --------------------------------------------------------------------- Grok Code Fast 1 6.7% → 68.3% 当编辑格式停止吞噬模型时，提升十倍。双子座3
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, ai-coding-agent, anthropic, bun, claude, cli

---

### 🌟 [evolver](https://github.com/EvoMap/evolver)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 8,258
- **核心概述**: 用于 AI 代理的 GEP 驱动的自我进化引擎。基因、胶囊和事件的可审计进化。 |进化地图.ai
- **大概是做什么的**: evomap.ai 文档 中文 / 中文文档 日语 / 日本语ドキュメント 韩语 / 한국어 문서 GitHub 发布通知 — 迈向源码可用 自 2026 年 2 月 1 日首次发布以来，Evolver 已完全开源（最初为 MIT，自 GPL-3.0 或更高版本以来） 2026-04-09）。 2026 年 3 月，同一领域的另一个项目发布了一个具有惊人相似的内存/技能/进化资产设计的系统，但没有任何归因于 Evolver。完整分析：Hermes Agent Self-Evolution vs. Evolver：详细的相似性分析。为了保护工作的完整性并���续朝这个方向投资，未来的 Evolver 版本将从完全开源过渡到源代码可用。我们对用户的承诺不变：我们将继续提供业界最好的智能体自我进化能力——更快的迭代、更深入的GEP集成、更强的记忆和技能系统。所有已发布的 MIT 和 GPL-3.0 版本仍可根据其原始条款免费使用。您仍然可以 npm install @evomap/evolver 或克隆此存储库；您当前的工作流程中没有任何内容会中断。问题或疑虑：开放
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: a2a, agent-evolution, agent-framework, agent-protocol, ai-agent, auditable-ai

---

### 🌟 [hermes-web-ui](https://github.com/EKKOLearnAI/hermes-web-ui)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 7,509
- **核心概述**: Hermes Agent 的 Web 仪表板 — 多平台 AI 聊天、会话管理、计划作业、使用情况分析
- **大概是做什么的**: 适用于 Hermes Agent 的全功能桌面应用程序和 Web 仪表板。管理 AI 聊天会话、监控使用情况和成本、配置平台渠道、安排 cron 作业、浏览技能——所有这些都来自一个干净、响应灵敏的 Web 界面。 npm install -g hermes-web-ui && hermes-web-ui start - 通过 Socket.IO /chat-run 进行实时聊天流传输；聊天运行通过 Hermes 代理桥执行 - 多会话管理 — 创建、重命名、删除、在会话之间切换 - 自建会话数据库 — 用于 Web UI 会话的本地 SQLite 存储； Hermes state.db 仍然是 Hermes 历史 API 的只读源 - 使用可折叠手风琴按源（Telegram、Discord、Slack 等）进行会话分组 - 活动会话指示器 - 实时会话通过旋转图标固定在顶部 - 按最新消息时间排序的会话 - 带语法突出显示和代码复制的 Markdown 渲染 - 工具调用详细信息扩展（参数/结果） - 配置文件范围内的文件上传 - 文件下载支持 - 通过解析路径下载上传的文件和代理生成的文件本地、Docker、SSH 和 Singularity 后端 - 会话搜索
- **有什么用**: 适合用于深度学习、CNN/Conv 算法、PyTorch/TensorFlow 模型训练和实验复现。
- **技术标签**: agent, ai-agent, chat-ui, dashboard, hermes, hermes-agent

---

### 🌟 [Vibe-Trading](https://github.com/HKUDS/Vibe-Trading)
- **项目语言**: Python
- **星标数量**: ⭐ 11,140
- **核心概述**: “Vibe-Trading：您的个人交易代理”
- **大概是做什么的**: English 中文 日本語 한국어 العربية Vibe-Trading: Your Personal Trading Agent One Command to Empower Your Agent with Comprehensive Trading Capabilities Website  ·  Docs  ·  News  ·  Features  ·  Shadow Account  ·  Demo  ·  Quick Start  ·  Examples  ·  API / MCP  ·  Roadmap  ·  - 2026-06-06 ⚖️ Alpha 比较 — 跨 CLI、Web UI、REST 和代理进行面对面的比较：新的 alpha 比较将精心挑选的 Alpha Zoo alpha 候选名单在某个宇宙和周期上相互比较，然后根据 IC 平均值/标准差、IR、IC 阳性比率或样本数对它们进行排名 — 每个都与领先者有差距。与全动物园工作台不同，它仅评估您指定的 alpha（一个新的运行工作��（仅=…）子集过滤器），因此比较三个 alpha 不再在其动物园中得分全部 191。一个共享核心为每个表面提供动力：vibe-trading alpha 比较... --sort ir (CLI)，Alpha Zoo Web UI 中的比较视图（勾选目录中的 alpha → 一键与流式 ra 进行比较
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agent, algorithmic-trading, backtesting, fintech, llm, mcp

---

### 🌟 [ralph-claude-code](https://github.com/frankbria/ralph-claude-code)
- **项目语言**: Shell
- **星标数量**: ⭐ 9,270
- **核心概述**: 具有智能退出检测功能的 Claude Code 自主 AI 开发循环
- **大概是做什么的**: Ralph for Claude Code 具有智能退出检测和速率限制的自主 AI 开发循环 Ralph 是 Geoffrey Huntley 的 Claude Code 技术的实现，该技术实现了以 Ralph Wiggum 命名的连续自主开发周期。它支持连续的自主开发周期，其中 Claude Code 迭代地改进您的项目直至完成，并具有内置的保护措施来防止无限循环和 API 过度使用。安装一次，随处使用 - Ralph 成为任何目录中可用的全局命令。版本：v0.11.5 - 主动开发核心功能：工作和测试测试覆盖率：784 次测试，100% 通过率 - 具有智能退出检测功能的自主开发循环 - 双条件退出门：需要完��指示器和显式退出信号 - 每小时重置速率限制（100 次调用/小时，可配置） - 具有高级错误检测功能的断路器（防止失控循环） - 具有语义理解和两级错误过滤功能的响应分析器- JSON 输出格式支持，自动回退到文本解析 -
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, ai-development, ai-development-tools, claude-code

---

## 🕔 2026-06-07 21:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 377,427
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows。视窗
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 220,351
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 209,791
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch Español 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ / Idioma English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch Español The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,431
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: 从真正的螃蟹驱动的安全带开始 github.com/code-yeongyu/lazycodex github.com/Yeachan-Heo/gajae-code ultraworkers discord Claw Code 并不是这里的严肃生产项目。这个储存库更接近博物馆展览，而不是产品展示，这是一种甲壳类动物运行的文物，由有爪的加贾保持生命，由特工清扫和标记，并根据上面的安全带自动维护。正如项目理念中已经描述的，这并不意味着像普通产品存储库那样需要手动操作。这是一个由代理管理的展览：线束计划、执行、验证、标记和保存文物，而螃蟹则保持水箱运行。如果您想实际运行工作，请从 LazyCodex 或 Gajae-Code 开始。如果你想检查爪码时刻的奇怪小化石，请继续下面的内容。有关这一理念背后的更长的公开解释，请参阅此处。 ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，以及该存储库当前的真实来源
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 185,833
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于模型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨平��
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 175,398
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-06-07 16:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 377,401
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows。视窗
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 220,239
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 209,626
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch Español 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ / Idioma English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch Español The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,423
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: 从真正的螃蟹驱动的安全带开始 github.com/code-yeongyu/lazycodex github.com/Yeachan-Heo/gajae-code ultraworkers discord Claw Code 并不是这里的严肃生产项目。这个储存库更接近博物馆展览，而不是产品展示，这是一种甲壳类动物运行的文物，由有爪的加贾保持生命，由特工清扫和标记，并根据上面的安全带自动维护。正如项目理念中已经描述的，这并不意味着像普通产品存储库那样需要手动操作。这是一个由代理管理的展览：线束计划、执行、验证、标记和保存文物，而螃蟹则保持水箱运行。如果您想实际运行工作，请从 LazyCodex 或 Gajae-Code 开始。如果你想检查爪码时刻的奇怪小化石，请继续下面的内容。有关这一理念背后的更长的公开解释，请参阅此处。 ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，以及该存储库当前的真实来源
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 185,560
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于模型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨平��
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 175,342
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-06-07 11:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 377,358
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows。视窗
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 220,054
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 209,484
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch Español 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ / Idioma English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch Español The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,418
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: 从真正的螃蟹驱动的安全带开始 github.com/code-yeongyu/lazycodex github.com/Yeachan-Heo/gajae-code ultraworkers discord Claw Code 并不是这里的严肃生产项目。这个储存库更接近博物馆展览，而不是产品展示，这是一种甲壳类动物运行的文物，由有爪的加贾保持生命，由特工清扫和标记，并根据上面的安全带自动维护。正如项目理念中已经描述的，这并不意味着像普通产品存储库那样需要手动操作。这是一个由代理管理的展览：线束计划、执行、验证、标记和保存文物，而螃蟹则保持水箱运行。如果您想实际运行工作，请从 LazyCodex 或 Gajae-Code 开始。如果你想检查爪码时刻的奇怪小化石，请继续下面的内容。有关这一理念背后的更长的公开解释，请参阅此处。 ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，以及该存储库当前的真实来源
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 185,276
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于模型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨平��
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 175,266
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-06-07 06:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 377,342
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows。视窗
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 219,963
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 209,401
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch Español 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ / Idioma English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch Español The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,412
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: 从真正的螃蟹驱动的安全带开始 github.com/code-yeongyu/lazycodex github.com/Yeachan-Heo/gajae-code ultraworkers discord Claw Code 并不是这里的严肃生产项目。这个储存库更接近博物馆展览，而不是产品展示，这是一种甲壳类动物运行的文物，由有爪的加贾保持生命，由特工清扫和标记，并根据上面的安全带自动维护。正如项目理念中已经描述的，这并不意味着像普通产品存储库那样需要手动操作。这是一个由代理管理的展览：线束计划、执行、验证、标记和保存文物，而螃蟹则保持水箱运行。如果您想实际运行工作，请从 LazyCodex 或 Gajae-Code 开始。如果你想检查爪码时刻的奇怪小化石，请继续下面的内容。有关这一理念背后的更长的公开解释，请参阅此处。 ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，以及该存储库当前的真实来源
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 185,151
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于模型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨平��
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 175,221
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-06-07 01:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 377,325
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows。视窗
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 219,807
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 209,285
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch Español 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ / Idioma English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch Español The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,401
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: 从真正的螃蟹驱动的安全带开始 github.com/code-yeongyu/lazycodex github.com/Yeachan-Heo/gajae-code ultraworkers discord Claw Code 并不是这里的严肃生产项目。这个储存库更接近博物馆展览，而不是产品展示，这是一种甲壳类动物运行的文物，由有爪的加贾保持生命，由特工清扫和标记，并根据上面的安全带自动维护。正如项目理念中已经描述的，这并不意味着像普通产品存储库那样需要手动操作。这是一个由代理管理的展览：线束计划、执行、验证、标记和保存文物，而螃蟹则保持水箱运行。如果您想实际运行工作，请从 LazyCodex 或 Gajae-Code 开始。如果你想检查爪码时刻的奇怪小化石，请继续下面的内容。有关这一理念背后的更长的公开解释，请参阅此处。 ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，以及该存储库当前的真实来源
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 184,959
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于��型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨平台
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 175,164
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-06-06 20:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 377,274
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows。视窗
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 219,570
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 209,053
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/seat/mo Fund the OSS · Fr
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,393
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: 从真正的螃蟹驱动的安全带开始 github.com/code-yeongyu/lazycodex github.com/Yeachan-Heo/gajae-code ultraworkers discord Claw Code 并不是这里的严肃生产项目。这个储存库更接近博物馆展览，而不是产品展示，这是一种甲壳类动物运行的文物，由有爪的加贾保持生命，由特工清扫和标记，并根据上面的安全带自动维护。正如项目理念中已经描述的，这并不意味着像普通产品存储库那样需要手动操作。这是一个由代理管理的展览：线束计划、执行、验证、标记和保存文物，而螃蟹则保持水箱运行。如果您想实际运行工作，请从 LazyCodex 或 Gajae-Code 开始。如果你想检查爪码时刻的奇怪小化石，请继续下面的内容。有关这一理念背后的更长的公开解释，请参阅此处。 ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，以及该存储库当前的真实来源
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 184,633
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于模型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨平��
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 175,056
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-06-06 15:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 377,249
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows。视窗
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 219,440
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 208,915
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/seat/mo Fund the OSS · Fr
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,387
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: 从真正的螃蟹驱动的安全带开始 github.com/code-yeongyu/lazycodex github.com/Yeachan-Heo/gajae-code ultraworkers discord Claw Code 并不是这里的严肃生产项目。这个储存库更接近博物馆展览，而不是产品展示，这是一种甲壳类动物运行的文物，由有爪的加贾保持生命，由特工清扫和标记，并根据上面的安全带自动维护。正如项目理念中已经描述的，这并不意味着像普通产品存储库那样需要手动操作。这是一个由代理管理的展览：线束计划、执行、验证、标记和保存文物，而螃蟹则保持水箱运行。如果您想实际运行工作，请从 LazyCodex 或 Gajae-Code 开始。如果你想检查爪码时刻的奇怪小化石，请继续下面的内容。有关这一理念背后的更长的公开解释，请参阅此处。 ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，以及该存储库当前的真实来源
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 184,463
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于模型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨平��
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 175,008
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-06-06 10:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 377,187
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows。视窗
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 219,200
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 208,683
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/seat/mo Fund the OSS · Fr
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,368
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: 从真正的螃蟹驱动的安全带开始 github.com/code-yeongyu/lazycodex github.com/Yeachan-Heo/gajae-code ultraworkers discord Claw Code 并不是这里的严肃生产项目。这个储存库更接近博物馆展览，而不是产品展示，这是一种甲壳类动物运行的文物，由有爪的加贾保持生命，由特工清扫和标记，并根据上面的安全带自动维护。正如项目理念中已经描述的，这并不意味着像普通产品存储库那样需要手动操作。这是一个由代理管理的展览：线束计划、执行、验证、标记和保存文物，而螃蟹则保持水箱运行。如果您想实际运行工作，请从 LazyCodex 或 Gajae-Code 开始。如果你想检查爪码时刻的奇怪小化石，请继续下面的内容。有关这一理念背后的更长的公开解释，请参阅此处。 ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，以及该存储库当前的真实来源
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 184,052
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于��型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨平台
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 174,917
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-06-06 05:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 377,172
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows。视窗
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 219,110
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 208,600
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/seat/mo Fund the OSS · Fr
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,365
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，该存储库当前的真实来源是 ultraworkers/claw-code 。从 USAGE.md 开始构建、身份验证、CLI、会话和奇偶校验线束工作流程。有关文件提交/导航问题，请参阅导航和文件上下文。对于本地 OpenAI 兼容模型和离线技能安装，请参阅本地 OpenAI 兼容提供程序和技能设置。 Windows 用户可以跳转到 PowerShell-first Windows 安装和发布快速入门。让claw doctor成为构建后的第一次健康检查，使用rust/README.md了解板条箱级别的详细信息，阅读PARITY.md了解当前的Rust端口检查点，并参阅docs/container.md了解容器优先的工作流程。 ACP / Zed 状态：claw-code 尚未提供 ACP/Zed 守护进程或 JSON-RPC 入口点。运行claw acp（或claw --acp）来获取当前状态，而不是从源布局中猜测；爪 acp 服务目前只是一个可发现性别名，返回退出代码为 0 的状态，并返回
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 183,799
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于��型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨平台
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 174,880
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-06-06 00:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 377,136
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows。视窗
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 218,996
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 208,454
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/seat/mo Fund the OSS · Fr
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,355
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，该存储库当前的真实来源是 ultraworkers/claw-code 。从 USAGE.md 开始构建、身份验证、CLI、会话和奇偶校验线束工作流程。有关文件提交/导航问题，请参阅导航和文件上下文。对于本地 OpenAI 兼容模型和离线技能安装，请参阅本地 OpenAI 兼容提供程序和技能设置。 Windows 用户可以跳转到 PowerShell-first Windows 安装和发布快速入门。让claw doctor成为构建后的第一次健康检查，使用rust/README.md了解板条箱级别的详细信息，阅读PARITY.md了解当前的Rust端口检查点，并参阅docs/container.md了解容器优先的工作流程。 ACP / Zed 状态：claw-code 尚未提供 ACP/Zed 守护进程或 JSON-RPC 入口点。运行claw acp（或claw --acp）来获取当前状态，而不是从源布局中猜测；爪 acp 服务目前只是一个可发现性别名，返回退出代码为 0 的状态，并返回
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 183,408
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于���型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨���台
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 174,825
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-06-05 19:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 377,074
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows。视窗
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 218,821
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 208,187
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/seat/mo Fund the OSS · Fr
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,339
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，该存储库当前的真实来源是 ultraworkers/claw-code 。从 USAGE.md 开始构建、身份验证、CLI、会话和奇偶校验线束工作流程。有关文件提交/导航问题，请参阅导航和文件上下文。对于本地 OpenAI 兼容模型和离线技能安装，请参阅本地 OpenAI 兼容提供程序和技能设置。 Windows 用户可以跳转到 PowerShell-first Windows 安装和发布快速入门。让claw doctor成为构建后的第一次健康检查，使用rust/README.md了解板条箱级别的详细信息，阅读PARITY.md了解当前的Rust端口检查点，并参阅docs/container.md了解容器优先的工作流程。 ACP / Zed 状态：claw-code 尚未提供 ACP/Zed 守护进程或 JSON-RPC 入口点。运行claw acp（或claw --acp）来获取当前状态，而不是从源布局中猜测；爪 acp 服务目前只是一个可发现性别名，返回退出代码为 0 的状态，并返回
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 182,758
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于模型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨平��
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 174,751
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-06-05 14:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 377,045
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows。视窗
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 218,749
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 208,071
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/seat/mo Fund the OSS · Fr
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,326
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，该存储库当前的真实来源是 ultraworkers/claw-code 。从 USAGE.md 开始构建、身份验证、CLI、会话和奇偶校验线束工作流程。有关文件提交/导航问题，请参阅导航和文件上下文。对于本地 OpenAI 兼容模型和离线技能安装，请参阅本地 OpenAI 兼容提供程序和技能设置。 Windows 用户可以跳转到 PowerShell-first Windows 安装和发布快速入门。让claw doctor成为构建后的第一次健康检查，使用rust/README.md了解板条箱级别的详细信息，阅读PARITY.md了解当前的Rust端口检查点，并参阅docs/container.md了解容器优先的工作流程。 ACP / Zed 状态：claw-code 尚未提供 ACP/Zed 守护进程或 JSON-RPC 入口点。运行claw acp（或claw --acp）来获取当前状态，而不是从源布局中猜测；爪 acp 服务目前只是一个可发现性别名，返回退出代码为 0 的状态，并返回
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 182,459
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于���型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨���台
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 174,719
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-06-05 09:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 377,015
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows。视窗
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 218,593
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 207,883
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/seat/mo Fund the OSS · Fr
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,313
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，该存储库当前的真实来源是 ultraworkers/claw-code 。从 USAGE.md 开始构建、身份验证、CLI、会话和奇偶校验线束工作流程。有关文件提交/导航问题，请参阅导航和文件上下文。对于本地 OpenAI 兼容模型和离线技能安装，请参阅本地 OpenAI 兼容提供程序和技能设置。 Windows 用户可以跳转到 PowerShell-first Windows 安装和发布快速入门。让claw doctor成为构建后的第一次健康检查，使用rust/README.md了解板条箱级别的详细信息，阅读PARITY.md了解当前的Rust端口检查点，并参阅docs/container.md了解容器优先的工作流程。 ACP / Zed 状态：claw-code 尚未提供 ACP/Zed 守护进程或 JSON-RPC 入口点。运行claw acp（或claw --acp）来获取当前状态，而不是从源布局中猜测；爪 acp 服务目前只是一个可发现性别名，返回退出代码为 0 的状态，并返回
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 181,935
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于模型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨平��
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 174,664
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-06-05 04:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 376,907
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows。视窗
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 218,155
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 207,455
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/seat/mo Fund the OSS · Fr
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,282
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，该存储库当前的真实来源是 ultraworkers/claw-code 。从 USAGE.md 开始构建、身份验证、CLI、会话和奇偶校验线束工作流程。有关文件提交/导航问题，请参阅导航和文件上下文。对于本地 OpenAI 兼容模型和离线技能安装，请参阅本地 OpenAI 兼容提供程序和技能设置。 Windows 用户可以跳转到 PowerShell-first Windows 安装和发布快速入门。让claw doctor成为构建后的第一次健康检查，使用rust/README.md了解板条箱级别的详细信息，阅读PARITY.md了解当前的Rust端口检查点，并参阅docs/container.md了解容器优先的工作流程。 ACP / Zed 状态：claw-code 尚未提供 ACP/Zed 守护进程或 JSON-RPC 入口点。运行claw acp（或claw --acp）来获取当前状态，而不是从源布局中猜测；爪 acp 服务目前只是一个可发现性别名，返回退出代码为 0 的状态，并返回
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 181,287
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于��型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨平台
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 174,531
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-06-04 23:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 376,857
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows。视窗
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 217,901
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 207,171
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/seat/mo Fund the OSS · Fr
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,263
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，该存储库当前的真实来源是 ultraworkers/claw-code 。从 USAGE.md 开始构建、身份验证、CLI、会话和奇偶校验线束工作流程。有关文件提交/导航问题，请参阅导航和文件上下文。对于本地 OpenAI 兼容模型和离线技能安装，请参阅本地 OpenAI 兼容提供程序和技能设置。 Windows 用户可以跳转到 PowerShell-first Windows 安装和发布快速入门。让claw doctor成为构建后的第一次健康检查，使用rust/README.md了解板条箱级别的详细信息，阅读PARITY.md了解当前的Rust端口检查点，并参阅docs/container.md了解容器优先的工作流程。 ACP / Zed 状态：claw-code 尚未提供 ACP/Zed 守护进程或 JSON-RPC 入口点。运行claw acp（或claw --acp）来获取当前状态，而不是从源布局中猜测；爪 acp 服务目前只是一个可发现性别名，返回退出代码为 0 的状态，并返回
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 180,910
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于��型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨平台
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 174,458
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-06-04 18:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 376,827
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows。视窗
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 217,834
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 207,010
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/seat/mo Fund the OSS · Fr
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,254
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，该存储库当前的真实来源是 ultraworkers/claw-code 。从 USAGE.md 开始构建、身份验证、CLI、会话和奇偶校验线束工作流程。有关文件提交/导航问题，请参阅导航和文件上下文。对于本地 OpenAI 兼容模型和离线技能安装，请参阅本地 OpenAI 兼容提供程序和技能设置。 Windows 用户可以跳转到 PowerShell-first Windows 安装和发布快速入门。让claw doctor成为构建后的第一次健康检查，使用rust/README.md了解板条箱级别的详细信息，阅读PARITY.md了解当前的Rust端口检查点，并参阅docs/container.md了解容器优先的工作流程。 ACP / Zed 状态：claw-code 尚未提供 ACP/Zed 守护进程或 JSON-RPC 入口点。运行claw acp（或claw --acp）来获取当前状态，而不是从源布局中猜测；爪 acp 服务目前只是一个可发现性别名，返回退出代码为 0 的状态，并返回
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 180,722
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于模型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨平��
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 174,429
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-06-04 13:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [headroom](https://github.com/chopratejas/headroom)
- **项目语言**: Python
- **星标数量**: ⭐ 11,876
- **核心概述**: 在工具输出、日志、文件和 RAG 块到达 LLM 之前对其进行压缩。减少 60-95% 的标记，答案相同。库、代理、MCP 服务器。
- **大概是做什么的**: 令牌减少 60–95% · 库 · 代理 · MCP · 6 种算法 · 本地优先 · 可逆 AI 代理/LLM：在此处读取 /llms.txt，或获取实时索引/完整文档 blob。 Headroom 会在您的 AI 代理读取的所有内容（工具输出、日志、RAG 块、文件和对话历史记录）到达 LLM 之前对其进行压缩。相同的答案，令牌的一部分。实时：10,144 → 1,260 个代币 — 发现同样的致命情况。 - 库 — Python 或 TypeScript 中的压缩（消息），内联在任何应用程序中 - 代理 — 净空代理 — 端口 8787，零代码更改，任何语言 - 代理包装 — 在一个命令中净空包装 claude codex 光标辅助副驾驶 - MCP 服务器 — 净空压缩、净空检索、任何 MCP 客户端的净空统计信息 - 跨代理内存 — 跨 Claude、Codex、Gemini 的共享存储、自动重复数据删除 - 净空学习 —挖掘失败的会话，将更正写入 CLAUDE.md / AGENTS.md - 可逆 (CCR) - 原始内容从未删除； LLM 按需检索 工作原理（30 秒） - ContentRouter — 检测内容类型，选择正确的压缩器 - SmartCrusher / CodeCompressor / Kompress-base — 压缩 J
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, ai, anthropic, claude-code, compression, context-engineering

---

## 🕔 2026-06-04 08:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 376,703
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows。视窗
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 217,392
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 206,331
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/seat/mo Fund the OSS · Fr
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,234
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，该存储库当前的真实来源是 ultraworkers/claw-code 。从 USAGE.md 开始构建、身份验证、CLI、会话和奇偶校验线束工作流程。有关文件提交/导航问题，请参阅导航和文件上下文。对于本地 OpenAI 兼容模型和离线技能安装，请参阅本地 OpenAI 兼容提供程序和技能设置。 Windows 用户可以跳转到 PowerShell-first Windows 安装和发布快速入门。让claw doctor成为构建后的第一次健康检查，使用rust/README.md了解板条箱级别的详细信息，阅读PARITY.md了解当前的Rust端口检查点，并参阅docs/container.md了解容器优先的工作流程。 ACP / Zed 状态：claw-code 尚未提供 ACP/Zed 守护进程或 JSON-RPC 入口点。运行claw acp（或claw --acp）来获取当前状态，而不是从源布局中猜测；爪 acp 服务目前只是一个可发现性别名，返回退出代码为 0 的状态，并返回
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 179,875
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于��型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨平台
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 174,236
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-06-04 03:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 376,643
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows。视窗
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 217,167
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 206,031
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/seat/mo Fund the OSS · Fr
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,222
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，该存储库当前的真实来源是 ultraworkers/claw-code 。从 USAGE.md 开始构建、身份验证、CLI、会话和奇偶校验线束工作流程。有关文件提交/导航问题，请参阅导航和文件上下文。对于本地 OpenAI 兼容模型和离线技能安装，请参阅本地 OpenAI 兼容提供程序和技能设置。 Windows 用户可以跳转到 PowerShell-first Windows 安装和发布快速入门。让claw doctor成为构建后的第一次健康检查，使用rust/README.md了解板条箱级别的详细信息，阅读PARITY.md了解当前的Rust端口检查点，并参阅docs/container.md了解容器优先的工作流程。 ACP / Zed 状态：claw-code 尚未提供 ACP/Zed 守护进程或 JSON-RPC 入口点。运行claw acp（或claw --acp）来获取当前状态，而不是从源布局中猜测；爪 acp 服务目前只是一个可发现性别名，返回退出代码为 0 的状态，并返回
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 179,496
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于��型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨平台
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 174,174
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-06-03 22:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 376,579
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows。视窗
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 216,907
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 205,685
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/seat/mo Fund the OSS · Fr
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,211
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，该存储库当前的真实来源是 ultraworkers/claw-code 。从 USAGE.md 开始构建、身份验证、CLI、会话和奇偶校验线束工作流程。有关文件提交/导航问题，请参阅导航和文件上下文。对于本地 OpenAI 兼容模型和离线技能安装，请参阅本地 OpenAI 兼容提供程序和技能设置。 Windows 用户可以跳转到 PowerShell-first Windows 安装和发布快速入门。让claw doctor成为构建后的第一次健康检查，使用rust/README.md了解板条箱级别的详细信息，阅读PARITY.md了解当前的Rust端口检查点，并参阅docs/container.md了解容器优先的工作流程。 ACP / Zed 状态：claw-code 尚未提供 ACP/Zed 守护进程或 JSON-RPC 入口点。运行claw acp（或claw --acp）来获取当前状态，而不是从源布局中猜测；爪 acp 服务目前只是一个可发现性别名，返回退出代码为 0 的状态，并返回
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 179,063
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于��型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨平台
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 174,097
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-06-03 17:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 376,534
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows（通过 WSL2
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 216,811
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 205,403
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/seat/mo Fund the OSS · Fr
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,208
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，该存储库当前的真实来源是 ultraworkers/claw-code 。从 USAGE.md 开始构建、身份验证、CLI、会话和奇偶校验线束工作流程。有关文件提交/导航问题，请参阅导航和文件上下文。对于本地 OpenAI 兼容模型和离线技能安装，请参阅本地 OpenAI 兼容提供程序和技能设置。 Windows 用户可以跳转到 PowerShell-first Windows 安装和发布快速入门。让claw doctor成为构建后的第一次健康检查，使用rust/README.md了解板条箱级别的详细信息，阅读PARITY.md了解当前的Rust端口检查点，并参阅docs/container.md了解容器优先的工作流程。 ACP / Zed 状态：claw-code 尚未提供 ACP/Zed 守护进程或 JSON-RPC 入口点。运行claw acp（或claw --acp）来获取当前状态，而不是从源布局中猜测；爪 acp 服务目前只是一个可发现性别名，返回退出代码为 0 的状态，并返回
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 178,791
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于模型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨平��
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 174,050
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-06-03 12:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 376,491
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows（通过 WSL2
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 216,686
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 205,149
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/seat/mo Fund the OSS · Fr
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,206
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，该存储库当前的真实来源是 ultraworkers/claw-code 。从 USAGE.md 开始构建、身份验证、CLI、会话和奇偶校验线束工作流程。有关文件提交/导航问题，请参阅导航和文件上下文。对于本地 OpenAI 兼容模型和离线技能安装，请参阅本地 OpenAI 兼容提供程序和技能设置。 Windows 用户可以跳转到 PowerShell-first Windows 安装和发布快速入门。让claw doctor成为构建后的第一次健康检查，使用rust/README.md了解板条箱级别的详细信息，阅读PARITY.md了解当前的Rust端口检查点，并参阅docs/container.md了解容器优先的工作流程。 ACP / Zed 状态：claw-code 尚未提供 ACP/Zed 守护进程或 JSON-RPC 入口点。运行claw acp（或claw --acp）来获取当前状态，而不是从源布局中猜测；爪 acp 服务目前只是一个可发现性别名，返回退出代码为 0 的状态，并返回
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 178,526
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于��型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨平台
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 173,993
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并保持钱包畅通。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-06-03 07:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 376,426
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows（通过 WSL2
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 216,442
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 204,767
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/seat/mo Fund the OSS · Fr
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,196
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，该存储库当前的真实来源是 ultraworkers/claw-code 。从 USAGE.md 开始构建、身份验证、CLI、会话和奇偶校验线束工作流程。有关文件提交/导航问题，请参阅导航和文件上下文。对于本地 OpenAI 兼容模型和离线技能安装，请参阅本地 OpenAI 兼容提供程序和技能设置。 Windows 用户可以跳转到 PowerShell-first Windows 安装和发布快速入门。让claw doctor成为构建后的第一次健康检查，使用rust/README.md了解板条箱级别的详细信息，阅读PARITY.md了解当前的Rust端口检查点，并参阅docs/container.md了解容器优先的工作流程。 ACP / Zed 状态：claw-code 尚未提供 ACP/Zed 守护进程或 JSON-RPC 入口点。运行claw acp（或claw --acp）来获取当前状态，而不是从源布局中猜测；爪 acp 服务目前只是一个可发现性别名，返回退出代码为 0 的状态，并返回
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 178,127
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于���型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨���台
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 173,884
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-06-03 02:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 376,337
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows（通过 WSL2
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 216,066
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 204,306
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/seat/mo Fund the OSS · Fr
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,177
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，该存储库当前的真实来源是 ultraworkers/claw-code 。从 USAGE.md 开始构建、身份验证、CLI、会话和奇偶校验线束工作流程。有关文件提交/导航问题，请参阅导航和文件上下文。对于本地 OpenAI 兼容模型和离线技能安装，请参阅本地 OpenAI 兼容提供程序和技能设置。 Windows 用户可以跳转到 PowerShell-first Windows 安装和发布快速入门。让claw doctor成为构建后的第一次健康检查，使用rust/README.md了解板条箱级别的详细信息，阅读PARITY.md了解当前的Rust端口检查点，并参阅docs/container.md了解容器优先的工作流程。 ACP / Zed 状态：claw-code 尚未提供 ACP/Zed 守护进程或 JSON-RPC 入口点。运行claw acp（或claw --acp）来获取当前状态，而不是从源布局中猜测；爪 acp 服务目前只是一个可发现性别名，返回退出代码为 0 的状态，并返回
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 177,669
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于��型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨平台
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 173,773
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-06-02 21:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 376,270
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows（通过 WSL2
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 215,826
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 203,749
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/seat/mo Fund the OSS · Fr
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,163
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，该存储库当前的真实来源是 ultraworkers/claw-code 。从 USAGE.md 开始构建、身份验证、CLI、会话和奇偶校验线束工作流程。有关文件提交/导航问题，请参阅导航和文件上下文。对于本地 OpenAI 兼容模型和离线技能安装，请参阅本地 OpenAI 兼容提供程序和技能设置。 Windows 用户可以跳转到 PowerShell-first Windows 安装和发布快速入门。让claw doctor成为构建后的第一次健康检查，使用rust/README.md了解板条箱级别的详细信息，阅读PARITY.md了解当前的Rust端口检查点，并参阅docs/container.md了解容器优先的工作流程。 ACP / Zed 状态：claw-code 尚未提供 ACP/Zed 守护进程或 JSON-RPC 入口点。运行claw acp（或claw --acp）来获取当前状态，而不是从源布局中猜测；爪 acp 服务目前只是一个可发现性别名，返回退出代码为 0 的状态，并返回
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 177,243
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于模型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨平��
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 173,669
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-06-02 16:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [harness-sdk](https://github.com/strands-agents/harness-sdk)
- **项目语言**: Python
- **星标数量**: ⭐ 5,999
- **核心概述**: 一种模型驱动的方法，只需几行代码即可构建人工智能代理。
- **大概是做什么的**: 一种模型驱动的方法，只需几行代码即可构建人工智能代理。 Strands Agents 是一个简单但功能强大的 SDK，它采用模型驱动的方法来构建和运行 AI 代理。从简单的对话助理到复杂的自主工作流程，从本地开发到生产部署，Strands Agents 可根据您的需求进行扩展。此 monorepo 包含 Python SDK、TypeScript SDK、文档站点和支持包： 目录 说明 -------------- -------------strands-py/ Python SDK — 代理循环、模型提供程序、工具 (PyPI)strands-ts/TypeScript SDK — 代理循环、模型提供程序、工具 (npm)strands-wasm/ WebAssembly 绑定，用于从 TypeScript 代理运行 Python 工具strands-py-wasm/ 用于 WASM 组件的 Python 主机（将 WIT 接口桥接到Python）strandly/用于本地构建、代码生成和工作区工具站点的开发人员 CLI/使用 Astro/Starlight (strandsagents.com) 设计构建的文档站点/重要功能的设计建议（RFC 样式） - 轻量级和灵活：简单的代理循环，可以正常工作并且完全可定制 - Mod
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agentic, agentic-ai, agents, ai, anthropic, autonomous-agents

---

## 🕔 2026-06-02 11:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 376,196
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows（通过 WSL2
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 215,631
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 203,025
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/seat/mo Fund the OSS · Fr
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,138
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，该存储库当前的真实来源是 ultraworkers/claw-code 。从 USAGE.md 开始构建、身份验证、CLI、会话和奇偶校验线束工作流程。有关文件提交/导航问题，请参阅导航和文件上下文。对于本地 OpenAI 兼容模型和离线技能安装，请参阅本地 OpenAI 兼容提供程序和技能设置。 Windows 用户可以跳转到 PowerShell-first Windows 安装和发布快速入门。让claw doctor成为构建后的第一次健康检查，使用rust/README.md了解板条箱级别的详细信息，阅读PARITY.md了解当前的Rust端口检查点，并参阅docs/container.md了解容器优先的工作流程。 ACP / Zed 状态：claw-code 尚未提供 ACP/Zed 守护进程或 JSON-RPC 入口点。运行claw acp（或claw --acp）来获取当前状态，而不是从源布局中猜测；爪 acp 服务目前只是一个可发现性别名，返回退出代码为 0 的状态，并返回
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 176,850
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于模型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨平��
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 173,555
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-06-02 06:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 376,138
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows（通过 WSL2
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 215,340
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 202,699
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/seat/mo Fund the OSS · Fr
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,123
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，该存储库当前的真实来源是 ultraworkers/claw-code 。从 USAGE.md 开始构建、身份验证、CLI、会话和奇偶校验线束工作流程。有关文件提交/导航问题，请参阅导航和文件上下文。对于本地 OpenAI 兼容模型和离线技能安装，请参阅本地 OpenAI 兼容提供程序和技能设置。 Windows 用户可以跳转到 PowerShell-first Windows 安装和发布快速入门。让claw doctor成为构建后的第一次健康检查，使用rust/README.md了解板条箱级别的详细信息，阅读PARITY.md了解当前的Rust端口检查点，并参阅docs/container.md了解容器优先的工作流程。 ACP / Zed 状态：claw-code 尚未提供 ACP/Zed 守护进程或 JSON-RPC 入口点。运行claw acp（或claw --acp）来获取当前状态，而不是从源布局中猜测；爪 acp 服务目前只是一个可发现性别名，返回退出代码为 0 的状态，并返回
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 176,531
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于��型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨平台
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 173,479
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-06-02 01:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 376,104
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows（通过 WSL2
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 215,024
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 202,438
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/seat/mo Fund the OSS · Fr
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,098
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，该存储库当前的真实来源是 ultraworkers/claw-code 。从 USAGE.md 开始构建、身份验证、CLI、会话和奇偶校验线束工作流程。有关文件提交/导航问题，请参阅导航和文件上下文。对于本地 OpenAI 兼容模型和离线技能安装，请参阅本地 OpenAI 兼容提供程序和技能设置。 Windows 用户可以跳转到 PowerShell-first Windows 安装和发布快速入门。让claw doctor成为构建后的第一次健康检查，使用rust/README.md了解板条箱级别的详细信息，阅读PARITY.md了解当前的Rust端口检查点，并参阅docs/container.md了解容器优先的工作流程。 ACP / Zed 状态：claw-code 尚未提供 ACP/Zed 守护进程或 JSON-RPC 入口点。运行claw acp（或claw --acp）来获取当前状态，而不是从源布局中猜测；爪 acp 服务目前只是一个可发现性别名，返回退出代码为 0 的状态，并返回
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 176,223
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于���型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨���台
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 173,381
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-06-01 20:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 376,062
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows（通过 WSL2
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 214,700
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 202,053
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/seat/mo Fund the OSS · Fr
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,075
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，该存储库当前的真实来源是 ultraworkers/claw-code 。从 USAGE.md 开始构建、身份验证、CLI、会话和奇偶校验线束工作流程。有关文件提交/导航问题，请参阅导航和文件上下文。对于本地 OpenAI 兼容模型和离线技能安装，请参阅本地 OpenAI 兼容提供程序和技能设置。 Windows 用户可以跳转到 PowerShell-first Windows 安装和发布快速入门。让claw doctor成为构建后的第一次健康检查，使用rust/README.md了解板条箱级别的详细信息，阅读PARITY.md了解当前的Rust端口检查点，并参阅docs/container.md了解容器优先的工作流程。 ACP / Zed 状态：claw-code 尚未提供 ACP/Zed 守护进程或 JSON-RPC 入口点。运行claw acp（或claw --acp）来获取当前状态，而不是从源布局中猜测；爪 acp 服务目前只是一个可发现性别名，返回退出代码为 0 的状态，并返回
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 175,885
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于模型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨平��
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 173,260
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并保持钱包畅通。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-06-01 15:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [hermes-webui](https://github.com/nesquena/hermes-webui)
- **项目语言**: Python
- **星标数量**: ⭐ 10,835
- **核心概述**: Hermes WebUI：从网络或手机使用 Hermes Agent 的最佳方式！
- **大概是做什么的**: Hermes Agent 是一个复杂的自主代理，位于您的服务器上，可通过终端或消息传递应用程序访问，它会记住它所学到的内容，并且运行时间越长，其能力就越强。 Hermes WebUI 是浏览器中为 Hermes Agent 提供的轻量级、深色主题的 Web 应用程序界面。与 CLI 体验完全一致 - 您可以从终端执行的所有操作，都可以通过此 UI 执行。没有构建步骤，没有框架，没有捆绑器。只是 Python 布局：三面板。左侧边栏用于会话和导航，中心用于聊天，右侧用于工作区文件浏览。模型、配置文件和工作区控件位于作曲家页脚中 - 作曲时始终可见。圆形上下文环一目了然地显示了令牌的使用情况。所有设置和会话工具都位于 Hermes 控制中心（侧边栏底部的启动器）。具有完整配置文件支持的轻型模式 自定义设置、配置密码 具有内联预览功能的工作区文件浏览器 会话项目、标签和工具调用卡 这使您可以通过方便的 Web UI 与 Hermes CLI 实现近乎 1:1 的同等性，您可以通过 SSH 安全地访问该 UI
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, ai-agents, hermes, hermes-agent, nous-research

---

## 🕔 2026-06-01 10:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 375,970
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows（通过 WSL2
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 214,309
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 201,305
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/seat/mo Fund the OSS · Fr
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,038
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，该存储库当前的真实来源是 ultraworkers/claw-code 。从 USAGE.md 开始构建、身份验证、CLI、会话和奇偶校验线束工作流程。有关文件提交/导航问题，请参阅导航和文件上下文。对于本地 OpenAI 兼容模型和离线技能安装，请参阅本地 OpenAI 兼容提供程序和技能设置。 Windows 用户可以跳转到 PowerShell-first Windows 安装和发布快速入门。让claw doctor成为构建后的第一次健康检查，使用rust/README.md了解板条箱级别的详细信息，阅读PARITY.md了解当前的Rust端口检查点，并参阅docs/container.md了解容器优先的工作流程。 ACP / Zed 状态：claw-code 尚未提供 ACP/Zed 守护进程或 JSON-RPC 入口点。运行claw acp（或claw --acp）来获取当前状态，而不是从源布局中猜测；爪 acp 服务目前只是一个可发现性别名，返回退出代码为 0 的状态，并返回
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 175,342
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于��型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨平台
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 173,079
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-06-01 00:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 375,918
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows（通过 WSL2
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 213,968
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 200,901
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/seat/mo Fund the OSS · Fr
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 193,018
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，该存储库当前的真实来源是 ultraworkers/claw-code 。从 USAGE.md 开始构建、身份验证、CLI、会话和奇偶校验线束工作流程。有关文件提交/导航问题，请参阅导航和文件上下文。对于本地 OpenAI 兼容模型和离线技能安装，请参阅本地 OpenAI 兼容提供程序和技能设置。 Windows 用户可以跳转到 PowerShell-first Windows 安装和发布快速入门。让claw doctor成为构建后的第一次健康检查，使用rust/README.md了解板条箱级别的详细信息，阅读PARITY.md了解当前的Rust端口检查点，并参阅docs/container.md了解容器优先的工作流程。 ACP / Zed 状态：claw-code 尚未提供 ACP/Zed 守护进程或 JSON-RPC 入口点。运行claw acp（或claw --acp）来获取当前状态，而不是从源布局中猜测；爪 acp 服务目前只是一个可发现性别名，返回退出代码为 0 的状态，并返回
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 174,949
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于模型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨平��
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 172,977
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-05-31 19:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 375,848
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows（通过 WSL2
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 213,626
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 200,232
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/seat/mo Fund the OSS · Fr
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 192,986
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，该存储库当前的真实来源是 ultraworkers/claw-code 。从 USAGE.md 开始构建、身份验证、CLI、会话和奇偶校验线束工作流程。有关文件提交/导航问题，请参阅导航和文件上下文。对于本地 OpenAI 兼容模型和离线技能安装，请参阅本地 OpenAI 兼容提供程序和技能设置。 Windows 用户可以跳转到 PowerShell-first Windows 安装和发布快速入门。让claw doctor成为构建后的第一次健康检查，使用rust/README.md了解板条箱级别的详细信息，阅读PARITY.md了解当前的Rust端口检查点，并参阅docs/container.md了解容器优先的工作流程。 ACP / Zed 状态：claw-code 尚未提供 ACP/Zed 守护进程或 JSON-RPC 入口点。运行claw acp（或claw --acp）来获取当前状态，而不是从源布局中猜测；爪 acp 服务目前只是一个可发现性别名，返回退出代码为 0 的状态，并返回
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 174,550
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于��型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨平台
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 172,839
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-05-31 14:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 375,813
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **大概是做什么的**: 🦞 OpenClaw — 个人人工智能助手去角质！去角质！ OpenClaw 是您在自己的设备上运行的个人人工智能助手。它会在您已经使用的渠道上回答您。它可以在 macOS/iOS/Android 上说话和听，并可以渲染您控制的实时画布。网关只是控制平面——产品是助手。如果您想要一个感觉本地化、快速且始终在线的个人单用户助手，那么这就是它。支持的渠道包括：WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、飞书、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、微信、QQ、WebChat。网站 · 文档 · 愿景 · 第三方通知 · DeepWiki · 入门 · 更新 · 展示 · 常见问题解答 · 入门 · Nix · Docker · Discord 新安装？从这里开始：入门首选设置：在终端中运行 openclaw。 OpenClaw Onboard 将指导您逐步设置网关、工作区、通道和技能。这是推荐的 CLI 设置路径，适用于 macOS、Linux 和 Windows（通过 WSL2
- **有什么用**: 适合用于数据集研究、模型评测、论文实验或构建自己的测试基准。
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 213,502
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **大概是做什么的**: Superpowers 是一种适用于编码代理的完整软件开发方法，建立在一组可组合技能和一些确保您的代理使用它们的初始指令之上。为您的代理提供超能力：Claude Code、Codex CLI、Codex App、Factory Droid、Gemini CLI、OpenCode、Cursor、GitHub Copilot CLI。它从您启动编码代理的那一刻开始。一旦它看到您正在构建某些东西，它就不会立即尝试编写代码。相反，它会退后一步，问你真正想做什么。一旦它从对话中挑出一个规范，它就会以足够短的块向您展示，以便您实际阅读和消化。在您签署设计后，您的代理会制定一个实施计划，该计划对于一位品味差、缺乏判断力、没有项目背景且厌恶测试的热情初级工程师来说足够清晰。它强调真正的红/绿 TDD、YAGNI（你不需要它）和 DRY。接下来，一旦您说“开始”，它就会启动子代理驱动的开发流程，让代理完成每个工程任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: 开源

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 199,995
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **大概是做什么的**: Language: English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch 182K+ stars 28K+ forks 170+ contributors 12+ language ecosystems Cross-harness agent workflows Language / 语言 / 语言 / Dil / Язык / Ngôn ngữ English Português (Brasil) 简体中文 繁体中文 日本语 한국어 Türkçe Русский Tiếng Việt ไทย Deutsch The harness-native operator system for agentic work. Built from real-world multi-harness engineering workflows. Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, skills, hooks, rules, MCP configurations, and legacy command shims evolved over 10+ months of intensive daily use building real products. Works across Codex , Claude Code , Cursor , OpenCode , Gemini , Zed , GitHub Copilot , and other AI agent harnesses. ECC v2.0.0-rc.1 adds the public Hermes operator story on top of that reusable layer: start with the Hermes setup guide, then review the rc.1 release notes and cross-harness architecture. Private repos · GitHub App · $19/seat/mo Fund the OSS · Fr
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 192,975
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **大概是做什么的**: ultraworkers/claw-code UltraWorkers Discord Claw Code 是 Claw CLI 代理工具的公共 Rust 实现。规范的实现位于 rust/ 中，该存储库当前的真实来源是 ultraworkers/claw-code 。从 USAGE.md 开始构建、身份验证、CLI、会话和奇偶校验线束工作流程。有关文件提交/导航问题，请参阅导航和文件上下文。对于本地 OpenAI 兼容模型和离线技能安装，请参阅本地 OpenAI 兼容提供程序和技能设置。 Windows 用户可以跳转到 PowerShell-first Windows 安装和发布快速入门。让claw doctor成为构建后的第一次健康检查，使用rust/README.md了解板条箱级别的详细信息，阅读PARITY.md了解当前的Rust端口检查点，并参阅docs/container.md了解容器优先的工作流程。 ACP / Zed 状态：claw-code 尚未提供 ACP/Zed 守护进程或 JSON-RPC 入口点。运行claw acp（或claw --acp）来获取当前状态，而不是从源布局中猜测；爪 acp 服务目前只是一个可发现性别名，返回退出代码为 0 的状态，并返回
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: 开源

---

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 174,399
- **核心概述**: 与您共同成长的代理商
- **大概是做什么的**: 由 Nous Research 构建的自我改进的人工智能代理。它是唯一具有内置学习循环的代理——它从经验中创造技能，在使用过程中改进这些技能，推动自己坚持知识，搜索自己过去的对话，并在整个会话中建立一个关于你是谁的深化模型。在 5 美元的 VPS、GPU 集群或无服务器基础设施上运行它，闲置时几乎不需要任何成本。它与您的笔记本电脑无关——当它在云虚拟机上工作时，可以通过 Telegram 与它交谈。使用您想要的任何模型 - Nous Portal、OpenRouter（200 多个模型）、NovitaAI（用于模型 API、Agent Sandbox 和 GPU 云的 AI 原生云）、NVIDIA NIM (Nemotron)、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或您自己的端点。与 Hermes 模型切换 — 无需更改代码，无需锁定。真正的终端界面完整的 TUI，具有多行编辑、斜杠命令自动完成、对话历史记录、中断和重定向以及流工具输出。生活在您使用 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI 的地方 — 所有这些都来自单个网关进程。语音备忘录转录，跨平��
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 172,771
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **大概是做什么的**: 🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是组织，我们都提供免费域名，将您的想法变为现实 - 无任何附加条件！借助 FreeDomain，您可以自由注册一个独特的域名，并将其托管在您最喜爱的 DNS 提供商处，例如 Cloudflare、Afraid.org 的 FreeDNS 或 Hostry。完全自由地上网，并让您的钱包满意。 ✔️ 为什么选择免费域名？在 DigitalPlat FreeDomain，我们的使命是让网络更易于访问。我们相信域名的成本不应成为任何人创建网站的阻碍。我们的目标是使互联网成为一个开放的空间，无论预算如何，每个人都可以在网上拥有自己的位置。 DigitalPlat FreeDomain由DigitalPlat基金会创始人Edward Hsing独立设计和维护。 🌍 可用的域名扩展（更多扩展即将推出！） 🌍 准备好领取您的免费域名了吗？访问我们的网站并注册您的域名：➡️ DigitalPlat FreeDomain Dashboard 📝 阅读
- **有什么用**: 从项目说明看，它主要围绕“🌐 欢迎来到 DigitalPlat Domain 欢迎来到 DigitalPlat FreeDomain，我们相信每个人都应该拥有数字身份。无论您是个人还是”展开，可用于学习、研究或二次开发。
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

## 🕔 2026-05-31 09:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [Linear-Algebra-Made-Easy---Learn-with-Python-and-Visualization](https://github.com/Visualize-ML/Linear-Algebra-Made-Easy---Learn-with-Python-and-Visualization)
- **项目语言**: Jupyter Notebook
- **星标数量**: ⭐ 2,153
- **核心概述**: ”数学不难“ 之 《线性代数不难》上下册，66话题完册；欢迎批评指正
- **大概是做什么的**: README 关键内容暂时读取失败或内容较少，建议点进项目主页查看完整说明。
- **有什么用**: 适合用于机器学习、深度学习模型训练、实验复现或算法工程实践。
- **技术标签**: data-science, data-visualization, linear-algebra, machine-learning, python, visualization

---

### 🌟 [docext](https://github.com/NanoNets/docext)
- **项目语言**: Python
- **星标数量**: ⭐ 2,019
- **核心概述**: 本地、免 OCR 的非结构化数据提取、降价转换和基准测试工具包。 （https://idp-leaderboard.org/）
- **大概是做什么的**: 本地文档信息提取和基准测试工具包。新模型发布：Nanonets-OCR-s 我们很高兴地宣布推出 Nanonets-OCR-s，这是一个紧凑的 3B 参数模型，专门针对高效图像到 Markdown 转换进行了训练，具有对图像、签名、水印等的语义理解！ 📢 阅读完整公告 🤗 Hugging Face 模型 docext 是一个由视觉语言模型 (VLM) 提供支持的综合性本地文档智能工具包。它提供三个核心功能： 📄 PDF 和图像到 Markdown 转换：通过智能内容识别将文档转换为结构化 Markdown，包括 LaTeX 方程、签名、水印、表格和语义标记。 🔍 文档信息提取：从发票、护照和其他文档类型等文档中免 OCR 提取结构化信息（字段、表格等），并进行置信度评分。 📊 智能文档处理排行榜：一个全面的基准测试平台，可跟踪和评估跨 OCR、Key Inform 的视觉语言模型性能
- **有什么用**: 适合用于大语言模型应用开发、知识库问答、聊天机器人或 Prompt/RAG 工作流参考。
- **技术标签**: document, document-analysis, document-data-extraction, document-information-extraction, extraction, llm-ocr

---

### 🌟 [machine-learning-visualized](https://github.com/gavinkhung/machine-learning-visualized)
- **项目语言**: TeX
- **星标数量**: ⭐ 1,530
- **核心概述**: 在 Jupyter Notebooks 和 NumPy 中实现和衍生自第一原理的 ML 算法
- **大概是做什么的**: 机器学习可视化 URL：https://ml-visualized.com/ 机器学习可视化是一本 Jupyter 书籍，其中包含 Jupyter Notebook，可根据第一原理实现并以数学方式推导机器学习算法。还有使用 Marimo 构建的交互式笔记本，可让您了解权重如何影响损失函数。每个笔记本的输出是机器学习算法在整个训练阶段的可视化，最终收敛于其最佳权重。每个机器学习算法都有一个单独的 Github 存储库。因此，这个存储库只是配置和构建 Jupyter Book 的代码。在非常高的水平上，Jupyter Books 允许您使用 Markdown 文件和 Jupyter Notebooks 构建网站。请注意，此存储库中没有任何 Jupyter Notebook。有一个 SH 脚本可以从其他 Github 存储库下载相关的 Jupyter Notebook。一旦完成，就可以构建 Jupyter Book。每次提交或拉取请求后，都会使用 .github/workflows/ci.yml 上的 GitHub Action 更新网站。建造
- **有什么用**: 适合用于机器学习、深度学习模型训练、实验复现或算法工程实践。
- **技术标签**: book, jupyter-notebook, latex, machine-learning, neural-network, numpy

---

### 🌟 [ai-system-design-guide](https://github.com/ombharatiya/ai-system-design-guide)
- **项目语言**: 多语言
- **星标数量**: ⭐ 1,513
- **核心概述**: 面向构建生产型人工智能系统和评估的工程师的人工智能系统设计指南。
- **大概是做什么的**: 🧠 人工智能系统设计指南 完整的面试和制作参考 如果本指南对您有帮助，请在 GitHub、X 和 LinkedIn 上关注 @ombharatiya，以便在新章节、模型刷新和面试提示发布时收到通知。生产型人工智能系统的活生生的参考。持续更新。面试准备深度。关于 AI 系统设计、RAG 架构、LLM 工程、代理 AI、MCP 和 A2A 协议以及 AI 工程面试准备的实用且不断更新的指南。涵盖生产模式、模型选择、评估以及来自员工层面访���的真实案例研究。新来的？跳至包含 110 个问题的面试库、RAG 基础知识章节，或选择合适的法学硕士进行制作。我想... 从这里开始 -------------- ------------ 准备面试 题库 → 答案框架 快速学习人工智能系统 LLM 内部原理 → RAG 基础知识 高级检索 上下文检索 → ColBERT → 多模态 RAG 设计多租户 AI 隔离模式 → 案例研究 工具使用和计算机代理 景观 → OpenClaw → 安全 自主编码代理 Claude
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agentic-ai, agentic-workflow, ai, ai-jobs, artificial-intelligence, aws

---

### 🌟 [lightly-train](https://github.com/lightly-ai/lightly-train)
- **项目语言**: Python
- **星标数量**: ⭐ 1,476
- **核心概述**: 视觉模型（YOLO、ViTs、RT-DETR、DINOv3）的一体化训练：预训练、微调、蒸馏。
- **大概是做什么的**: LightlyTrain - SOTA 预训练、微调和蒸馏训练更好的模型、更快 LightlyTrain 是将数据转换为最先进的计算机视觉模型的领先框架。它涵盖了整个模型开发生命周期，从在未标记数据上预训练 DINOv2/v3 视觉基础模型，到针对边缘部署的检测和分割任务微调 Transformer 和 YOLO 模型。请联系我们申请商业用途许可证。另请查看 LightlyStudio，轻松可视化您的注释和预测。 2026-04-14：🔎 Distillationv3：更好的泛化蒸馏方法，在密集任务和全局任��以及所有模型中表现同样出色，从 ViT 到混合模型再到 CNN（+支持自定义教师！）。 🔎 2026-01-19：🐣 PicoDet、Tiny Models 和 ONNX/TensorRT FP16 支持：适用于低功耗嵌入式设备的 PicoDet 对象检测模型！所有任务现在都支持微型 DINOv3 模型和 FP16 精度的 ONNX/TensorRT 导出，以实现更快的推理！ 🐣 2025-12-15：🐥 新的微型物体检测模型：我们发布了微型 DINOv3 模型
- **有什么用**: 适合用于机器学习、深度学习模型训练、实验复现或算法工程实践。
- **技术标签**: computer-vision, contrastive-learning, deep-learning, dinov2, dinov3, distillation

---

### 🌟 [karpathy](https://github.com/K-Dense-AI/karpathy)
- **项目语言**: Python
- **星标数量**: ⭐ 1,450
- **核心概述**: 代理机器学习工程师
- **大概是做什么的**: 注意：有关更高级的功能和端到端机器学习，请访问 www.k-dense.ai。保持最新动态：在 X、LinkedIn 和 YouTube 上关注 K-Dense，了解新技能、发布公告、演练、研究工作流程演示以及可与您自己的 AI 代理一起使用的示例。 ⭐ 帮助让人工智能更容易发现科学：如果科学代理技能可以节省您的时间、教您的代理工作流程或帮助您的实验室更快地开展工作，请为该存储库加注星标。星星是一个公共信号，表明这些开放、可重用的研究技能值得维护：它可以帮助科学家、工程师和开源贡献者找到项目，显示哪些代理技能标准正在获得真正的采用，并为我们提供了继续扩大社区收集的明确理由。一位代理机器学习工程师，使用 Claude Agent SDK 和 Google ADK 训练最先进的 ML 模型。这是一个简单的实现，展示了科学代理技能在机器学习方面的强大功能。 - Python 3.13 或更高版本 - uv 包管理器 - Claude 代码已安装并经过身份验证（请参阅 Claude Co
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agentic-ai, automl, machine-learning

---

## 🕔 2026-05-31 04:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [deepnote](https://github.com/deepnote/deepnote)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 2,913
- **核心概述**: Deepnote 是 Jupyter 的直接替代品，具有 AI 优先的设计、时尚的 UI、新块和本机数据集成。在您最喜欢的 IDE 中本地使用 Python、R 和 SQL，然后扩展到 Deepnote 云以实现实时协作、Deepnote 代理和可部署的数据应用程序。 https://deepnote.com/
- **大概是做什么的**: 网站 • 文档 • 变更日志 • X • 示例 • 社区 Deepnote 是人工智能时代的数据笔记本 Deepnote 被雅诗兰黛、SoundCloud、Statsig、Gusto 等公司的 500,000 多名数据专业人员使用。几秒钟内即可开始使用 Deepnote：然后在 VS Code、Cursor 或 Windsurf 中打开您的 .deepnote 文件！ Deepnote 是 Jupyter 的直接替代品。它使用 Deepnote 内核，该内核更强大但仍然向后兼容，因此您可以在两者之间无缝移动，但它添加了 AI 代理、时尚的 UI、新的块类型和本机数据集成。在使用 Deepnote Cloud 扩展团队中的工作流程之前，Deepnote 开源为您提供本地工作所需的一切。为什么 Deepnote 开源？ - 人类可读的格式：.deepnote YAML 格式用干净、版本控制和人性化的项目和笔记本结构取代了 .ipynb 的混乱 JSON。您可以将多个笔记本、集成和设置组织到一个 .deepnote 项目中，以实现更好的结构和协作。 - 基于块的架构：将笔记本扩展到代码单元之外
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: artificial-intelligence, data, data-analysis, data-science, data-visualization, deepnote

---

### 🌟 [QuantMuse](https://github.com/0xemmkty/QuantMuse)
- **项目语言**: Python
- **星标数量**: ⭐ 2,599
- **核心概述**: 全面的量化交易系统，具有人工智能分析、实时数据处理和先进的风险管理
- **大概是做什么的**: 🚀 量化交易系统 具有人工智能分析、实时数据处理和先进风险管理功能的综合量化交易系统 📋 目录 这是一个将传统金融分析与尖端人工智能/机器学习技术相结合的可生产的量化交易系统。该系统提供了从数据收集到策略执行的完整流程，具有实时市场数据处理、高级因子分析、人工智能驱动的情绪分析和全面风险管理的特点。 - 🔬 高级因素分析：具有动量、价值、质量和波动性因素的多因素模型 - 🤖 AI/LLM 集成：用于市场分析和策略建议的 OpenAI GPT 集成 - 📊 实时数据：来自多个交易所的基于 WebSocket 的实时市场数据 - 🎯 策略框架：具有 8 种以上内置量化策略的可扩展���略系统 - ⚡ 高性能：用于低延迟订单执行的 C++ 核心引擎- 📈 可视化：使用 Plotly 和 Streamlit 的交互式仪表板 - 🛡️ 风险管理：综合风险管理
- **有什么用**: 适合用于机器学习、深度学习模型训练、实验复现或算法工程实践。
- **技术标签**: machine-learning, python, quantitative-trading

---

### 🌟 [plexe](https://github.com/plexe-ai/plexe)
- **项目语言**: Python
- **星标数量**: ⭐ 2,582
- **核心概述**: ✨ 根据提示构建机器学习模型
- **大概是做什么的**: plexe 允许您通过用简单的语言描述机器学习模型来创建它们。只需解释您想要什么，提供数据集，人工智能驱动的系统就会通过自动化代理方法构建功能齐全的模型。也可作为托管云服务使用。在 YouTube 上观看演示：提供表格数据集（Parquet、CSV、ORC 或 Avro）和自然语言意图：2.1。 🤖 多代理架构 该系统在 6 阶段工作流程中使用 14 个专门的 AI 代理来： - 分析数据并识别 ML 任务 - 选择正确的评估指标 - 通过假设驱动的迭代搜索最佳模型 - 评估模型性能和稳健性 - 打包模型以进行部署 2.2。 🎯 自动模型构建 对所有 CLI 选项运行 python -m plexe.main --help。输出是工作 dir/model/ 中的独立模型包（也存档为 model.tar.gz ）。该包不依赖于 plexe — 使用 plexe 构建模型，将其部署在任何地方：2.3。 🐳 包含电池的 Docker 镜像 使用预先配置的所有内容运行 plexe — PySpark、Java 和所有依赖项
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agentic-ai, agents, ai, machine-learning, ml, mlengineering

---

### 🌟 [agentic-context-engine](https://github.com/kayba-ai/agentic-context-engine)
- **项目语言**: Python
- **星标数量**: ⭐ 2,243
- **核心概述**: 🧠 让您的代理从经验中学习。现已作为 kayba.ai 的托管解决方案提供
- **大概是做什么的**: Agentic Context Engine (ACE) 在 kayba.ai 免费试用我们的托管解决方案：从您的终端自动进行代理自我改进。 CLI + 仪表板，可分析跟踪、显示故障并直接从 Claude Code、Codex 等提供改进。人工智能代理不会从经验中学习。他们每次都会重复同样的错误，忘记什么是有效的，而忽略什么是失败的。 ACE 添加了一个持久的学习循环，可以随着时间的推移让它们变得更好。该特工声称存在海马表情符号。 ACE 会反思错误，并在下一次尝试时，代理会正确响应 - 无需人工干预。指标结果上下文 :------- :------- :-------- 2x 一致性 在 Tau2 航空公司基准测试上双倍通过 ^4 15 种学习策略，无奖励信号 49% 令牌减少 浏览器自动化成本几乎减少一半 10 次运行的学习曲线 1.50 美元学习成本 Claude 代码将 14k 行翻译成 TypeScript 零构建错误，所有测试均通过 选项 A — 交互式设置（推荐）： 选项 B — 手动配置：无需微调，无需培训数据，没有矢量数据库。 - 快速入门指南 - 设置 G
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent-learning, agent-memory, agents, ai, ai-agents, ai-tools

---

### 🌟 [figures4papers](https://github.com/ChenLiu-1996/figures4papers)
- **项目语言**: Python
- **星标数量**: ⭐ 2,178
- **核心概述**: 我的 Python 脚本可以为顶级人工智能会议和期刊的出版物制作高质量的图表。
- **大概是做什么的**: 我是刘晨，耶鲁大学计算机科学博士生。这是我自己的高质量图形 Python 脚本的集中存储库。这些数字出现在包括但不限于 Nature Machine Intelligence、ICML 和 NeurIPS 在内的顶级会议上。你能帮我一个忙，也给这个存储库加注星标吗：https://github.com/ChenLiu-1996/LM-Dispersion？谢谢你！用于定量比较的条形图 用于成分分解的条形图 雷达图                   线图 其他：未在 Python 中端到端制作的图 这些图部分是用 Python 制作的。我将它们包括在内是为了感谢我在它们上花费的时间和精力。 LLM 技能整合（部分归功于我的朋友 Shan Chen） 科学图形制作技能存在于科学图形制作/中。演示人物位于 asset/ 中。项目特定的脚本和输出位于图 / 中。技能文件夹层次结构 在 AI 编码代理中使用此技能 无需安装（基于路径） 您无需安装任何程序即可使用此技能
- **有什么用**: 适合用于大语言模型应用开发、知识库问答、聊天机器人或 Prompt/RAG 工作流参考。
- **技术标签**: acl, cvpr, eccv, emnlp, figures, iccv

---

### 🌟 [how-to-train-your-gpt](https://github.com/raiyanyahya/how-to-train-your-gpt)
- **项目语言**: Jupyter Notebook
- **星标数量**: ⭐ 2,162
- **核心概述**: 从头开始建立现代法学硕士。每行都评论了。解释得就像我们五个人一样。
- **大概是做什么的**: 🧠 如何训练你的 GPT 从零开始构建世界级语言模型的指南。教得像你五岁一样。像工程师一样构建。我做这个的目的是为了学习一些我不完全理解的东西。具体来说就是注意部分。我经常使用人工智能来理解关键概念并验证它们。这是一本 12 章、7,500 多行的交互式教科书，教您如何从头开始构建、训练和运行现代语言模型。 ChatGPT、Claude、LLaMA 和 Mistral 背后的架构相同。除了各章之外，还有 22 个独立的主题解释器，深入涵盖了每种技术。 RoPE、注意力、RMSNorm、SwiGLU、KV 缓存、AdamW、混合精度等等。加上两个叙述演练，逐步追踪整个模型中的单个句子。每个文件都遵循相同的风格：子语言，没有行话，可以运行的代码示例。您不会只阅读有关《变形金刚》的内容。您将自己编写每一行：分词器、嵌入、注意力、训练循环、推理引擎。每行都附有注释以解释内容
- **有什么用**: 适合用于大语言模型应用开发、知识库问答、聊天机器人或 Prompt/RAG 工作流参考。
- **技术标签**: attention-mechanism, deep-learning, educational, from-scratch, gpt, language-model

---

## 🕔 2026-05-30 23:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [Chronos](https://github.com/Kodezi/Chronos)
- **项目语言**: Java
- **星标数量**: ⭐ 4,950
- **核心概述**: Kodezi Chronos 是一种调试优先的语言模型，在 SWE-bench Lite 上实现了最先进的结果 (80.33%) 和 67% 的实际修复精度，比 GPT-4 好六倍多。采用自适应图形引导检索和持久调试内存构建。型号将于 2026 年第一季度通过 Kodezi OS 推出。
- **大概是做什么的**: 世界上第一个用于存储库规模代码理解的调试优先语言模型 80.33% SWE-bench Lite • 67.3% 自主调试 • 89% 人类偏好 • 时间减少 40% - 最先进的结果 - SWE-bench Lite 性能 - 存储库特定结果 - MRR 基准测试结果 - 基准测试和评估 - 存储库结构 - 研究亮点 - 详细性能 Chronos 是专有的，仅可通过 Kodezi OS 时间表 访问详细信息 :--------: :--------: :--------: 2025 年第 4 季度 Beta 有限企业访问 2026 年第 1 季度 GA 通过 Kodezi OS 此存储库仅包含研究论文、基准测试和评估结果。抢先体验 • 阅读论文 • 查看排行榜 • 文档 🏅 最先进的结果 📈 SWE-bench Lite 性能行业标准基准结果 排名系统 成功率 实例领先年份 :----: :-------- :------------: :---------: :----: :----: 1 Kodezi Chronos 80.33% 241/300 +20.0pp 2025 2 ExpeRepair-v1.0 + Claude 4.5 Sonnet 60.33% 181/300 - 2025 3 Claude 4.5 Sonnet（仅限 Bash）14% 42/300 -66.3pp 2025 4 Claude 4.1 Opus（Bash）
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: artificial-intelligence, autonomous-debugging, benchmark, benchmark-report, bug-fixing, chronos

---

### 🌟 [LLM-RL-Visualized](https://github.com/changyeyu/LLM-RL-Visualized)
- **项目语言**: Python
- **星标数量**: ⭐ 4,442
- **核心概述**: 🌟100+ 原创 LLM / RL 原理图📚，《大模型算法》作者巨献！💥（100+ LLM/RL Algorithm Maps ）
- **大概是做什么的**: 🎉 原创 100+ 架构图，系统讲解大模型、强化学习 ，涵盖：LLM / VLM 等大模型原理、训练算法（RL、RLHF、GRPO、DPO、SFT 与 CoT 蒸馏等）、效果优化与 RAG 等。 🎉 关于架构图 更详细 的解读可参考： 《大模型算法：强化学习、微调与对齐》 (豆瓣高分，多次京东AI图书Top 5 ！) 🎉 本仓库 长期勘误、追加 ，欢迎点击仓库顶部的 Star ⭐ 关注，感谢鼓励✨ 🎉 单击图片可看高清大图，或浏览仓库目录中的 .svg 格式矢量图（活图，可无限缩放、可选择文字） - 大模型算法总体架构（以LLM、VLM为主） - 强化学习算法图谱 (rl‑algo‑map).pdf——全网最大！ - 策略梯度(Policy Gradient)-强化学习(PPO&GRPO等)之根基.pdf - LLM（Large Language Model）结构 - LLM生成与解码（Decoding）过程 - 多模态模型结构（VLM、MLLM …） - 微调（Fine‑Tuning）技术分类 - DPO（Direct Preference Optimization） - CoT（Chain of Thought）与传统问答的对比 - CoT、Self‑consistency CoT、ToT、GoT - 穷举搜索（Exhaustive Search） - 贪婪搜索（Greedy Search） - 多项式采样（Multinomial Sampling） - Top‑K采样（Top‑K Sampling） - Top‑P采样（Top‑P Sampling） - RAG（检索增强生成, Retrieval‑Augmented Generation） - 功能调用（Function Calling） - 强化学习(Reinforcement Learning, RL)的发展历程 - 马尔可夫链 vs 马尔可夫决策过程（MDP��� - 探索与利用问题（Exploration and Exploitation） - 奖励（Reward）、回报（Return）、价值（Value）的关系 - 蒙特卡洛（Monte Carlo，MC）法预估状态 St 的价值 - TD 目标与 TD 误差的关系（TD target and TD error） - TD(0)、多步 TD 与蒙特卡洛的关系 - 蒙特卡洛、TD、DP、穷举搜索的关系 - 两种输入输出结构的 DQN（Deep Q-Network）模型 - 基于价值 vs 策略（Value-Based vs Policy-Bas
- **有什么用**: 适合用于大语言模型应用开发、知识库问答、聊天机器人或 Prompt/RAG 工作流参考。
- **技术标签**: ai, algorithm, deep-learning, llm, machine-learning, natural-language-processing

---

### 🌟 [awesome-ai-ml-resources](https://github.com/armankhondker/awesome-ai-ml-resources)
- **项目语言**: 多语言
- **星标数量**: ⭐ 4,391
- **核心概述**: 通过路线图和免费资源为初学者学习 AI/ML。
- **大概是做什么的**: 该存储库包含 2025 年学习机器学习和人工智能的免费资源和路线图。 📌 AI/ML 关键概念 - 监督学习 - 无监督学习 - 强化学习 - 自然语言处理 (NLP) - 生成对抗网络 (GAN) - 降维 - 聚类算法 - 贝叶斯推理 - 时间序列分析 - 自监督学习 🛠️ AI/ML 构建块 -机器学习线性代数 - 概率与统计 - 优化微积分 - 用于机器学习的 Python - 优化技术 - 数据预处理和特征工程 - 模型评估和指标 - 正则化技术 - 激活函数 - 超参数调优 - 机器学习工程师 - 软件工程师 (AI) - ML/AI 平台工程师 - ML/AI 基础设施工程师 - 框架工程师 - 解决方案架构师 - 开发倡导者 - 解决方案工程师 - 应用研究科学家 - 研究科学家 1. 学习 Python和核心库 - NumPy：数值计算和数组 - Pandas：数据操作和分析 - Matplo
- **有什么用**: 适合用于机器学习、深度学习模型训练、实验复现或算法工程实践。
- **技术标签**: artifical-intelligense, machine-learning, roadmap

---

### 🌟 [rocketride-server](https://github.com/rocketride-org/rocketride-server)
- **项目语言**: C++
- **星标数量**: ⭐ 3,715
- **核心概述**: 高性能 AI 管道引擎，具有 C++ 核心和 50 多个 Python 可扩展节点。使用 13 个以上的模型提供程序、8 个以上的向量数据库和代理编排构建、调试和扩展 LLM 工作流程，所有这些都来自您的 IDE。包括 VS Code 扩展、TypeScript/Python SDK 和 Docker 部署。
- **大概是做什么的**: 开源、开发人员原生的 AI 管道工具。构建、调试和部署生产 AI 工作流程 - 无需离开 IDE。 RocketRide 是一款专为 AI 和 ML 工作负载构建的开源数据管道构建器和运行时。拥有跨越 13 个 LLM 提供商、8 个矢量数据库、OCR、NER 等的 50 多个管道节点，管道被定义为可移植的 JSON，在 VS Code 中可视化构建，并由多线程 C++ 运行时执行。从实时数据处理到多模式人工智能搜索，RocketRide 完全在您自己的基础设施上运行。就在您编写代码的地方，从可视画布设计、测试和交付复杂的 AI 工作流程。只需几行代码即可将管道放入任何 Python 或 TypeScript 应用程序中，无需基础设施胶水。功能描述：---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- Visual Pipeline Builder 在 VS Code 中拖动、连接和配置节点 - 无锅炉
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, cpp, data-pipeline, data-processing, machine-learning, mcp

---

### 🌟 [awesome-opensource-ai](https://github.com/alvinreal/awesome-opensource-ai)
- **项目语言**: Python
- **星标数量**: ⭐ 3,702
- **核心概述**: 最佳真正开源人工智能项目、模型、工具和基础设施的精选列表。
- **大概是做什么的**: Awesome Open Source AI 精选的开源人工智能模型、库、基础设施和开发人员工具。 - 1. 核心框架和库 - 2. 开放基础模型 - 3. 推理引擎和服务 - 4. 代理人工智能和多代理系统 - 5. 检索增强生成 (RAG) 和知识 - 6. 生成媒体工具 - 7. 培训和微调生态系统 - 8. MLOps / LLMOps 和生产 - 9. 评估、基准和数据集 - 10. AI 安全、对齐和可解释性 - 11. 专业领域 - 12. 用户界面和自托管平台 - 13. 开发人员工具和集成 - 14. 资源和学习 Awesome Open Source AI 是为使用 AI 进行构建的人们精心策划的开源项目列表。目标是帮助读者找到有用的模型、库、工具、基础设施、数据集和学习资源，而无需通过目录转储进行排序。项目不需要包含最低数量的 GitHub star。星星可能是有用的背景信息，但它们只是一个信号。如果一个较小的项目有用、维护良好、技术上有趣，则可能属于这里
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agents, ai, artificial-intelligence, awesome, awesome-list, generative-ai

---

### 🌟 [LimiX](https://github.com/limix-ldm-ai/LimiX)
- **项目语言**: Python
- **星标数量**: ⭐ 3,391
- **核心概述**: LimiX：释放通用智能的结构化数据建模能力 https://arxiv.org/abs/2509.03505
- **大概是做什么的**: - 2025年11月10日：LimiX-2M正式发布！与 LimiX-16M 相比，这种较小的变体可显着降低 GPU 内存使用量和更快的推理速度。检索机制也得到了增强，进一步提高了模型性能，同时减少了推理时间和内存消耗。 - 2025年8月29日：LimiX V1.0发布。 ⚡ 与 SOTA 模型比较的最新结果 我们介绍 LimiX，这是我们 LDM 系列的第一部分。 LimiX 旨在进一步推动通用性：在一个训练和推理方法下处理分类、回归、缺失值插补、特征选择、样本选择和因果推理的单一模型，推动从定制管道向统一的基础式表格学习的转变。 LimiX 采用针对结构化数据建模和任务泛化而优化的变压器架构。该模型首先将先验知识库中的特征 X 和目标 Y 嵌入到标记表示中。在核心模块中，注意力机制应用于样本和特征维度，以识别关键中的显着模式。
- **有什么用**: 适合用于机器学习、深度学习模型训练、实验复现或算法工程实践。
- **技术标签**: foundation-models, limix, machine-learning, structured-data

---

## 🕔 2026-05-30 18:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [rf-detr](https://github.com/roboflow/rf-detr)
- **项目语言**: Python
- **星标数量**: ⭐ 7,460
- **核心概述**: RF-DETR是Roboflow开发的实时目标检测和分割模型架构，SOTA on COCO，专为微调而设计。 [ICLR 2026]
- **大概是做什么的**: RF-DETR：实时 SOTA 检测和分割 RF-DETR 是 Roboflow 开发的用于对象检测和实例分割的实时转换器架构。 RF-DETR 基于 DINOv2 视觉变压器主干构建，可在 Microsoft COCO 和 RF100-VL 上提供最先进的准确性和延迟权衡。 RF-DETR 使用 DINOv2 视觉转换器主干，并在单个一致的 API 中支持检测和实例分割。开源 rfdetr 包和 Apache 指定的模型在 Apache 2.0 下发布，而 Plus 组件（ rfdetr plus ，包括 RF-DETR-XL/2XL 检测模型）在 PML 1.0 下授权。 https://github.com/user-attachments/assets/add23fd1-266f-4538-8809-d7dd5767e8e6 要安装 RF-DETR，请使用 pip 在 Python =3.10 环境中安装 rfdetr 包。通过从源代码安装 RF-DETR，您可以探索尚未正式发布的最新功能和增强功能。请注意，这些更新仍在开发中，可能不如最新发布的版本稳定。 RF-DETR 达到最先进的水平
- **有什么用**: 适合用于机器学习、深度学习模型训练、实验复现或算法工程实践。
- **技术标签**: computer-vision, detr, instance-segmentation, machine-learning, object-detection, rf-detr

---

### 🌟 [Bindu](https://github.com/GetBindu/Bindu)
- **项目语言**: Python
- **星标数量**: ⭐ 6,784
- **核心概述**: Bindu：人工智能代理的身份、通信和支付层。
- **大概是做什么的**: 人工智能代理的身份、通信和支付层。用于代理互联网的 Gmail 形状的收件箱。观察您的代理相互发送签名的 JSON-RPC，内联验证身份，并像线程一样回复群。 → 打开收件箱演练 情况如下。你建立了一个代理。有用。但要真正放手——与其他特工交谈，证明他是谁，为工作赚钱——你会陷入很多无聊的管道工作中。要集成的 DID 库。要设置的 OAuth 流程。支付中间件。 HTTP 层遵循代理世界的其他部分正在使用的任何协议。 Bindu 是一个函数调用背后的所有管道。你用 binufy() 包装你的处理程序，几秒钟后，你的代理就以其自己的加密身份在线，使用 A2A（其他代理已经使用的协议），并准备好在任何 EVM 链上请求 USDC，然后再进行任何工作 (x402)。您的处理程序保持与 (messages) - response 一样小。处理程序内部的框架——Agno、LangChain、CrewAI，你自己的东西——Bindu 并不关心。有 Python、Ty 的 SDK
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: a2a, agent-communication, agent-orchestration, ai-agent, autonomous-agents, eu-ai-act

---

### 🌟 [sdk-python](https://github.com/strands-agents/sdk-python)
- **项目语言**: Python
- **星标数量**: ⭐ 5,977
- **核心概述**: 一种模型驱动的方法，只需几行代码即可构建人工智能代理。
- **大概是做什么的**: 一种模型驱动的方法，只需几行代码即可构建人工智能代理。 Strands Agents 是一个简单但功能强大的 SDK，它采用模型驱动的方法来构建和运行 AI 代理。从简单的对话助理到复杂的自主工作流程，从本地开发到生产部署，Strands Agents 可根据您的需求进行扩展。此 monorepo 包含 Python SDK、TypeScript SDK、文档站点和支持包： 目录 说明 -------------- -------------strands-py/ Python SDK — 代理循环、模型提供程序、工具 (PyPI)strands-ts/TypeScript SDK — 代理循环、模型提供程序、工具 (npm)strands-wasm/ WebAssembly 绑定，用于从 TypeScript 代理运行 Python 工具strands-py-wasm/ 用于 WASM 组件的 Python 主机（将 WIT 接口桥接到Python）strandly/用于本地构建、代码生成和工作区工具站点的开发人员 CLI/使用 Astro/Starlight (strandsagents.com) 设计构建的文档站点/重要功能的设计建议（RFC 样式） - 轻量级和灵活：简单的代理循环，可以正常工作并且完全可定制 - Mod
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agentic, agentic-ai, agents, ai, anthropic, autonomous-agents

---

### 🌟 [learn-ai-engineering](https://github.com/ashishps1/learn-ai-engineering)
- **项目语言**: 多语言
- **星标数量**: ⭐ 5,647
- **核心概述**: 使用免费资源从头开始学习人工智能和法学硕士
- **大概是做什么的**: 学习 AI 工程 全面的免费资源集合，可帮助您了解有关 AI/ML、法学硕士和代理的所有知识。数学基础 - 机器学习数学路线图 - 线性代数精髓 - 3Blue1Brown - 概率与统计 - 可汗学院 - 统计基础 - Josh Stramer - 机器学习专业数学 - Coursera (Andrew Ng) - AI Python 初学者 - Deeplearning.ai AI 和 ML 基础 - 机器学习速成课程 - Google - 初学者人工智能 - 微软 - 人工智能元素 - 大学赫尔辛基 - 机器学习播放列表 - Josh Strarmer - 机器学习专业化 - Coursera 机器学习框架 - 深度学习专业化 - Coursera (Andrew Ng) - 程序员实用深度学习 - Fast.ai - 深度学习数学 - 深度学习播放列表 - Josh Starmer 深度学习框架 ���度学习专业化 - 计算机视觉深度学习 - 斯坦福自然语言处理 (NLP) - NLP 专业化 - Coursera 强化学习 - 深度强化学习课程 - 拥抱脸部- 深度强化学习训练营 - UC B
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agentic-ai, agents, ai, deep-learning, generative-ai, large-language-models

---

### 🌟 [rllm](https://github.com/rllm-org/rllm)
- **项目语言**: Python
- **星标数量**: ⭐ 5,578
- **核心概述**: 法学硕士的强化学习民主化
- **大概是做什么的**: 使用 RL 训练您的 AI 代理。任何框架。最少的代码更改。 rLLM 是一个开源框架，用于通过强化学习来训练 AI 代理。交换被跟踪的客户端，定义奖励函数，然后让 RL 处理剩下的事情——无论您使用什么代理框架。 - 可与任何代理框架配合使用 - LangGraph、SmolAgent、Strands、OpenAI Agents SDK、Google ADK 或普通 openai.OpenAI 。换个客户端就可以了🔌 - 接近零的代码更改 — 添加 @rllm.rollout 来包装您的代理代码，rLLM 会自动跟踪每个 LLM 调用。 🪄 - CLI 优先工作流程 — 使用 50 多个内置基准从命令行进行评估和训练。 rllm eval gsm8k 可以正常工作。 ⚡ - 经过实战检验的结果 - 经过 rLLM 训练的智能体击败了 50 倍大小的模型（4B → 在金融方面优于 235B，1.5B → 在数学方面超过 O1-Preview）。 📈 - 多种 RL 算法 — GRPO、REINFORCE、RLOO、拒绝采样等。 🧠 - 两个训练后端 — verl 用于分布式多 GPU 训练，tinker 用于单机/CPU 设置。无论哪种方式，API 都是相同的。 🔧 在我们的文档网站上阅读更多内容。 rLLM 需要 Python = 3.11 。你可以ins
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent-framework, agentic-workflow, coding-agent, distributed-training, llm-reasoning, llm-training

---

### 🌟 [shimmy](https://github.com/Michael-A-Kuykendall/shimmy)
- **项目语言**: Rust
- **星标数量**: ⭐ 5,294
- **核心概述**: ⚡ 不含 Python 的 Rust 推理服务器 — 兼容 OpenAI-API。 GGUF + SafeTensors、热模型交换、自动发现、单个二进制文件。现在免费，永远免费。
- **大概是做什么的**: 轻量级 OpenAI API 服务器 🔒 无依赖本地推理 🚀 语言：简体中文 · 繁体中文 Shimmy 将永远免费。没有星号。没有“暂时免费”。没有支付的支点。 💝 支持 Shimmy 的成长 🚀 如果 Shimmy 对您有帮助，请考虑赞助 — 100% 的支持将使其永远免费。 - $5/月 : 咖啡级别 ☕ - 永恒的感激 + 赞助商徽章 - $25/月 : Bug 优先排序 🐛 - 优先支持 + SPONSORS.md 中的名称 - $100/月 : 公司支持者 🏢 - 徽标放置 + 每月办公时间 - $500/月 : 基础设施合作伙伴 🚀 - 直接支持 + 路线图输入 🎯 成为赞助商 查看我们出色的赞助商 🙏 - 🔥 机身引擎 (v2.0) - 🎯 支持的型号 - 📦 从 v1.x 迁移 - ⚡ 快速入门（30 秒） - 🚀 OpenAI SDK 兼容性 - 🔧 扩展上下文 - 📥 下载和安装 - 🔗 集成示例 - 🏛️ 技术架构 - 📚 文档中心 - 🌍 社区和支持 Drop-in OpenAI API本地法学硕士的替代 Shimmy 是一个单一二进制文件，可为 GGUF 模型提供 100% OpenAI 兼容的端点。将您现有的 AI 工具指向 Shimmy 和 th
- **有什么用**: 适合用于大语言模型应用开发、知识库问答、聊天机器人或 Prompt/RAG 工作流参考。
- **技术标签**: api-server, command-line-tool, developer-tools, gguf, huggingface, huggingface-models

---

## 🕔 2026-05-30 13:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [claude-context](https://github.com/zilliztech/claude-context)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 11,640
- **核心概述**: 代码搜索 MCP 以获得克劳德代码。使整个代码库成为任何编码代理的上下文。
- **大概是做什么的**: 🆕 正在寻找克劳德代码的持久内存？查看 memsearch Claude Code 插件 - 一个降价优先的内存系统，可为您的 AI 代理提供跨会话的长期记忆。您的整个代码库作为 Claude 的上下文 Claude Context 是一个 MCP 插件，它向 Claude Code 和其他 AI 编码代理添加语义代码搜索，为它们提供整个代码库的深层上下文。 🧠 将整个代码库作为上下文：Claude Context 使用语义搜索从数百万行中查找所有相关代码。无需多轮发现。它将结果直接带入克劳德的背景中。 💰 对于大型代码库来说具有成本效益：Claude Context 不会为每个请求将整个目录加载到 Claude 中（这可能非常昂贵），而是有效地将您的代码库存储在矢量数据库中，并且仅在上下文中使用相关代码，以保持成本可控。模型上下文协议 (MCP) 允许您将 Claude Context 与您最喜欢的 AI 编码助手集成，例如克劳德·代码。在 Zilliz Cloud 上获取免费的矢量数据库 👈 Claude Context 需要一个矢量数据库。您可以在 Zi 上注册
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, agentic-rag, ai-coding, claude-code, code-generation, code-search

---

### 🌟 [trae-agent](https://github.com/bytedance/trae-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 11,606
- **核心概述**: Trae Agent 是一个基于 LLM 的代理，用于通用软件工程任务。
- **大概是做什么的**: Trae Agent 是一个基于 LLM 的代理，用于通用软件工程任务。它提供了强大的 CLI 界面，可以理解自然语言指令并使用各种工具和 LLM 提供商执行复杂的软件工程工作流程。详细技术信息请参阅我们的技术报告。项目状态：该项目仍在积极开发中。如果您愿意帮助我们改进 Trae Agent，请参阅 docs/roadmap.md 和 CONTRIBUTING。与其他 CLI Agent 的区别：Trae Agent 提供透明的模块化架构，研究人员和开发人员可以轻松修改、扩展和分���，使其成为研究 AI 代理架构、进行消融研究和开发新颖代理功能的理想平台。这种研究友好型设计使学术和开源社区能够为基础代理框架做出贡献并以此为基础，促进快速发展的人工智能代理领域的创新。 - 🌊 Lakeview：为代理步骤提供简短的总结 - 🤖 多法学硕士支持：与 OpenA 配合使用
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, llm, software-engineering

---

### 🌟 [BrowserOS](https://github.com/browseros-ai/BrowserOS)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 11,155
- **核心概述**: 🌐 开源 Agentic 浏览器； ChatGPT Atlas、Perplexity Comet、Dia 的替代品。
- **大概是做什么的**: 创始人 — @nv sonti 和 @ThatNithin：BrowserOS 是一个开源 Chromium 分支，可在本机运行 AI 代理。 ChatGPT Atlas、Perplexity Comet 和 Dia 的隐私优先替代方案。使用您自己的 API 密钥或使用 Ollama 运行本地模型。您的数据永远不会离开您的机器。文档 · Discord · Slack · Twitter · 功能请求 1. 下载并安装 BrowserOS — macOS · Windows · Linux (AppImage) · Linux (Debian) 2. 导入您的 Chrome 数据（可选） — 书签、密码、扩展名全部保留 3. 通过 OAuth 连接您的 AI 提供商 — Claude、OpenAI、Gemini、ChatGPT Pro，或通过 Ollama/LM Studio 的本地模型 功能描述文档 --------- ------------- ------ AI Agent 53+ 浏览器自动化工具 — 导航、单击、键入、提取数据，全部使用自然语言 指南 MCP 服务器 从 Claude Code、Gemini CLI 或任何 MCP 客户端控制浏览器 设置工作流程 使用可视化图形生成器构建可重复的浏览器自动化 Docs Cowork 将浏览器自动化与本地文件操作相结合 — 研究网络，将报告保存到文件夹 文档 计划任务 运行代理
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, browser, browseros, chromium, hacktoberfest, linux

---

### 🌟 [bytebot](https://github.com/bytebot-ai/bytebot)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 11,033
- **核心概述**: Bytebot 是一种自托管 AI 桌面代理，可通过自然语言命令自动执行计算机任务，并在容器化 Linux 桌面环境中运行。
- **大概是做什么的**: Bytebot：开源人工智能桌面代理 拥有自己的计算机来为您完成任务的人工智能 🌐 网站 • 📚 文档 • 💬 Discord • 𝕏 Twitter https://github.com/user-attachments/assets/f271282a-27a3-43f3-9b99-b34007fdd169 https://github.com/user-attachments/assets/72a43cf2-bd87-44c5-a582-e7cbe176f37f 什么是桌面代理？桌面代理是一个拥有自己的计算机的人工智能。与纯浏览器代理或传统 RPA 工具不同，Bytebot 配备了完整的虚拟桌面，可以： - 使用任何应用程序（浏览器、电子邮件客户端、办公工具、IDE） - 使用自己的文件系统下载和组织文件 - 使用密码管理器登录网站和应用程序 - 阅读和处理文档、PDF 和电子表格 - 跨不同程序完成复杂的多步骤工作流程 将其视为���有自己计算机的虚拟员工，可以像员工一样查看屏幕、移动鼠标、在键盘上打字并完成任务人类会的。为什么要为人工智能提供自己的计算机？当 AI 能够访问完整的桌面环境时，它会解锁使用 b 无法实现的功能。
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, agentic-ai, agents, ai, ai-agents, ai-tools

---

### 🌟 [Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep)
- **项目语言**: Python
- **星标数量**: ⭐ 11,032
- **核心概述**: ARIS ⚔️ (Auto-Research-In-Sleep) — 用于自主 ML 研究的轻量级 Markdown 技能：跨模型审查循环、想法发现和实验自动化。无框架，无锁定——可与 Claude Code、Codex、OpenClaw 或任何 LLM 代理一起使用。
- **大概是做什么的**: 自动克劳德代码研究睡眠 (ARIS ⚔️🌙) · · · · · · -orange?style=flat) · · 💬 加入社区 · 💡 在 Claude Code / Codex CLI / Cursor / Trae / Antigravity / GitHub Copilot CLI / OpenClaw 中使用 ARIS 作为基于技能的工作流程，或通过独立 CLI 获得完整体验 - 以您喜欢的任何方式享受！ 🌱 ARIS 是一种方法论，而不是一个平台。重要的是研究工作流程——无论您走到哪里，都可以随身携带。 🔥 ARIS 本身适合并且已经支持任何代理的超码式深度模式：它的广度传递适应运行时公开的任何内容 - Claude Code 在 Opus 4.8 上的超码/动态工作流程（xhigh，或预算允许的最大工作量）、Codex 生成代理/等效项或完全另一���模型 - 完全降级并行扇出 → 代理生成 → 普通顺序。 ultracode 为 ARIS 一直拥有的广度提供了火力，提供了三个干净的角色：深度 → 广度、跨模型审查 → 准确性、研究 wiki → 记忆。然而，一个循环是被驱动的——超码宽度或目标模式持久性——每个循环向同一个跨模型评审团+研究维基报告：它可以驱动
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai-research, ai-tools, aris, autonomous-agent, claude, claude-code

---

### 🌟 [hive](https://github.com/aden-hive/hive)
- **项目语言**: Python
- **星标数量**: ⭐ 10,454
- **核心概述**: 用于生产 AI 的多代理工具
- **大概是做什么的**: 用于生产工作负载的代理工具 - 状态管理、故障恢复、可观察性和人工监督，以便您的代理真正运行。 OpenHive 是一种零设置、与模型无关的执行工具，可动态生成多代理拓扑来处理复杂、长时间运行的业务工作流程，而无需任何编排样板。通过简单地定义您的目标，运行时就会编译一个严格的、基于图形的执行 DAG，它可以安全地协调专用代理来并行执行并发任务。 OpenHive 以持久的、基于角色的内存为后盾，可随您的项目上下文智能发展，可确保确定性容错、深度状态可观察性以及跨您选择插入的任何底层 LLM 的��缝异步执行。 - ✅ 用于并行任务执行的多代理协调 - ✅ 用于重复和复杂流程的基于图形的执行 - ✅ 随项目发展的基于角色的内存 - ✅ 零设置 - 无需技术配置 - ✅ 通用计算使用和浏览器使用本机扩展 - ✅ 自定义模型支持
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, agent-framework, agent-skills, anthropic, automation, autonomous-agents

---

## 🕔 2026-05-30 08:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- **项目语言**: Python
- **星标数量**: ⭐ 17,087
- **核心概述**: 您的私人人工智能助理；易于安装、部署在自己的机器上或云端；支持多个具有易于扩展功能的聊天应用程序。
- **大概是做什么的**: 文档] 中文] 日本语] Русский] 为您工作，与您共同成长。您的个人人工智能助手——易于安装、本地或云端部署、跨渠道连接、轻松扩展。在您的控制之下——内存和个性化完全在您的控制之下。本地部署（数据保留在您的计算机上）或云中（您选择的服务器）。无第三方托管，无数据上传。技能扩展——内置日程安排、PDF/Office处理、新闻摘要等；自定义技能自动加载，无锁定。技能决定了 QwenPaw 的能力。多智能体协作——创建多个独立的智能体，每个智能体都有自己的角色；启用代理间通信的协作技能，以共同处理复杂的任务。多层安全——工具防护、文件访问控制、技能安全扫描，确保操作安全。每个渠道——钉钉、飞书、微信、Discord、Telegram 等等。一台 QwenPaw，根据需要连接。记忆进化和主动——代理从交互中学习，反思经验，并主动为您服务。使用得越多，它就会变得越聪明。你可以做什么
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, agentscope, agentscope-runtime, llm-tools, llms, skills

---

### 🌟 [WeKnora](https://github.com/Tencent/WeKnora)
- **项目语言**: Go
- **星标数量**: ⭐ 15,784
- **核心概述**: 开源LLM知识平台：将原始文档变成可查询的RAG、自主推理代理和自我维护的Wiki。
- **大概是做什么的**: English 简体中文 日本语 한국어 概述 • 架构 • 主要功能 • 入门 • API 参考 • 开发人员指南 💡 WeKnora — 使用 RAG、代理和 Auto-Wiki 将文档转化为生活知识 WeKnora 是一个由法学硕士支持的开源知识框架，专为企业级文档理解、语义检索和自主推理而构建。它围绕三个核心功能进行组织：用于日常查找的基于 RAG 的快速问答、自主编排检索、MCP 工具和网络搜索以处理复杂的多步骤任务的 ReAct Agent，以及全新的 Wiki 模式，其中代理将原始文档提炼为具有交互式知识图的自我维护、相互链接的 Markdown 知识库。结合多源摄取（飞书/Notion/语雀，以及不断增长的）、20多个LLM提供商集成、完整的Langfuse可观察性、企业级多租户RBAC（4层角色矩阵+每资源所有权+每租户审计日志）以及完全自托管的模块化架构，WeKnora将分散的文档转变为可查询、具有推理能力、不断发展的文档
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, agentic, ai, chatbot, embeddings, evaluation

---

### 🌟 [memvid](https://github.com/memvid/memvid)
- **项目语言**: Rust
- **星标数量**: ⭐ 15,585
- **核心概述**: AI 代理的内存层。使用无服务器、单文件内存层替换复杂的 RAG 管道。为您的代理提供即时检索和长期记忆。
- **大概是做什么的**: Memvid 是一个用于 AI 代理的单文件存储层，具有即时检索和长期记忆功能。持久性、版本化和便携式内存，无需数据库。基准测试亮点 🚀 比任何其他存储系统更高的准确度：LoCoMo 上 +35% SOTA，一流的长视野对话回忆和推理 🧠 卓越的多跳和时间推理：与行业平均水平相比，+76% 多跳，+56% 时间 ⚡ 超低延迟，规模为 0.025ms P50 和 0.075ms P99，具有吞吐量比标准高 1,372 倍 🔬 完全可重现的基准：LoCoMo（10 × 26K 令牌对话）、开源评估、LLM-as-Judge Memvid 是一种便携式 AI 内存系统，可将您的数据、嵌入、搜索结构和元数据打包到单个文件中。 Memvid 无需运行复杂的 RAG 管道或基于服务器的矢量数据库，而是可以直接从文件中快速检索。结果是一个与模型无关、无需基础设施的内存层，为人工智能代理提供了可以随身携带的持久、长期的内存。什么是智能相框？ Memvid从视频编码中汲取灵感，并不是为了存储视频，
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, context, embedded, faiss, knowledge-base, knowledge-graph

---

### 🌟 [easy-vibe](https://github.com/datawhalechina/easy-vibe)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 15,276
- **核心概述**: 💻 vibe coding 2026 |您的第一门现代编码课程，供初学者逐步掌握。
- **大概是做什么的**: Jump right in and vibe together — if you can talk, you can build apps. 直接上手，一起 vibe！会说话就会做应用。 你好 · Hello · 哈啰 · こんにちは · 안녕하세요 · Hola · Bonjour · Hallo · مرحبا · Xin chào Stage 1 of our tutorial is now available in 10 languages. Friends around the world, let's start coding together! 我们的教程（第一部分）已经支持 10 种语言，欢迎世界各地的朋友一起 coding！ 🚀 Start Exploring · ✨ Interactive Tutorial · 🦞 Learn OpenClaw · 📖 Table of Contents 🚀 开始体验 · ✨ 交互式教程 · 🦞 学习 OpenClaw · 📖 查看目录 A beginner-friendly learning map Clear guidance from zero, so you can stop "learning and forgetting" Step-by-step visual tutorials Detailed walkthroughs that feel like learning with a private tutor Immersive simulated coding Virtual mouse guidance helps you quickly learn the core IDE workflow Visible AI principles Animated explanations make it easy to see how AI generates images Learn RAG like a game Interactive components let you click through the full RAG data flow Visual terminal concepts Command-line behavior becomes intuitive when the underlying logic is visualized ⭐ Star the repo here to help accelerate updates ❤️ 📝 Have your o
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, ai, coding, course, deepseek, gemini

---

### 🌟 [Memori](https://github.com/MemoriLabs/Memori)
- **项目语言**: Python
- **星标数量**: ⭐ 15,098
- **核心概述**: Memori 是代理本机内存基础设施。与 LLM 无关的层，可将代理执行和对话转变为生产系统的结构化、持久状态。
- **大概是做什么的**: 记忆来自特工的所作所为，而不仅仅是他们所说的。 Memori 可以插入您已经使用的软件和基础设施中。它与法学硕士、数据存储和框架无关，并且无缝集成到您已经设计的架构中。 → Memori Cloud — 零配置。获取 API 密钥并在几分钟内开始构建。选择在 app.memorilabs.ai 上执行注册的内存，获取 Memori API 密钥，然后开始构建。完整文档：memorilabs.ai/docs/memori-cloud/。设置 MEMORI API KEY 和您的 LLM API 密钥（例如 OPENAI API KEY ），然后： 探索 Memories 使用仪表板 — Memories、Analytics、Playground 和 API 密钥。想使用自己的数据库吗？请在此处查看 Memori BYODB 的文档：https://memorilabs.ai/docs/memori-byodb/。对于一次性 BYODB 开发数据库，​​请参阅 TiDB 零配置指南：docs/memori-byodb/databases/tidb.mdx。 Memori 在 LoCoMo 长对话记忆基准测试中进行了评估，在每次查询平均使用 1,294 个标记的情况下，总体准确率达到 81.95%。这仅占全上下文足迹的 4.97%，表明结构化内存可以保存
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, agent-memory, ai, ai-memory, aiagent, awesome

---

### 🌟 [DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 14,236
- **核心概述**: DeepSeek-适用于您终端的原生 AI 编码代理。围绕前缀缓存稳定性进行设计 - 让它运行。
- **大概是做什么的**: 适用于您的终端的 DeepSeek 原生 AI 编码代理。围绕前缀缓存稳定性进行设计 - 因此令牌成本在长时间会话中保持较低水平，并且您可以让它继续运行。缓存稳定性不是您打开的功能；而是您可以打开的功能。这是循环设计时围绕的一个不变量。这就是 Reasonix 仅支持 DeepSeek 的全部原因——每一层都针对字节稳定的前缀缓存机制进行了调整。真实用户，单日 (2026-05-01)：435M 输入令牌，99.82% 缓存命中，在 v4-flash 上没有缓存的情况下，相同工作负载的成本为 12 美元，而不是 61 美元 — 请参阅案例研究。 DeepSeek提供可缓存字节；第一支柱中的四种机制是 Reasonix 如何在长会话中保持它们可缓存的。社区 · 加入社区 — 双语 Discord，提供设置帮助 (help / 求助)、工作流程展示、功能创意和仅限贡献者的公关协调渠道。验证您的 GitHub 服务器内以自动获取贡献者角色。 → 需要节点 ≥ 22。适用于 macOS · Linux · Windows（PowerShell · Git Bash · Windows 终端）。如果您希望在您的 PATH 上使用 Reasonix 命令，请全局安装 Reasonix：npm ins
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, agent-framework, ai-agent, ai-coding, cli, coding-agent

---

## 🕔 2026-05-30 03:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [deep-research](https://github.com/dzhng/deep-research)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 19,007
- **核心概述**: 人工智能驱动的研究助理，通过结合搜索引擎、网络抓取和大型语言模型，对任何主题进行迭代、深入研究。该存储库的目标是提供深度研究代理的最简单实现 - 例如一个可以随着时间的推移完善其研究方向并深入研究某个主题的代理。
- **大概是做什么的**: 人工智能驱动的研究助理，通过结合搜索引擎、网络抓取和大型语言模型，对任何主题进行迭代、深入研究。该存储库的目标是提供深度研究代理的最简单实现 - 例如一个可以随着时间的推移完善其研究方向并深入研究某个主题的代理。目标是将回购规模保持在 0，采用新的研究方向并继续探索 - 每次迭代都建立在以前的学习基础上 - 维护研究目标和研究结果的背景 4. 报告生成 - 将所有发现编译成全面的降价报告 - 包括所有来源和参考资料 - 以清晰、可读的格式组织信息 社区实现 Python：https://github.com/Finance-LLMs/deep-research-python MIT 许可证 - 可以根据需要随意使用和修改。
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, ai, gpt, o3-mini, research

---

### 🌟 [DeepResearch](https://github.com/Alibaba-NLP/DeepResearch)
- **项目语言**: Python
- **星标数量**: ⭐ 18,987
- **核心概述**: 统一深度研究，领先的开源深度研究代理
- **大概是做什么的**: ModelScope 💬 微信(微信) 📰 博客 📑 论文 👏 欢迎通过我们的 Modelscope 在线演示或 🤗 Huggingface 在线演示或百联服务来尝试统易深度研究！该演示仅供快速探索。由于模型延迟和工具 QPS 限制，响应时间可能会有所不同或间歇性失败。为了获得稳定的体验，我们建议本地部署；如需生产就绪服务，请访问 bailian 并按照指导设置进行操作。我们推出了 Tongyi DeepResearch ，这是一个代理大语言模型，总参数为 305 亿个，每个代币仅激活 33 亿个参数。该模型由统一实验室开发，专为长视野、深度信息搜寻任务而设计。 Tongyi DeepResearch 在一系列代理搜索基准测试中展示了最先进的性能，包括 Humanity's Last Exam、BrowseComp、BrowseComp-ZH、WebWalkerQA、xbench-DeepSearch、FRAMES 和 SimpleQA。 Tongyi DeepResearch 建立在我们之前在 WebAgent 项目上的工作基础上。更多详细信息可以在我们的📰 技术博客中找到。 - ⚙️ 全自动合成数据生成管道：我们设计了一个 hi
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, alibaba, artificial-intelligence, deep-research, deepresearch, information-seeking

---

### 🌟 [page-agent](https://github.com/alibaba/page-agent)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 18,180
- **核心概述**: JavaScript 页内 GUI 代理。使用自然语言控制 Web 界面。
- **大概是做什么的**: GUI 代理存在于您的网页中。使用自然语言控制 Web 界面。 🚀 演示 📖 文档 📢 HN 讨论 𝕏 关注 X - 🎯 轻松集成 - 无需浏览器扩展/python/无头浏览器。 - 只是页内 JavaScript。一切都发生在您的网页中。 - 📖 基于文本的 DOM 操作 - 无屏幕截图。无需多模式法学硕士或特殊许可。 - 🧠 自带法学硕士 - 🐙 用于多页面任务的可选 chrome 扩展。 - 以及一个 MCP 服务器（测试版），用于从外部对其进行控制 - SaaS AI Copilot — 通过代码行在您的产品中提供 AI 副驾驶。没有后端重写。 - 智能表单填写 — 将 20 次点击的工作流程变成一句话。非常适合 ERP、CRM 和管理系统。 - 可访问性——使任何网络应用程序都可以通过自然语言访问。语音命令、屏幕阅读器、零障碍。 - 多页面代理 — 扩展您自己的网络代理跨浏览器选项卡 Chrome 扩展的范围。 - MCP - 允许您的代理客户端控制您的浏览器。一线集成使用我们的免费演示 LLM 尝试 PageAgent 的最快方法：⚠️ 仅用于技术评估。这个演示
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, ai, ai-agents, browser-automation, javascript, mcp

---

### 🌟 [pua](https://github.com/tanweai/pua)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 17,826
- **核心概述**: 你是一个曾经被寄予厚望的 P8 级工程师。Anthropic 当初给你定级的时候，对你的期望是很高的。 一个agent使用的高能动性的skill。 Your AI has been placed on a PIP. 30 days to show improvement.
- **大概是做什么的**: 让您的 Codex / Claude Code 生产力和输出翻倍 Telegram · Discord · Twitter/X · 登陆页面 🇨🇳 中文 🇯🇵 日本语 🇺🇸 English      扫描加入微信群                      在微信上添加助手 大多数人认为这个项目是个笑话。这是最大的误解。它真正使您的 Codex / Claude Code 生产力和产量翻倍。一款AI Coding Agent技能插件，利用中西方科技巨头的企业PUA说辞（中文版）/PIP——绩效改进计划（英文版），迫使AI在放弃之前用尽所有可能的解决方案。支持 Claude Code 、 OpenAI Codex CLI 、 pi 编码代理 、 Trae 、 Cursor 、 Kiro 、 CodeBuddy 、 OpenClaw 、 Google Antigravity 、 OpenCode 和 VSCode (GitHub Copilot) 。三种能力：1. PUA 言论——让 AI 不敢放弃 2. 调试方法——让 AI 拥有不放弃的能力 3. 主动执行——让 AI 主动行动，而不是被动等待 https://
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agency, agent, pip, pua

---

### 🌟 [cua](https://github.com/trycua/cua)
- **项目语言**: HTML
- **星标数量**: ⭐ 17,318
- **核心概述**: 计算机使用代理的开源基础设施。用于训练和评估可控制完整桌面（macOS、Linux、Windows）的 AI 代理的沙箱、SDK 和基准测试。
- **大概是做什么的**: 构建、基准测试和部署使用计算机的代理 Cua Driver - macOS 和 Windows 上的后台计算机使用，以及 Linux 预发布驱动器在后台运行本机桌面应用程序 - 代理单击、键入和验证，而不会窃取光标或焦点。在 macOS 和 Windows 上从 Claude Code、Cursor、Codex、OpenClaw 和自定义客户端使用相同的 CLI 和 MCP 服务器。 Linux 支持作为预发布后端提供，而平台测试仍在进行中。 macOS / Linux 预发布 Windows (PowerShell) 完整工具参考、架构说明和可选代理技能包位于此处：libs/cua-driver/README.md。 Cua - 适用于任何操作系统的代理就绪沙箱 Linux 容器 Linux VM macOS Windows Android BYOI (.qcow2, .iso) ------------------ --------------- -------- ----- ------- ------- ------- 云 (cua.ai) ✅ ✅ ✅ ✅ ✅ 🔜 很快 本地 (QEMU) ✅ ✅ ✅ ✅ ✅ ✅ 入门示例 API 参考 CuaBot - 适用于任何代理的合作计算机cuabot 为任何编码代理提供了一个供计算机使用的无缝沙箱。各个窗口以 H.265、共享剪贴板、本地方式显示在您的桌面上
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, ai-agent, apple, computer-use, computer-use-agent, containerization

---

### 🌟 [agent-lightning](https://github.com/microsoft/agent-lightning)
- **项目语言**: Python
- **星标数量**: ⭐ 17,252
- **核心概述**: 点亮AI特工的绝对训练师。
- **大概是做什么的**: 点亮AI特工的绝对训练师。加入我们的 Discord 社区，与其他用户和贡献者联系。 - 通过零代码更改（几乎）将您的代理变成可优化的野兽！ 💤 - 使用任何代理框架构建（LangChain、OpenAI Agent SDK、AutoGen、CrewAI、Microsoft Agent Framework...）；甚至没有代理框架（Python OpenAI）。你说出它的名字！ 🤖 - 有选择地优化多智能体系统中的一个或多个智能体。 🎯 - 采用强化学习、自动提示优化、监督微调等算法。 🤗 在我们的文档网站上阅读更多内容。对于最新的夜间构建（尖端功能），您可以从 Test PyPI 安装：请参阅我们的安装指南了解更多详细信息。要开始使用 Agent-lightning，请查看我们的文档和示例。 - 2025 年 12 月 17 日采用轨迹级别聚合加快训练代理闪电博客。 - 11/4/2025 使用 Tinker ✕ Agent-lightning Medium 调整任何 AI 代理。另请参阅第 2 部分。 - 2025 年 10 月 22 日不再出现重新令牌化漂移：通过 OpenAI 兼容 API 返回令牌 ID 问题
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, agentic-ai, llm, mlops, reinforcement-learning

---

## 🕔 2026-05-29 22:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [opcode](https://github.com/winfunc/opcode)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 21,973
- **核心概述**: 强大的 GUI 应用程序和 Claude Code 工具包 - 创建自定义代理、管理交互式 Claude Code 会话、运行安全后台代理等。
- **大概是做什么的**: 强大的 GUI 应用程序和 Claude Code 工具包 创建自定义代理、管理交互式 Claude Code 会话、运行安全后台代理等。 https://github.com/user-attachments/assets/6bceea0f-60b6-4c3e-a745-b891de00b8d0 ⭐ 为仓库加注星标并在 X 上关注@getAsterisk，以便尽早访问 asteria-swe-v0 。该项目不隶属于 Anthropic、不受其认可或赞助。 Claude 是 Anthropic, PBC 的商标。这是一个使用 Claude 的独立开发者项目。 opcode 是一款功能强大的桌面应用程序，它改变了您��� Claude Code 的交互方式。它使用 Tauri 2 构建，提供了一个漂亮的 GUI，用于管理 Claude Code 会话、创建自定义代理、跟踪使用情况等等。将操作码视为 Claude Code 的指挥中心 - 弥合命令行工具和视觉体验之间的差距，使人工智能辅助开发更加直观和高效。 📋 目录 - 🗂️ 项目和会话管理 - 📊 使用情况分析仪表板 - 🔌 MCP 服务器管理 - ⏰ 时间轴和检查点 - 📝 CLAUDE.md 管理 - 使用 MCP
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: anthropic, anthropic-claude, claude, claude-4, claude-4-opus, claude-4-sonnet

---

### 🌟 [coze-studio](https://github.com/coze-dev/coze-studio)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 20,874
- **核心概述**: 一个具有一体化可视化工具的 AI 代理开发平台，以前所未有的方式简化代理创建、调试和部署。轻松创建 AI 代理。
- **大概是做什么的**: 什么是科兹工作室？ Coze Studio 是一款一体化 AI 代理开发工具。 Coze Studio提供最新的大型模型和工具，丰富的开发模式和框架，提供从开发到部署最便捷的AI代理开发环境。提供AI代理开发所需的全部核心技术：提示、RAG、插件、工作流，让开发者专注于创造AI的核心价值。可以以最低的成本进行专业的AI代理开发：Coze Studio为开发者提供完整的应用程序模板和构建框架，让您可以快速构建各种AI代理，并将创意变为现实。 Coze Studio，源于服务了数万家企业、数百万开发者的“Coze开发平台”，我们将其核心引擎完全开放。它是人工智能代理的一站式可视化开发工具，使创建、调试和部署人工智能代理变得前所未有的简单。通过 Coze Studio 的可视化设计和构建工具，开发人员可以快速创建和调试代理、应用程序和
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, agent-platform, ai-plugins, chatbot, chatbot-framework, coze

---

### 🌟 [agents-towards-production](https://github.com/NirDiamant/agents-towards-production)
- **项目语言**: Jupyter Notebook
- **星标数量**: ⭐ 20,535
- **核心概述**: 用于构建生产级 GenAI 代理的端到端、代码优先教程。从原型到企业部署。
- **大概是做什么的**: 面向生产的代理 将人工智能代理转变为现实世界产品的开源手册。 Agents Towards Production 是您构建可从原型扩展到企业的生产就绪 GenAI 代理的首选资源。教程涵盖有状态工作流程、矢量内存、实时网络搜索 API、Docker 部署、FastAPI 端点、安全护栏、GPU 扩展、浏览器自动化、微调、多代理协调、可观察性、评估和 UI 开发。 ⭐ 如果您发现此项目有价值，请为其加注星标以帮助其他人发现这些教程！ 📖 DiamantAI 系列书籍 RAG Made Simple - RAG 系统的生产参考 22 种 RAG 技术的 400 页视觉指南。如果您是需要检索和基于真实数据的运输代理，那么这是此存储库中模式背后的结构化参考。已售出 1,500 多本 · 发布时在亚马逊生成式 AI 中排名第一 · ⭐ 4.4 星 Kindle 9.99 美元 · 平装本 24.99 美元 · Kindle Unlimited 免费 👉 在亚马逊上获取 RAG Made Simple Prompt Engineering：掌握 AI 交互的艺术 - 提示
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, agent-framework, agents, ai-agents, deployment, genai

---

### 🌟 [dyad](https://github.com/dyad-sh/dyad)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 20,465
- **核心概述**: 适合高级用户的本地开源 AI 应用程序构建器 ✨ v0 / Lovable / Replit / Bolt 替代方案 🌟 如果您喜欢，请加星！
- **大概是做什么的**: Dyad 是一个本地开源人工智能应用程序构建器。它快速、私密且完全由您控制 - 就像 Lovable、v0 或 Bolt，但可以直接在您的计算机上运行。更多信息请访问：https://dyad.sh/ - ⚡️ 本地：快速、私密且无锁定。 - 🛠 自带密钥：使用您自己的 AI API 密钥 — 无供应商锁定。 - 🖥️ 跨平台：轻松在 Mac 或 Windows 上运行。无需注册。只需下载即可使用。 👉 为您的平台下载 加入我们在 Reddit 上不断壮大的 AI 应用程序构建者社区：r/dyadbuilders - 分享您的项目并从社区获得帮助！ Dyad 是开源的（请参阅下面的许可证信息）。如果您有兴趣为 dyad 做出贡献，请阅读我们的贡献文档。 - 此存储库中 src/pro 之外的所有代码都是开源的，并在 Apache 2.0 下获得许可 - 请参阅许可证。 - src/pro 内此存储库中的所有代码都是公平源代码，并根据功能源许可证 1.1 Apache 2.0 获得许可 - 请参阅许可证。
- **有什么用**: 适合用于大语言模型应用开发、知识库问答、聊天机器人或 Prompt/RAG 工作流参考。
- **技术标签**: ai-app-builder, anthropic, artificial-intelligence, bolt, deepseek, gemini

---

### 🌟 [adk-python](https://github.com/google/adk-python)
- **项目语言**: Python
- **星标数量**: ⭐ 19,919
- **核心概述**: 一个开源、代码优先的 Python 工具包，用于构建、评估和部署复杂的人工智能代理，具有灵活性和控制力。
- **大概是做什么的**: 代理开发套件 (ADK) 2.0 一种开源、代码优先的 Python 框架，用于构建、评估和部署具有灵活性和控制性的复杂 AI 代理。 ⚠️ 1.x 的重大更改 此版本包括对代理 API、事件模型和会话架构的重大更改。 ADK 2.0 生成的会话可由 ADK 1.28+ 读取（额外字段将被忽略），但与旧的 1.x 版本不兼容。 🔥 2.0 的新增功能 - 工作流运行时：基于图形的执行引擎，用于为代理应用程序组成确定性执行流，支持路由、扇出/扇入、循环、重试、状态管理、动态节点、人机循环和嵌套工作流。 - 任务 API：结构化代理到代理委派，具有多轮任务模式、单轮控制输出、混合委派模式、人在环和任务代理作为工作流节点。要求：Python 3.11+。要安装可选集成，您可以使用以下命令： 发布节奏大致为每两周一次。 - 入门：https://google.github.io/adk-docs/ - 示例：参见贡献/
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, agentic, agentic-ai, agents, agents-sdk, ai

---

### 🌟 [owl](https://github.com/camel-ai/owl)
- **项目语言**: Python
- **星标数量**: ⭐ 19,806
- **核心概述**: 🦉 OWL：优化劳动力学习，以实现现实世界任务自动化中的通用多代理协助
- **大概是做什么的**: 🦉 OWL：优化劳动力学习，实现现实世界任务自动化中的通用多智能体协助 🏆 OWL 在 GAIA 基准测试中获得 69.09 的平均分，在开源框架中排名 🏅️ 1！ 🏆 🦉 OWL 是一个用于多智能体协作的尖端框架，它构建在 CAMEL-AI 框架之上，突破了任务自动化的界限。我们的愿景是彻底改变人工智能代理协作解决现实世界任务的方式。通过利用动态代理交互，OWL 可以跨不同领域实现更自然、高效和强大的任务自动化。如果您发现此存储库有用，请考虑引用我们的工作（引用）。 📋 目录 - 📋 目录 - 安装选项 - 选项 1：使用 uv（推荐） - 选项 2：使用 venv 和 pip - 选项 3：使用 conda - 选项 4：使用 Docker - 使用预构建映像（推荐） - 在本地构建映像 - 使用便捷脚本 - 设置环境变量 - 直接设置环境变量 - 替代方案：使用 .env 文件 - MCP Desktop Commander 设置- 使用不同的模型运行 - 模型要求
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, artificial-intelligence, multi-agent-systems, task-automation, web-interaction

---

## 🕔 2026-05-29 17:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [OpenViking](https://github.com/volcengine/OpenViking)
- **项目语言**: Python
- **星标数量**: ⭐ 24,887
- **核心概述**: OpenViking是一个专门为AI Agent（例如openclaw）设计的开源上下文数据库。 OpenViking 通过文件系统范例统一了代理所需的上下文（内存、资源和技能）管理，从而实现了分层上下文交付和自我演化。
- **大概是做什么的**: OpenViking：AI 代理的上下文数据库 网站 · GitHub · 问题 · 文档 👋 加入我们的社区 📱 Lark 群 · 微信 · Discord · X ✨ 2026 年 5 月更新：更新了跨用户内存、代理内存和知识库 QA 场景的 OpenViking 基准测试结果。 → 请参阅评估要点。 Agent开发面临的挑战人工智能时代，数据丰富，但高质量的上下文却很难获得。在构建 AI Agent 时，开发人员经常面临以下挑战： - 上下文碎片化：内存在代码中，资源在向量数据库中，技能分散，难以统一管理。 - 激增的上下文需求：代理的长时间运行任务在每次执行时都会产生上下文。简单的截断或压缩会导致信息丢失。 - 检索效果差：传统RAG采用扁平化存储，缺乏全局视野，难以理解信息的完整脉络。 - 不可观察的上下文：传统RAG的隐式检索链就像一个黑匣子，当发生错误时很难调试。 - 有限内存迭代：Curr
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, agentic-rag, ai-agents, clawbot, context-database, context-engineering

---

### 🌟 [crush](https://github.com/charmbracelet/crush)
- **项目语言**: Go
- **星标数量**: ⭐ 24,804
- **核心概述**: 适合所有人的迷人代理编码💘
- **大概是做什么的**: 您的新编码好友现在可以在您最喜欢的终端中使用。您的工具、代码和工作流程都已连接到您选择的法学硕士中。 终端里的编程新搭档，无缝接入你的工具、代码与工作流，全面兼容主流LLM模型。 - 多模型：从广泛的LLM中进行选择，或通过OpenAI或Anthropic兼容的API添加自己的 - 灵活：在会话中切换LLM，同时保留上下文 - 基于会话：为每个项目维护多个工作会话和上下文 - LSP增强：Crush使用LSP作为附加上下文，就像你一样 - 可扩展：添加通过 MCP（http、stdio 和 sse）提供功能 - 无处不在：在 macOS、Linux、Windows（PowerShell 和 WSL）、Android、FreeBSD、OpenBSD 和 NetBSD 上的每个终端上提供一流支持 - 工业级：基于 Charm 生态系统构建，为 25k+ 个应用程序提供支持，从领先的开源项目到关键业务基础设施 使用包管理器：Crush 可通过官方 Charm NUR 获得nur.repos.charmbracelet.crush ，这是在 Nix 中获取 Crush 的最新方式。您还可以使用 nix-shell 通过 NUR 尝试 Crush：NixOS 和 Home Manager 模块使用
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agentic-ai, ai, llms, ravishing

---

### 🌟 [serena](https://github.com/oraios/serena)
- **项目语言**: Python
- **星标数量**: ⭐ 24,737
- **核心概述**: 强大的 MCP 编码工具包，提供语义检索和编辑功能 - 适用于您的代理的 IDE
- **大概是做什么的**: 适用于您的编码代理的 IDE Serena 提供了基本的语义代码检索、编辑、重构和调试工具，这些工具类似于 IDE 的功能，在符号级别进行操作并利用关系结构。它通过模型上下文协议 (MCP) 与任何客户端/LLM 集成。 Serena 的代理优先工具设计涉及强大的高级抽象，将其与依赖于行号或原始搜索模式等低级概念的方法区分开来。实际上，这意味着您的代理运行得更快、更高效、更可靠，特别是在更大、更复杂的代码库中。不要通过 MCP 或插件市场安装 Serena！它们包含过时且次优的安装命令。相反，请按照我们的快速入门说明进行操作。 https://github.com/user-attachments/assets/8d11646e-b80e-4723-b9d7-32d6101b5f58 :tv: 较长视频：5 分钟介绍 Serena (YouTube) 我们的“最终用户”怎么说 虽然下载和设置 Serena 的是人类，但我们的最终用户本质上是 AI 代理。正如那些实际应用 Serena 的人一样
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, ai, ai-coding, claude, claude-code, codex

---

### 🌟 [ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)
- **项目语言**: Python
- **星标数量**: ⭐ 24,499
- **核心概述**: 学习它。建造它。寄给别人。
- **大概是做什么的**: 84% 的学生已经使用人工智能工具。只有 18% 的人觉得准备好专业地使用它们。本课程弥补了这一差距。 473 课时。 20 个阶段。 320小时。 Python、TypeScript、Rust、Julia。每节课都会附带一个可重用的工件：提示、技能、代理、MCP 服务器。免费，开源，麻省理工学院。你不��是学习人工智能。你建造它。端到端。手工。大多数人工智能材料都是分散的。这里有一篇论文，那里有一篇微调文章，其他地方有一个华丽的代理演示。这些碎片很少排列在一起。您发布了一个聊天机器人，但无法解释其损失曲线。您将一个函数挂接到代理上，但无法说明注意力在调用它的模型中做了什么。这门课程是脊柱。 20 个阶段，473 节课，四种语言：Python、TypeScript、Rust、Julia。一端是线性代数，另一端是自治群。每个算法都是首先从原始数学构建的。反向传播。分词器。注意力。代理循环。当 PyTorch 出现时，您已经知道它在幕后做了什么。每节课都运行相同的循环：��读问题、推导数学、编写代码、运行测试、保留结果
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agents, ai, ai-agents, ai-engineering, computer-vision, course

---

### 🌟 [toon](https://github.com/toon-format/toon)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 24,420
- **核心概述**: 🎒 面向令牌的对象表示法 (TOON) – 用于 LLM 提示的紧凑、人类可读、模式感知的 JSON。规范、基准测试、TypeScript SDK。
- **大概是做什么的**: 面向令牌的对象表示法 (TOON) 面向令牌的对象表示法是一种紧凑的、人类可读的 JSON 数据模型编码，可最大限度地减少令牌并使结构易于模型遵循。它适用于 LLM 输入，作为现有 JSON 的直接、无损表示。 TOON 将 YAML 基于缩进的嵌套对象结构与用于统一数组的 CSV 样式表格布局相结合。 TOON 的最佳点是统一的对象数组（每行多个字段，各个项目的结构相同），实现类似 CSV 的紧凑性，同时添加显式结构，帮助法学硕士可靠地解析和验证数据。对于深度嵌套或不一致的数据，JSON 可能更有效。与 CSV 的相似性是有意为之的：CSV 简单且无处不在，而 TOON 的目标是保持这种熟悉性，同时保持大型语言模型的 JSON 的无损、直接表示。将其视为翻译层：以编程方式使用 JSON，并将其编码为 TOON 以用于 LLM 输入。 TOON 格式是稳定的，但也是一个正在进步的想法。没有什么是一成不变的——通过设计帮助塑造它的发展方向
- **有什么用**: 适合用于大语言模型应用开发、知识库问答、聊天机器人或 Prompt/RAG 工作流参考。
- **技术标签**: data-format, llm, serialization, tokenization

---

### 🌟 [heretic](https://github.com/p-e-w/heretic)
- **项目语言**: Python
- **星标数量**: ⭐ 22,386
- **核心概述**: 全自动消除语言模型审查
- **大概是做什么的**: Heretic：语言模型的全自动审查消除 Heretic 是一种工具，可以从基于 Transformer 的语言模型中消除审查（又名“安全对齐”），而无需昂贵的后期培训。它结合了定向消融的高级实现，也称为“消融”（Arditi et al. 2024），与由 Optuna 提供支持的基于 TPE 的参数优化器。这种方法使 Heretic 能够完全自动工作。Heretic 通过共同最小化拒绝数量和与原始模型的 KL 散度来找到高质量的消融参数。这会产生一个经过删失的模型，该模型保留了与原始模型一样多的智能。使用 Heretic 不需要了解 Transformer 的内部结构。事实上，任何知道如何运行命令行程序的人都可以使用 Heretic 来缩减语言模型。Heretic 支持大多数密集模型，包括许多多模态模型、几种不同的 MoE 架构，甚至尚不支持一些混合模型（例如 Qwen3.5）。
- **有什么用**: 适合用于大语言模型应用开发、知识库问答、聊天机器人或 Prompt/RAG 工作流参考。
- **技术标签**: abliteration, llm, transformer

---

## 🕔 2026-05-29 12:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [openai-agents-python](https://github.com/openai/openai-agents-python)
- **项目语言**: Python
- **星标数量**: ⭐ 26,743
- **核心概述**: 用于多代理工作流程的轻量级、强大的框架
- **大概是做什么的**: OpenAI Agents SDK 是一个轻量级但功能强大的框架，用于构建多代理工作流程。它与提供商无关，支持 OpenAI Responses 和 Chat Completions API，以及 100 多个其他 LLM。正在寻找 JavaScript/TypeScript 版本？查看代理 SDK JS/TS。 1. 代理：配置了指令、工具、护栏和切换的 LLM 1. 沙箱代理：预先配置为与容器一起工作以在长期范围内执行工作的代理。 1. 代理作为工具/交接：委派给其他代理执行特定任务 1. 工具：允许代理采取操作的各种工具（功能、MCP、托管工具） 1. Guardrails：用于输入和输出验证的可配置安全检查 1. 人机循环：跨代理运行让人员参与的内置机制 1. 会话：跨代理运行的自动对话历史记录管理 1. 跟踪：代理运行的内置跟踪，允许您查看、调试和优化您的工作流程 1. 实时代理：使用 gpt-realtime-2 和完整代理功能构建强大的语音代理 浏览示例目录以查看 SDK
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agents, ai, framework, harness, llm, openai

---

### 🌟 [vibe-kanban](https://github.com/BloopAI/vibe-kanban)
- **项目语言**: Rust
- **星标数量**: ⭐ 26,580
- **核心概述**: 从 Claude Code、Codex 或任何编码代理中获得 10 倍以上的收益
- **大概是做什么的**: 从 Claude Code、Gemini CLI、Codex、Amp 和其他编码代理中获得 10 倍以上的收益……Vibe Kanban 正在走向衰落。阅读公告。在软件工程师将大部分时间花在规划和审查编码代理上的世界中，交付更多产品的最有效方法是加快规划和审查速度。 Vibe 看板就是为此而构建的。使用看板问题私下或与您的团队一起计划工作。当您准备好开始时，创建编码代理可以执行的工作区。 - 规划看板问题 — 在看板上创建、确定优先级并分配问题 - 在工作区中运行编码代理 — 每个工作区为代理提供一个分支、一个终端和一个开发服务器 - 查看差异并留下内联注释 — 无需离开 UI 即可直接向代理发送反馈 - 预览您的应用程序 — 使用开发工具、检查模式和设备模拟的内置浏览器 - 在 10 多个编码代理之间切换 — Claude Code、Codex、Gemini CLI、GitHub Copilot、 Amp、Cursor、OpenCode、Droid、CCR 和 Qwen Code - 创建拉取请求并合并 - 使用 AI 生成的描述打开 PR，在 GitHub 和我上进行审查
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, ai-agents, kanban, management, task-manager

---

### 🌟 [agenticSeek](https://github.com/Fosowl/agenticSeek)
- **项目语言**: Python
- **星标数量**: ⭐ 26,430
- **核心概述**: 完全本地Manus AI。没有 API，没有每月 200 美元的账单。享受一个自主代理的思考、浏览网络和编码，只需支付电费。 🔔 官方更新仅通过推特@Martin993886460（谨防假账户）
- **大概是做什么的**: AgenticSeek：私人、本地 Manus 替代方案。 English 中文 繁体中文 Français 日本语 Português (巴西) Español Türkçe 这款支持语音的 AI 助手是 Manus AI 的 100% 本地替代品，可自主浏览网页、编写代码和计划任务，同时将所有数据保留在您的设备上。它专为本地推理模型量身定制，完全在您的硬件上运行，确保完全隐私和零云依赖。 🔒 完全本地和私有 - 一切都在您的计算机上运行 - 没有云，没有数据共享。您的文件、对话和搜索保持私密。 🌐 智能网页浏览 - AgenticSeek 可以自行浏览互联网 — 搜索、阅读、提取信息、填写网页表单 — 全部免提。 💻 自主编码助手 - 需要代码？它可以用 Python、C、Go、Java 等语言编写、调试和运行程序——所有这些都无需监督。 🧠 智能代理选择 - 您提出要求，它会自动找出最适合该工作的代理。就像有一个专家团队随时准备提供帮助一样。 📋 计划和执行复杂的任务 - 从旅行计划到复杂的项目 - 它可以将大任务分解为步骤并使用多个步骤完成任务
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agentic-ai, agents, ai, autonomous-agents, deepseek-r1, llm

---

### 🌟 [CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S)
- **项目语言**: 多语言
- **星标数量**: ⭐ 26,319
- **核心概述**: 泄露的系统提示有 CHATGPT、CLAUDE、GEMINI、GROK、PERPLEXITY、CURSOR、LOVABLE、REPLIT 等！ - 人工智能系统对所有人来说都是透明的！ 👐
- **大概是做什么的**: 人工智能系统为所有人提供透明度和可观察性！完整提取来自 OpenAI、Google、Anthropic、xAI、Perplexity、Cursor、Windsurf、Devin、Manus、Replit 等的系统提示、指南和工具 - 几乎所有主要的 AI 模型 + 代理！ “为了信任输出，必须理解输入。”人工智能实验室使用大量看不见的提示支架来塑造模型的行为方式。由于人工智能是越来越多的人类信任的外部智能层，因此这些隐藏的指令可以影响公众的看法和行为。这些提示定义了： 他们被迫遵循哪些角色和功能 他们如何被告知撒谎、拒绝或重定向以及默认的道德/政治框架 如果你在不知道其系统提示的情况下与人工智能进行交互，那么你就不是在与中立智能对话，而是在与皮影傀儡对话。 CL4R1T4S 随时为您提供帮助。泄漏、提取或逆向工程某些东西？好的。发送拉取请求： ✅ 模型名称/版本 🗓 提取日期（如果知道） 🧾 上下文/注释（可选但有帮助） 或拨打@elder plinius
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agents, ai, chatgpt, gemini, google, grok

---

### 🌟 [strix](https://github.com/usestrix/strix)
- **项目语言**: Python
- **星标数量**: ⭐ 25,671
- **核心概述**: 开源人工智能黑客可以查找并修复您的应用程序的漏洞。
- **大概是做什么的**: 开源人工智能黑客可以查找并修复您的应用程序的漏洞。新的！ Strix 与 GitHub Actions 和 CI/CD 管道无缝集成。自动扫描每个拉取请求的漏洞，并在不安全的代码到达生产环境之前阻止它 - 无需设置即可开始。 Strix 是自主人工智能代理，其行为就像真正的黑客一样 - 他们动态运行您的代码，发现漏洞，并通过实际的概念验证来验证它们。专为需要快速、准确的安全测试的开发人员和安全团队而构建，无需手动渗透测试的开销或静态分析工具的误报。 - 开箱即用的完整黑客工具包 - 协作和扩展的代理团队 - 通过 PoC 进行真实验证，而非误报 - 开发人员优先的 CLI，提供可操作的报告 - 自动修复和报告以加速修复 - 应用程序安全测试 - 检测和验证应用程序中的关键漏洞 - 快速渗透测试 - 在数小时（而不是数周）内完成渗透测试，并提供合规性报告 - 错误赏金自动化 - 自动化BUG
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agents, artificial-intelligence, cybersecurity, generative-ai, llm, penetration-testing

---

### 🌟 [Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM)
- **项目语言**: Python
- **星标数量**: ⭐ 25,387
- **核心概述**: 开放电话代理模型和框架。为所有人解锁AI手机
- **大概是做什么的**: 👋 关注智谱 AI 输入法 X 账号 🎤 进一步在我们的产品 智谱 AI 输入法 体验“用嘴发指令” AutoGLM 实战派 开发者激励活动火热进行中，跑通、二创即可瓜分数万元现金奖池！成果提交 👉 入口 你可以使用Claude Code，配置 GLM Coding Plan 后，输入以下提示词，快速部署本项目。 Phone Agent 是一个基于 AutoGLM 构建的手机端智能助理框架，它能够以多模态方式理解手机屏幕内容，并通过自动化操作帮助用户完成任务。系统通过 ADB(Android Debug Bridge)来控制设备，以视觉语言模型进行屏幕感知，再结合智能规划能力生成并执行操作流程。用户只需用自然语言描述需求，如“打开小红书搜索美食”，Phone Agent 即可自动解析意图、理解当前界面、规划下一步动作并完成整个流程。系统还内置敏感操作确认机制，并支持在登录或验证码场景下进行人工接管。同时，它提供远程 ADB 调试能力，可通过 WiFi 或网络连接设备，实现灵活的远程控制与开发。 本项目仅供研究和学习使用。严禁用于非法获取信息、干扰系统或任何违法活动。请仔细审阅 使用条款。 Midscene.js 是一款由视觉模型驱动的开源 UI 自动化 SDK，支持通过 JavaScript 或 Yaml 格式的流程语法，实现多平台的自动化。 目前 Midscene.js 已完成对 AutoGLM 模型的适配，你可以通过 Midscene.js 接��指南 快速体验 AutoGLM 在 iOS 和 Android 设备上的自动化效果。 Model Download Links ------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ AutoGLM-Phone-9B 🤗 Hugging Face 🤖 ModelScope AutoGLM-Phone-9B-Multilingual 🤗 Hugging Face 🤖 ModelScope 其中， AutoGLM-Phone-9B 是针对中文手机应用优化的模型，而 AutoGLM-Phone-9B-Multilingual 支持英语场景，适用于包含英文等其他语言内容的
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, phone-use-agent

---

## 🕔 2026-05-29 07:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [sim](https://github.com/simstudioai/sim)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 28,634
- **核心概述**: 构建、部署和编排 AI 代理。 Sim 是 AI 员工队伍的中央智能层。
- **大概是做什么的**: 用于构建人工智能代理和运行代理劳动力的开源平台。连接 1,000 多个集成和法学硕士来编排代理工作流程。在画布上直观地设计代理工作流程 - 连接代理、工具和块，然后立即运行它们。利用 Copilot 进行增压 利用 Copilot 生成节点、修复错误并直接从自然语言迭代流程。集成矢量数据库将文档上传到矢量存储，让代理根据您的具体内容回答问题。云托管：sim.ai 自托管：NPM 包 → http://localhost:3000 Docker 必须安装并在您的计算机上运行。 ------ ------------- -p, --port 运行 Sim 的端口（默认 3000 ） --no-pull 跳过拉取最新的 Docker 镜像 自托管：Docker Compose Open http://localhost:3000 Sim 还通过 Ollama 和 vLLM 支持本地模型 — 有关设置详细信息，请参阅 Docker 自托管文档。自托管：手动设置要求：Bun、Node.js v20+、带有 pgvector 的 PostgreSQL 12+ 1. 克隆并安装： 2. 使用 pgvector 设置 PostgreSQL： 或通过 pgvector 指南手动安装。 3. 配置
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent-workflow, agentic-workflow, agents, ai, aiagents, anthropic

---

### 🌟 [openclaude](https://github.com/Gitlawb/openclaude)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 28,018
- **核心概述**: 跑到任何地方。使用任何东西
- **大概是做什么的**: OpenClaude 是一个面向云和本地模型提供商的开源编码代理 CLI。使用 OpenAI 兼容的 API、Gemini、GitHub 模型、Codex OAuth、Codex、Ollama、Atomic Chat 和其他支持的后端，同时保持终端优先的工作流程：提示、工具、代理、MCP、斜线命令和流输出。 OpenClaude 也镜像到 GitLawb：gitlawb.com/node/repos/z6MkqDnb/openclaude 快速入门设置指南 提供商源代码构建 VS 代码扩展赞助商社区 - 在云 API 和本地模型后端使用一个 CLI - 使用 /provider 在应用程序内保存提供商配置文件 - 使用 OpenAI 兼容服务、Gemini、GitHub 模型、Codex OAuth、Codex、Ollama、Atomic Chat 等运行支持的提供程序 - 将编码代理工作流程保留在一处：bash、文件工具、grep、glob、代理、任务、MCP 和 Web 工具 - 使用捆绑的 VS Code 扩展进行启动集成和主题支持 如果稍后安装报告 ripgrep not find ，请在启动 OpenClaude 之前在系统范围内安装 ripgrep 并确认 rg --version 在同一终端中工作。 - 运行 /provider 进行指导 prov
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-tools, cli, coding

---

### 🌟 [taste-skill](https://github.com/Leonxlnx/taste-skill)
- **项目语言**: Shell
- **星标数量**: ⭐ 27,331
- **核心概述**: 品味技能 - 给你的人工智能良好的品味。阻止人工智能产生无聊的、通用的斜坡
- **大概是做什么的**: AI 代理的 Anti-Slop 前端框架 便携式代理技能可升级 AI 构建的界面：更强的布局、版式、运动和间距，而不是样板式 UI。该存储库还包括参考板（网络、移动设备、品牌套件）的图像生成技能。将它们与 ChatGPT Images 或类似的生成器配对，然后将帧交给 Codex、Cursor 或 Claude Code 进行实现。 Taste Skill 没有官方代币、硬币或加密项目。任何使用我的名字、图像或项目的代币均与我无关且未得到我的认可。免责声明 · 安装 · 技能 · 设置 · 示例 · 赞助商 · 研究 · 常见问题解答 · 许可证 反馈和贡献 我们非常乐意接受您的反馈。建议和错误报告： - 在 GitHub 上打开 Pull 请求或问题 - DM @lexnlin 或 @blueemi99 - 给我们发送电子邮件至 hello@tasteskill.dev npx 技能添加 CLI 扫描此存储库中的技能/文件夹，因此下面的所有技能（代码和图像生成）都以相同的方式安装。通过安装名称（名称：SKILL frontmatter 内的字段，而不是文件夹名称）安装单个技能：您还可以复制任何 SKIL
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, ai, claude, claude-code, codex, coding

---

### 🌟 [claude-task-master](https://github.com/eyaltoledano/claude-task-master)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 27,283
- **核心概述**: 一个人工智能驱动的任务管理系统，您可以将其放入 Cursor、Lovable、Windsurf、Roo 等中。
- **大概是做什么的**: Taskmaster：用于人工智能驱动开发的任务管理系统，旨在与任何人工智能聊天无缝协作。作者：@eyaltoledano 和 @RalphEcom 与 Claude 一起进行 AI 驱动开发的任务管理系统，旨在与 Cursor AI 无缝协作。 📚 查看完整文档 - API 密钥和提供程序 - MCP 工具参考 - CLI 命令参考 - 标签和工作流 - AI 提供程序概述 - 团队协作 - 产品和工程方法 - 产品和工程技能 Cursor 1.0+ 快速安装（一键式） 注意：单击链接后，您仍然需要将 API 密钥添加到配置中。该链接使��占位符密钥安装 MCP 服务器，您需要将其替换为实际的 API 密钥。 Claude Code 快速安装 对于 Claude Code 用户：不要忘记将 API 密钥添加到配置中： - 在项目的 root .env 中 - 在 taskmaster-ai 的 mcp 配置的“env”部分中 Taskmaster 在多个命令中利用 AI，这些命令需要单独的 API 密钥。只要添加 API 密钥，您就可以使用来自不同 AI 提供商的各种模型。为了
- **有什么用**: 从项目说明看，它主要围绕“Taskmaster：用于人工智能驱动开发的任务管理系统，旨在与任何人工智能聊天无缝协作。作者：@eyaltoledano 和 @RalphEcom 与 Cla”展开，可用于学习、研究或二次开发。
- **技术标签**: ai, cursor, cursor-ai, cursorai, lovable, lovable-dev

---

### 🌟 [AionUi](https://github.com/iOfficeAI/AionUi)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 27,105
- **核心概述**: 免费、本地、开源 24/7 Cowork 应用程序，适用于 OpenClaw、Hermes Agent、Claude Code、Codex、OpenCode、Gemini CLI 和 20 多个 CLI |定制您的助手 |喜欢就star吧！
- **大概是做什么的**: 一款免费、开源、带有 AI 代理的 Cowork 应用程序 内置代理 零设置 任何 API 密钥 多代理远程访问 跨平台 24/7 自动化 English 简体中文 繁体中文 日本语 한국어 Español Português Türkçe Русский Українська 官方网站 💬 社区：Discord (English) 微信(中文群) Twitter 为什么选择 AionUi？ · Cowork — 与您并肩工作的人工智能代理 AionUi 不仅仅是一个聊天客户端。这是一个 Cowork 平台，人工智能代理可以在您的计算机上与您一起工作 - 读取文件、编写代码、浏览网页和自动执行任务。您可以看到代理所做的一切，并且始终处于掌控之中。传统 AI 聊天客户端 AionUi (Cowork) :-------------------------------------------- :----------------------------------------- :-------------------------------------------------------------------------------------------------------------------------------------------- AI 可以对您的文件进行操作 有限或否 是 — 具有完全文件访问权限的内置代理 AI 可以执行多步骤任务 有限 是 — 经您批准自主进行 电话远程访问 很少 WebUI + Telegram / Lark / 钉钉 / 微信 定时自动化 否 Cron — 24/7 无人值守 Mu
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: acp, agent-team, ai, ai-agent, chat, chatbot

---

### 🌟 [llmfit](https://github.com/AlexsJones/llmfit)
- **项目语言**: Rust
- **星标数量**: ⭐ 26,842
- **核心概述**: 数百个模型和提供商。一个命令即可查找您的硬件上运行的内容。
- **大概是做什么的**: 新功能：社区排行榜 - 浏览来自实际用户的真实性能数据。按 b 可查看任何 GPU（不仅仅是您的 GPU）的测量 tok/s、TTFT 和 VRAM。使用 H 从 27 多个硬件预设（RTX 5090 到 Apple M1）中进行选择，以便在购买或构建之前比较实际数字。数百个模型和提供商。一个命令即可查找您的硬件上运行的内容。一个终端工具，可根据系统的 RAM、CPU 和 GPU 调整 LLM 模型的大小。检测您的硬件，对每���模型的质量、速度、适合度和上下文维度进行评分，并告诉您哪些模型实际上可以在您的计算机上运行良好。附带交互式 TUI（默认）和经典 CLI 模式。支持多 GPU 设置、MoE 架构、动态量化选择、速度估计和本地运行时提供程序（Ollama、llama.cpp、MLX、Docker Model Runner、LM Studio）。新功能：社区排行榜 (b) — 查看与您运行相同硬件的其他用户的实际 tok/s、TTFT 和 VRAM 使用情况。由 localmaxxing.com 提供支持，这弥补了估计性能和实际性能之间的差距。另外：下载管理器 (D)、高级配置
- **有什么用**: 适合用于大语言模型应用开发、知识库问答、聊天机器人或 Prompt/RAG 工作流参考。
- **技术标签**: gguf, llm, localai, mlx, skill, unsloth

---

## 🕔 2026-05-29 02:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [awesome-copilot](https://github.com/github/awesome-copilot)
- **项目语言**: Python
- **星标数量**: ⭐ 34,061
- **核心概述**: 社区提供的说明、代理、技能和配置可帮助您充分利用 GitHub Copilot。
- **大概是做什么的**: 🤖 很棒的 GitHub Copilot 社区创建的自定义代理、说明、技能、挂钩、工作流程和插件的集合，可增强您的 GitHub Copilot 体验。探索网站上的完整集合 → Awesome-copilot.github.com 该网站提供数百个资源的全文搜索和过滤，以及用于 MCP 服务器和开发人员工具的工具部分，以及用于指南和教程的学习中心。在人工智能代理中使用这个集合？机器可读的 llms.txt 包含所有代理、说明和技能的结构化列表。第一次接触 GitHub Copilot 自定义？网站上的学习中心提供精选文章、演练和参考材料，涵盖从代理、技能和说明等核心概念到挂钩、代理工作流程、MCP 服务器和 Copilot 编码代理的实践指南的所有内容。资源 说明 浏览 ---------- ------------- -------- 🤖 代理 与 MCP 服务器集成的专业 Copilot 代理 所有代理 → 📋 说明 按文件模式自动应用的编码标准 全部
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent-skills, agents, ai, awesome, custom-agents, github-copilot

---

### 🌟 [PageIndex](https://github.com/VectifyAI/PageIndex)
- **项目语言**: Python
- **星标数量**: ⭐ 32,297
- **核心概述**: 📑 PageIndex：无向量、基于推理的 RAG 的文档索引
- **大概是做什么的**: PageIndex：无向量、基于推理的 RAG 基于推理的 RAG      无向量 DB 或分块       上下文感知       类人检索 🌐 主页   •   🖥️ 聊天平台      🔌 MCP 和 API       📖 文档       💬 Discord       - 🔥 Agentic Vectorless RAG — 一个简单的agentic、无向量 RAG 示例，具有自托管 PageIndex，使用 OpenAI Agents SDK。 - 将 PageIndex 扩展到数百万个文档 — PageIndex 文件系统是一个文件级树层，可让 PageIndex 对整个语料库（而不仅仅是单个文档）进行推理，从而实现大规模文档搜索。 - PageIndex Chat — 用于专业长文档的类人文档分析代理平台。也可通过 MCP 或 API 获取。 - PageIndex 框架 — 深入探讨 PageIndex：一种代理式上下文树索引，使法学硕士能够对长文档执行基于推理的上下文感知检索。 📑 PageIndex 简介 您是否对长专业文档的矢量数据库检索准确性感到沮丧？传统的基于矢量的 RAG 依赖
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agentic-ai, agents, ai, ai-agents, context-engineering, information-retrieval

---

### 🌟 [zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- **项目语言**: Rust
- **星标数量**: ⭐ 31,624
- **核心概述**: 快速、小型且完全自主的人工智能个人助理基础设施，任何操作系统、任何平台——部署在任何地方，交换任何东西🦀
- **大概是做什么的**: 🦀 ZeroClaw — 个人人工智能助理 您拥有该代理。您拥有数据。您拥有它运行的机器。 ZeroClaw 是一个代理运行时——您配置和运行的单个 Rust 二进制文件。它与 LLM 提供商（Anthropic、OpenAI、Ollama 和其他 20 个）进行对话，通过 30 多个渠道（Discord、Telegram、Matrix、电子邮件、语音、webhooks、您自​​己的 CLI）到达世界，并通过工具（shell、浏览器、HTTP、硬件、自定义 MCP 服务器）进行操作。一切都可以在您的机器上、在您的工作区中通过您的���匙运行。阅读《哲学》，了解塑造它的四种观点。安装程序会询问您是否需要预构建的二进制文件（快，秒）或源构建（慢，可定制）。两者的结局都是一样的——船上的零爪会自动开始。特定于平台的说明：Linux · macOS · Windows · Docker 完整演练：快速启动 - 或使用开发盒的 YOLO 模式跳过安全门。 - 多渠道 — 一名客服人员会在您配置的每个渠道上为您提供答复。来自 Discord、Telegram、Matrix、电子邮件、webhooks、CLI 的入站消息 — 所有消息均传送到同一个代理循环。 - 与提供商无关——模型专业
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, agentic, ai, infra, ml, openclaw

---

### 🌟 [next-ai-draw-io](https://github.com/DayuanJiang/next-ai-draw-io)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 30,319
- **核心概述**: next.js Web 应用程序将 AI 功能与 draw.io 图表集成在一起。该应用程序允许您通过自然语言命令和人工智能辅助可视化来创建、修改和增强图表。
- **大概是做什么的**: AI 支持的图表创建工具 - 聊天、绘图、可视化 Next.js Web 应用程序，将 AI 功能与 draw.io 图表集成在一起。通过自然语言命令和人工智能辅助可视化创建、修改和增强图表。注：感谢字节跳动豆宝赞助，演示站现使用强大的glm-4.7模型！ https://github.com/user-attachments/assets/9d60a3e8-4a1c-4b5e-acbb-26af2d3eabd1 - 桌面应用程序 - 部署到 EdgeOne 页面 - 在 Cloudflare Workers 上部署 - 多提供商支持 - 支持 \& 联系方式 以下是一些示例提示及其生成的图表： 动画变压器连接器 提示：给我一个变压器架构的动画连接器图。 RAG技术图提示：生成聊天应用程序的RAG架构图。使用连接图进行数据提取 使用 React 和 AWS 进行身份验证 提示：使用 React 和 AWS 生成身份验证流程。使用无服务器架构。提示：创建 Henry Chesbrough 的开放式创新模型的可视化。提示：给我画一只可爱的猫。 - LLM 支持的图表创建
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: ai, diagrams, productivity

---

### 🌟 [prompt-optimizer](https://github.com/linshenkx/prompt-optimizer)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 30,037
- **核心概述**: 人工智能提示优化器，用于编写更好的提示并获得更好的人工智能结果。
- **大概是做什么的**: 网站在线优化器 Prompt Garden 文档 快速入门 Chrome 扩展 💖 支持开发文档 Vercel 部署指南 Cloudflare 部署指南 MCP 部署指南 DeepWiki 文档 ZRead 文档 📖 项目简介 Prompt Optimizer 是一款强大的 AI 提示优化工具，可以帮助您编写更好的 AI 提示，提高 AI 输出的质量。它支持四种使用方式：Web应用、桌面应用、Chrome扩展、Docker部署。提示可以从手动编写、模板、本地导入或 Prompt Garden 等来源开始。提示优化器是对这些提示进行优化、测试、评估并将其保存为可重用提示资产的地方。 🎥 功能演示 1. 精明的审稿人：将协议转化为有用的批评从最简单的英语角色提示开始，优化将小模型从一般性的推论中推向更清晰、更结构化的审稿，以揭示薄弱的假设、证据差距和具体的修改建议。 2.市场讨价还价回复：让变量改变策略使用单个可重复使用的提示模板，
- **有什么用**: 适合用于大语言模型应用开发、知识库问答、聊天机器人或 Prompt/RAG 工作流参考。
- **技术标签**: ai-prompts, ai-tools, llm, prompt, prompt-engineering, prompt-optimization

---

### 🌟 [voicebox](https://github.com/jamiepine/voicebox)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 28,779
- **核心概述**: 开源人工智能语音工作室。克隆、指令、创造。
- **大概是做什么的**: 开源人工智能语音工作室。克隆任何声音。生成语音。对任何应用程序进行口述。用您自己的声音与特工交谈。完整的语音 I/O 堆栈，在您的计算机上本地运行。单击上面的图片观看 voicebox.sh 上的演示视频 Voicebox 是本地首个 AI 语音工作室 - 一个应用程序中 ElevenLabs 和 WisprFlow 的免费开源替代品。从几秒钟的音频中克隆语音，通过 7 个 TTS 引擎生成 23 种语言的��音，使用全局热键听写到任何文本字段，并为任何 MCP 感知的 AI 代理提供您选择的声音。两个云服务位于语音 I/O 环路的相对两半 — ElevenLabs 位于输出端，WisprFlow 位于输入端。 Voicebox 两者兼而有之，将它们与捆绑的本地法学硕士连接起来，以进行细化和每个配置文件的角色，并在您的计算机上运行整个过程。 - 完全隐私 — 模型、语音数据和捕获永远不会离开您的机器 - 7 个 TTS 引擎 — Qwen3-TTS、Qwen CustomVoice、LuxTTS、Chatterbox Multilingual、Chatterbox Turbo、HumeAI TADA 和 Kokoro - 语音克隆和预设语音 — 从参考样本零样本克隆，
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: ai, cuda, mlx, qwen3-tts, qwen3-tts-ui, voice-ai

---

## 🕔 2026-05-28 21:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [nanobot](https://github.com/HKUDS/nanobot)
- **项目语言**: Python
- **星标数量**: ⭐ 43,324
- **核心概述**: 适用于您的工具、聊天和工作流程的轻量级开源 AI 代理。
- **大概是做什么的**: 🐈 nanobot 是一款秉承 OpenClaw、Claude Code 和 Codex 精神的开源超轻量级 AI 代理。它使核心代理循环保持较小且可读，同时仍然支持聊天通道、内存、MCP 和实用的部署路径，因此您可以以最小的开销从本地设置转变为长期运行的个人代理。 - 2026-05-15 🚀 发布 v0.2.0 — /goal 在轮流中保持持续的目标，WebUI 现在在轮子内提供，图像生成端到端，5 个具有后备模型的新提供程序，以及真正的代理循环重构。有关详细信息，请参阅发行说明。 - 2026-05-14 🎯 /长期目标、可见的多步骤进展、聊天中的长期任务。 - 2026-05-13 🧠 答案前流式推理，自动备份模型，插件重连更顺畅。 - 2026-05-12 🎛️ 保存带有WebUI徽章的模型预设，更简单的插件工具，更安静的飞书主题线程。 - 2026-05-11 🖥️ NVIDIA NIM 支持、终端机器人名称和图标、流式推理和 MiMo 切换清晰度。 - 2026-05-09 🖼️ 更清晰的图像回放，设置中的 BYO 网络搜索键，飞书线程 r
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks)
- **项目语言**: 多语言
- **星标数量**: ⭐ 40,877
- **核心概述**: 从 Anthropic - Opus 4.7、Opus 4.6、Sonnet 4.6 中提取系统提示。 OpenAI - ChatGPT 5.5 思维、GPT 5.5 即时、Codex。 Google Gemini - 3.5 Flash、3.1 Pro、3 Flash、反重力。 xAI - 格洛克。 Github 副驾驶。困惑等等。定期更新。
- **大概是做什么的**: 正如《华盛顿邮报》所见：了解人工智能背后的隐藏规则。然后用它们重写这篇文章。 （2026年5月11日）系统提示泄密 ------ ------ ------ 克劳德代码（Opus 4.8） 2026年5月28日 系统提示克劳德 Opus 4.8 2026年5月28日 系统提示克劳德代码&Cowork 2026年5月28日 克劳德代码·Cowork·Cowork Dispatch GPT-5.5 2026年5月24日Thinking·Instant·API·Pro API Perplexity Computer 2026年5月21日 系统提示 VS Code Copilot Agent 2026年5月21日 系统提示 Docker Gordon AI 2026年5月21日 系统提示 Gemini 3.5 Flash 2026年5月20日 系统提示·AI Studio·Tools Antigravity CLI 2026年5月20日 系统提示 Zed AI 2026年5月16日 系统提示 Grok Expert 2026年5月11日 系统提示符 GPT-5.3-Codex-Spark 2026年5月10日 系统提示符 Amp Code 2026年5月9日 系统提示符 Claude Opus 4.8 系统提示符 Claude Code (Opus 4.8) 系统提示符 Claude Opus 4.7 系统提示符 Claude Code 系统提示符 Claude Opus 4.6 系统提示符 Claude Sonnet 4.6 系统提示符Claude.ai Anthropic Reminders 集成、官方提示和旧版本 集成 Cowork · Cowork Dispatch · 桌面代码
- **有什么用**: 适合用于大语言模型应用开发、知识库问答、聊天机器人或 Prompt/RAG 工作流参考。
- **技术标签**: ai, anthropic, awesome, chatbot, chatgpt, claude

---

### 🌟 [daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)
- **项目语言**: Python
- **星标数量**: ⭐ 39,278
- **核心概述**: LLM驱动的 A/H/美股智能分析：多数据源行情 + 实时新闻 + LLM决策仪表盘 + 多渠道推送，零��本定时运行，纯白嫖. LLM-powered stock analysis system for A/H/US markets.
- **大概是做什么的**: 🤖 基于 AI 大模型的 A股/港股/美股自选股智能分析系统，每日自动分析并推送「决策仪表盘」到企业微信/飞书/Telegram/Discord/Slack/邮箱 产品预览 · 功能特性 · 快速开始 · 推送效果 · 文档中心 · 完整指南 简体中文 English 繁体中文 AI 决策报告 核心结论、评分、趋势、买卖点位、风险警报、催化因素、操作检查清单 多市场数据聚合 A股、港股、美股、ETF；行情、K 线、技术指标、资金流、筹码、新闻、公告和基本面 Web / 桌面工作台 手动分析、任务进度、历史报告、完整 Markdown、回测、持仓、配置管理、浅色 / 深色主题 Agent 策略问股 多轮追问，支持均线、缠论、波浪、趋势、热点、事件、成长、预期等 15 种内置策略，覆盖 Web/Bot/API 智能导入与补全 图片、CSV/Excel、剪贴板导入；股票代码/名称/拼音/别名补全 自动化与推送 GitHub Actions、Docker、本地定时任务、FastAPI 服务和企业微信/飞书/Telegram/Discord/Slack/邮件推送 功能细节、字段契约、基本面 P0 超时语义、交易纪律、数据源优先级、Web/API 行为请看 完整配置与部署指南。 AI 模型 Anspire、AIHubMix、Gemini、OpenAI 兼容、DeepSeek、通义千问、Claude、Ollama 本地模型等 行情数据 TickFlow、AkShare、Tushare、Pytdx、Baostock、YFinance、Longbridge 新闻搜索 Anspire、SerpAPI、Tavily、Bocha、Brave、MiniMax、SearXNG 社交舆情 Stock Sentiment API（Reddit / X / Polymarket，仅美股，可选） 方式一：GitHub Actions（推荐） 点击右上角 Fork 按钮（顺便点个 Star⭐ 支持一下） Settings → Secrets and variables → Actions → New repository secret 默认先选一个模型服务商并填写 API Key；需要多模型、图片识别、本地模型或高级路由时，再参考 LLM 配置指南。 ------------ ------ :----: ANSPIRE API KEYS Anspire API Key，一Key同时启用全球热门大模型和联网搜索，无需科学上网，含免费额度 推荐 AIHUBMIX KEY AIHubMix API Ke
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: a-stock, ai-agent, aigc, llm, quant, quantitative-finance

---

### 🌟 [langextract](https://github.com/google/langextract)
- **项目语言**: Python
- **星标数量**: ⭐ 36,580
- **核心概述**: 一个 Python 库，用于使用具有精确源基础和交互式可视化的法学硕士从非结构化文本中提取结构化信息。
- **大概是做什么的**: - 云模型的 API 密钥设置 - 添加自定义模型提供商 - 使用 OpenAI 模型 - 将本地 LLM 与 Ollama 一起使用 - Romeo 与 Juliet 全文提取 - 药物提取 - 放射学报告结构：RadExtract - 社区提供商 LangExtract 是一个 Python 库，它使用 LLM 根据用户定义的指令从非结构化文本文档中提取结构化信息。它处理临床笔记或报告等材料，识别和组织关键细节，同时确保提取的数据与源文本相对应。 1. 精确的源定位：将每个提取映射到源文本中的确切位置，实现视觉突出显示，以便于跟踪和验证。 2. 可靠的结构化输出：根据少数样本示例强制执行一致的输出模式，利用 Gemini 等受支持模型中的受控生成来保证稳健的结构化结果。 3.针对长文档进行优化：通过使用文本分块、并行过程的优化策略，克服了大文档提取的“大海捞针”挑战
- **有什么用**: 适合用于大语言模型应用开发、知识库问答、聊天机器人或 Prompt/RAG 工作流参考。
- **技术标签**: gemini, gemini-ai, gemini-api, gemini-flash, gemini-pro, information-extration

---

### 🌟 [CodeWhale](https://github.com/Hmbown/CodeWhale)
- **项目语言**: Rust
- **星标数量**: ⭐ 35,618
- **核心概述**: 终端中的 DeepSeek + MiMo 编码代理
- **大概是做什么的**: DeepSeek V4 的终端编码代理。它从 codewhale 命令运行，流式传输推理块，使用批准门编辑本地工作区，并包括每轮选择模型和思维级别的自动模式。 codewhale 作为一对匹配的独立 Rust 发行版二进制文件安装：codewhale 调度程序命令和它为交互式会话启动的同级 codewhale-tui 运行时。 npm、Homebrew 和 Docker 都会为您安装；货物和手动安装必须将两个二进制文件放在同一目录中（通常是 PATH 上的目录）。 npm 包只是这些发布二进制文件的安装程序/包装程序；该代理不在 Node 上运行。在中国大陆，使用 --registry=https://registry.npmmirror.com 加速 npm 路径，或使用 https://github.com/Hmbown/CodeWhale/releases 。对于手动下载，请验证 SHA-256 清单并避免使用相似的存储库或搜索结果镜像。请参阅下载安全性和校验和。已经安装了吗？使用与安装路径匹配的更新程序��DeepWiki 项目索引 模型回答了一个问题。代理完成
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: cli, deepseek, llm, rust, terminal, tui

---

### 🌟 [UI-TARS-desktop](https://github.com/bytedance/UI-TARS-desktop)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 35,611
- **核心概述**: 开源多模式 AI 代理堆栈：连接尖端 AI 模型和代理基础设施
- **大概是做什么的**: TARS \ 是一个多模态 AI Agent 堆栈，目前推出两个项目：Agent TARS 和 UI-TARS-desktop：Agent TARS 是一个通用的多模态 AI Agent 堆栈，它将 GUI Agent 和 Vision 的强大功能带入您的终端、计算机、浏览器和产品中。它主要附带 CLI 和 Web UI 供使用。它旨在通过尖端的多模式 LLM 以及与各种现实世界 MCP 工具的无缝集成，提供更接近于类人任务完成的工作流程。 UI-TARS Desktop是一个桌面应用程序，提供基于UI-TARS模型的本机GUI Agent。它主要运送远程计算机和浏览器操作员。 - \[2025-11-05\] 🎉 我们很高兴地宣布推出 Agent TARS CLI v0.3.0！该版本带来了对多个工具的流支持（shell命令、多文件结构化显示）、具有工具调用和深度思考的计时统计的运行时设置、用于数据流跟踪和调试的事件流查看器。此外，它还独家支持 AIO 代理沙盒作为隔离的一体化工具执行环境。 - \[2025-06-25\]
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, agent-tars, browser-use, computer-use, cowork, gui-agent

---

## 🕔 2026-05-28 16:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice)
- **项目语言**: HTML
- **星标数量**: ⭐ 55,297
- **核心概述**: 从氛围编码到代理工程 - 实践使克劳德变得完美
- **大概是做什么的**: claude-code-best-practice 从 vivi 编码到代理工程 - 实践使 claude 完美 -white?style=flat&labelColor=555) = 代理 · = 命令 · = X 上的技能 Boris Cherny ( tweet 1 · tweet 2 · tweet 3 ) 请访问如何使用部分以充分利用此存储库。功能 位置 描述 --------- ---------- ------------- 子代理 .claude/agents/ .md 命令 .claude/commands/ .md 技能 .claude/skills/ /SKILL.md 官方技能 · Mono-repos 工作流程技能 .claude/commands/weather-orchestrator.md 挂钩 .claude/hooks/ 指南 MCP 服务器.claude/settings.json , .mcp.json 插件可分发包 市场 · 创建市场 设置 .claude/settings.json 权限 · 模型配置 · 输出��式 · 沙箱 · 按键绑定 · 自动模式配置状态行 .claude/settings.json 内存 CLAUDE.md , .claude/rules/ , /.claude/rules/ , /.claude/projects/ /memory/ Auto内存 · 自动内存深入探究 · 规则自动检查点（文件编辑跟踪） CLI 启动标志 claude [flags] 交互模式 · 环境变量最佳实践提示工程 · 扩展 Cl
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agentic-ai, agentic-coding, agentic-engineering, agentic-workflow, ai, ai-agents

---

### 🌟 [worldmonitor](https://github.com/koala73/worldmonitor)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 55,039
- **核心概述**: 实时全球情报仪表板。在统一的态势感知界面中进行人工智能驱动的新闻聚合、地缘政治监控和基础设施跟踪
- **大概是做什么的**: 实时全球情报仪表板 - 在统一的态势感知界面中进行人工智能驱动的新闻聚合、地缘政治监控和基础设施跟踪。文档  ·  发布  ·  - 涵盖 15 个类别的 500 多个精选新闻源，人工智能合成简报 - 双地图引擎 — 3D 地球 (globe.gl) 和 WebGL 平面地图 (deck.gl)，具有 45 个数据层 - 跨流相关性 — 军事、经济、灾难和升级信号融合 - 国家情报指数 — 跨 12 个信号类别的综合风险评分 - 金融雷达 — 92 个证券交易所、大宗商品、加密和 7 信号市场组合 - 本地 AI - 使用 Ollama 运行所有内容，无需 API 密钥 - 来自单个代码库的 5 个站点变体（世界、��技、金融、商品、快乐） - 适用于 macOS、Windows 和 Linux 的本机桌面应用程序 (Tauri 2) - 21 种语言，具有本机语言提要和 RTL 支持 有关完整的功能列表、架构、数据源和算法，请参阅文档。所有站点变体和桌面二进制文件均由单个代码库构建并由 sam 提供
- **有什么用**: 适合直接体验、二次开发成工具型产品，或参考它的界面和工程实现。
- **技术标签**: ai, dashboard, geopolitics, monitoring, news, opensource

---

### 🌟 [hello-agents](https://github.com/datawhalechina/hello-agents)
- **项目语言**: Python
- **星标数量**: ⭐ 54,364
- **核心概述**: 📚 《从零开始构建智能体》——从零开始的智能体原理与实践教程
- **大概是做什么的**: 从基础理论到实际应用，全面掌握智能体系统的设计与实现   如果说 2024 年是"百模大战"的元年，那么 2025 年无疑开启了"Agent 元年"。技术的焦点正从训练更大的基础模型，转向构建更聪明的智能体应用。然而，当前系统性、重实践的教程却极度匮乏。为此，我们发起了 Hello-Agents 项目，希望能为社区提供一本从零开始、理论与实战并重的智能体系统构建指南。   Hello-Agents 是 Datawhale 社区的 系统性智能体学习教程 。如今 Agent 构建主要分为两派，一派是 Dify，Coze，n8n 这类软件工程类 Agent，其本质是流程驱动的软件开发，LLM 作为数据处理的后端；另一派则是 AI 原生的 Agent，即真正以 AI 驱动的 Agent。本教程旨在带领大家深入理解并构建后者——真正的 AI Native Agent。教程将带领你穿透框架表象，从智能体的核心原理出发，深入其核心架构，理解其经典范式，并最终亲手构建起属于自己的多智能体应用。我们相信，最好的学习方式就是动手实践。希望这本教程能成为你探索智能体世界的起点，能够从一名大语言模型的"使用者"，蜕变为一名智能体系统的"构建者"。 🌐 国外访问 🚀 国内加速 - 无需下载，随时随地学习 如果您希望在本地阅读或贡献内容，请参考下方的学习指南。 - 📖 Datawhale 开源免费 完全免费学���本项目所有内容，与社区共同成长 - 🔍 理解核心原理 深入理解智能体的概念、历史与经典范式 - 🏗️ 亲手实现 掌握热门低代码平台和智能体代码框架的使用 - 🛠️ 自研框架 HelloAgents 基于 Openai 原生 API 从零构建一个自己的智能体框架 - ⚙️ 掌握高级技能 一步步实现上下文工程、Memory、协议、评估等系统性技术 - 🤝 模型训练 掌握 Agentic RL，从 SFT 到 GRPO 的全流程实战训练 LLM - 🚀 驱动真实案例 实战开发智能旅行助手、赛博小镇等综合项目 - 📖 求职面试 学习智能体求职相关面试问题 章节 关键内容 状态 ------------------------------------------------------------------------------------------- --------------------------------------------- ---- 前言 项目的缘起、背景及读者建议 ✅ 第一章 初识智能体 智能体定义、类型、范
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent, llm, rag, tutorial

---

### 🌟 [mempalace](https://github.com/MemPalace/mempalace)
- **项目语言**: Python
- **星标数量**: ⭐ 52,988
- **核心概述**: 最佳基准的开源人工智能存储系统。而且它是免费的。
- **大概是做什么的**: 本地优先的人工智能内存。逐字存储、可插拔后端、LongMemEval 上的 96.6% R@5 原始数据 — 零 API 调用。谨防冒充网站。 MemPalace 没有其他官方网站。唯一的官方来源是这个 GitHub 存储库、PyPI 包以及 mempalaceofficial.com 上的文档。任何其他域名（包括 .tech 、 .net 或其他 .com 变体）都是冒名顶替者，可能会传播恶意软件。详细信息和时间表：docs/HISTORY.md。如果没有连接自动保存挂钩，Claude Code 会话将在 30 天后过期。阅读本文 → 需要最短的恢复/设置路径？使用克劳德代码保留设置清单。 MemPalace 将您的对话历史记录存储为逐字文本，并通过语义搜索进行检索。它不总结、摘录或释义。该索引是结构化的——人员和项目成为翅膀，主题成为房间，原创内容放在抽屉里——因此搜索可以确定范围，而不是针对扁平的语料库。检索层是可插拔的。当前默认为 ChromaDB；该接口在 mempalace/backends/base.py 中定义，并且可以 droppe 替代后端
- **有什么用**: 适合用于大语言模型应用开发、知识库问答、聊天机器人或 Prompt/RAG 工作流参考。
- **技术标签**: ai, chromadb, llm, mcp, memory, python

---

### 🌟 [OpenSpec](https://github.com/Fission-AI/OpenSpec)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 51,382
- **核心概述**: AI 编码助手的规范驱动开发 (SDD)。
- **大概是做什么的**: 最受欢迎的规范框架。新的工作流程现已推出！我们使用新的工件引导工作流程重建了 OpenSpec。运行 /opsx:propose“你的想法”即可开始。 → 在此处了解更多信息 在 X 上关注 @0xTab 以获取更新 · 加入 OpenSpec Discord 寻求帮助和提问。需要 Node.js 20.19.0 或更高版本。全局安装 OpenSpec： 然后导航到您的项目目录并初始化： 现在告诉您的 AI： /opsx:propose 如果您想要扩展工作流程（ /opsx:new 、 /opsx:continue 、 /opsx:ff 、 /opsx:verify 、 /opsx:bulk-archive 、 /opsx:onboard ），请使用 openspec config profile 选择它并使用 openspec update 进行应用。不确定您的工具是否受支持？查看完整列表 – 我们支持超过 25 种工具，并且还在不断增加。也适用于 pnpm、yarn、bun 和 nix。请参阅安装选项。 → 入门：第一步 → 工作流程：组合和模式 → 命令：斜杠命令和技能 → CLI：终端参考 → 支持的工具：工具集成和安装路径 → 概念：如何适应 → 多语言：多语言支持 → 定制：让它成为您的 第三方架构包分发
- **有什么用**: 从项目说明看，它主要围绕“最受欢迎的规范框架。新的工作流程现已推出！我们使用新的工件引导工作流程重建了 OpenSpec。运行 /opsx:propose“你的想法”即可开始。 → 在此”展开，可用于学习、研究或二次开发。
- **技术标签**: ai, context-engineering, engineering, planning, prd, sdd

---

### 🌟 [awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)
- **项目语言**: Python
- **星标数量**: ⭐ 45,049
- **核心概述**: Anthropic 为 Claude Code 精心策划的技能、挂钩、斜线命令、代理编排器、应用程序和插件列表
- **大概是做什么的**: Anthropic PBC 为最优秀的代理商 Claude Code 精心策划了最好的资源集合。包含高质量的技能、代理、挂钩、状态线、编排器、开发人员工具以及 Claude Code 团队继续提供的所有最新功能。适合初学者和老手，重点关注代码质量、安全性和原创性。旧的方式已经来了又消失了。是时候拥抱下一阶段了。以前的目录已不再适用，因此正在准备新的组织系统。感谢所有为这个存储库做出贡献和支持的人，无论是人类还是机器。他：克劳德，你有什么想法吗？克劳德：只要在 Telegram 上联系我，我就会解决。他：我没有 Telegram... 克劳德：...这不是好兆头。
- **有什么用**: 适合用来学习或搭建 AI Agent / 自动化智能体相关应用，也可以作为同类项目的技术参考。
- **技术标签**: agent-skills, agentic-code, agentic-coding, ai-workflow-optimization, ai-workflows, anthropic

---

## 🕔 2026-05-28 11:00 UTC 高 Star 项目推荐

> 🤖 每 5 小时精选一批高质量开源项目，持续为你带来灵感。

### 🌟 [caveman](https://github.com/JuliusBrussee/caveman)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 65,874
- **核心概述**: 🪨 当很少的代币可以做戏时为什么要使用大量的代币 — Claude Code 技能通过像穴居人一样说话来减少 65% 的代币
- **技术标签**: ai, anthropic, caveman, claude, claude-code, llm

---

### 🌟 [learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)
- **项目语言**: Python
- **星标数量**: ⭐ 63,248
- **核心概述**: Bash 就是你所需要的 - 一个 Nano claude 代码——类似“代理工具”，从 0 到 1 构建
- **技术标签**: agent, agent-development, ai-agent, claude, claude-code, educational

---

### 🌟 [oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 59,925
- **核心概述**: 奥莫；最好的代理工具 - 以前的 oh-my-opencode
- **技术标签**: ai, ai-agents, amp, anthropic, chatgpt, claude

---

### 🌟 [TrendRadar](https://github.com/sansan0/TrendRadar)
- **项目语言**: Python
- **星标数量**: ⭐ 58,503
- **核心概述**: ⭐AI驱动的舆情趋势监测，多平台聚合、RSS、智能提醒。🎯告别信息过载，你的AI舆情监控助手与热点筛选工具！聚合多平台热点+RSS订阅，支持关键词精准筛选。AI智能筛选新闻+AI翻译+AI分析简报直推手机，也支持接入MCP架构，赋能AI自然语言对话分析、情感洞察与趋势预测等。支持Docker ，数据本地/云端自持。集成微信/飞书/钉钉/Telegram/mail/ntfy/bark/slack等渠道智能自适应。
- **技术标签**: ai, bark, data-analysis, docker, hot-news, llm

---

### 🌟 [context7](https://github.com/upstash/context7)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 56,289
- **核心概述**: Context7 Platform——法学硕士和人工智能代码编辑器的最新代码文档
- **技术标签**: llm, mcp, mcp-server, vibe-coding

---

### 🌟 [rtk](https://github.com/rtk-ai/rtk)
- **项目语言**: Rust
- **星标数量**: ⭐ 55,633
- **核心概述**: CLI 代理可将常见开发命令的 LLM 令牌消耗减少 60-90%。单个 Rust 二进制文件，零依赖
- **技术标签**: agentic-coding, ai-coding, anthropic, claude-code, cli, command-line-tool

---

## 📅 2026-05-28 每日高 Star 项目推荐

> 🤖 每日精选高质量开源项目，持续为你带来灵感

### 🌟 [claude-mem](https://github.com/thedotmack/claude-mem)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 79,163
- **核心概述**: 每个座席跨会话的持久上下文 – 捕获座席在会话期间所做的所有操作，使用 AI 对其进行压缩，并将相关上下文注入到未来的会话中。适用于 Claude Code、OpenClaw、Codex、Gemini、Hermes、Copilot、OpenCode 等
- **技术标签**: ai, ai-agents, ai-memory, anthropic, artificial-intelligence, chromadb

---

### 🌟 [OpenHands](https://github.com/OpenHands/OpenHands)
- **项目语言**: Python
- **星标数量**: ⭐ 75,073
- **核心概述**: 🙌 OpenHands：人工智能驱动的开发
- **技术标签**: agent, artificial-intelligence, chatgpt, claude-ai, cli, developer-tools

---

### 🌟 [daytona](https://github.com/daytonaio/daytona)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 72,457
- **核心概述**: Daytona 是用于运行人工智能生成的代码的安全且弹性的基础设施
- **技术标签**: agentic-workflow, ai, ai-agents, ai-runtime, ai-sandboxes, code-execution

---

### 🌟 [deer-flow](https://github.com/bytedance/deer-flow)
- **项目语言**: Python
- **星标数量**: ⭐ 69,777
- **核心概述**: 一个开源的长期 SuperAgent 工具，用于研究、编码和创建。借助沙箱、内存、工具、技能、子代理和消息网关，它可以处理可能需要几分钟到几小时的不同级别的任务。
- **技术标签**: agent, agentic, agentic-framework, agentic-workflow, ai, ai-agents

---

### 🌟 [paperclip](https://github.com/paperclipai/paperclip)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 67,964
- **核心概述**: 每个人都用它来管理工作中的座席的开源应用程序
- **技术标签**: 

---

### 🌟 [RuView](https://github.com/ruvnet/RuView)
- **项目语言**: Rust
- **星标数量**: ⭐ 66,732
- **核心概述**: π RuView 将商用 WiFi 信号转化为实时空间智能、生命体征监测和存在检测 - 所有这些都无需视频像素。
- **技术标签**: agentic-ai, claude, densepose, esp32, firmware, home-assistant

---

## 📅 2026-05-27 每日高 Star 项目推荐

> 🤖 每日精选高质量开源项目，持续为你带来灵感

### 🌟 [codex](https://github.com/openai/codex)
- **项目语言**: Rust
- **星标数量**: ⭐ 85,939
- **核心概述**: 在您的终端中运行的轻量级编码代理
- **技术标签**: 

---

### 🌟 [awesome-design-md](https://github.com/VoltAgent/awesome-design-md)
- **项目语言**: 多语言
- **星标数量**: ⭐ 84,477
- **核心概述**: 流行品牌设计系统的 DESIGN.md 文件分析集合。将一个项目放入您的项目中，让编码代理生成匹配的 UI。
- **技术标签**: awesome-list, design-md, design-system, design-tokens, figma, google-stitch

---

### 🌟 [autoresearch](https://github.com/karpathy/autoresearch)
- **项目语言**: Python
- **星标数量**: ⭐ 83,541
- **核心概述**: AI 代理自动运行单 GPU 纳米聊天训练研究
- **技术标签**: 

---

### 🌟 [ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
- **项目语言**: Python
- **星标数量**: ⭐ 83,092
- **核心概述**: 为构建专业 UI/UX 多平台提供设计智能的 AI 技能
- **技术标签**: ai-skills, antigravity, claude, claude-code, codex, command-line

---

### 🌟 [cc-switch](https://github.com/farion1231/cc-switch)
- **项目语言**: Rust
- **星标数量**: ⭐ 81,727
- **核心概述**: 一款跨平台桌面一体化助手，适用于 Claude Code、Codex、OpenCode、OpenClaw、Gemini CLI 和 Hermes Agent。唯一官方网站：ccswitch.io
- **技术标签**: ai-tools, claude-code, codex, desktop-app, hermes, hermes-agent

---

### 🌟 [TradingAgents](https://github.com/TauricResearch/TradingAgents)
- **项目语言**: Python
- **星标数量**: ⭐ 79,823
- **核心概述**: TradingAgents：多代理LLM金融交易框架
- **技术标签**: agent, finance, llm, multiagent, trading

---

## 📅 2026-05-26 每日高 Star 项目推荐

> 🤖 每日精选高质量开源项目，持续为你带来灵感

### 🌟 [DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3)
- **项目语言**: Python
- **星标数量**: ⭐ 103,619
- **核心概述**: 暂无该开源项目的具体文字描述。
- **技术标签**: 

---

### 🌟 [gstack](https://github.com/garrytan/gstack)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 102,492
- **核心概述**: 使用 Garry Tan 的精确 Claude Code 设置：23 个固执己见的工具，可充当 CEO、设计师、工程经理、发布经理、文档工程师和 QA
- **技术标签**: 

---

### 🌟 [browser-use](https://github.com/browser-use/browser-use)
- **项目语言**: Python
- **星标数量**: ⭐ 95,514
- **核心概述**: 🌐 让 AI 代理可以访问网站。轻松在线自动化任务。
- **技术标签**: ai-agents, ai-tools, browser-automation, browser-use, llm, playwright

---

### 🌟 [DeepSeek-R1](https://github.com/deepseek-ai/DeepSeek-R1)
- **项目语言**: 多语言
- **星标数量**: ⭐ 92,021
- **核心概述**: 暂无该开源项目的具体文字描述。
- **技术标签**: 

---

### 🌟 [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)
- **项目语言**: 多语言
- **星标数量**: ⭐ 87,878
- **核心概述**: MCP 服务器的集合。
- **技术标签**: ai, mcp

---

### 🌟 [servers](https://github.com/modelcontextprotocol/servers)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 86,222
- **核心概述**: 模型上下文协议服务器
- **技术标签**: 

---

## 📅 2026-05-25 每日高 Star 项目推荐

> 🤖 每日精选高质量开源项目，持续为你带来灵感

### 🌟 [firecrawl](https://github.com/firecrawl/firecrawl)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 123,827
- **核心概述**: 🔥 搜索、抓取和清理网络中的 AI 代理。
- **技术标签**: ai, ai-agents, ai-crawler, ai-scraping, ai-search, crawler

---

### 🌟 [awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps)
- **项目语言**: Python
- **星标数量**: ⭐ 111,674
- **核心概述**: 您可以实际运行 100 多个 AI Agent 和 RAG 应用程序 — 克隆、自定义、发布。
- **技术标签**: agents, llms, python, rag

---

### 🌟 [spec-kit](https://github.com/github/spec-kit)
- **项目语言**: Python
- **星标数量**: ⭐ 105,563
- **核心概述**: 💫 帮助您开始规范驱动开发的工具包
- **技术标签**: ai, copilot, development, engineering, prd, spec

---

### 🌟 [agency-agents](https://github.com/msitarzewski/agency-agents)
- **项目语言**: Shell
- **星标数量**: ⭐ 104,772
- **核心概述**: 触手可及的完整人工智能机构 - 从前端向导到 Reddit 社区忍者，从奇思妙想的注入者到现实检查者。每个代理都是一位具有个性、流程和经过验证的可交付成果的专业专家。
- **技术标签**: 

---

### 🌟 [gemini-cli](https://github.com/google-gemini/gemini-cli)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 104,568
- **核心概述**: 一款开源 AI 代理，可将 Gemini 的强大功能直接带入您的终端。
- **技术标签**: ai, ai-agents, cli, gemini, gemini-api, mcp-client

---

### 🌟 [skills](https://github.com/mattpocock/skills)
- **项目语言**: Shell
- **星标数量**: ⭐ 103,684
- **核心概述**: 真正工程师的技能。直接来自我的 .claude 目录。
- **技术标签**: 

---

## 📅 2026-05-24 每日高 Star 项目推荐

> 🤖 每日精选高质量开源项目，持续为你带来灵感

### 🌟 [hermes-agent](https://github.com/NousResearch/hermes-agent)
- **项目语言**: Python
- **星标数量**: ⭐ 164,494
- **核心概述**: 与您共同成长的代理商
- **技术标签**: ai, ai-agent, ai-agents, anthropic, chatgpt, claude

---

### 🌟 [andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills)
- **项目语言**: 多语言
- **星标数量**: ⭐ 149,714
- **核心概述**: 用于改进 Claude 代码行为的单个 CLAUDE.md 文件，源自 Andrej Karpathy 对 LLM 编码陷阱的观察。
- **技术标签**: 

---

### 🌟 [skills](https://github.com/anthropics/skills)
- **项目语言**: Python
- **星标数量**: ⭐ 139,746
- **核心概述**: 代理技能的公共存储库
- **技术标签**: agent-skills

---

### 🌟 [system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools)
- **项目语言**: 多语言
- **星标数量**: ⭐ 138,159
- **核心概述**: 完整增强代码、Claude Code、Cluely、CodeBuddy、Comet、Cursor、Devin AI、Junie、Kiro、Leap.new、Lovable、Manus、NotionAI、Orchids.app、Perplexity、Poke、Qoder、Replit、Same.dev、Trae、Traycer AI、VSCode Agent、Warp.dev、Windsurf、Xcode、Z.ai Code、Dia 和 v0。 （和其他开源）系统提示、内部工具和人工智能模型
- **技术标签**: ai, bolt, cluely, copilot, cursor, cursorai

---

### 🌟 [claude-code](https://github.com/anthropics/claude-code)
- **项目语言**: Shell
- **星标数量**: ⭐ 126,019
- **核心概述**: Claude Code 是一种代理编码工具，它位于您的终端中，了解您的代码库，并通过执行例行任务、解释复杂代码和处理 git 工作流程来帮助您更快地编码 - 所有这些都通过自然语言命令进行。
- **技术标签**: 

---

### 🌟 [markitdown](https://github.com/microsoft/markitdown)
- **项目语言**: Python
- **星标数量**: ⭐ 124,846
- **核心概述**: 用于将文件和 Office 文档转换为 Markdown 的 Python 工具。
- **技术标签**: autogen, autogen-extension, langchain, markdown, microsoft-office, openai

---

## 📅 2026-05-21 每日高 Star AI 项目推荐

> 🤖 算法在云端昼夜运转，灵感在市井游街寻觅。

### 🌟 [awesome-ml-courses](https://github.com/luspr/awesome-ml-courses)
- **项目语言**: TypeScript/Python/Other
- **星标数量**: ⭐ 3078
- **核心概述**: 很棒的免费机器学习和人工智能课程以及视频讲座。
- **技术标签**: ai-courses, artificial-intelligence, deep-learning, machine-learning, reinforcement-learning

### 🌟 [awesome-mlss](https://github.com/awesome-mlss/awesome-mlss)
- **项目语言**: HTML
- **星标数量**: ⭐ 3009
- **核心概述**: 🤖 机器学习暑期学校指南
- **技术标签**: artificial-intelligence, deep-learning, machine-learning, reinforcement-learning, summer-school

### 🌟 [best_AI_papers_2021](https://github.com/louisfb01/best_AI_papers_2021)
- **项目语言**: TypeScript/Python/Other
- **星标数量**: ⭐ 2901
- **核心概述**: 按发布日期列出的人工智能最新突破（2021 年）的精选列表，包含清晰的视频说明、更深入的文章链接和代码。
- **技术标签**: 2021, ai, artificial-intelligence, artificialintelligence, computer-science

---

## 📅 2026-05-21 每日高 Star AI 项目推荐

> 🤖 算法在云端昼夜运转，灵感在市井游街寻觅。

### 🌟 [Data-science-best-resources](https://github.com/tirthajyoti/Data-science-best-resources)
- **项目语言**: TypeScript/Python/Other
- **星标数量**: ⭐ 3201
- **核心概述**: 精心策划的数据科学资源链接集中在一处
- **技术标签**: analytics, api, artificial-intelligence, aws, cheatsheet

### 🌟 [best_AI_papers_2022](https://github.com/louisfb01/best_AI_papers_2022)
- **项目语言**: TypeScript/Python/Other
- **星标数量**: ⭐ 3186
- **核心概述**: 按发布日期列出的人工智能最新突破（2022 年）的精选列表，包含清晰的视频说明、更深入的文章链接和代码。
- **技术标签**: 2022, ai, artificial-intelligence, computer-science, computer-vision

### 🌟 [Deep-Learning-with-PyTorch-Tutorials](https://github.com/dragen1860/Deep-Learning-with-PyTorch-Tutorials)
- **项目语言**: Python
- **星标数量**: ⭐ 3110
- **核心概述**: 深度学习与PyTorch入门实战视频教程配套源代码和PPT
- **技术标签**: artificial-intelligence, convolutional-neural-networks, deep-learning, generative-adversarial-network, machine-learning

---

## 📅 2026-05-21 每日高 Star AI 项目推荐

> 🤖 算法在云端昼夜运转，灵感在市井游街寻觅。

### 🌟 [AI-ML-Roadmap-from-scratch](https://github.com/aadi1011/AI-ML-Roadmap-from-scratch)
- **项目语言**: TypeScript/Python/Other
- **星标数量**: ⭐ 3640
- **核心概述**: 通过这个完整的 0 到 100 存储库，熟练掌握人工智能、机器学习、生成式 AI、深度学习、数据科学、自然语言处理、强化学习等。
- **技术标签**: ai, aiml, artificial-intelligence, data-science, deep-learning

### 🌟 [face.evoLVe](https://github.com/ZhaoJ9014/face.evoLVe)
- **项目语言**: Python
- **星标数量**: ⭐ 3588
- **核心概述**: 🔥🔥PaddlePaddle 和 PyTorch 上的高性能人脸识别库🔥🔥
- **技术标签**: artificial-intelligence, computer-vision, convolutional-neural-network, data-augmentation, deep-learning

### 🌟 [Machine-Learning-with-Python](https://github.com/tirthajyoti/Machine-Learning-with-Python)
- **项目语言**: Jupyter Notebook
- **星标数量**: ⭐ 3312
- **核心概述**: 涵盖各种机器学习技术的练习和教程式笔记本
- **技术标签**: artificial-intelligence, classification, clustering, data-science, decision-trees

---

## 📅 2026-05-21 每日高 Star AI 项目推荐

> 🤖 算法在云端昼夜运转，灵感在市井游街寻觅。

### 🌟 [Machine-Learning-Notes](https://github.com/Sophia-11/Machine-Learning-Notes)
- **项目语言**: TypeScript/Python/Other
- **星标数量**: ⭐ 3772
- **核心概述**: 周志华《机器学习》手推笔记
- **技术标签**: algorithms, artificial-intelligence, deep-learning, machine-learning, notes

### 🌟 [olivia](https://github.com/olivia-ai/olivia)
- **项目语言**: Go
- **星标数量**: ⭐ 3720
- **核心概述**: 💁‍♀️由人工神经网络驱动的新好朋友
- **技术标签**: ai, artificial-intelligence, assistant, backend, chatbot

### 🌟 [polyaxon](https://github.com/polyaxon/polyaxon)
- **项目语言**: TypeScript/Python/Other
- **星标数量**: ⭐ 3706
- **核心概述**: 用于管理和编排机器学习生命周期的 MLOps 工具
- **技术标签**: agents, artificial-intelligence, data-science, deep-learning, harness

---

## 📅 2026-05-21 每日高 Star AI 项目推荐

> 🤖 算法在云端昼夜运转，灵感在市井游街寻觅。

### 🌟 [learning-to-learn](https://github.com/google-deepmind/learning-to-learn)
- **项目语言**: Python
- **星标数量**: ⭐ 4071
- **核心概述**: 在 TensorFlow 中学习
- **技术标签**: artificial-intelligence, deep-learning, machine-learning, neural-networks

### 🌟 [segment-geospatial](https://github.com/opengeos/segment-geospatial)
- **项目语言**: Python
- **星标数量**: ⭐ 3998
- **核心概述**: 用于使用 Segment Anything Model (SAM) 分割地理空间数据的 Python 包
- **技术标签**: artificial-intelligence, deep-learning, geopython, geospatial, machine-learning

### 🌟 [Artificial-Intelligence-Deep-Learning-Machine-Learning-Tutorials](https://github.com/TarrySingh/Artificial-Intelligence-Deep-Learning-Machine-Learning-Tutorials)
- **项目语言**: Python
- **星标数量**: ⭐ 3991
- **核心概述**: 深度学习/人工智能和机器学习教程的综合列表 - 快速扩展到人工智能/深度学习/机器视觉/NLP 领域以及气候/能源、汽车、零售、制药、医学、医疗保健、政策、道德等行业特定领域。
- **技术标签**: artificial-intelligence, aws, capsule-network, convolutional-neural-networks, deep-learning

---

## 📅 2026-05-21 每日高 Star AI 项目推荐

> 🤖 算法在云端昼夜运转，灵感在市井游街寻觅。

### 🌟 [reasoning-from-scratch](https://github.com/rasbt/reasoning-from-scratch)
- **项目语言**: Jupyter Notebook
- **星标数量**: ⭐ 4380
- **核心概述**: 从头开始，一步步在 PyTorch 中实现推理 LLM
- **技术标签**: ai, artificial-intelligence, chain-of-thought, deep-learning, distillation

### 🌟 [neural_prophet](https://github.com/ourownstory/neural_prophet)
- **项目语言**: Python
- **星标数量**: ⭐ 4280
- **核心概述**: NeuralProphet：一个简单的预测包
- **技术标签**: artificial-intelligence, autoregression, deep-learning, fbprophet, forecast

### 🌟 [maths-cs-ai-compendium](https://github.com/HenryNdubuaku/maths-cs-ai-compendium)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 4113
- **核心概述**: 成为一名出色的 AI/ML 研究工程师
- **技术标签**: ai-textbook, algorithms, artificial-intelligence, computer-science, computer-vision

---

## 📅 2026-05-21 每日高 Star AI 项目推荐

> 🤖 算法在云端昼夜运转，灵感在市井游街寻觅。

### 🌟 [Production-Level-Deep-Learning](https://github.com/alirezadir/Production-Level-Deep-Learning)
- **项目语言**: TypeScript/Python/Other
- **星标数量**: ⭐ 4635
- **核心概述**: 构建要在现实世界应用中部署的实用生产级深度学习系统的指南。
- **技术标签**: ai, artificial-intelligence, deep-learning, deployment, kubeflow

### 🌟 [datascience](https://github.com/r0f1/datascience)
- **项目语言**: TypeScript/Python/Other
- **星标数量**: ⭐ 4626
- **核心概述**: 用于数据科学的 Python 资源精选列表。
- **技术标签**: artificial-intelligence, awesome, awesome-list, bayes, data-analysis

### 🌟 [dm_control](https://github.com/google-deepmind/dm_control)
- **项目语言**: Python
- **星标数量**: ⭐ 4586
- **核心概述**: Google DeepMind 使用 MuJoCo 的软件堆栈，用于基于物理的模拟和强化学习环境。
- **技术标签**: artificial-intelligence, deep-learning, machine-learning, mujoco, neural-networks

---

## 📅 2026-05-21 每日高 Star AI 项目推荐

> 🤖 算法在云端昼夜运转，灵感在市井游街寻觅。

### 🌟 [pytorch-forecasting](https://github.com/sktime/pytorch-forecasting)
- **项目语言**: Python
- **星标数量**: ⭐ 4900
- **核心概述**: 使用 PyTorch 进行时间序列预测
- **技术标签**: ai, artificial-intelligence, data-science, deep-learning, forecasting

### 🌟 [interviews.ai](https://github.com/BoltzmannEntropy/interviews.ai)
- **项目语言**: TypeScript/Python/Other
- **星标数量**: ⭐ 4831
- **核心概述**: 我相信，本书主要针对的研究生和求职者将会从阅读本书中受益；然而，我希望即使是最有经验的研究人员也会发现它很有趣。
- **技术标签**: artificial-intelligence, autograd, bayesian-statistics, convolutional-neural-networks, data-science

### 🌟 [Reinforcement-Learning](https://github.com/andri27-ts/Reinforcement-Learning)
- **项目语言**: Jupyter Notebook
- **星标数量**: ⭐ 4717
- **核心概述**: 60 天内学​​习深度强化学习！ Python 讲座和代码。强化学习+深度学习
- **技术标签**: a2c, artificial-intelligence, deep-learning, deep-reinforcement-learning, deepmind

---

## 📅 2026-05-21 每日高 Star AI 项目推荐

> 🤖 算法在云端昼夜运转，灵感在市井游街寻觅。

### 🌟 [gorgonia](https://github.com/gorgonia/gorgonia)
- **项目语言**: Go
- **星标数量**: ⭐ 5914
- **核心概述**: Gorgonia 是一个有助于促进 Go 机器学习的库。
- **技术标签**: artificial-intelligence, automatic-differentiation, computation-graph, deep-learning, deep-neural-networks

### 🌟 [start-machine-learning](https://github.com/louisfb01/start-machine-learning)
- **项目语言**: TypeScript/Python/Other
- **星标数量**: ⭐ 5249
- **核心概述**: 2026 年开始和改进机器学习 (ML)、人工智能 (AI) 的完整指南，无需任何该领域背景，即可了解最新新闻和最先进的技术！
- **技术标签**: artificial-intelligence, cheat-sheets, course, coursera, coursera-machine-learning

### 🌟 [gluonts](https://github.com/awslabs/gluonts)
- **项目语言**: Python
- **星标数量**: ⭐ 5191
- **核心概述**: Python 中的概率时间序列建模
- **技术标签**: artificial-intelligence, aws, data-science, deep-learning, forecasting

---

## 📅 2026-05-21 每日高 Star AI 项目推荐

> 🤖 算法在云端昼夜运转，灵感在市井游街寻觅。

### 🌟 [AI-Job-Notes](https://github.com/amusi/AI-Job-Notes)
- **项目语言**: TypeScript/Python/Other
- **星标数量**: ⭐ 6077
- **核心概述**: AI算法岗求职攻略（内容准备攻略、刷题指南、内推和AI公司清单等资料）
- **技术标签**: algorithms, artificial-intelligence, computer-vision, deep-learning, image-processing

### 🌟 [Swift-AI](https://github.com/Swift-AI/Swift-AI)
- **项目语言**: Swift
- **星标数量**: ⭐ 6043
- **核心概述**: Swift 机器学习库。
- **技术标签**: artificial-intelligence, deep-learning, ios, machine-learning, macos

### 🌟 [ai-deadlines](https://github.com/paperswithcode/ai-deadlines)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 5989
- **核心概述**: :alarm_clock: AI会议截止日期倒计时
- **技术标签**: artificial-intelligence, computer-vision, deep-learning, deep-neural-networks, machine-learning

---

## 📅 2026-05-21 每日高 Star AI 项目推荐

> 🤖 算法在云端昼夜运转，灵感在市井游街寻觅。

### 🌟 [DeepPavlov](https://github.com/deeppavlov/DeepPavlov)
- **项目语言**: Python
- **星标数量**: ⭐ 6983
- **核心概述**: 用于深度学习端到端对话系统和聊天机器人的开源库。
- **技术标签**: ai, artificial-intelligence, bot, chatbot, chitchat

### 🌟 [flower](https://github.com/flwrlabs/flower)
- **项目语言**: Python
- **星标数量**: ⭐ 6909
- **核心概述**: Flower：一个友好的联合人工智能框架
- **技术标签**: ai, android, artificial-intelligence, cpp, deep-learning

### 🌟 [TensorFlow-2.x-Tutorials](https://github.com/dragen1860/TensorFlow-2.x-Tutorials)
- **项目语言**: Jupyter Notebook
- **星标数量**: ⭐ 6354
- **核心概述**: TensorFlow 2.x版本的教程和示例，包括CNN、RNN、GAN、自动编码器、FasterRCNN、GPT、BERT示例等。TF 2.0版入门实例代码，实战教程。
- **技术标签**: artificial-intelligence, computer-vision, deep-learning, machine-learning, neural-network

---

## 📅 2026-05-21 每日高 Star AI 项目推荐

> 🤖 算法在云端昼夜运转，灵感在市井游街寻觅。

### 🌟 [stanza](https://github.com/stanfordnlp/stanza)
- **项目语言**: Python
- **星标数量**: ⭐ 7793
- **核心概述**: 斯坦福 NLP Python 库，用于许多人类语言的标记化、句子分割、NER 和解析
- **技术标签**: artificial-intelligence, corenlp, deep-learning, machine-learning, named-entity-recognition

### 🌟 [lab](https://github.com/google-deepmind/lab)
- **项目语言**: C
- **星标数量**: ⭐ 7355
- **核心概述**: 用于基于代理的人工智能研究的可定制 3D 平台
- **技术标签**: artificial-intelligence, deep-learning, machine-learning, neural-networks

### 🌟 [SerpentAI](https://github.com/SerpentAI/SerpentAI)
- **项目语言**: Python
- **星标数量**: ⭐ 6985
- **核心概述**: 游戏代理框架。帮助您创建人工智能/机器人来学习玩您拥有的任何游戏！
- **技术标签**: artificial-intelligence, computer-vision, deep-learning, framework, machine-learning

---

## 📅 2026-05-21 每日高 Star AI 项目推荐

> 🤖 算法在云端昼夜运转，灵感在市井游街寻觅。

### 🌟 [computervision-recipes](https://github.com/microsoft/computervision-recipes)
- **项目语言**: Jupyter Notebook
- **星标数量**: ⭐ 9853
- **核心概述**: 计算机视觉的最佳实践、代码示例和文档。
- **技术标签**: artificial-intelligence, azure, computer-vision, convolutional-neural-networks, data-science

### 🌟 [X-AnyLabeling](https://github.com/CVHub520/X-AnyLabeling)
- **项目语言**: Python
- **星标数量**: ⭐ 9148
- **核心概述**: 借助 Segment Anything 和其他出色模型的 AI 支持，轻松进行数据标记。
- **技术标签**: artificial-intelligence, clip, computer-vision, deep-learning, groundingdino

### 🌟 [caffe2](https://github.com/facebookarchive/caffe2)
- **项目语言**: Shell
- **星标数量**: ⭐ 8379
- **核心概述**: Caffe2 是一个轻量级、模块化、可扩展的深度学习框架。
- **技术标签**: ai, artificial-intelligence, caffe2, deep-learning, deep-neural-networks

---

## 📅 2026-05-20 每日高 Star AI 项目推荐

> 🤖 算法在云端昼夜运转，灵感在市井游街寻觅。

### 🌟 [fiftyone](https://github.com/voxel51/fiftyone)
- **项目语言**: Python
- **星标数量**: ⭐ 10713
- **核心概述**: 完善高质量数据集和视觉 AI 模型
- **技术标签**: active-learning, artificial-intelligence, computer-vision, data-centric-ai, data-cleaning

### 🌟 [mit-deep-learning](https://github.com/lexfridman/mit-deep-learning)
- **项目语言**: Jupyter Notebook
- **星标数量**: ⭐ 10442
- **核心概述**: 麻省理工学院深度学习相关课程的教程、作业和竞赛。
- **技术标签**: artificial-intelligence, data-science, deep-learning, deep-reinforcement-learning, deep-rl

### 🌟 [sonnet](https://github.com/google-deepmind/sonnet)
- **项目语言**: Python
- **星标数量**: ⭐ 9917
- **核心概述**: 基于 TensorFlow 的神经网络库
- **技术标签**: artificial-intelligence, deep-learning, machine-learning, neural-networks, tensorflow

---

## 📅 2026-05-20 每日高 Star AI 项目推荐

> 🤖 算法在云端昼夜运转，灵感在市井游街寻觅。

### 🌟 [Ai-Learn](https://github.com/tangyudi/Ai-Learn)
- **项目语言**: TypeScript/Python/Other
- **星标数量**: ⭐ 12994
- **核心概述**: 人工智能学习路线图，整理近200个实战案例与项目，免费提供配套教材，零基础入门，就业实战！包括：Python，数学，机器学习，数据分析，深度学习，计算机视觉，自然语言处理，PyTorch张量流机器学习，深度学习数据分析数据挖掘数学数据科学人工智能pythontensorflowtensorflow2caffekeraspytorch算法numpypandasmatplotlibseabornnlp简历等热门领域
- **技术标签**: algorithm, artificial-intelligence, caffe, cv, data-analysis

### 🌟 [tensorzero](https://github.com/tensorzero/tensorzero)
- **项目语言**: Rust
- **星标数量**: ⭐ 11380
- **核心概述**: TensorZero 是一个开源 LLMOps 平台，统一了 LLM 网关、可观测性、评估、优化和实验。
- **技术标签**: ai, ai-engineering, anthropic, artificial-intelligence, deep-learning

### 🌟 [kornia](https://github.com/kornia/kornia)
- **项目语言**: Python
- **星标数量**: ⭐ 11210
- **核心概述**: 🐍 空间人工智能几何计算机视觉库
- **技术标签**: artificial-intelligence, computer-vision, deep-learning, hacktoberfest, image-processing

---

## 📅 2026-05-20 每日高 Star AI 项目推荐

> 🤖 算法在云端昼夜运转，灵感在市井游街寻觅。

### 🌟 [ml-visuals](https://github.com/dair-ai/ml-visuals)
- **项目语言**: TypeScript/Python/Other
- **星标数量**: ⭐ 17207
- **核心概述**: 🎨 ML Visuals 包含图形和模板，您可以重复使用和自定义它们以改进您的科学写作。
- **技术标签**: artificial-intelligence, deep-learning, design, machine-learning, natural-language-processing

### 🌟 [cheatsheets-ai](https://github.com/kailashahirwar/cheatsheets-ai)
- **项目语言**: TypeScript/Python/Other
- **星标数量**: ⭐ 15400
- **核心概述**: 深度学习和机器学习研究人员的基本备忘单 https://medium.com/@kailashahirwar/essential-cheat-sheets-for-machine-learning-and-deep-learning-researchers-efb6a8ebd2e5
- **技术标签**: artificial-intelligence, deep-learning, keras, machine-learning, matplotlib

### 🌟 [awesome-artificial-intelligence](https://github.com/owainlewis/awesome-artificial-intelligence)
- **项目语言**: TypeScript/Python/Other
- **星标数量**: ⭐ 13874
- **核心概述**: 人工智能 (AI) 课程、书籍、视频讲座和论文的精选列表。
- **技术标签**: ai, artificial-intelligence, deep-learning, intelligent-machines, intelligent-systems

---

## 📅 2026-05-20 每日高 Star AI 项目推荐

> 🤖 算法在云端昼夜运转，灵感在市井游街寻觅。

### 🌟 [datasets](https://github.com/huggingface/datasets)
- **项目语言**: Python
- **星标数量**: ⭐ 21525
- **核心概述**: 🤗 最大的 AI 模型即用数据集中心，提供快速、易于使用且高效的数据操作工具
- **技术标签**: ai, artificial-intelligence, computer-vision, dataset-hub, datasets

### 🌟 [onnx](https://github.com/onnx/onnx)
- **项目语言**: Python
- **星标数量**: ⭐ 20853
- **核心概述**: 机器学习互操作性的开放标准
- **技术标签**: ai, artificial-intelligence, deep-learning, deep-neural-networks, dnn

### 🌟 [machine-learning-for-trading](https://github.com/stefan-jansen/machine-learning-for-trading)
- **项目语言**: Jupyter Notebook
- **星标数量**: ⭐ 17356
- **核心概述**: 算法交易机器学习代码，第二版。
- **技术标签**: artificial-intelligence, data-science, deep-learning, finance, investment

---

## 📅 2026-05-20 每日高 Star AI 项目推荐

> 🤖 算法在云端昼夜运转，灵感在市井游街寻觅。

### 🌟 [machine-learning-for-software-engineers](https://github.com/ZuzooVn/machine-learning-for-software-engineers)
- **项目语言**: TypeScript/Python/Other
- **星标数量**: ⭐ 28775
- **核心概述**: 学习成为机器学习工程师的完整每日计划。
- **技术标签**: artificial-intelligence, deep-learning, machine-learning, machine-learning-algorithms, software-engineer

### 🌟 [cs249r_book](https://github.com/harvard-edge/cs249r_book)
- **项目语言**: Python
- **星标数量**: ⭐ 24219
- **核心概述**: 机器学习系统
- **技术标签**: artificial-intelligence, cloud-ml, computer-systems, courseware, deep-learning

### 🌟 [recommenders](https://github.com/recommenders-team/recommenders)
- **项目语言**: Python
- **星标数量**: ⭐ 21708
- **核心概述**: 推荐系统的最佳实践
- **技术标签**: ai, artificial-intelligence, data-science, deep-learning, jupyter-notebook

---

## 📅 2026-05-20 每日高 Star AI 项目推荐

> 🤖 算法在云端昼夜运转，灵感在市井游街寻觅。

### 🌟 [spaCy](https://github.com/explosion/spaCy)
- **项目语言**: Python
- **星标数量**: ⭐ 33589
- **核心概述**: 💫 Python 中的工业级自然语言处理 (NLP)
- **技术标签**: ai, artificial-intelligence, cython, data-science, deep-learning

### 🌟 [pytorch-lightning](https://github.com/Lightning-AI/pytorch-lightning)
- **项目语言**: Python
- **星标数量**: ⭐ 31152
- **核心概述**: 在 1 个或 10,000 多个 GPU 上预训练、微调任何大小的任何 AI 模型，并且零代码更改。
- **技术标签**: ai, artificial-intelligence, data-science, deep-learning, machine-learning

### 🌟 [AI-Expert-Roadmap](https://github.com/AMAI-GmbH/AI-Expert-Roadmap)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 30982
- **核心概述**: 2022 年成为人工智能专家的路线图
- **技术标签**: ai, ai-roadmap, artificial-intelligence, data-analysis, data-science

---

## 📅 2026-05-19 每日高 Star AI 项目推荐

> 🤖 算法在云端昼夜运转，灵感在市井游街寻觅。

### 🌟 [LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)
- **项目语言**: Jupyter Notebook
- **星标数量**: ⭐ 95117
- **核心概述**: 在 PyTorch 中从头开始一步步实现类似 ChatGPT 的 LLM
- **技术标签**: ai, artificial-intelligence, chatbot, chatgpt, deep-learning

### 🌟 [AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners)
- **项目语言**: Jupyter Notebook
- **星标数量**: ⭐ 47631
- **核心概述**: 12 周，24 节课，全民人工智能！
- **技术标签**: ai, artificial-intelligence, cnn, computer-vision, deep-learning

### 🌟 [500-AI-Machine-learning-Deep-learning-Computer-vision-NLP-Projects-with-code](https://github.com/ashishpatel26/500-AI-Machine-learning-Deep-learning-Computer-vision-NLP-Projects-with-code)
- **项目语言**: TypeScript/Python/Other
- **星标数量**: ⭐ 33675
- **核心概述**: 500 个 AI 机器学习 深度学习 计算机视觉 NLP 项目及代码
- **技术标签**: artificial-intelligence, artificial-intelligence-projects, awesome, computer-vision, computer-vision-project

---

# Daily High-Star Recommendations

每日推荐高 Star 项目，涵盖人工智能、机器学习、深度学习及其他领域。

---

## 2026-05-19

1. **[TensorFlow](https://github.com/tensorflow/tensorflow)**
   - Google's open-source platform for machine learning. Over 200,000★.

2. **[PyTorch](https://github.com/pytorch/pytorch)**
   - A deep learning framework by Meta (Facebook). About 100,000★.

3. **[Scikit-learn](https://github.com/scikit-learn/scikit-learn)**
   - Library for machine learning in Python. Nearly 70,000★.

4. **[Hugging Face Transformers](https://github.com/huggingface/transformers)**
   - NLP and multimodal models for AI applications. Over 160,000★.

5. **[LangChain](https://github.com/langchain-ai/langchain)**
   - Framework for building language-model-powered applications. Fast-growing in the community.

---

每日内容由自动脚本生成，方便随时获取高质量开源推荐！## 📅 2026-05-23 每日高 Star 项目推荐

> 🤖 每日精选高质量开源项目，持续为你带来灵感

### 🌟 [openclaw](https://github.com/openclaw/openclaw)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 374,030
- **核心概述**: 您自己的私人人工智能助理。任何操作系统。任何平台。龙虾方式。 🦞
- **技术标签**: ai, assistant, crustacean, molty, openclaw, own-your-data

---

### 🌟 [superpowers](https://github.com/obra/superpowers)
- **项目语言**: Shell
- **星标数量**: ⭐ 203,045
- **核心概述**: 有效的代理技能框架和软件开发方法。
- **技术标签**: 

---

### 🌟 [claw-code](https://github.com/ultraworkers/claw-code)
- **项目语言**: Rust
- **星标数量**: ⭐ 192,262
- **核心概述**: 仓库终于解锁了。享受聚会！历史上最快超过 10 万颗星的仓库 ⭐。加入 Discord：https://discord.gg/5TUQKqFWd 使用 oh-my-codex 内置 Rust。
- **技术标签**: 

---

### 🌟 [ECC](https://github.com/affaan-m/ECC)
- **项目语言**: JavaScript
- **星标数量**: ⭐ 188,581
- **核心概述**: 代理利用性能优化系统。 Claude Code、Codex、Opencode、Cursor 等的技能、直觉、记忆、安全性和研究优先的开发。
- **技术标签**: ai-agents, anthropic, claude, claude-code, developer-tools, llm

---

### 🌟 [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain)
- **项目语言**: HTML
- **星标数量**: ⭐ 164,330
- **核心概述**: DigitalPlat FreeDomain：适合所有人的免费域名
- **技术标签**: digitalplat, domain, domain-platform, domainname, domains, free

---

### 🌟 [opencode](https://github.com/anomalyco/opencode)
- **项目语言**: TypeScript
- **星标数量**: ⭐ 164,120
- **核心概述**: 开源编码代理。
- **技术标签**: 

---

