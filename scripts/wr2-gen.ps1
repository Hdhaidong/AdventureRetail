# wr2-gen.ps1 · 平台标准产品批次 PROJECT.yaml 批量生成（wr-2 · 2026-10-18）
# 用途：wenmai-research 洞察转化 10 项目立项档案生成（portfolio-pm 矩阵 #22-#31）
# 口径：MMS 标准化（对标埃森哲）+ 标准 Skill 按平台系列品牌化开发 + 按平台购买付费下发
# 输出：D:\Temp\wr2-stage\<project>\PROJECT.yaml（10 份，覆盖旧版；00-REQ.md 不触碰）
# 注意：本文件需 UTF-8 BOM 保存后由 PowerShell 5 执行（防中文乱码）

$stage = 'D:\Temp\wr2-stage'
$date = '2026-10-18'

$common = '市场调研、选品分析、竞品监控、Listing 优化、批量刊登、主图详情、广告投放、订单履约、库存补货、合规审查、利润分析等全岗位能力'

$items = @(
  @{ p='adventure-target'; num=22; title='Target 平台标准产品（Adventure Retail for Target）';
     note='平台标准产品批次（Target · PI 路线首发；与 #21 target-ops-client DSH 母版同属 Target 系列，PI 先发、DSH 后续迭代）';
     plat='Target'; pd='Target / Target+（美国全品类零售，邀请制 Marketplace）';
     role="Target 平台标准产品——面向 Target+ 卖家/供应商的一体化运营 Agent：覆盖$common；Target+ 邀请制入驻与类目受限运营为平台特色；类目知识包（家居/日用/电子配件/母婴/美妆等）从平台持续下发";
     conn='Target 连接器' }
  @{ p='adventure-shein-odm'; num=23; title='希音 ODM 平台标准产品（Adventure Retail for SHEIN ODM）';
     note='平台标准产品批次（SHEIN ODM · 关联 fashion-design-agent 服装 agent 线）';
     plat='SHEIN ODM'; pd='SHEIN ODM（全球快时尚跨境电商，ODM 供应商协同模式）';
     role="希音 ODM 平台标准产品——面向 SHEIN ODM 供应商的一体化运营 Agent：覆盖$common；过审核能力（入驻/验厂/资质/答辩全链路引擎）第一优先级；类目知识包（女装/男装/童装/配饰/家居纺织等）从平台持续下发";
     conn='过审核引擎 + SHEIN ODM 供应商协同连接器' }
  @{ p='adventure-homedepot'; num=24; title='Home Depot 平台标准产品（Adventure Retail for The Home Depot）';
     note='平台标准产品批次（The Home Depot）';
     plat='Home Depot'; pd='The Home Depot（全球最大家居建材零售商，Pro Xtra B2B + 供应商 DSV/SVI 履约模式）';
     role="Home Depot 平台标准产品——面向 Home Depot 卖家/供应商的一体化运营 Agent：覆盖$common；Pro Xtra（B2B）与 DSV/SVI 供应商履约适配为平台特色；类目知识包（工具/建材/园艺/五金/家电等）从平台持续下发";
     conn='Home Depot 连接器' }
  @{ p='adventure-otto'; num=25; title='OTTO 平台标准产品（Adventure Retail for OTTO）';
     note='平台标准产品批次（OTTO · 欧洲市场首发）';
     plat='OTTO'; pd='OTTO（德国及欧洲头部电商平台，OTTO Marketplace 开放平台）';
     role="OTTO 平台标准产品——面向 OTTO Marketplace 卖家的一体化运营 Agent：覆盖$common；欧洲合规（CE/GS/EPR）、德语本地化、欧盟 VAT/IOSS 适配为平台特色；类目知识包（家居/家具/家电/纺织/家居用品等）从平台持续下发";
     conn='OTTO Marketplace 连接器' }
  @{ p='adventure-mano'; num=26; title='ManoMano 平台标准产品（Adventure Retail for ManoMano）';
     note='平台标准产品批次（ManoMano）';
     plat='ManoMano'; pd='ManoMano（法国家居园艺电商平台，欧洲园艺 DIY 垂直平台）';
     role="ManoMano 平台标准产品——面向 ManoMano 卖家的一体化运营 Agent：覆盖$common；法/欧多语言、园艺季节性运营、欧盟 VAT/EPR 适配为平台特色；类目知识包（园艺工具/户外家具/五金建材/家居装饰/宠物用品等）从平台持续下发";
     conn='ManoMano 连接器' }
  @{ p='adventure-lowes'; num=27; title="Lowe's 平台标准产品（Adventure Retail for Lowe's）";
     note="平台标准产品批次（Lowe's）";
     plat="Lowe's"; pd="Lowe's（美国家居建材零售，B2B Pro + 零售双场景）";
     role="Lowe's 平台标准产品——面向 Lowe's 卖家/供应商的一体化运营 Agent：覆盖$common；Lowe's Pro（B2B）客户运营与家居建材类目适配为平台特色；类目知识包（灯具/五金/建材/园艺/家电等）从平台持续下发";
     conn="Lowe's 连接器" }
  @{ p='adventure-bestbuy'; num=28; title='Best Buy 平台标准产品（Adventure Retail for Best Buy）';
     note='平台标准产品批次（Best Buy）';
     plat='Best Buy'; pd='Best Buy（美国 3C 电子产品零售，Marketplace + Geek Squad 生态）';
     role="Best Buy 平台标准产品——面向 Best Buy Marketplace 卖家的一体化运营 Agent：覆盖$common；3C 强合规（FCC/UL/能效）与邀请制品类管控为平台特色；类目知识包（消费电子/配件/智能家居/小家电/游戏外设等）从平台持续下发";
     conn='Best Buy 连接器' }
  @{ p='adventure-walmart'; num=29; title='Walmart 平台标准产品（Adventure Retail for Walmart）';
     note='平台标准产品批次（Walmart）';
     plat='Walmart'; pd='Walmart（美国最大全品类零售，Marketplace + WFS 履约）';
     role="Walmart 平台标准产品——面向 Walmart Marketplace 卖家的一体化运营 Agent：覆盖$common；Price Parity、WFS 履约、全品类覆盖为平台特色；类目知识包（全品类）从平台持续下发";
     conn='Walmart 连接器' }
  @{ p='adventure-whatnot'; num=30; title='Whatnot 平台标准产品（Adventure Retail for Whatnot）';
     note='平台标准产品批次（Whatnot · pi-kernel 已有 whatnot 连接器先行实现，MVP 有实测基础）';
     plat='Whatnot'; pd='Whatnot（美国直播拍卖电商平台，实时出价社交购物）';
     role="Whatnot 平台标准产品——面向 Whatnot 卖家/主播的一体化运营 Agent：覆盖$common；直播拍卖运营（实时出价/直播排期/秒杀）与社交粉丝运营为平台特色；类目知识包（收藏品/潮玩/时尚/电子/藏书等）从平台持续下发";
     conn='Whatnot 连接器（复用 pi-kernel 先行实现）' }
  @{ p='adventure-promo'; num=31; title='产品宣传 Agent（Adventure Retail Promo）';
     note=''; plat=''; pd='非平台产品——Adventure Retail 全产品线宣传内容生产中枢';
     role='产品宣传 Agent——面向 Adventure Retail 全产品线的宣传内容生产中枢：中英双语文案撰写、小红书发布链路（关键词覆盖运营/投广告/内容生产/发布全链路）、竞品口径管理（仅自家产品线）、内容归档 GitHub；关联小红书 OPS 能力域（能力市场下发）';
     conn='' }
)

foreach ($i in $items) {
  $p = $i.p
  if ($p -eq 'adventure-promo') {
    $route = 'PI 路线宣传 Agent（pi-kernel v2 底座 + Adventure Retail 品牌壳；宣传能力与标准 Skill 由平台推送至 MMS 标准化（Skill 按平台系列品牌化开发）后组装下发；MMS 详见 adventure-platform 档案 mms 段）'
    $gate = "$date（建档：宣传 Agent 立项 · 矩阵 #$($i.num) · 付费下发商业口径定稿 · 宣传能力全景登记）"
    $note = '产品宣传 Agent（非平台产品，内容生产中枢）——面向 Adventure Retail 全产品线的宣传内容生产；宣传能力与标准 Skill 由平台推送至 MMS 标准化（Skill 按平台系列品牌化开发）后组装下发（MMS 标准化模式对标埃森哲，详见 adventure-platform 档案 mms 段）；U-1 竞品调研 50 家基线未启动；产品化完成后须测试对标竞品，通过方可宣发'
    $aff = 'adventure-retail-agent（三底座产品线 · PI 路线能力中枢；2026-10-18 付费下发口径立项，归口标准仓 Hdhaidong/adventure-retail-agent）'
    $model = '宣传能力包为付费下发单元；宣传能力与标准 Skill 在平台侧生产并经 MMS 标准化打包，客户付费后经能力市场下发能力包至客户端（开箱即用 + 能力持续更新）'
    $next = 'U-1 竞品调研 50 家基线入洞察仓（wenmai-research/competitors/）→ SOW 规格化 → 宣传能力包 MVP（PI 底座 Extension 形态 + 小红书发布链路）'
  } else {
    $route = 'PI 路线平台 Agent（pi-kernel v2 底座 + Adventure Retail 品牌壳；能力/业务模型/算法/数据/标准 Skill 由平台持续推送至 MMS 标准化（Skill 按平台系列品牌化开发），付费后从平台下发组装；MMS 详见 adventure-platform 档案 mms 段）'
    $gate = "$date（建档：平台维度标准产品立项 · 矩阵 #$($i.num) · 按平台购买商业口径定稿 · 全岗位能力全景登记）"
    $note = "$($i.note)；平台持续向 MMS 推出能力/业务模型/算法/数据/标准 Skill（Skill 按平台系列品牌化开发），经标准化后产品化为面向 $($i.plat) 平台 × 类目的标准实现（MMS 标准化模式对标埃森哲，详见 adventure-platform 档案 mms 段）；U-1 竞品调研 50 家基线未启动；产品化完成后须测试对标竞品，通过方可宣发"
    $aff = 'adventure-retail-agent（三底座产品线 · PI 路线平台标准产品批次；2026-10-18 按平台购买口径立项，归口标准仓 Hdhaidong/adventure-retail-agent）'
    $model = "客户按平台购买——$($i.plat) 标准产品为付费下发单元；能力/业务模型/算法/数据/标准 Skill 在平台侧生产并经 MMS 标准化打包，客户付费后经能力市场下发能力包至客户端（开箱即用 + 能力持续更新）"
    $next = "U-1 竞品调研 50 家基线入洞察仓（wenmai-research/competitors/）→ SOW 规格化 → 平台能力包 MVP（PI 底座 Extension 形态 + $($i.conn)）"
  }
  $yaml = @"
# PROJECT.yaml · $p
project: $p
title: $($i.title)
route: pi-agent   # $route
version: 0.1.0
status: active
updated: "$date"
sdlc:
  stage: P0-req
  gates:
    P0-req: "$gate"
  note: "$note"
source:
  github_repo: 待建（PI 路线平台产品仓，M0 创建）
  local: 待建（规划 D:\Hdhaidong-dev\$p）
affiliation: $aff
commercial:
  model: $model
  platform: $($i.pd)
role: $($i.role)
next: "$next"
"@
  $dir = Join-Path $stage $p
  New-Item -ItemType Directory -Force -Path $dir | Out-Null
  [IO.File]::WriteAllText((Join-Path $dir 'PROJECT.yaml'), $yaml, [Text.UTF8Encoding]::new($false))
}
"generated=$($items.Count)"
