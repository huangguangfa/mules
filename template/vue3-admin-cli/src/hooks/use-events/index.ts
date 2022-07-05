import EventBus from '@/libs/event-bus'
const eventBus = {
  $on: EventBus.$on,
  $emit: EventBus.$emit,
  $off: EventBus.$off,
  $once: EventBus.$once,
}

export function useEvents() {
  return eventBus
}
