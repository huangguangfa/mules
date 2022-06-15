import useEvents from '@/hooks/useEvents'
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
