import { defineStore } from 'pinia'
import { TOKEN_KEY, USER_KEY } from '~/lib/constants'

interface IUser {
  id: number
  name: string
  email: string
  roleName: string
}

interface ILoginCredentials {
  email: string
  password: string
}

export const useAuthStore = defineStore('auth', () => {
  const { $api } = useNuxtApp() as any
  // ---------- State --------------------
  const user = ref<IUser | null>(null)
  const token = ref<string | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // ---------- Getters --------------------
  const isLogin = computed(() => !!token.value && !!user.value)

  // ---------- Actions --------------------
  function initAuth() {
    const storedToken = localStorage.getItem(TOKEN_KEY)
    const storedUser = localStorage.getItem(USER_KEY)

    if (storedToken && storedUser) {
      token.value = storedToken
      user.value = JSON.parse(storedUser)
    }
  }

  async function login(credentials: ILoginCredentials) {
    isLoading.value = true
    error.value = null
    try {
      const response = await $api.post('/auth/login', credentials)
      token.value = response.data.token
      user.value = response.data.user
      localStorage.setItem(TOKEN_KEY, response.data.token)
      localStorage.setItem(USER_KEY, JSON.stringify(response.data.user))
      await navigateTo('/dashboard')
    } catch (error: any) {
      error.value = error.message || 'Login Failed'
    } finally {
      isLoading.value = false
    }
  }
  async function registerUser(payload: { name: string } & ILoginCredentials) {
    isLoading.value = true
    error.value = null
    try {
      const response = await $api.post('/auth/register', payload)
      await navigateTo('/login')
      return response.data
    } catch (error: any) {
      error.value = error.message || 'Registration failed.'
      throw error
    } finally {
      isLoading.value = false
    }
  }
  function logout() {
    user.value = null
    token.value = null
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
    navigateTo('/login')
  }
  return {
    user,
    token,
    isLoading,
    isLogin,
    initAuth,
    login,
    registerUser,
    logout,
  }
})
