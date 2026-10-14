<template>
<nav id="nav">
  <div class="nav-in">
    <a class="brand" href="#top"><span class="mark">⚓</span>ADVENTURE RETAIL</a>
    <div class="nav-links">
      <a href="#lenses" data-zh="五视角" data-en="Lenses">五视角</a>
      <a href="#mfg" data-zh="制造能力" data-en="Manufacturing">制造能力</a>
      <a href="#markets" data-zh="渠道市场" data-en="Markets">渠道市场</a>
      <a href="#growth" data-zh="内容增长" data-en="Growth">内容增长</a>
      <a href="#tools" data-zh="服务保障" data-en="Why us">服务保障</a>
      <a href="#contact" data-zh="开始合作" data-en="Contact">开始合作</a>
      <a href="#portal" data-zh="客户专区" data-en="Portal">客户专区</a>
    </div>
    <div class="lang-toggle">
      <button id="btnZh" class="on" onclick="setLang('zh')">中文</button>
      <button id="btnEn" onclick="setLang('en')">EN</button>
    </div>
  </div>
</nav>

<!-- HERO -->
<header class="hero" id="top">
  <div class="hero-bg">
    <img src="/assets/hero-port.jpg" alt="global trade port at dusk">
  </div>
  <div class="hero-in wrap">
    <div class="kicker h-anim d1">Adventure Retail · Global</div>
    <h1 class="h-anim d2" data-zh='从工厂车间，到<em>全球货架</em>' data-en='From factory floor to the <em>right shelf</em>'>从工厂车间，到<em>全球货架</em></h1>
    <p class="h-anim d3" data-zh="OEM / ODM / OBM 制造能力 × 全球商超渠道 × AI 运营托管——我们为卖家把产品做对，把渠道打通，把品牌立住。" data-en="OEM / ODM / OBM manufacturing × global retail channels × AI-managed operations — we get the product right, open the channel, and build the brand.">OEM / ODM / OBM 制造能力 × 全球商超渠道 × AI 运营托管——我们为卖家把产品做对，把渠道打通，把品牌立住。</p>
    <div class="cta-row h-anim d4">
      <a class="btn btn-p" href="#contact" data-zh="开始合作 →" data-en="Start a project →">开始合作 →</a>
      <a class="btn btn-g" href="#lenses" data-zh="先看业务逻辑" data-en="See how it works">先看业务逻辑</a>
    </div>
  </div>
</header>

<!-- STATS -->
<div class="stats">
  <div class="wrap">
    <div class="stat reveal"><div class="num">300+</div><div class="lbl" data-zh="全球零售渠道覆盖" data-en="Global retail channels covered">全球零售渠道覆盖</div></div>
    <div class="stat reveal"><div class="num">711</div><div class="lbl" data-zh="条市场情报每周更新" data-en="Market intel reports, updated weekly">条市场情报每周更新</div></div>
    <div class="stat reveal"><div class="num">7×24</div><div class="lbl" data-zh="托管运营全天候在线" data-en="Managed operations, always on">托管运营全天候在线</div></div>
    <div class="stat reveal"><div class="num">6+</div><div class="lbl" data-zh="国家和地区纵深覆盖" data-en="Countries &amp; regions covered">国家和地区纵深覆盖</div></div>
  </div>
</div>

<!-- FIVE LENSES -->
<section id="lenses">
  <div class="wrap">
    <div class="sec-head reveal">
      <div class="sec-tag">Value Chain</div>
      <h2 class="sec-title" data-zh="五个视角，一条价值链" data-en="Five lenses, one value chain">五个视角，一条价值链</h2>
      <p class="sec-sub" data-zh="每一笔跨境生意都经过五双眼睛。我们的服务在每个视角上解决一个真实痛点——而不是只卖其中一段。" data-en="Every cross-border deal passes through five pairs of eyes. Our services solve one real pain at each lens — not just one slice of it.">每一笔跨境生意都经过五双眼睛。我们的服务在每个视角上解决一个真实痛点——而不是只卖其中一段。</p>
    </div>
    <div class="lenses reveal">
      <div class="lens">
        <div class="idx">01</div><h3 data-zh="卖家" data-en="Seller">卖家</h3>
        <div class="role" data-zh="工厂 / 贸易商" data-en="Factory / Trader">工厂 / 贸易商</div>
        <p class="pain" data-zh="有产能没渠道，想进商超不知从何敲门。" data-en="Capacity without channels; no idea how to knock on retail doors.">有产能没渠道，想进商超不知从何敲门。</p>
        <p class="solve" data-zh="<b>解法</b>：代入驻 + 合规代建，明码标价、效果质保。" data-en="<b>Fix</b>: managed onboarding &amp; compliance setup, transparent pricing, outcome-backed."><b>解法</b>：代入驻 + 合规代建，明码标价、效果质保。</p>
        <span class="lens-arrow">▶</span>
      </div>
      <div class="lens">
        <div class="idx">02</div><h3 data-zh="产品" data-en="Product">产品</h3>
        <div class="role" data-zh="从样品到量产" data-en="Sample to scale">从样品到量产</div>
        <p class="pain" data-zh="产品做得出来，做不到渠道要的标准与良率。" data-en="Products get made, but not to retail-grade specs and yield.">产品做得出来，做不到渠道要的标准与良率。</p>
        <p class="solve" data-zh="<b>解法</b>：打样验证、量产良率管理与新品投产陪跑，一次做对。" data-en="<b>Fix</b>: sampling validation, yield management and launch support — right the first time."><b>解法</b>：打样验证、量产良率管理与新品投产陪跑，一次做对。</p>
        <span class="lens-arrow">▶</span>
      </div>
      <div class="lens">
        <div class="idx">03</div><h3 data-zh="品牌" data-en="Brand">品牌</h3>
        <div class="role" data-zh="OBM / 内容" data-en="OBM / Content">OBM / 内容</div>
        <p class="pain" data-zh="有商标没心智，货架上拼不过本土大牌。" data-en="A trademark without mindshare loses to local incumbents on shelf.">有商标没心智，货架上拼不过本土大牌。</p>
        <p class="solve" data-zh="<b>解法</b>：OBM 品牌管理 + 种草内容 + 新品推广，把货做成牌子。" data-en="<b>Fix</b>: OBM brand management, seeding content and launch promotion — turning SKUs into brands."><b>解法</b>：OBM 品牌管理 + 种草内容 + 新品推广，把货做成牌子。</p>
        <span class="lens-arrow">▶</span>
      </div>
      <div class="lens">
        <div class="idx">04</div><h3 data-zh="买家" data-en="Buyer">买家</h3>
        <div class="role" data-zh="商超买手 / 采购" data-en="Retail buyers">商超买手 / 采购</div>
        <p class="pain" data-zh="买手只要确定性的盘：稳定供货、合规文件、动销数据。" data-en="Buyers want certainty: stable supply, compliance files, sell-through data.">买手只要确定性的盘：稳定供货、合规文件、动销数据。</p>
        <p class="solve" data-zh="<b>解法</b>：以买手语言交付——数据智能体持续供情报，托管运营供动销。" data-en="<b>Fix</b>: we speak buyer language — a data agent feeds intel, managed ops feed sell-through."><b>解法</b>：以买手语言交付——数据智能体持续供情报，托管运营供动销。</p>
        <span class="lens-arrow">▶</span>
      </div>
      <div class="lens">
        <div class="idx">05</div><h3 data-zh="用户" data-en="Shopper">用户</h3>
        <div class="role" data-zh="终端消费者" data-en="End consumers">终端消费者</div>
        <p class="pain" data-zh="最终投票的是拿货架商品的那个人。" data-en="The final vote belongs to whoever picks the item off the shelf.">最终投票的是拿货架商品的那个人。</p>
        <p class="solve" data-zh="<b>解法</b>：市场情报与评测内容前置回答「为什么买它」，复购回流品牌。" data-en="<b>Fix</b>: intel and review content answer “why this one” upstream; repeat purchase flows back to the brand."><b>解法</b>：市场情报与评测内容前置回答「为什么买它」，复购回流品牌。</p>
      </div>
    </div>
  </div>
</section>

<!-- MANUFACTURING -->
<section id="mfg" style="padding-top:0">
  <div class="wrap split">
    <div class="split-media reveal">
      <img src="/assets/mfg-factory.jpg" alt="precision manufacturing">
      <div class="cap" data-zh="制造服务" data-en="Manufacturing">制造服务</div>
    </div>
    <div class="split-body reveal">
      <div class="sec-tag">Manufacturing</div>
      <h3 data-zh="先把产品做对，再谈上架" data-en="Get the product right before the shelf">先把产品做对，再谈上架</h3>
      <p data-zh="渠道服务的根基是制造确定性。我们从打样阶段就介入，让产品在量产前达到商超标准。" data-en="Channel work stands on manufacturing certainty. We step in at sampling, so products hit retail standard before mass production.">渠道服务的根基是制造确定性。我们从打样阶段就介入，让产品在量产前达到商超标准。</p>
      <div class="feat-list">
        <div class="feat"><div class="ico">◈</div><div><h4>OEM / ODM / OBM</h4><p data-zh="代工、设计代工到自有品牌全路径，按你的阶段选打法。" data-en="From contract manufacturing to own-brand — pick the play that fits your stage.">代工、设计代工到自有品牌全路径，按你的阶段选打法。</p></div></div>
        <div class="feat"><div class="ico">◇</div><div><h4 data-zh="快速打样与量产验证" data-en="Rapid sampling &amp; validation">快速打样与量产验证</h4><p data-zh="样品快速迭代，量产良率以可量化指标锁定，直接写进交付标准。" data-en="Fast sampling iterations, with production yield locked to measurable acceptance criteria.">样品快速迭代，量产良率以可量化指标锁定，直接写进交付标准。</p></div></div>
        <div class="feat"><div class="ico">◆</div><div><h4 data-zh="新品投产导入" data-en="New product introduction">新品投产导入</h4><p data-zh="新设备、新产线的投产导入全程陪跑，质量体系一次建对。" data-en="End-to-end support for new equipment and production lines; quality systems built right the first time.">新设备、新产线的投产导入全程陪跑，质量体系一次建对。</p></div></div>
      </div>
    </div>
  </div>
</section>

<!-- MARKETS -->
<section class="markets" id="markets">
  <div class="wrap">
    <div class="sec-head reveal">
      <div class="sec-tag">Channels</div>
      <h2 class="sec-title" data-zh="多市场渠道纵深" data-en="Multi-market channel depth">多市场渠道纵深</h2>
      <p class="sec-sub" data-zh="北美主航道、大洋洲连锁、东亚品质货架、欧洲东西双线——代入驻、合规代建、买手对接、全周期托管。" data-en="North America big-box, Oceania chains, East Asia premium shelves, Europe east & west — onboarding, compliance, buyer alignment, full-cycle management.">北美主航道、大洋洲连锁、东亚品质货架、欧洲东西双线——代入驻、合规代建、买手对接、全周期托管。</p>
    </div>
    <div class="mkt-grid reveal">
      <div class="mkt mkt-wide">
        <div class="flag">NORTH AMERICA</div>
        <h3 data-zh="北美 · 大商超主航道" data-en="North America · Big-box main lane">北美 · 大商超主航道</h3>
        <p class="desc" data-zh="多年亚马逊 VC 合作资历，叠加本土零售代理网络——美国大商超与加拿大连锁双轨并进。" data-en="Years of Amazon VC partnership plus a local retail broker network — US big-box and Canadian chains in parallel.">多年亚马逊 VC 合作资历，叠加本土零售代理网络——美国大商超与加拿大连锁双轨并进。</p>
        <div class="channels">
          <span class="ch">Target+</span><span class="ch">Lowe's</span><span class="ch">The Home Depot</span><span class="ch">Best Buy</span><span class="ch">Costco</span><span class="ch">Walmart</span><span class="ch">Wayfair</span><span class="ch">Kohl's</span><span class="ch">JCPenney</span><span class="ch">Tractor Supply</span><span class="ch">Canadian Tire</span><span class="ch">Loblaws</span>
        </div>
      </div>
      <div class="mkt">
        <div class="flag">OCEANIA</div>
        <h3 data-zh="大洋洲 · 澳新连锁通路" data-en="Oceania · AU &amp; NZ chains">大洋洲 · 澳新连锁通路</h3>
        <p class="desc" data-zh="澳洲两大商超阵营与新西兰零售网络——食杂、家居、药妆三线并进。" data-en="Australia's two grocery majors and NZ retail networks — grocery, home improvement and pharmacy lanes.">澳洲两大商超阵营与新西兰零售网络——食杂、家居、药妆三线并进。</p>
        <div class="channels">
          <span class="ch">Woolworths</span><span class="ch">Coles</span><span class="ch">Kmart</span><span class="ch">Bunnings</span><span class="ch">JB Hi-Fi</span><span class="ch">Chemist Warehouse</span><span class="ch">The Warehouse</span><span class="ch">Farmers</span><span class="ch">Mitre 10</span>
        </div>
      </div>
      <div class="mkt">
        <div class="flag">EAST ASIA</div>
        <h3 data-zh="东亚 · 日韩品质货架" data-en="East Asia · JP &amp; KR premium shelves">东亚 · 日韩品质货架</h3>
        <p class="desc" data-zh="日本药妆与综合零售、韩国平台与商超双轨——高客单市场的品质入口。" data-en="Japanese pharmacy and general retail, Korean platforms and hypermarkets — premium entry to high-AOV markets.">日本药妆与综合零售、韩国平台与商超双轨——高客单市场的品质入口。</p>
        <div class="channels">
          <span class="ch">AEON</span><span class="ch">Don Quijote</span><span class="ch">Matsumoto Kiyoshi</span><span class="ch">Rakuten</span><span class="ch">Coupang</span><span class="ch">E-Mart</span><span class="ch">Lotte Mart</span><span class="ch">Olive Young</span>
        </div>
      </div>
      <div class="mkt mkt-wide">
        <div class="flag">EUROPE</div>
        <h3 data-zh="欧洲 · 东西双线" data-en="Europe · East &amp; West">欧洲 · 东西双线</h3>
        <p class="desc" data-zh="西欧六国深耕、东欧四国先发——按国家分层的渠道对接，逐国落地。" data-en="Depth in six Western markets, first-mover plays in four Eastern — country-by-country channel onboarding.">西欧六国深耕、东欧四国先发——按国家分层的渠道对接，逐国落地。</p>
        <div class="ctry-grid">
          <div class="ctry-region" data-zh="西欧 · Western Europe" data-en="Western Europe · 西欧">西欧 · Western Europe</div>
          <div class="ctry">
            <div class="ctry-name" data-zh="德国 Germany" data-en="Germany 德国">德国 Germany</div>
            <div class="channels"><span class="ch">Lidl</span><span class="ch">Kaufland</span><span class="ch">Aldi</span><span class="ch">Edeka</span><span class="ch">Rewe</span><span class="ch">dm</span><span class="ch">Rossmann</span><span class="ch">MediaMarkt</span><span class="ch">OTTO</span></div>
          </div>
          <div class="ctry">
            <div class="ctry-name" data-zh="法国 France" data-en="France 法国">法国 France</div>
            <div class="channels"><span class="ch">E.Leclerc</span><span class="ch">Carrefour</span><span class="ch">Auchan</span><span class="ch">Action</span><span class="ch">Decathlon</span><span class="ch">Leroy Merlin</span><span class="ch">Fnac Darty</span><span class="ch">Sephora</span><span class="ch">Cdiscount</span></div>
          </div>
          <div class="ctry">
            <div class="ctry-name" data-zh="英国 UK" data-en="UK 英国">英国 UK</div>
            <div class="channels"><span class="ch">Tesco</span><span class="ch">Sainsbury's</span><span class="ch">Asda</span><span class="ch">Aldi</span><span class="ch">Boots</span><span class="ch">B&amp;Q</span><span class="ch">Argos</span><span class="ch">Primark</span></div>
          </div>
          <div class="ctry">
            <div class="ctry-name" data-zh="意大利 Italy" data-en="Italy 意大利">意大利 Italy</div>
            <div class="channels"><span class="ch">Conad</span><span class="ch">Coop</span><span class="ch">Esselunga</span><span class="ch">Eurospin</span><span class="ch">Lidl</span><span class="ch">OVS</span><span class="ch">MediaWorld</span><span class="ch">Kiko Milano</span></div>
          </div>
          <div class="ctry">
            <div class="ctry-name" data-zh="西班牙 Spain" data-en="Spain 西班牙">西班牙 Spain</div>
            <div class="channels"><span class="ch">Mercadona</span><span class="ch">Carrefour</span><span class="ch">El Corte Inglés</span><span class="ch">Lidl</span><span class="ch">Dia</span><span class="ch">Druni</span><span class="ch">Primor</span><span class="ch">MediaMarkt</span></div>
          </div>
          <div class="ctry">
            <div class="ctry-name" data-zh="荷兰 Netherlands" data-en="Netherlands 荷兰">荷兰 Netherlands</div>
            <div class="channels"><span class="ch">Albert Heijn</span><span class="ch">Jumbo</span><span class="ch">Action</span><span class="ch">HEMA</span><span class="ch">Bol.com</span><span class="ch">Coolblue</span><span class="ch">Kruidvat</span></div>
          </div>
          <div class="ctry-region" data-zh="东欧 · Eastern Europe" data-en="Eastern Europe · 东欧">东欧 · Eastern Europe</div>
          <div class="ctry">
            <div class="ctry-name" data-zh="波兰 Poland" data-en="Poland 波兰">波兰 Poland</div>
            <div class="channels"><span class="ch">Biedronka</span><span class="ch">Lidl</span><span class="ch">Żabka</span><span class="ch">Kaufland</span><span class="ch">Rossmann</span><span class="ch">Allegro</span><span class="ch">Pepco</span><span class="ch">Action</span></div>
          </div>
          <div class="ctry">
            <div class="ctry-name" data-zh="捷克 Czechia" data-en="Czechia 捷克">捷克 Czechia</div>
            <div class="channels"><span class="ch">Kaufland</span><span class="ch">Lidl</span><span class="ch">Albert</span><span class="ch">Penny</span><span class="ch">dm</span><span class="ch">Alza</span><span class="ch">Notino</span><span class="ch">Dr. Max</span></div>
          </div>
          <div class="ctry">
            <div class="ctry-name" data-zh="罗马尼亚 Romania" data-en="Romania 罗马尼亚">罗马尼亚 Romania</div>
            <div class="channels"><span class="ch">Kaufland</span><span class="ch">Lidl</span><span class="ch">Carrefour</span><span class="ch">Profi</span><span class="ch">Mega Image</span><span class="ch">dm</span><span class="ch">eMAG</span><span class="ch">Dedeman</span></div>
          </div>
          <div class="ctry">
            <div class="ctry-name" data-zh="匈牙利 Hungary" data-en="Hungary 匈牙利">匈牙利 Hungary</div>
            <div class="channels"><span class="ch">Lidl</span><span class="ch">Tesco</span><span class="ch">Spar</span><span class="ch">dm</span><span class="ch">Rossmann</span><span class="ch">Müller</span><span class="ch">MediaMarkt</span><span class="ch">Pepco</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- GROWTH -->
<section id="growth">
  <div class="wrap split rev">
    <div class="split-media reveal">
      <img src="/assets/ugc-creator.jpg" alt="creator filming unboxing video">
      <div class="cap" data-zh="达人 × UGC" data-en="Creators × UGC">达人 × UGC</div>
    </div>
    <div class="split-body reveal">
      <div class="sec-tag">Content &amp; Growth</div>
      <h3 data-zh="让真实用户替你讲故事" data-en="Let real users tell your story">让真实用户替你讲故事</h3>
      <p data-zh="达人营销与 UGC 内容体系：从筛选建联、寄样到发布追踪与 ROI 复盘，全流程托管。" data-en="Influencer marketing and UGC pipelines — from screening and outreach to seeding, tracking and ROI review, fully managed.">达人营销与 UGC 内容体系：从筛选建联、寄样到发布追踪与 ROI 复盘，全流程托管。</p>
      <div class="feat-list">
        <div class="feat"><div class="ico">◎</div><div><h4 data-zh="达人筛选与建联" data-en="Creator screening &amp; outreach">达人筛选与建联</h4><p data-zh="按品类分层筛选，识别水粉与虚高报价，只看真实带货力。" data-en="Tiered screening by category, filtering fake followers and inflated quotes — only real selling power.">按品类分层筛选，识别水粉与虚高报价，只看真实带货力。</p></div></div>
        <div class="feat"><div class="ico">◈</div><div><h4 data-zh="寄样与 Brief 管理" data-en="Seeding &amp; briefs">寄样与 Brief 管理</h4><p data-zh="寄样物流、合作 Brief、内容口径一站式管理，进度可视。" data-en="Sample logistics, collaboration briefs and content guidelines managed end to end, with visible progress.">寄样物流、合作 Brief、内容口径一站式管理，进度可视。</p></div></div>
        <div class="feat"><div class="ico">◇</div><div><h4 data-zh="UGC 内容工厂" data-en="UGC content engine">UGC 内容工厂</h4><p data-zh="测评、开箱、场景化短视频批量产出，可授权用于广告投放。" data-en="Reviews, unboxings and scenario short videos produced at scale, licensed for paid ads.">测评、开箱、场景化短视频批量产出，可授权用于广告投放。</p></div></div>
        <div class="feat"><div class="ico">◆</div><div><h4 data-zh="发布追踪与 ROI 复盘" data-en="Tracking &amp; ROI review">发布追踪与 ROI 复盘</h4><p data-zh="每条内容的播放、互动、转化逐项归因，复盘指导下一批投放。" data-en="Views, engagement and conversions attributed per post; each review informs the next campaign.">每条内容的播放、互动、转化逐项归因，复盘指导下一批投放。</p></div></div>
      </div>
    </div>
  </div>
</section>

<!-- TOOLS -->
<section id="tools">
  <div class="wrap">
    <div class="sec-head reveal">
      <div class="sec-tag">Why Us</div>
      <h2 class="sec-title" data-zh="你拿到的是结果，不是工具" data-en="You get results, not software">你拿到的是结果，不是工具</h2>
      <p class="sec-sub" data-zh="情报、托管、定制三种交付方式——AI 在我们的后台跑，结果到你的手上。" data-en="Intel, managed ops, and customization — AI runs in our back office; results land in yours.">情报、托管、定制三种交付方式——AI 在我们的后台跑，结果到你的手上。</p>
    </div>
    <div class="tools-grid reveal">
      <div class="tool">
        <div class="t-num">S-01</div>
        <h4 data-zh="市场情报，每周到手" data-en="Weekly market intel">市场情报，每周到手</h4>
        <p data-zh="不用自己盯几百个渠道。我们持续扫描全球平台动态，把选品结论与风险预警整理成情报交付——已沉淀 711 条，每周更新。" data-en="No need to watch hundreds of channels yourself. We scan platforms worldwide and deliver conclusions and risk alerts — 711 reports archived, updated weekly.">不用自己盯几百个渠道。我们持续扫描全球平台动态，把选品结论与风险预警整理成情报交付——已沉淀 711 条，每周更新。</p>
        <div class="t-stat" data-zh="每周更新" data-en="Updated weekly">每周更新</div>
      </div>
      <div class="tool">
        <div class="t-num">S-02</div>
        <h4 data-zh="店铺代运营，全程托管" data-en="Store management, fully managed">店铺代运营，全程托管</h4>
        <p data-zh="内容、客服、选品、上新、复盘——运营智能体 7×24 打理日常，只有异常与决策点才推到你的桌面。" data-en="Content, support, sourcing, listing, reviews — our ops agent runs the routine 24/7; only exceptions and decisions reach your desk.">内容、客服、选品、上新、复盘——运营智能体 7×24 打理日常，只有异常与决策点才推到你的桌面。</p>
        <div class="t-stat">7×24</div>
      </div>
      <div class="tool">
        <div class="t-num">S-03</div>
        <h4 data-zh="运营智能体能力定制" data-en="Custom ops-agent capabilities">运营智能体能力定制</h4>
        <p data-zh="以基础版运营智能体为起点，按你的品类与团队流程定制能力组合，配套上手培训与运营环境搭建。" data-en="Start from the entry-level ops agent, then tailor its capabilities to your category and workflows — with onboarding training and environment setup included.">以基础版运营智能体为起点，按你的品类与团队流程定制能力组合，配套上手培训与运营环境搭建。</p>
        <div class="t-stat" data-zh="按需扩展" data-en="Scales with you">按需扩展</div>
      </div>
    </div>
  </div>
</section>

<!-- STEPS -->
<section style="padding-top:0">
  <div class="wrap">
    <div class="sec-head reveal">
      <div class="sec-tag">How we work</div>
      <h2 class="sec-title" data-zh="合作，只有三步" data-en="Three steps to start">合作，只有三步</h2>
    </div>
    <div class="steps reveal">
      <div class="step"><h4 data-zh="诊断" data-en="Diagnose">诊断</h4><p data-zh="免费初评：你的产品、资质与目标渠道之间差哪几步，一次说清楚。" data-en="Free assessment: the exact gaps between your product, credentials and target channels.">免费初评：你的产品、资质与目标渠道之间差哪几步，一次说清楚。</p></div>
      <div class="step"><h4 data-zh="方案" data-en="Plan">方案</h4><p data-zh="明码标价的入驻与合规方案，交付物、周期、验收标准写进合同。" data-en="Transparent onboarding &amp; compliance proposal — deliverables, timeline and acceptance criteria in contract.">明码标价的入驻与合规方案，交付物、周期、验收标准写进合同。</p></div>
      <div class="step"><h4 data-zh="陪跑" data-en="Run together">陪跑</h4><p data-zh="AI 托管 + 分销撮合 + 新品推广，上架只是开始，动销才算交付。" data-en="AI-managed ops, distribution matching and launch promotion — listing is the start, sell-through is the deliverable.">AI 托管 + 分销撮合 + 新品推广，上架只是开始，动销才算交付。</p></div>
    </div>
  </div>
</section>

<!-- CLIENT PORTAL -->
<section class="portal" id="portal">
  <div class="wrap">
    <div class="sec-head reveal">
      <div class="sec-tag">Client Portal</div>
      <h2 class="sec-title" data-zh="客户专区" data-en="Client portal">客户专区</h2>
      <p class="sec-sub" data-zh="注册即得：一对一业务咨询通道 + 平台洞察速递。品牌方、工厂与合作伙伴均可免费注册。" data-en="Register for 1-on-1 business consultation and platform insight briefings — free for brands, factories and partners.">注册即得：一对一业务咨询通道 + 平台洞察速递。品牌方、工厂与合作伙伴均可免费注册。</p>
    </div>
    <div id="portalLocked" class="locked reveal">
      <div class="lock-ico">⚷</div>
      <h3 data-zh="注册后解锁" data-en="Unlock with free registration">注册后解锁</h3>
      <p data-zh="业务咨询与平台洞察仅向注册客户开放。填写称呼、邮箱与公司即可，无需审核，立即生效。" data-en="Consultation and insights are open to registered clients. Name, email and company — no approval needed, instant access.">业务咨询与平台洞察仅向注册客户开放。填写称呼、邮箱与公司即可，无需审核，立即生效。</p>
      <button class="btn btn-p" onclick="openReg()" data-zh="免费注册 / 登录 →" data-en="Register / sign in →">免费注册 / 登录 →</button>
    </div>
    <div id="portalOpen" style="display:none">
      <div class="portal-head">
        <span class="ph-t" id="portalWho"></span>
        <button class="linkbtn" onclick="logout()" data-zh="退出登录" data-en="Sign out">退出登录</button>
      </div>
      <div class="ptabs">
        <button class="ptab on" id="tabConsult" onclick="showPane('consult')" data-zh="业务咨询" data-en="Consultation">业务咨询</button>
        <button class="ptab" id="tabInsight" onclick="showPane('insight')" data-zh="平台洞察" data-en="Insights">平台洞察</button>
      </div>
      <div class="pane on" id="pane-consult">
        <div class="consult">
          <div class="who" id="consultWho"></div>
          <div class="topic-row" id="topicRow">
            <button class="topic on" data-t="渠道入驻" data-zh="渠道入驻" data-en="Channel onboarding">渠道入驻</button>
            <button class="topic" data-t="店铺代运营" data-zh="店铺代运营" data-en="Managed store ops">店铺代运营</button>
            <button class="topic" data-t="市场情报订阅" data-zh="市场情报订阅" data-en="Market intel subscription">市场情报订阅</button>
            <button class="topic" data-t="能力定制" data-zh="能力定制" data-en="Capability customization">能力定制</button>
            <button class="topic" data-t="其他" data-zh="其他" data-en="Other">其他</button>
          </div>
          <textarea id="consultMsg" data-zh-placeholder="简单描述你的产品、目标渠道与想咨询的问题…" data-en-placeholder="Briefly describe your product, target channels and questions…" placeholder="简单描述你的产品、目标渠道与想咨询的问题…"></textarea>
          <div style="margin-top:18px"><button class="btn btn-p" onclick="sendConsult()" data-zh="发送咨询（邮件直达）" data-en="Send (via email)">发送咨询（邮件直达）</button></div>
        </div>
      </div>
      <div class="pane" id="pane-insight">
        <div class="p-cards">
          <div class="p-card">
            <div class="pc-tag" data-zh="每周扫描" data-en="Weekly scan">每周扫描</div>
            <h4 data-zh="全球渠道动态摘要" data-en="Global channel digest">全球渠道动态摘要</h4>
            <p data-zh="四大区域 300+ 渠道的入驻政策、佣金与类目调整，每周一封直达邮箱。" data-en="Onboarding policies, fee and category changes across 300+ channels in four regions — one email per week.">四大区域 300+ 渠道的入驻政策、佣金与类目调整，每周一封直达邮箱。</p>
          </div>
          <div class="p-card">
            <div class="pc-tag" data-zh="选品情报" data-en="Product intel">选品情报</div>
            <h4 data-zh="品类机会与风险预警" data-en="Category opportunities &amp; alerts">品类机会与风险预警</h4>
            <p data-zh="711 条情报沉淀的方法论：需求信号、竞争密度、合规门槛三视角交叉验证。" data-en="A method distilled from 711 reports: demand signals, competition density and compliance thresholds, cross-validated.">711 条情报沉淀的方法论：需求信号、竞争密度、合规门槛三视角交叉验证。</p>
          </div>
          <div class="p-card">
            <div class="pc-tag" data-zh="实战手册" data-en="Playbook">实战手册</div>
            <h4 data-zh="渠道入驻实操要点" data-en="Onboarding playbooks">渠道入驻实操要点</h4>
            <p data-zh="从资质准备到首批上架的 checklist，按渠道逐条拆解，注册客户按月更新。" data-en="Checklists from credential prep to first listing, broken down per channel, updated monthly for registered clients.">从资质准备到首批上架的 checklist，按渠道逐条拆解，注册客户按月更新。</p>
          </div>
        </div>
        <p style="margin-top:22px;font-size:12.5px;color:var(--dim)" data-zh="以上为样例。完整情报每周更新，面向签约客户交付。" data-en="Samples above — full reports ship weekly to contracted clients.">以上为样例。完整情报每周更新，面向签约客户交付。</p>
      </div>
    </div>
  </div>
</section>

<!-- FINAL CTA -->
<section class="final" id="contact">
  <div class="wrap">
    <h2 class="reveal" data-zh="下一批摆上全球货架的，可以是你的产品" data-en="The next products on global shelves could be yours">下一批摆上全球货架的，可以是你的产品</h2>
    <p class="reveal" data-zh="发一封邮件，48 小时内回复初评结论。" data-en="One email — initial assessment within 48 hours.">发一封邮件，48 小时内回复初评结论。</p>
    <div class="reveal">
      <a class="mail-link" href="mailto:Info@adventureretail.com">Info@adventureretail.com</a>
      <div style="margin-top:30px"><a class="btn btn-p" href="mailto:Info@adventureretail.com" data-zh="预约免费初评 →" data-en="Book a free assessment →">预约免费初评 →</a></div>
    </div>
  </div>
</section>

<footer>
  <div class="wrap foot">
    <span class="f-brand">⚓ ADVENTURE RETAIL</span>
    <span data-zh="制造 × 渠道 × AI 运营 · 全球" data-en="Manufacturing × Channels × AI Ops · Global">制造 × 渠道 × AI 运营 · 全球</span>
    <span><a href="https://adventureretail.com">adventureretail.com</a> · © 2026 Adventure Retail</span>
  </div>
</footer>

<!-- REGISTER MODAL -->
<div class="modal" id="regModal">
  <div class="dialog">
    <button class="dclose" onclick="closeReg()">✕</button>
    <h3 data-zh="客户注册" data-en="Client registration">客户注册</h3>
    <div class="dsub" data-zh="品牌方、工厂与合作伙伴均可免费注册，立即解锁客户专区。" data-en="Free for brands, factories and partners — instant portal access.">品牌方、工厂与合作伙伴均可免费注册，立即解锁客户专区。</div>
    <div class="type-row" id="typeRow">
      <button class="ttype on" data-zh="品牌方" data-en="Brand">品牌方</button>
      <button class="ttype" data-zh="工厂" data-en="Factory">工厂</button>
      <button class="ttype" data-zh="合作伙伴" data-en="Partner">合作伙伴</button>
    </div>
    <input id="regName" data-zh-placeholder="称呼" data-en-placeholder="Your name" placeholder="称呼">
    <input id="regMail" type="email" data-zh-placeholder="邮箱" data-en-placeholder="Email" placeholder="邮箱">
    <input id="regCo" data-zh-placeholder="公司名称" data-en-placeholder="Company" placeholder="公司名称">
    <button class="btn btn-p" onclick="submitReg()" data-zh="注册并进入专区 →" data-en="Register &amp; enter →">注册并进入专区 →</button>
  </div>
</div>

<div id="toast" style="position:fixed;bottom:28px;left:50%;transform:translateX(-50%) translateY(80px);background:var(--grad);color:#fff;padding:12px 28px;border-radius:99px;font-size:13.5px;transition:.4s;opacity:0;z-index:200;box-shadow:0 8px 30px rgba(249,115,22,.4)"></div>
</template>

<script setup>
onMounted(() => {
  const s = document.createElement('script')
  s.src = '/js/site.js'
  document.body.appendChild(s)
})
</script>

<style>
:root{
  --bg:#0A0B10; --bg2:#0E1018; --panel:#12141E; --line:rgba(255,255,255,.08);
  --txt:#F2F3F7; --sub:#9BA0AE; --dim:#5C6270;
  --orange:#F97316; --orange2:#FB923C; --grad:linear-gradient(120deg,#F97316,#FB923C);
  --disp:'Space Grotesk','Noto Sans SC',sans-serif; --body:'Noto Sans SC','Space Grotesk',sans-serif;
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--txt);font-family:var(--body);line-height:1.6;overflow-x:hidden}
::selection{background:var(--orange);color:#fff}
a{color:inherit;text-decoration:none}
img{display:block;max-width:100%}
.wrap{max-width:1200px;margin:0 auto;padding:0 32px}

/* ============ NAV ============ */
nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:20px 0;transition:.4s}
nav.scrolled{background:rgba(10,11,16,.85);backdrop-filter:blur(16px);border-bottom:1px solid var(--line);padding:14px 0}
.nav-in{max-width:1200px;margin:0 auto;padding:0 32px;display:flex;align-items:center;justify-content:space-between}
.brand{display:flex;align-items:center;gap:12px;font-family:var(--disp);font-weight:700;letter-spacing:.14em;font-size:15px}
.brand .mark{width:34px;height:34px;border-radius:9px;background:var(--grad);display:grid;place-items:center;font-size:17px;box-shadow:0 0 24px rgba(249,115,22,.45)}
.nav-links{display:flex;gap:30px;font-size:13.5px;color:var(--sub)}
.nav-links a{transition:.25s;position:relative}
.nav-links a:hover{color:var(--txt)}
.nav-links a::after{content:'';position:absolute;left:0;bottom:-6px;width:0;height:2px;background:var(--grad);transition:.3s}
.nav-links a:hover::after{width:100%}
.lang-toggle{display:flex;border:1px solid var(--line);border-radius:99px;overflow:hidden;font-size:12.5px;font-family:var(--disp)}
.lang-toggle button{background:none;border:none;color:var(--sub);padding:7px 16px;cursor:pointer;font-family:inherit;transition:.25s;letter-spacing:.05em}
.lang-toggle button.on{background:var(--grad);color:#fff;font-weight:600}
@media(max-width:860px){.nav-links{display:none}}

/* ============ HERO ============ */
.hero{position:relative;min-height:100svh;display:flex;align-items:flex-end;padding-bottom:9vh;overflow:hidden}
.hero-bg{position:absolute;inset:0}
.hero-bg img{width:100%;height:100%;object-fit:cover;filter:brightness(.62) saturate(1.05)}
.hero-bg::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,11,16,.55) 0%,rgba(10,11,16,.15) 40%,rgba(10,11,16,.92) 88%,var(--bg) 100%)}
.hero-in{position:relative;z-index:2;width:100%}
.hero .kicker{display:inline-flex;align-items:center;gap:10px;font-family:var(--disp);font-size:12.5px;letter-spacing:.3em;color:var(--orange2);text-transform:uppercase;margin-bottom:26px}
.hero .kicker::before{content:'';width:38px;height:1px;background:var(--grad)}
.hero h1{font-family:var(--disp);font-weight:700;font-size:clamp(40px,6.4vw,84px);line-height:1.06;letter-spacing:-.01em;max-width:15ch;margin-bottom:26px}
.hero h1 em{font-style:normal;background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent;white-space:nowrap}
.hero p{font-size:clamp(15px,1.5vw,18px);color:#C9CDD8;max-width:56ch;font-weight:300;margin-bottom:40px}
.cta-row{display:flex;gap:16px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;gap:10px;padding:15px 32px;border-radius:99px;font-size:14.5px;font-weight:500;letter-spacing:.04em;transition:.3s;cursor:pointer;border:none;font-family:var(--body)}
.btn-p{background:var(--grad);color:#fff;box-shadow:0 8px 32px rgba(249,115,22,.35)}
.btn-p:hover{transform:translateY(-2px);box-shadow:0 12px 40px rgba(249,115,22,.5)}
.btn-g{border:1px solid rgba(255,255,255,.22);color:var(--txt);background:rgba(255,255,255,.04);backdrop-filter:blur(8px)}
.btn-g:hover{border-color:var(--orange);color:var(--orange2)}
/* hero entrance */
.h-anim{opacity:0;transform:translateY(34px);animation:hIn 1s cubic-bezier(.2,.7,.2,1) forwards}
.h-anim.d1{animation-delay:.15s}.h-anim.d2{animation-delay:.32s}.h-anim.d3{animation-delay:.5s}.h-anim.d4{animation-delay:.68s}
@keyframes hIn{to{opacity:1;transform:none}}

/* ============ STATS ============ */
.stats{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:var(--bg2)}
.stats .wrap{display:grid;grid-template-columns:repeat(4,1fr)}
.stat{padding:44px 24px;text-align:center;border-left:1px solid var(--line)}
.stat:first-child{border-left:none}
.stat .num{font-family:var(--disp);font-weight:700;font-size:clamp(30px,3.4vw,46px);background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent}
.stat .lbl{margin-top:6px;font-size:13px;color:var(--sub);letter-spacing:.06em}
@media(max-width:760px){.stats .wrap{grid-template-columns:repeat(2,1fr)}.stat:nth-child(3){border-left:none}.stat{border-top:1px solid var(--line)}.stat:nth-child(-n+2){border-top:none}}

/* ============ SECTIONS ============ */
section{padding:110px 0}
.sec-head{margin-bottom:64px;max-width:720px}
.sec-tag{display:inline-flex;align-items:center;gap:10px;font-family:var(--disp);font-size:12px;letter-spacing:.3em;color:var(--orange2);text-transform:uppercase;margin-bottom:18px}
.sec-tag::before{content:'';width:30px;height:1px;background:var(--grad)}
.sec-title{font-family:var(--disp);font-weight:700;font-size:clamp(28px,3.6vw,46px);line-height:1.15;letter-spacing:-.01em}
.sec-sub{margin-top:16px;color:var(--sub);font-size:15.5px;font-weight:300}

/* reveal on scroll */
.reveal{opacity:0;transform:translateY(36px);transition:opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)}
.reveal.in{opacity:1;transform:none}

/* ============ FIVE LENSES ============ */
.lenses{display:grid;grid-template-columns:repeat(5,1fr);border-top:1px solid var(--line)}
.lens{padding:36px 26px 42px;border-left:1px solid var(--line);position:relative;transition:.35s}
.lens:first-child{border-left:none}
.lens:hover{background:var(--bg2)}
.lens:hover::before{content:'';position:absolute;top:-1px;left:0;right:0;height:2px;background:var(--grad)}
.lens .idx{font-family:var(--disp);font-size:12px;color:var(--dim);letter-spacing:.2em;margin-bottom:18px}
.lens h3{font-family:var(--disp);font-size:21px;font-weight:600;margin-bottom:6px}
.lens .role{font-size:12px;color:var(--orange2);letter-spacing:.12em;margin-bottom:16px}
.lens .pain{font-size:13px;color:var(--sub);margin-bottom:14px;font-weight:300}
.lens .solve{font-size:13.5px;line-height:1.7}
.lens .solve b{color:var(--orange2);font-weight:500}
.lens-arrow{position:absolute;right:-9px;top:44px;z-index:2;color:var(--orange);font-size:13px;opacity:.9}
.lens:last-child .lens-arrow{display:none}
@media(max-width:1000px){.lenses{grid-template-columns:1fr 1fr}.lens{border-top:1px solid var(--line)}.lens-arrow{display:none}}
@media(max-width:560px){.lenses{grid-template-columns:1fr}.lens{border-left:none}}

/* ============ IMAGE SPLIT ============ */
.split{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center}
.split.rev>.split-media{order:2}
.split-media{position:relative;border-radius:20px;overflow:hidden;aspect-ratio:4/3}
.split-media img{width:100%;height:100%;object-fit:cover;transition:transform 1.2s cubic-bezier(.2,.7,.2,1)}
.split-media:hover img{transform:scale(1.045)}
.split-media::after{content:'';position:absolute;inset:0;background:linear-gradient(200deg,transparent 55%,rgba(10,11,16,.75));border-radius:20px}
.split-media .cap{position:absolute;left:24px;bottom:20px;z-index:2;font-family:var(--disp);font-size:12px;letter-spacing:.22em;color:#E9B98C;text-transform:uppercase}
.split-body h3{font-family:var(--disp);font-size:clamp(24px,2.6vw,34px);font-weight:700;line-height:1.2;margin-bottom:14px}
.split-body>p{color:var(--sub);font-size:15px;font-weight:300;margin-bottom:34px}
.feat-list{display:flex;flex-direction:column}
.feat{display:grid;grid-template-columns:44px 1fr;gap:18px;padding:20px 0;border-top:1px solid var(--line)}
.feat:last-child{border-bottom:1px solid var(--line)}
.feat .ico{width:44px;height:44px;border-radius:12px;background:rgba(249,115,22,.12);display:grid;place-items:center;font-size:19px;color:var(--orange2)}
.feat h4{font-size:15.5px;font-weight:600;margin-bottom:4px;font-family:var(--disp)}
.feat p{font-size:13.5px;color:var(--sub);font-weight:300}
@media(max-width:900px){.split{grid-template-columns:1fr;gap:40px}.split.rev>.split-media{order:0}}

/* ============ MARKETS ============ */
.markets{background:var(--bg2);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.mkt-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--line);border:1px solid var(--line);border-radius:20px;overflow:hidden}
.mkt{background:var(--panel);padding:46px 44px}
.mkt .flag{font-size:13px;font-family:var(--disp);letter-spacing:.24em;color:var(--orange2);margin-bottom:10px}
.mkt h3{font-family:var(--disp);font-size:26px;font-weight:700;margin-bottom:8px}
.mkt .desc{font-size:13.5px;color:var(--sub);font-weight:300;margin-bottom:26px}
.channels{display:flex;flex-wrap:wrap;gap:10px}
.ch{padding:9px 18px;border:1px solid var(--line);border-radius:99px;font-size:13px;color:#C9CDD8;transition:.25s;background:rgba(255,255,255,.02)}
.ch:hover{border-color:var(--orange);color:var(--orange2);transform:translateY(-1px)}
.mkt-wide{grid-column:1/-1}
.ctry-grid{display:grid;grid-template-columns:1fr 1fr;gap:26px 40px}
.ctry-region{grid-column:1/-1;font-family:var(--disp);font-size:11.5px;letter-spacing:.28em;color:var(--dim);text-transform:uppercase;display:flex;align-items:center;gap:14px}
.ctry-region::after{content:'';flex:1;height:1px;background:var(--line)}
.ctry-name{font-family:var(--disp);font-size:14px;font-weight:600;letter-spacing:.1em;color:#E9B98C;margin-bottom:12px}
.ctry-grid .ch{padding:7px 14px;font-size:12.5px}
@media(max-width:800px){.mkt-grid{grid-template-columns:1fr}.ctry-grid{grid-template-columns:1fr}}

/* ============ TOOLS ============ */
.tools-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border:1px solid var(--line);border-radius:20px;overflow:hidden}
.tool{background:var(--panel);padding:40px 34px;transition:.35s;position:relative}
.tool:hover{background:#161927}
.tool .t-num{font-family:var(--disp);font-size:13px;color:var(--dim);letter-spacing:.2em;margin-bottom:22px}
.tool h4{font-family:var(--disp);font-size:19px;font-weight:600;margin-bottom:10px}
.tool p{font-size:13.5px;color:var(--sub);font-weight:300}
.tool .t-stat{margin-top:24px;font-family:var(--disp);font-weight:700;font-size:24px;background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent}
@media(max-width:860px){.tools-grid{grid-template-columns:1fr}}

/* ============ STEPS ============ */
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:48px;counter-reset:step}
.step{position:relative;padding-top:28px;border-top:1px solid var(--line)}
.step::before{counter-increment:step;content:'0' counter(step);position:absolute;top:-18px;left:0;font-family:var(--disp);font-weight:700;font-size:34px;background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent;background-color:var(--bg);padding-right:14px}
.step h4{font-family:var(--disp);font-size:18px;font-weight:600;margin:14px 0 8px}
.step p{font-size:13.5px;color:var(--sub);font-weight:300}
@media(max-width:800px){.steps{grid-template-columns:1fr;gap:34px}}

/* ============ FINAL CTA ============ */
.final{position:relative;overflow:hidden;text-align:center;padding:130px 0}
.final::before{content:'';position:absolute;left:50%;top:50%;width:900px;height:900px;transform:translate(-50%,-50%);background:radial-gradient(circle,rgba(249,115,22,.14),transparent 62%);pointer-events:none}
.final h2{font-family:var(--disp);font-weight:700;font-size:clamp(32px,4.6vw,58px);line-height:1.12;max-width:18ch;margin:0 auto 22px}
.final p{color:var(--sub);font-size:15.5px;font-weight:300;margin-bottom:42px}
.mail-link{font-family:var(--disp);font-size:clamp(18px,2.4vw,26px);font-weight:600;background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent;letter-spacing:.02em}
.mail-link:hover{filter:brightness(1.15)}

/* ============ PORTAL ============ */
.portal{background:var(--bg2);border-top:1px solid var(--line)}
.locked{text-align:center;padding:20px 0 10px}
.locked .lock-ico{width:64px;height:64px;border-radius:18px;background:rgba(249,115,22,.12);display:grid;place-items:center;font-size:26px;color:var(--orange2);margin:0 auto 22px}
.locked h3{font-family:var(--disp);font-size:24px;margin-bottom:10px}
.locked p{color:var(--sub);font-size:14.5px;max-width:52ch;margin:0 auto 30px;font-weight:300}
.portal-head{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;margin-bottom:24px}
.portal-head .ph-t{font-family:var(--disp);font-size:14px;color:var(--sub)}
.portal-head .ph-t b{color:var(--orange2);font-weight:500}
.linkbtn{background:none;border:none;color:var(--dim);font-size:12.5px;cursor:pointer;text-decoration:underline;font-family:var(--body);transition:.25s}
.linkbtn:hover{color:var(--orange2)}
.ptabs{display:flex;gap:8px;margin-bottom:30px;border-bottom:1px solid var(--line)}
.ptab{background:none;border:none;color:var(--sub);font-family:var(--disp);font-size:14px;letter-spacing:.08em;padding:12px 22px;cursor:pointer;position:relative;transition:.25s}
.ptab.on{color:var(--txt)}
.ptab.on::after{content:'';position:absolute;left:0;right:0;bottom:-1px;height:2px;background:var(--grad)}
.pane{display:none}.pane.on{display:block}
.p-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.p-card{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:26px 24px;transition:.3s}
.p-card:hover{border-color:rgba(249,115,22,.35);transform:translateY(-3px)}
.p-card .pc-tag{font-family:var(--disp);font-size:11px;letter-spacing:.22em;color:var(--orange2);text-transform:uppercase;margin-bottom:12px}
.p-card h4{font-size:15.5px;font-weight:600;margin-bottom:8px}
.p-card p{font-size:13px;color:var(--sub);font-weight:300}
.consult{background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:34px 30px}
.consult .who{font-size:13.5px;color:var(--sub);margin-bottom:20px}
.consult .who b{color:var(--orange2);font-weight:500}
.topic-row{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:20px}
.topic{padding:8px 18px;border:1px solid var(--line);border-radius:99px;font-size:12.5px;color:var(--sub);cursor:pointer;transition:.25s;background:none;font-family:var(--body)}
.topic.on{border-color:var(--orange);color:var(--orange2);background:rgba(249,115,22,.08)}
.consult textarea{width:100%;min-height:110px;background:var(--bg);border:1px solid var(--line);border-radius:12px;color:var(--txt);padding:14px 16px;font-family:var(--body);font-size:13.5px;resize:vertical}
.consult textarea:focus{outline:none;border-color:var(--orange)}
/* modal */
.modal{position:fixed;inset:0;z-index:300;display:none;align-items:center;justify-content:center;background:rgba(6,7,11,.72);backdrop-filter:blur(8px);padding:20px}
.modal.open{display:flex}
.dialog{background:var(--panel);border:1px solid var(--line);border-radius:22px;max-width:480px;width:100%;padding:38px 34px;position:relative;animation:hIn .5s cubic-bezier(.2,.7,.2,1)}
.dialog h3{font-family:var(--disp);font-size:22px;margin-bottom:6px}
.dialog .dsub{font-size:13px;color:var(--sub);margin-bottom:24px;font-weight:300}
.dclose{position:absolute;top:18px;right:20px;background:none;border:none;color:var(--dim);font-size:20px;cursor:pointer;transition:.25s}
.dclose:hover{color:var(--txt)}
.type-row{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:20px}
.ttype{border:1px solid var(--line);border-radius:12px;background:none;color:var(--sub);padding:12px 8px;font-size:13px;cursor:pointer;transition:.25s;font-family:var(--body)}
.ttype.on{border-color:var(--orange);color:var(--orange2);background:rgba(249,115,22,.08)}
.dialog input{width:100%;background:var(--bg);border:1px solid var(--line);border-radius:12px;color:var(--txt);padding:13px 16px;font-family:var(--body);font-size:13.5px;margin-bottom:12px}
.dialog input:focus{outline:none;border-color:var(--orange)}
.dialog .btn{width:100%;justify-content:center;margin-top:6px}
@media(max-width:860px){.p-cards{grid-template-columns:1fr}}

/* ============ FOOTER ============ */
footer{border-top:1px solid var(--line);padding:44px 0;background:var(--bg2)}
.foot{display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap;font-size:13px;color:var(--dim)}
.foot .f-brand{font-family:var(--disp);font-weight:600;color:var(--sub);letter-spacing:.12em}
.foot a{transition:.25s}.foot a:hover{color:var(--orange2)}
</style>
