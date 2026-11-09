// 样品目录：可预定的样品位（额度随预定实时递减）
export default defineEventHandler(async () => {
  const { readSampleSlots } = await import('../../utils/samples')
  const items = await readSampleSlots()
  return { items }
})
