interface Events {
  [key: string]: Fn[]
}
type Fn = (options?: unknown) => void

class EventBus {
  static events: Events = {}
  static $on(name: string, fn: Fn): void {
    if (!EventBus.events[name]) {
      EventBus.events[name] = []
    }
    EventBus.events[name].push(fn)
  }
  static $emit<T>(name: string, ...args: T[]): void {
    if (!EventBus.events[name]) return
    EventBus.events[name].forEach((fn) => fn(...args))
  }
  static $off(name: string, fn: Fn): void {
    if (!EventBus.events[name]) return
    EventBus.events[name] = EventBus.events[name].filter((f) => f !== fn)
  }
  static $once(name: string, fn: Fn): void {
    const once = (...args: any[]) => {
      fn(...args)
      EventBus.$off(name, once)
    }
    EventBus.$on(name, once)
  }
}

export default EventBus
