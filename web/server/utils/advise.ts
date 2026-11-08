const SYSTEM_NOTE = "结构、消防和临电的结论，须由持证工程师现场复核。"

export function adviseLocally(message: string, industry: string) {
  const topic = industry.trim() || guess(message)
  const reply = answers[topic] ?? answers["工程"]
  return { reply, source: "local" as const, note: SYSTEM_NOTE }
}

const answers: Record<string, string> = {
  布料: `先确认用途，再定面料，不要先锁价格。
1. 写清场景：服装、家居还是工装，决定克重、透气和耐磨。
2. 要供应商提供成分、克重和色牢度，而不是只看手感。
3. 大货前做一米样：水洗、摩擦、日晒。样品不过，不投产。`,
  维修: `先找原因，再动墙面或管线。
1. 渗漏先查源头（屋面、窗边、管井），不要只刷涂料。
2. 电路老化先断电、测绝缘，再决定局部更换还是回路改造。
3. 承重构件开裂必须停工，请持证结构工程师现场复核。`,
  设计: `设计先定边界：用途、荷载、预算、工期。
1. 平面按动线画，不按家具目录堆功能。
2. 布料与饰面在施工图阶段就定规格，避免后期改色改克重。
3. 出图前对照消防、采光和疏散，正式出图由注册设计师签章。`,
  施工: `施工按工序，不按到场材料。
1. 先隐蔽工程验收（防水、管线、基层），再做饰面和软装面料。
2. 每天只开一个工作面，材料进场核对批次和合格证。
3. 变更必须书面，口头改做法不算数。`,
  工程: `工程问题先对齐范围、工期和责任界面。
1. 把需求写成清单：做什么、不做什么、验收标准。
2. 关键路径单独列：基础、主体、机电、饰面、布艺安装。
3. 涉及结构、消防、临电的结论，必须由持证工程师复核后才能施工。`,
}

function guess(message: string) {
  if (/布|面料|克重|纺织|纱|窗帘/.test(message)) return "布料"
  if (/维修|漏|裂缝|翻新|渗/.test(message)) return "维修"
  if (/设计|图纸|方案|动线/.test(message)) return "设计"
  if (/施工|工序|进场|隐蔽/.test(message)) return "施工"
  return "工程"
}
