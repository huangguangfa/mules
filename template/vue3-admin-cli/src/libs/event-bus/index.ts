class EventBus {
    static events: { [key: string]: Function[] } = {}
    static $on(name: string, fn: Function): void {
        console.log(2222, EventBus.events);
        if (!EventBus.events[name]) {
            EventBus.events[name] = [];
        }
        EventBus.events[name].push(fn);
    }
    static $emit(name: string, ...args: any[]): void {
        if (!EventBus.events[name]) return;
        EventBus.events[name].forEach(fn => fn(...args));
    }
    static $off(name: string, fn: Function): void {
        if (!EventBus.events[name]) return;
        EventBus.events[name] = EventBus.events[name].filter(f => f !== fn);
    }
    static $once(name: string, fn: Function): void {
        const once = (...args: any[]) => {
            fn(...args);
            EventBus.$off(name, once);
        }
        EventBus.$on(name, once);
    }
}

export default EventBus;