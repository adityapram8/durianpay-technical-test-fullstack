import axios, { type AxiosError } from 'axios'
import { TOKEN_KEY } from '~/lib/constants'
import { useAuthStore } from '~/stores/auth'

export default defineNuxtPlugin((_nuxtApp) => {
  const config = useRuntimeConfig()

  const api = axios.create({
    baseURL: config.public.apiBase,
    timeout: 1000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })

  api.interceptors.request.use((request) => {
    const token = localStorage.getItem(TOKEN_KEY)
    if (token) {
      request.headers.Authorization = `Bearer ${token}`
    }
    return request
  })

  api.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const status = error.response?.status
      const auth = useAuthStore()

      switch (status) {
        case 400:
          return Promise.reject({
            status,
            message: (error.response?.data as any)?.message || 'Bad Request',
          })
        case 401:
          auth.logout()
          navigateTo('/login')
          return Promise.reject({
            status,
            message: 'Session expired, Please log in again',
          })
        case 403:
          return Promise.reject({
            status,
            message: 'You do not have permission',
          })
        case 404:
          return Promise.reject({
            status,
            message: 'Not Found',
          })
        case 429:
          return Promise.reject({
            status,
            message: 'Too many requests',
          })
        case 500:
          return Promise.reject({ status, message: 'Server error. Please try again later' })
        case 502:
        case 503:
        case 504:
          return Promise.reject({ status, message: 'Service is currently unavailable' })
        default:
          if (!error.response) {
            return Promise.reject({ status: 0, message: 'Network error. Check your connection' })
          }
          return Promise.reject({ status, message: 'An unexpected error occurred' })
      }
    },
  )
  return { provide: { api } }
})
