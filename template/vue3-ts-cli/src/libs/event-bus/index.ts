interface Events {
  [key: string | symbol]: Fn[]
}
type keyName = string | symbol
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Fn = (...args: any) => void
class EventBus {
  static events: Events = {}

  static $on(name: keyName, fn: Fn): void {
    if (!EventBus.events[name]) {
      EventBus.events[name] = []
    }
    EventBus.events[name].push(fn)
  }

  static $emit(name: keyName, ...args: unknown[]): void {
    if (!EventBus.events[name]) return
    EventBus.events[name].forEach((fn) => fn(...args))
  }

  static $off(name: keyName, fn: Fn): void {
    if (!EventBus.events[name]) return
    EventBus.events[name] = EventBus.events[name].filter((f) => f !== fn)
  }

  static $once(name: keyName, fn: Fn): void {
    const once = (...args: unknown[]) => {
      fn(...args)
      EventBus.$off(name, once)
    }
    EventBus.$on(name, once)
  }
}

export default EventBus
