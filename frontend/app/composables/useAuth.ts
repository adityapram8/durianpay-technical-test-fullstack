import { useAuthStore } from '~/stores/auth'

export const useAuth = () => {
  const auth = useAuthStore()
  return {
    user: computed(() => auth.user),
    isLoggedIn: computed(() => auth.isLogin),
    isLoading: computed(() => auth.isLoading),
    login: auth.login,
    logout: auth.logout,
    register: auth.registerUser,
    initAuth: auth.initAuth,
  }
}
