import { setToken } from '@/utils/util'
import { startVconsole } from './Vconsole'
export function startLocaDevConfig() {
  const userAgent = navigator.userAgent.toLowerCase()
  const locaDev = ['development'].includes(import.meta.env.MODE)
  if (locaDev || userAgent.includes('uat') || userAgent.includes('stg')) {
    if (locaDev) {
      const TOKEN = 'aee61b72-e47b-4cc6-a547-8e031fd1332c'
      setToken(TOKEN)
      startVconsole()
    }
  }
}
