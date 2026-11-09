// 样品计划：样品目录（复用 B2B 目录 SKU）+ 预定记录（.data/samples.json 落盘）
// 预定即进入 CRM 管线（kind=sample），后续投放/测评状态由管理面推进
import { promises as fs } from 'fs'
import { join } from 'path'
import { readCatalog } from './b2b'

export interface SampleSlot {
  sku: string
  titleZh: string
  titleEn: string
  sampleQty: string
  markets: string
  reviewReqZh: string
  reviewReqEn: string
  status: 'available' | 'limited' | 'full'
}

export interface SampleReservation {
  id: string
  sku: string
  name: string
  email: string
  qty: number
  plan: string
  status: 'reserved' | 'seeded' | 'reviewing' | 'reviewed'
  createdAt: number
}

// 每个 SKU 的样品额度与测评要求（上线前按实际样品池替换）
const QUOTA: Record<string, { qty: number; reviewZh: string; reviewEn: string }> = {
  'AR-STB-45': { qty: 20, reviewZh: '图文 + 短视频各 1', reviewEn: '1 photo post + 1 short video' },
  'AR-GLC-10': { qty: 15, reviewZh: '开箱图文 + 场景视频', reviewEn: 'Unboxing post + usage video' },
  'AR-TMB-50': { qty: 30, reviewZh: '图文测评 + 平台评论', reviewEn: 'Photo review + marketplace review' },
  'AR-CMP-60': { qty: 10, reviewZh: '户外场景视频 + 图文', reviewEn: 'Outdoor video + photo post' },
  'AR-PET-20': { qty: 15, reviewZh: '宠物实拍图文 + 短视频', reviewEn: 'Pet photo set + short video' },
  'AR-LED-30': { qty: 20, reviewZh: '对比测评图文 + 直播片段', reviewEn: 'Comparison post + live clip' }
}

function fileOf(): string {
  return join(process.cwd(), '.data', 'samples.json')
}

export async function readReservations(): Promise<SampleReservation[]> {
  try {
    const raw = await fs.readFile(fileOf(), 'utf8')
    const arr = JSON.parse(raw)
    if (Array.isArray(arr)) return arr
  } catch {}
  return []
}

export async function saveReservations(list: SampleReservation[]): Promise<void> {
  try {
    await fs.mkdir(join(process.cwd(), '.data'), { recursive: true })
    await fs.writeFile(fileOf(), JSON.stringify(list, null, 2), 'utf8')
  } catch {}
}

export async function addReservation(input: { sku: string; name: string; email: string; qty: number; plan: string }): Promise<SampleReservation> {
  const list = await readReservations()
  const r: SampleReservation = {
    id: 'S' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).slice(2, 5).toUpperCase(),
    sku: input.sku, name: input.name, email: input.email,
    qty: input.qty, plan: input.plan || '',
    status: 'reserved', createdAt: Date.now()
  }
  list.unshift(r)
  await saveReservations(list)
  return r
}

// 样品目录：SKU 来自 B2B 目录，额度减去已预定数
export async function readSampleSlots(): Promise<SampleSlot[]> {
  const [catalog, reservations] = await Promise.all([readCatalog(), readReservations()])
  return catalog.map((item) => {
    const q = QUOTA[item.sku] || { qty: 10, reviewZh: '图文测评 1 篇', reviewEn: '1 photo review' }
    const taken = reservations.filter((r) => r.sku === item.sku).length
    const left = Math.max(0, q.qty - taken)
    const status: SampleSlot['status'] = left === 0 ? 'full' : left <= Math.ceil(q.qty / 4) ? 'limited' : 'available'
    return {
      sku: item.sku,
      titleZh: item.titleZh,
      titleEn: item.titleEn,
      sampleQty: left + ' / ' + q.qty + ' 件',
      markets: item.markets,
      reviewReqZh: q.reviewZh,
      reviewReqEn: q.reviewEn,
      status
    }
  })
}
