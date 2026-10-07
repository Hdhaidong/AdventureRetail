# portfolio-pm · 项目管理工作仓

管理全部在营项目的工作任务与进度，按统一 SDLC 流程（见 [PROCESS.md](PROCESS.md)）运转。**main 分支 = 总览看板 + 流程规范**；**每个项目一条专属分支，分支名与其 GitHub 源码仓一一对应**（家族级聚合分支为例外，一条分支管多仓，如 [`coach-family`](../../tree/coach-family)），分支内维护流程档案与管理文件。组合级阻塞与缺口统一登记于 [ISSUES.md](ISSUES.md)（问题清单）。

更新日期：2026-10-08 · 隶属 Hdhaidong 产品组合（多路线矩阵：每产品 dsh 插件 / DSH 客户端派生 / PI mono / Qoder Cloud Agents / 平台侧 SaaS 多个技术底座）· **组合战略：稳卖学堂（wenmai）为调研对象，其业务模式与能力全部以 Adventure Retail 品牌线实现**（wenmai 家族 = 调研成果；Adventure Retail = 实现载体；ezinq-study 同模式）· **发布优先级（2026-10-08 定稿）：target-qoder-workbench（美国 Target 工作台）组合内最先发布**

## 一、项目矩阵（总览看板）

| # | 项目 | PM 分支 | 源码仓 | 路线 | 版本 | SDLC 阶段 | 下一步 |
|---|------|---------|--------|------|------|-----------|--------|
| 1 | Target 运营助手 · dsh 版 | [`dsh-target-ops`](../../tree/dsh-target-ops) | 无独立仓（源码归档=本仓 dsh-target-ops 分支 plugin/） | dsh 插件 | 0.1.0 | 🟡 P4 测试（面板已通，首次会话验证待做） | TC-35 三步：工具可见 → 审批弹窗 → 门禁流转 P4→P5（需用户在 dsh Desktop 操作） |
| 2 | pi-kernel（内核 + Target/CRM/Retail 插件） | [`pi-kernel`](../../tree/pi-kernel) | [Hdhaidong/pi-kernel](https://github.com/Hdhaidong/pi-kernel) | PI mono 底座 | 0.9.0 | 🟢 P6 运维 | target.connect 联调 |
| 3 | 稳卖调研 Agent（wenmai）· 隶属 AR 研究层 | [`wenmai-agent`](../../tree/wenmai-agent) | [Hdhaidong/wenmai-agent](https://github.com/Hdhaidong/wenmai-agent) | dsh 母体 | 1.0.0 | 🟢 P6 运维 | 插件测试挂载 |
| 4 | Target 学习教练 | [`target-coach-client`](../../tree/target-coach-client) | [Hdhaidong/target-coach-client](https://github.com/Hdhaidong/target-coach-client) | PI mono | 1.0.0 | 🟢 P6 运维 | 测试挂载 npm test |
| 5 | insightmarketplac Home Depot · 隶属 AR 研究层（兼 DSH 基座宿主） | [`insightmarketplac-client`](../../tree/insightmarketplac-client) | [Hdhaidong/insightmarketplac-client](https://github.com/Hdhaidong/insightmarketplac-client) | PI mono | 1.0.0 | 🟢 P6 运维（文案缺陷待修） | 文案修正（技能清单=11） |
| 6 | 稳卖 Wayfair 学堂 · 隶属 AR 研究层 | [`wenmai-learn-wayfair`](../../tree/wenmai-learn-wayfair) | [Hdhaidong/wenmai-learn-wayfair](https://github.com/Hdhaidong/wenmai-learn-wayfair) | PI mono | 1.0.0 | 🟢 P6 运维 | Wayfair 运营版（待规划；如立项以 Adventure Retail 品牌实现） |
| 7 | Adventure Retail 业务平台 | [`adventure-platform`](../../tree/adventure-platform) | [Hdhaidong/adventure-platform](https://github.com/Hdhaidong/adventure-platform) | 平台侧 SaaS | 2.0.0-dev | 🟡 P3 开发（I1 代码完成，余 I1-5a 生产部署待用户确认 + I1-5b e2e） | I1-5a 部署 → I1-5b e2e → I2 能力下发（已细化 a/b/c）→ I3 拉取 → I4 50 用户验收（北极星=50 注册用户） |
| 8 | Target 工作台 · Qoder 底座多租户版 **🔴 最先发布** | [`target-qoder-workbench`](../../tree/target-qoder-workbench) | 无独立仓（代码宿主=本仓 tqw 分支，2026-10-08 起入库；前端源码 M2.14-1 补入中） | Qoder Cloud Agents | 0.2.0-dev | 🟡 P3 开发（店铺运营批 M2-1~M2-12 已完成 137 项回归全过；2026-10-08 发布优先级定稿·美国最先） | **M2.14 发布关键路径批**：前端源码入库（ISS-6）→ v0.2.0 收口（ISS-3）→ M3 ECS 部署（🔴 等凭据）→ US 发布验收（Mock 先行，PAT 到位切 Live）；M2.13 自动化批顺延 v0.2.1 |
| 9 | 教练端家族（coach-agent + coach-studio + 14 学员端） | [`coach-family`](../../tree/coach-family) | 多仓聚合：[coach-agent](https://github.com/Hdhaidong/coach-agent) + [coach-studio](https://github.com/Hdhaidong/coach-studio) + 14 × `*-coach-client`（4 仓待开发） | PI mono | 0.0.0 | 🟡 P1 规格完成（2026-10-07 立项，M1 三学员端待启动） | M1-1 etsy-coach-client 骨架派生（→ costco → influencer）→ M2 coach-studio 设计 |
| 10 | Lowe's 运营助手 AI · 家装垂类 | [`lowes-ops-client`](../../tree/lowes-ops-client) | [Hdhaidong/lowes-ops-client](https://github.com/Hdhaidong/lowes-ops-client) | DSH 客户端派生 | 0.1.0 | 🟡 P2 设计（2026-10-07 立项，P0/P1 门禁通过；T2 技能清单 13 技能 ✅；2026-10-08 路线定稿 DSH 派生，T1 PI mono 架构作废） | T1b 01-DESIGN v2 重写（照 target-ops-client 母版）→ T3 审批门控设计 |
| 11 | Home Depot 运营助手 · 家装垂直 | [`homedepot-ops-workbench`](../../tree/homedepot-ops-workbench) | [Hdhaidong/homedepot-ops-workbench](https://github.com/Hdhaidong/homedepot-ops-workbench) | DSH 客户端派生 | 0.1.0-dev | 🟡 P2 设计（2026-10-07 立项，P0/P1 门禁通过；同日路线定稿=DSH 客户端派生·更名 homedepot-ops-workbench） | 01-DESIGN 草案评审 → P3 开发 M1 客户端派生批（DSH 基座 + flavor 落地） |
| 12 | Adventure Retail Agent · 三底座产品线 | [`adventure-retail-agent`](../../tree/adventure-retail-agent) | 标准仓 [Hdhaidong/adventure-retail-agent](https://github.com/Hdhaidong/adventure-retail-agent)（Qoder 底座宿主）+ DSH 基座宿主 insightmarketplac-client + [pi-kernel](https://github.com/Hdhaidong/pi-kernel) | 三底座聚合（DSH / PI mono / Qoder Cloud Agents） | 0.1.0-dev | 🟡 P2 设计（2026-10-07 立项，P0/P1 门禁通过；M0 三底座归口完成；DSH/PI mono 载体已有，Qoder 底座为主增量） | 01-DESIGN 草案评审 → P3 开发 M1 Qoder 工作台平台批（照 tqw 架构） |
| 13 | EZinq + 价格监视 SaaS 调研 · B2B list 管理 · 隶属 AR 研究层 | [`ezinq-study`](../../tree/ezinq-study) | 无独立仓（外部产品调研） | 研究层调研 | 0.1.0 | 🟡 P0 调研（2026-10-08 立项，EZinq 基线已捕获 + 印度赛道五家初筛） | M2 EZinq 能力矩阵细化 → M3 印度 SaaS 赛道深挖（几万 list 规模口径）→ M4 报告 + adventure-platform 能力建议（list 管理 + 价格监视） |

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

## 五、多路线总纲（2026-10-08 修订）

组合五条技术路线：**① dsh 插件**（宿主 dsh Desktop；范本 wenmai-agent）· **② DSH 客户端派生**（deepseek-harness-new 基座派生独立客户端 + flavor 随安装包下发；范本 target-ops-client → lowes-ops-client / homedepot-ops-workbench）· **③ PI mono**（pi-kernel 内嵌 Electron 客户端；范本 tg-coach / insightmarketplac-client）· **④ Qoder Cloud Agents**（云端多租户工作台；范本 target-qoder-workbench → adventure-retail-agent Qoder 底座）· **⑤ 平台侧 SaaS**（adventure-platform）。同产品多路线间：域规则、需求、测试口径同步；一侧变更需在对端分支 TASKS.md 立同步任务。**研究层调研项目**（wenmai 家族 / ezinq-study）→ 调研成果以 Adventure Retail 品牌线实现（组合战略）。
