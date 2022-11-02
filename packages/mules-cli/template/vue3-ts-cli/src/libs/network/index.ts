import { useEvents } from '@/hooks'
export function checkNetwork() {
  const { $emit } = useEvents()
  function updateOnline() {
    $emit('connectionNetwork', {
      online: !!navigator.onLine,
    })
  }
  window.addEventListener('online', updateOnline)
  window.addEventListener('offline', updateOnline)
}
