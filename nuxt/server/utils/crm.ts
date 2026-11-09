// 本站 CRM：线索落盘（JSON 文件 + 内存兜底），平台未配置时也不丢单
// 存储路径：<project>/.data/crm-leads.json；阶段：lead(线索) → assess(评估) → pilot(试点) → scale(放大)
import { promises as fs } from 'fs'
import { join } from 'path'

export type LeadStage = 'lead' | 'assess' | 'pilot' | 'scale'

export interface CrmEntry { ts: number; stage: LeadStage; note: string }
export interface CrmLead {
  id: string
  kind: string
  name: string
  email: string
  company: string
  type: string
  topic: string
  message: string
  stage: LeadStage
  createdAt: number
  updatedAt: number
  timeline: CrmEntry[]
}

const STAGES: LeadStage[] = ['lead', 'assess', 'pilot', 'scale']

const g = globalThis as any
const mem: CrmLead[] = g.__arCrm || (g.__arCrm = [])

function fileOf(): string {
  return join(process.cwd(), '.data', 'crm-leads.json')
}

async function readAll(): Promise<CrmLead[]> {
  try {
    const raw = await fs.readFile(fileOf(), 'utf8')
    const arr = JSON.parse(raw)
    if (Array.isArray(arr)) { mem.splice(0, mem.length, ...arr); return arr }
  } catch {}
  return mem
}

async function writeAll(leads: CrmLead[]) {
  mem.splice(0, mem.length, ...leads)
  try {
    await fs.mkdir(join(process.cwd(), '.data'), { recursive: true })
    await fs.writeFile(fileOf(), JSON.stringify(leads, null, 2), 'utf8')
  } catch {}
}

export async function addLead(input: Partial<CrmLead>): Promise<CrmLead> {
  const leads = await readAll()
  const now = Date.now()
  const lead: CrmLead = {
    id: 'L' + now.toString(36).toUpperCase() + Math.random().toString(36).slice(2, 6).toUpperCase(),
    kind: input.kind || 'consult',
    name: input.name || '',
    email: input.email || '',
    company: input.company || '',
    type: input.type || '',
    topic: input.topic || '',
    message: input.message || '',
    stage: 'lead',
    createdAt: now,
    updatedAt: now,
    timeline: [{ ts: now, stage: 'lead', note: '咨询已提交' }]
  }
  leads.unshift(lead)
  await writeAll(leads)
  return lead
}

export async function listLeads(mail?: string): Promise<CrmLead[]> {
  const leads = await readAll()
  return mail ? leads.filter(l => (l.email || '').toLowerCase() === mail.toLowerCase()) : leads
}

export async function setStage(id: string, stage: string, note = ''): Promise<CrmLead | null> {
  if (!STAGES.includes(stage as LeadStage)) return null
  const leads = await readAll()
  const lead = leads.find(l => l.id === id)
  if (!lead) return null
  lead.stage = stage as LeadStage
  lead.updatedAt = Date.now()
  lead.timeline.push({ ts: lead.updatedAt, stage: lead.stage, note })
  await writeAll(leads)
  return lead
}
