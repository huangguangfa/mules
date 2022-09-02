import type { Ref, ComputedRef, ComponentPublicInstance } from 'vue'
// 获取函数返回值类型
// eslint-disable-next-line @typescript-eslint/ban-types
export type GetReturnType<Func extends Function> = Func extends (...args: unknown[]) => infer ReturnType ? ReturnType : never

export type MaybeRef<T> = T | Ref<T>

export type MaybeComputedRef<T> = MaybeReadonlyRef<T> | MaybeRef<T>

export type MaybeReadonlyRef<T> = (() => T) | ComputedRef<T>

export type MaybeElement = HTMLElement | SVGElement | ComponentPublicInstance | undefined | null

export type MaybeComputedElementRef<T extends MaybeElement = MaybeElement> = MaybeComputedRef<T>

export type UnRefElementReturn<T extends MaybeElement = MaybeElement> = T extends ComponentPublicInstance ? Exclude<MaybeElement, ComponentPublicInstance> : T | undefined

export type MaybeElementRef<T extends MaybeElement = MaybeElement> = MaybeRef<T>
