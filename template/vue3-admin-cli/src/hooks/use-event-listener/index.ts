import { EMPTY_FUNC, defaultWindow } from '@/config'
import { isString, tryOnScopeDispose, unrefElement } from '@/utils'
import { watch } from 'vue'

import type { MaybeComputedRef, MaybeElementRef } from '@/types/common'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useEventListener(...args: any[]) {
  let target: MaybeComputedRef<EventTarget> | undefined
  let event: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let listener: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let options: any

  if (isString(args[0])) {
    ;[event, listener, options] = args
    target = defaultWindow
  } else {
    ;[target, event, listener, options] = args
  }
  if (!target) return EMPTY_FUNC

  let cleanup = EMPTY_FUNC
  const stopWatch = watch(
    () => unrefElement(target as unknown as MaybeElementRef),
    (el) => {
      cleanup()
      if (!el) return
      el.addEventListener(event, listener, options)
      cleanup = () => {
        el.removeEventListener(event, listener, options)
        cleanup = EMPTY_FUNC
      }
    },
    { immediate: true, flush: 'post' }
  )

  const stop = () => {
    stopWatch()
    cleanup()
  }

  tryOnScopeDispose(stop)

  return stop
}
