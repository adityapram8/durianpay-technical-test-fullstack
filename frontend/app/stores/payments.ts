import { defineStore } from 'pinia'

interface ITableMeta {
  status: string
  page: number
  limit: number
  totalData?: number
  totalPage?: number
}

interface IPayment {
  id: string | null
  merchant: string
  createdAt: string
  amount: number
  status: IStatusPayment
}

type IStatusPayment = 'completed' | 'processing' | 'failed'

interface IPaymentList {
  meta: ITableMeta
  data: IPayment[]
}

export const usePaymentStore = defineStore('payments', () => {
  const $api = useNuxtApp() as any

  // ---------- State --------------------
  const paymentList = ref<IPaymentList | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // ---------- Actions --------------------
  async function getPaymentList(payload: any): Promise<IPaymentList | null> {
    isLoading.value = true
    error.value = null
    try {
      const response = await $api.get('payments', payload)
      paymentList.value = response.data
      return response
    } catch (err) {
      error.value = (err as Error).message || 'Empty Payment List'
    } finally {
      isLoading.value = false
    }
    return paymentList.value
  }

  return {
    paymentList,
    isLoading,
    error,
    getPaymentList,
  }
})
