import { isString, isFunction } from './type'
import { DATA_REGEX_PATTERN } from '@/config'
import type { BasicTarget, TargetType, TargetValue } from '@/types/dom/dom-target'

/**
 * 错误提示
 * @param  text 提示内容
 * @param  error 实际代码报错信息
 */
export function throwError(text: string, error?: unknown) {
  if (!text) return
  console.log(`%c${text}`, 'color:red', error)
}

/**
 * @method 获取url字符串问号之后的值并转化为对象
 * @param {String} str 当前url字符串
 * @returns {Object} 查询字符串对象
 */
export const querystring = (str: string) => {
  if (!str || !isString(str) || str.indexOf('?') === -1) return
  const arr = str.split('?')[1].split('&')
  return arr.reduce((res: object, item: string) => {
    const query = item.split('=')
    res = { ...res, [query[0]]: encodeURIComponent(query[1]) }
    return res
  }, {})
}

/**
 * @method token的设置与获取
 * @returns {string}
 */
export const getToken = () => {
  return sessionStorage.getItem('ks_token') || ''
}

export const setToken = (token: string) => {
  token = token || ''
  sessionStorage.setItem('ks_token', token)
}

/**
 * @method 高亮显示文本(常用于关键字搜索)
 * @param {String} str 当前url字符串
 * @returns {Object} 查询字符串对象
 */
export const highlight = (str: string, keyword: string, color = '#7972FE') => {
  const transform = keyword.replace(DATA_REGEX_PATTERN.highlight, '\\$&')
  const reg = new RegExp(transform, 'gi')
  if (str) {
    return str.replace(reg, (text) => `<span style="color:${color}">${text}</span>`)
  }
}

/**
 * @method 获取目标元素
 * @param  target 目标元素或方法
 * @param defaultElement 默认元素
 * @returns {Element} 元素
 */
export function getTargetElement<T extends TargetType>(target: BasicTarget<T>, defaultElement?: T): HTMLElement {
  if (!target) {
    return defaultElement as HTMLElement
  }
  let targetElement: TargetValue<T>
  if (isFunction(target)) {
    targetElement = (target as () => TargetValue<T>)()
  } else if ('value' in target) {
    targetElement = target['value'] as TargetValue<T>
  } else {
    targetElement = target as TargetValue<T>
  }

  return targetElement as HTMLElement
}
