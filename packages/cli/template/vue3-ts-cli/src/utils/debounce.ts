/* eslint-disable */
// @ts-nocheck
/**
 * @category Function
 * 要防抖动的函数
 * @param {Function} func
 *  延迟的毫秒数;
 * @param {number} [wait=0]
 * @param {Object} [options={}] The options object.
 *  指定在延迟开始前调用
 * @param {boolean} [options.leading=false]
 *  设置 func 允许被延迟的最大值
 * @param {number} [options.maxWait]
 *  指定在延迟结束后调用
 * @param {boolean} [options.trailing=true]
 * @returns {Function}
 */
type AnyFunction = (...args: any[]) => void
interface DebounceOption {
  leading?: boolean
  maxWait?: number
  trailing?: boolean
}

function isObject(value: any) {
  const type = typeof value
  return value != null && (type == 'object' || type == 'function')
}

function debounce(func: AnyFunction, wait = 0, options: DebounceOption = {}) {
  let lastArgs: any, lastThis: any, maxWait: any, result: any, timerId: any, lastCallTime: any

  let lastInvokeTime = 0,
    leading = false,
    maxing = false,
    trailing = true

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }
  wait = +wait || 0
  if (isObject(options)) {
    leading = !!options.leading
    maxing = 'maxWait' in options
    maxWait = maxing ? Math.max(+(options.maxWait as number) || 0, wait) : maxWait
    trailing = 'trailing' in options ? !!options.trailing : trailing
  }

  function invokeFunc(time: number) {
    const args = lastArgs
    const thisArg = lastThis

    lastArgs = lastThis = undefined
    lastInvokeTime = time
    result = func.apply(thisArg, args)
    return result
  }

  function leadingEdge(time: number) {
    // 重置任何 maxWait
    lastInvokeTime = time
    // 启动后缘计时器
    timerId = setTimeout(timerExpired, wait)
    // 调用前缘
    return leading ? invokeFunc(time) : result
  }

  function remainingWait(time: number) {
    const timeSinceLastCall = time - lastCallTime
    const timeSinceLastInvoke = time - lastInvokeTime
    const timeWaiting = wait - timeSinceLastCall

    return maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting
  }

  function shouldInvoke(time: number) {
    const timeSinceLastCall = time - lastCallTime
    const timeSinceLastInvoke = time - lastInvokeTime
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || (maxing && timeSinceLastInvoke >= maxWait)
  }

  function timerExpired() {
    const time = Date.now()
    if (shouldInvoke(time)) {
      return trailingEdge(time)
    }
    // 重启计时器
    timerId = setTimeout(timerExpired, remainingWait(time))
  }

  function trailingEdge(time: number) {
    timerId = undefined

    // 当有 lastArgs 时才调用，这意味着 func 至少被取消公告一次。
    if (trailing && lastArgs) {
      return invokeFunc(time)
    }
    lastArgs = lastThis = undefined
    return result
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId)
    }
    lastInvokeTime = 0
    lastArgs = lastCallTime = lastThis = timerId = undefined
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(Date.now())
  }

  function pending() {
    return timerId !== undefined
  }

  function debounced(...args: any[]) {
    const time = Date.now()
    const isInvoking = shouldInvoke(time)

    lastArgs = args
    lastThis = this
    lastCallTime = time

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime)
      }
      if (maxing) {
        // 在频繁触发中处理调用
        timerId = setTimeout(timerExpired, wait)
        return invokeFunc(lastCallTime)
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait)
    }
    return result
  }
  debounced.cancel = cancel
  debounced.flush = flush
  debounced.pending = pending
  return debounced
}

export default debounce
