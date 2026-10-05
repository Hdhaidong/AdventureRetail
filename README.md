# portfolio-pm · 项目管理工作仓

管理全部在营项目的工作任务与进度。**main 分支 = 总览看板**；**每个项目一条专属分支，分支名与其 GitHub 源码仓一一对应**，分支内维护该项目的 PROJECT.yaml / SOW / TASKS / PROGRESS。

更新日期：2026-10-05 · 隶属 Hdhaidong 产品组合（双路线矩阵：每产品 DSH 插件 + PI mono 两个技术底座）

## 一、项目矩阵（总览看板）

| # | 项目 | PM 分支 | 源码仓 | 路线 | 版本 | 状态 | 下一步 |
|---|------|---------|--------|------|------|------|--------|
| 1 | Target 运营助手 · DSH 版 | [`dsh-target-ops`](../../tree/dsh-target-ops) | 无（不建仓，源码=工作区+装配副本） | DSH 插件 | 0.1.0 | 🟡 装配完成，待重启验证 | DHs Desktop 装配验证（重启验证 25 工具/审批/面板） |
| 2 | pi-kernel（内核 + Target/CRM/Retail 插件） | [`pi-kernel`](../../tree/pi-kernel) | [Hdhaidong/pi-kernel](https://github.com/Hdhaidong/pi-kernel) | PI mono 底座 | 0.9.0 | 🟢 测试清偿完成 139/139 | target.connect 联调 |
| 3 | 稳卖调研 Agent（wenmai） | [`wenmai-agent`](../../tree/wenmai-agent) | [Hdhaidong/wenmai-agent](https://github.com/Hdhaidong/wenmai-agent) | DSH 母体 | 1.0.0 | 🟢 已发布 | 插件测试挂载 |
| 4 | Target 学习教练 | [`target-coach-client`](../../tree/target-coach-client) | [Hdhaidong/target-coach-client](https://github.com/Hdhaidong/target-coach-client) | PI mono | 1.0.0 | 🟢 已发布 | 测试挂载 npm test |
| 5 | insightmarketplac Home Depot | [`insightmarketplac-client`](../../tree/insightmarketplac-client) | [Hdhaidong/insightmarketplac-client](https://github.com/Hdhaidong/insightmarketplac-client) | PI mono | 1.0.0 | 🟢 已发布 | 文案修正（技能清单=11） |
| 6 | 稳卖 Wayfair 学堂 | [`wenmai-learn-wayfair`](../../tree/wenmai-learn-wayfair) | [Hdhaidong/wenmai-learn-wayfair](https://github.com/Hdhaidong/wenmai-learn-wayfair) | PI mono | 1.0.0 | 🟢 已发布（npm test 已挂） | Wayfair 运营版（待规划） |
| 7 | Adventure Retail 业务平台 | [`adventure-platform`](../../tree/adventure-platform) | [Hdhaidong/adventure-platform](https://github.com/Hdhaidong/adventure-platform) | 平台侧 SaaS | — | 🟢 7 Worker 运行中 | bundle 构建管线化 |

图例：🟢 正常推进 · 🟡 有关键待验证项 · 🔴 阻塞 · ⚪ 归档

## 二、分支结构（每条项目分支四个文件）

| 文件 | 用途 |
|------|------|
| `PROJECT.yaml` | 项目元数据：源码仓/分支/本地路径/路线/版本/状态/下一步 |
| `SOW.md` | 工作说明书：定位/范围/交付物/里程碑 |
| `TASKS.md` | 任务清单：勾选式，分 进行中 / 待启动 / 已完成 |
| `PROGRESS.md` | 进度日志：倒序时间线，一条一事件 |

## 三、更新规程

1. **日常进展** → 到对应项目分支：勾选/新增 `TASKS.md` 条目，`PROGRESS.md` 顶部追加日志；提交信息格式 `progress: <项目> <摘要>`。
2. **里程碑变动**（完成或新增）→ 同步更新该分支 `SOW.md` 里程碑表与 `PROJECT.yaml`。
3. **看板同步** → main 项目矩阵的状态/下一步列随里程碑节点更新（至少每周一次）。
4. **新项目入列** → 从 main 拉新分支（分支名 = 该项目源码仓名）→ 按四文件模板填写 → main 矩阵加一行。
5. **归档** → 矩阵标 ⚪，分支保留不删。

## 四、双路线总纲

每个产品两条路线、两个技术底座（既定方针）：**DSH 插件路线**（宿主 DSH Desktop，插件契约 = defineTool + tools/pre-execute 审批门 + webServer 面板）与 **PI mono 路线**（pi-kernel 内嵌 Electron 客户端，契约 = store/plugin/web/connector）。域规则演进双侧同步。范本：wenmai-agent（DSH 路线）/ tg-coach（PI mono 路线）。
