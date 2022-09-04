import { reactive, watchEffect, onUnmounted } from 'vue'
import type { BasicTarget } from '@/types/dom/dom-target'
import { getTargetElement } from '@/utils/util'

export interface InViewportOptions {
  rootMargin?: string // 根(root)元素的外边距
  threshold?: number | number[] // 可以是单一的 number 也可以是 number 数组，target 元素和 root 元素相交程度达到该值的时候 ratio 会被更新
  root?: BasicTarget<Element> //指定根(root)元素，用于检查目标的可见性。必须是目标元素的父级元素，如果未指定或者为 null，则默认为浏览器视窗。
}

export function useInViewport(target: BasicTarget, options?: InViewportOptions) {
  let observer: IntersectionObserver
  const state = reactive({
    status: false,
    ratio: 0,
  })

  const stop = watchEffect(() => {
    const el = getTargetElement(target)
    if (!el) {
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          state.status = entry.isIntersecting
          state.ratio = entry.intersectionRatio
        }
      },
      {
        ...options,
        root: getTargetElement(options?.root),
      }
    )

    observer?.observe(el)
  })

  onUnmounted(() => {
    stop && stop()
    observer?.disconnect()
  })

  return [state.status, state.ratio] as const
}
