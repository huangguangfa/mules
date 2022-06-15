import type { AnyFunction } from '@/types/index'
class EventBus {
  static events: { [key: string]: Array<AnyFunction> } = {}
  static $on(name: string, fn: AnyFunction): void {
    if (!EventBus.events[name]) {
      EventBus.events[name] = []
    }
    EventBus.events[name].push(fn)
  }
  static $emit(name: string, ...args: any[]): void {
    if (!EventBus.events[name]) return
    EventBus.events[name].forEach((fn: AnyFunction) => fn([...args]))
  }
  static $off(name: string, fn: AnyFunction): void {
    if (!EventBus.events[name]) return
    EventBus.events[name] = EventBus.events[name].filter((f) => f !== fn)
  }
  static $once(name: string, fn: AnyFunction): void {
    const once = (...args: any[]) => {
      fn([...args])
      EventBus.$off(name, once)
    }
    EventBus.$on(name, once)
  }
}

export default EventBus
