import { EMPTY_FUNC } from '@/config'
import { shallowRef, ref } from 'vue'
import type { Ref, UnwrapRef } from 'vue'
export interface UseAsyncStateOptions<Shallow extends boolean> {
  // 立即执行
  immediate?: boolean
  // 错误回调
  onError?: (e: unknown) => void
  // 开启重置
  resetOnExecute?: boolean
  // 使用shallowRef
  shallow?: Shallow
  // 抛出异常
  throwError?: boolean
}
export function useAsnyState<Data, Shallow extends boolean = true>(promise: Promise<Data> | ((...args: unknown[]) => Promise<Data>), initialState: Data, options?: UseAsyncStateOptions<Shallow>) {
  const { immediate = true, onError = EMPTY_FUNC, resetOnExecute = true, shallow = true, throwError } = options ?? {}

  const state = shallow ? shallowRef(initialState) : ref(initialState)
  const isReady = ref(false)
  const isLoading = ref(false)
  const error = ref<unknown | undefined>()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function _execute(...args: any[]) {
    if (resetOnExecute) state.value = initialState
    error.value = undefined
    isReady.value = false
    isLoading.value = true
    const _promise = typeof promise === 'function' ? promise(...args) : promise
    try {
      const data = await _promise
      state.value = data
      isReady.value = true
    } catch (e) {
      error.value = e
      onError(e)
      if (throwError) throw error
    } finally {
      isLoading.value = false
    }
  }
  if (immediate) _execute()

  return {
    state: state as Shallow extends true ? Ref<Data> : Ref<UnwrapRef<Data>>,
    isReady,
    isLoading,
    error,
    execute: _execute,
  }
}
