// B2B 目录：公开目录数据源（内置样例 + .data/b2b-catalog.json 落盘）
// 读取失败回退内置样例；saveCatalog 供后续管理面使用（当前仅落盘）
import { promises as fs } from 'fs'
import { join } from 'path'

export interface B2BItem {
  sku: string
  titleZh: string
  titleEn: string
  category: string
  moq: string
  price: string
  lead: string
  markets: string
  status: 'open' | 'matching'
}

// 样例目录（上线前替换为真实报价数据）
const SAMPLES: B2BItem[] = [
  { sku: 'AR-STB-45', titleZh: '折叠收纳箱 45L', titleEn: 'Foldable storage box 45L', category: 'Home storage', moq: '1,000 pcs', price: '$4.20-$5.80 FOB', lead: '35-45 days', markets: 'NA · EU', status: 'open' },
  { sku: 'AR-GLC-10', titleZh: '厨房玻璃保鲜盒 10 件套', titleEn: 'Glass food container set (10 pcs)', category: 'Kitchen', moq: '2,000 sets', price: '$8.50-$11.20 FOB', lead: '30-40 days', markets: 'NA · EU · AU', status: 'open' },
  { sku: 'AR-TMB-50', titleZh: '不锈钢保温杯 500ml', titleEn: 'Insulated tumbler 500ml', category: 'Drinkware', moq: '3,000 pcs', price: '$2.80-$3.90 FOB', lead: '40-50 days', markets: 'NA', status: 'matching' },
  { sku: 'AR-CMP-60', titleZh: '户外折叠桌', titleEn: 'Folding camp table', category: 'Outdoor', moq: '1,500 pcs', price: '$7.60-$9.40 FOB', lead: '35-45 days', markets: 'EU · AU', status: 'open' },
  { sku: 'AR-PET-20', titleZh: '宠物窝垫', titleEn: 'Pet bed', category: 'Pet supplies', moq: '1,000 pcs', price: '$5.50-$7.30 FOB', lead: '30-40 days', markets: 'NA · EU', status: 'matching' },
  { sku: 'AR-LED-30', titleZh: 'LED 化妆镜', titleEn: 'LED vanity mirror', category: 'Beauty', moq: '2,000 pcs', price: '$6.80-$8.90 FOB', lead: '45-55 days', markets: 'NA · EU', status: 'open' }
]

function fileOf(): string {
  return join(process.cwd(), '.data', 'b2b-catalog.json')
}

export async function readCatalog(): Promise<B2BItem[]> {
  try {
    const raw = await fs.readFile(fileOf(), 'utf8')
    const arr = JSON.parse(raw)
    if (Array.isArray(arr) && arr.length) return arr
  } catch {}
  return SAMPLES
}

export async function saveCatalog(items: B2BItem[]): Promise<void> {
  try {
    await fs.mkdir(join(process.cwd(), '.data'), { recursive: true })
    await fs.writeFile(fileOf(), JSON.stringify(items, null, 2), 'utf8')
  } catch {}
}
