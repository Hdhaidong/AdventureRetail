# ISSUES · 组合级问题清单（main）

> 登记 portfolio 范围的阻塞 / 缺口 / 风险（跨项目或仓库级）；项目内问题登各项目分支 ISSUES.md。编号 PI-N 递增。建档：2026-10-07（全仓盘点后首轮登记）。

| # | 类型 | 问题 | 影响 | 状态 | 对策 / 下一步 |
|---|------|------|------|------|--------------|
| PI-1 | 缺陷 | wenmai-research GitHub Pages 404（hdhaidong.github.io/wenmai-research/clients.html 不可达；仓库本体存在） | 稳卖家族 ~70 个客户端 README 引用的母体矩阵页失联，外部访客按链接进来是死链 | 🔴 待修 | 检查 Pages 配置（发布分支 / 路径 / 构建产物），重新部署 |
| PI-2 | 缺口 | 教练端家族 4 个仓为空仓（influencer-coach-client / etsy-coach-client / costco-coach-client / coach-studio：仓库存在但无任何文件） | 教练家族平台覆盖不完整，4 平台无客户端产物 | 🟡 待办 | 按家族模板初始化（README + 客户端骨架），或确认占位意图后归档标注 |
| PI-3 | 缺口 | 产品仓无 PM 覆盖：wenmai 客户端 ~70 仓、教练端 ~15 仓、factorytoshelf 等，仅 8 项目入 PM 分支 | 组合进度无档案、SDLC 断层；家族级共性缺陷（如 PI-1/PI-2）无归口 | 🟡 待决策 | 家族级轻量登记：每家族一条 PM 分支（模板制）或 main 矩阵登记制，不逐仓建档 |
| PI-4 | 汇总 | 活跃项目用户侧待办三件：I1-5a 生产部署确认（adventure-platform）/ TC-35 手动会话验证（dsh-target-ops）/ ECS 服务器凭据 + Qoder PAT（target-qoder-workbench） | 三个活跃项目主线全部卡在用户侧输入 | 🔴 待用户 | 各分支 ISSUES.md 已建档；任一到位即解锁对应项目主线 |
| PI-5 | 风险 | 三个活跃项目并行且均有生产写操作待批（部署/验证/凭据），按用户"写入须手动确认"约束执行中 | 推进节奏取决于确认频率 | 🟢 受控 | 保持审批门控；建议按 adventure → dsh → qoder 顺序集中处理一批 |

## 项目级问题清单索引

| 项目分支 | 问题数 | 关键阻塞 |
|----------|--------|----------|
| [adventure-platform](../../tree/adventure-platform) | 4（ISS-1~4） | I1-5a 生产部署待用户确认 |
| [target-qoder-workbench](../../tree/target-qoder-workbench) | 5（ISS-1~5） | M3 等服务器凭据 / M4 等 Qoder PAT |
| [dsh-target-ops](../../tree/dsh-target-ops) | 4（ISS-1~4） | TC-35 需用户在 dsh Desktop 手动验证 |
