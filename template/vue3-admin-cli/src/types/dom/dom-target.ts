import type { ShallowRef } from 'vue'
export type TargetValue<T> = T | undefined | null
export type TargetType = HTMLElement | Element | Window | Document | ShallowRef
export type BasicTarget<T extends TargetType = ShallowRef> = TargetValue<T> | (() => TargetValue<T>)
