import { getCurrentScope, onScopeDispose, unref } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import type { MaybeComputedRef, MaybeElement, MaybeComputedElementRef, UnRefElementReturn } from '@/types/common'

/**
 * @method 清除副作用响应
 * @param  fn 创建副作用的函数
 */
export function tryOnScopeDispose(fn: () => void) {
  if (getCurrentScope()) {
    onScopeDispose(fn)
    return true
  }
  return false
}

/**
 * @method 判断是否是ref、不是ref包装成ref
 * @param  r 值、也可以是一个方法
 */
export function resolveUnref<T>(r: MaybeComputedRef<T>): T {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return typeof r === 'function' ? (r as any)() : unref(r)
}

/**
 * @method 判断是否是一个refElement
 * @param  fn 开启响应的方法
 */
export function unrefElement<T extends MaybeElement>(elRef: MaybeComputedElementRef<T>): UnRefElementReturn<T> {
  const plain = resolveUnref(elRef)
  return (plain as ComponentPublicInstance)?.$el ?? plain
}
