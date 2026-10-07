# portfolio-pm · 项目管理工作仓

管理全部在营项目的工作任务与进度，按统一 SDLC 流程（见 [PROCESS.md](PROCESS.md)）运转。**main 分支 = 总览看板 + 流程规范**；**每个项目一条专属分支，分支名与其 GitHub 源码仓一一对应**（家族级聚合分支为例外，一条分支管多仓，如 [`coach-family`](../../tree/coach-family)），分支内维护流程档案与管理文件。组合级阻塞与缺口统一登记于 [ISSUES.md](ISSUES.md)（问题清单）。

更新日期：2026-10-07 · 隶属 Hdhaidong 产品组合（多路线矩阵：每产品 dsh 插件 / PI mono / Qoder Cloud Agents 多个技术底座）

## 一、项目矩阵（总览看板）

| # | 项目 | PM 分支 | 源码仓 | 路线 | 版本 | SDLC 阶段 | 下一步 |
|---|------|---------|--------|------|------|-----------|--------|
| 1 | Target 运营助手 · dsh 版 | [`dsh-target-ops`](../../tree/dsh-target-ops) | 无独立仓（源码归档=本仓 dsh-target-ops 分支 plugin/） | dsh 插件 | 0.1.0 | 🟡 P4 测试（面板已通，首次会话验证待做） | TC-35 三步：工具可见 → 审批弹窗 → 门禁流转 P4→P5（需用户在 dsh Desktop 操作） |
| 2 | pi-kernel（内核 + Target/CRM/Retail 插件） | [`pi-kernel`](../../tree/pi-kernel) | [Hdhaidong/pi-kernel](https://github.com/Hdhaidong/pi-kernel) | PI mono 底座 | 0.9.0 | 🟢 P6 运维 | target.connect 联调 |
| 3 | 稳卖调研 Agent（wenmai） | [`wenmai-agent`](../../tree/wenmai-agent) | [Hdhaidong/wenmai-agent](https://github.com/Hdhaidong/wenmai-agent) | dsh 母体 | 1.0.0 | 🟢 P6 运维 | 插件测试挂载 |
| 4 | Target 学习教练 | [`target-coach-client`](../../tree/target-coach-client) | [Hdhaidong/target-coach-client](https://github.com/Hdhaidong/target-coach-client) | PI mono | 1.0.0 | 🟢 P6 运维 | 测试挂载 npm test |
| 5 | insightmarketplac Home Depot | [`insightmarketplac-client`](../../tree/insightmarketplac-client) | [Hdhaidong/insightmarketplac-client](https://github.com/Hdhaidong/insightmarketplac-client) | PI mono | 1.0.0 | 🟢 P6 运维（文案缺陷待修） | 文案修正（技能清单=11） |
| 6 | 稳卖 Wayfair 学堂 | [`wenmai-learn-wayfair`](../../tree/wenmai-learn-wayfair) | [Hdhaidong/wenmai-learn-wayfair](https://github.com/Hdhaidong/wenmai-learn-wayfair) | PI mono | 1.0.0 | 🟢 P6 运维 | Wayfair 运营版（待规划） |
| 7 | Adventure Retail 业务平台 | [`adventure-platform`](../../tree/adventure-platform) | [Hdhaidong/adventure-platform](https://github.com/Hdhaidong/adventure-platform) | 平台侧 SaaS | 2.0.0-dev | 🟡 P3 开发（I1 代码完成，余 I1-5a 生产部署待用户确认 + I1-5b e2e） | I1-5a 部署 → I1-5b e2e → I2 能力下发（已细化 a/b/c）→ I3 拉取 → I4 50 用户验收（北极星=50 注册用户） |
| 8 | Target 工作台 · Qoder 底座多租户版 | [`target-qoder-workbench`](../../tree/target-qoder-workbench) | 无独立仓（本地 D:/dsh-build/target-qoder-workbench） | Qoder Cloud Agents | 0.2.0-dev | 🟡 P3 开发（店铺运营批 M2-1~M2-12 已完成 137 项回归全过，M2.13 自动化批进行中） | M2.13 自动化与任务部署批 → v0.2.0 收口发布 → 阿里云 ECS 部署 |
| 9 | 教练端家族（coach-agent + coach-studio + 14 学员端） | [`coach-family`](../../tree/coach-family) | 多仓聚合：[coach-agent](https://github.com/Hdhaidong/coach-agent) + [coach-studio](https://github.com/Hdhaidong/coach-studio) + 14 × `*-coach-client`（4 仓待开发） | PI mono | 0.0.0 | 🟡 P1 规格完成（2026-10-07 立项，M1 三学员端待启动） | M1-1 etsy-coach-client 骨架派生（→ costco → influencer）→ M2 coach-studio 设计 |

图例：🟢 正常推进 · 🟡 有关键待验证项 · 🔴 阻塞 · ⚪ 归档

## 二、开发流程（详见 [PROCESS.md](PROCESS.md)）

P0 需求 → P1 规格 → P2 设计 → P3 开发 → P4 测试 → P5 发布 → P6 运维；阶段只能向后流转，每阶段有产出文件与完成门禁（DoD）。进度四层跟踪：PROJECT.yaml 的 `sdlc.stage`（走到哪）+ TASKS.md（做什么）+ PROGRESS.md（做过什么）+ ISSUES.md（卡在哪）。

## 三、分支结构（每条项目分支）

| 文件 | 用途 |
|------|------|
| `PROJECT.yaml` | 元数据 + `sdlc` 阶段与门禁记录 |
| `00-REQ.md` | P0 需求规格（用户故事/功能需求/非功能/不做） |
| `SOW.md` | P1 规格（定位/范围/交付物/里程碑）——任务书 |
| `01-DESIGN.md` | P2 设计（架构/模块/数据模型/决策权衡） |
| `02-TEST.md` | P4 测试（策略/用例/结果记录） |
| `03-RELEASE.md` | P5/P6 发布与运维记录 |
| `TASKS.md` | 任务清单（含缺陷/迭代循环） |
| `ISSUES.md` | 问题清单（阻塞/缺陷/风险集中登记；修复后勾销回写） |
| `PROGRESS.md` | 进度日志（倒序时间线） |

新文件从 [`templates/`](templates) 取模板。

## 四、更新规程

1. **日常进展** → 项目分支：勾选/新增 TASKS.md，PROGRESS.md 顶部追加；提交信息 `progress: <项目> <摘要>`。
2. **门禁通过**（阶段流转）→ 更新 PROJECT.yaml `sdlc.stage/gates`，PROGRESS.md 记一行，main 矩阵同步。
3. **里程碑变动** → 同步 SOW.md 里程碑表。
4. **新项目入列** → 从 main 拉分支（分支名=源码仓名）→ 按 templates 填写 → main 矩阵加行。
5. **归档** → 矩阵标 ⚪，分支保留不删。
6. **问题登记** → 阻塞/缺陷/风险进项目分支 ISSUES.md（编号 ISS-N）；跨项目或仓库级问题进 main 分支 ISSUES.md（编号 PI-N）；修复后勾销并回写 TASKS/PROGRESS。

## 五、双路线总纲

每个产品两条路线、两个技术底座（既定方针）：**dsh 插件路线**（宿主 dsh Desktop）与 **PI mono 路线**（pi-kernel 内嵌 Electron 客户端）。域规则演进双侧同步；一侧变更需在对端分支 TASKS.md 立同步任务。范本：wenmai-agent（dsh）/ tg-coach（PI mono）。
