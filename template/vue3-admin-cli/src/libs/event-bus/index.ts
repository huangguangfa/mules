interface Events {
  [key: string]: Fn<any>[]
}
type Fn<T> = (options?: T) => void

class EventBus {
  static events: Events = {}
  static $on<T>(name: string, fn: Fn<T>): void {
    if (!EventBus.events[name]) {
      EventBus.events[name] = []
    }
    EventBus.events[name].push(fn)
  }
  static $emit<T>(name: string, ...args: T[]): void {
    if (!EventBus.events[name]) return
    EventBus.events[name].forEach((fn) => fn(...args))
  }
  static $off<T>(name: string, fn: Fn<T>): void {
    if (!EventBus.events[name]) return
    EventBus.events[name] = EventBus.events[name].filter((f) => f !== fn)
  }
  static $once<T>(name: string, fn: Fn<T>): void {
    const once = (...args: any[]) => {
      fn(...args)
      EventBus.$off(name, once)
    }
    EventBus.$on(name, once)
  }
}

export default EventBus
