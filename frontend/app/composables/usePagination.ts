import { reactive } from 'vue'

interface ITableMeta {
  page: number
  limit: number
  sortBy: string
  sortType: 'asc' | 'desc'
}

export const usePagination = () => {
  const meta = reactive<ITableMeta>({
    page: 1,
    limit: 10,
    sortBy: 'name',
    sortType: 'desc',
  })
  return {
    meta,
  }
}
