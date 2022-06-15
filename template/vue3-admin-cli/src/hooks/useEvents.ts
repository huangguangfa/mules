import EventBus from '@/libs/event-bus'
export default function () {
  return {
    $on: EventBus.$on,
    $emit: EventBus.$emit,
    $off: EventBus.$off,
    $once: EventBus.$once,
  }
}
