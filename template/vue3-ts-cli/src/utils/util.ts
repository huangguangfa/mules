import { isString, isFunction } from './type'
import { DATA_REGEX_PATTERN, USER_TOKEN_NAME } from '@/config'
import defaultAvatar from '@/assets/images/common/defaultAvatar.png'

import type { ImgHTMLAttributes } from 'vue'
import type { BasicTarget, TargetType, TargetValue } from '@/types/dom/dom-target'

/**
 * 用户头像默认图
 * @param e
 */
export const setAvatarErrImg = (e: Event) => {
  ;(e.target as ImgHTMLAttributes).src = defaultAvatar
}

/**
 * 错误提示
 * @param  text 提示内容
 * @param  error 实际代码报错信息
 */
export function throwError(text: string, error?: unknown) {
  if (!text) return
  console.log(`%c${text}`, 'color:red', error ?? '')
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
  return localStorage.getItem(USER_TOKEN_NAME) || ''
}

export const setToken = (token: string) => {
  token = token || ''
  localStorage.setItem(USER_TOKEN_NAME, token)
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

/**
 * 树形数据通过子级信息查找所有父级
 * @param {Array} data //源数据
 * @param {string | number} id // 初始子数据的值
 * @param {string} key // 对比的key
 * @param {string} pid // 查找父元素key
 * @param {string} children // 包裹子级的key
 **/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TreeData = Record<string, any>
type TreeDataList = Array<TreeData>
export function allFather<T extends TreeDataList>(data: T, id: keyof TreeData, idkey: keyof TreeData, pidkey: keyof TreeData, childkey: keyof TreeData, isAll = true) {
  if (!Array.isArray(data)) {
    throw new Error('源数据应该是一个数组对象的树形结构数据')
  }
  const result: TreeDataList = []
  const find = (arr: TreeDataList, id: string) => {
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i]
      if (item[idkey] === id) {
        result.push(item)
        isAll && find(data, item[pidkey])
        break
      } else {
        if (item[childkey] && item[childkey].length) {
          find(item[childkey], id)
        }
      }
    }
  }
  find(data, id)
  return result.reverse()
}

// /**
//  * @method 防抖函数（常用于搜索、滚动条事件、文档大小的监听等场景）
//  * @param  func 执行方法
//  * @param delay 执行的时间
//  */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export function debounce<Args extends any[], F extends (...args: Args) => any>(func: F, delay = 100) {
//   let timeoutId: number
//   return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
//     const self = this
//     clearTimeout(timeoutId)
//     timeoutId = window.setTimeout(() => {
//       func.apply(self, args)
//     }, delay)
//   }
// }

/**
 * @method JSON.stringify的嵌套对象处理
 * @param  obj 对象value
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function stringify<T = any>(obj: T) {
  const cache: Array<T> = []
  return JSON.stringify(obj, function (key, value) {
    if (typeof value === 'object' && value !== null) {
      if (cache.indexOf(value) !== -1) {
        console.log('value', value)
        return
      }
      cache.push(value)
    }
    return value
  })
}

/**
 * @method 多层路径解析
 * @param  obj 目标对象
 * @param  path 路径
 */
const bailRE = new RegExp(`[^${DATA_REGEX_PATTERN.unicodeRegExp.source}.$_\\d]`)
export function parsePath(path: string) {
  if (!path) path = ''
  if (bailRE.test(path)) {
    return
  }
  const segments = path.split('.')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (obj: any) {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return
      obj = obj[segments[i]]
    }
    return obj
  }
}

/**
 * @method 全局日期格式化展示 示例：今天 15：40
 * @param  curDateStr 服务器时间
 * @param  TargetDateStr 日期字符串
 */
export function formatDate(targetDateStr: string, curDateStr?: string) {
  if (!targetDateStr) return ''
  const targetDate = new Date(targetDateStr)
  const curDate = new Date(curDateStr || '')
  const curDateTimestamp = curDate.setHours(0, 0, 0, 0)
  const TargetTimestamp = new Date(targetDateStr).setHours(0, 0, 0, 0)
  const t_y = targetDate.getFullYear()
  const c_y = curDate.getFullYear()
  const h = targetDate.getHours()
  let minute: string | number = targetDate.getMinutes()

  // 之前年份时间直接返回
  if (t_y < c_y) return dateFormat(targetDateStr, 'yyyy-MM-dd hh:mm')
  const dateTimestamp = curDateTimestamp - TargetTimestamp
  function _getRulesResult() {
    const rules = [
      {
        match: () => dateTimestamp === 0,
        action: () => '今天',
      },
      {
        match: () => dateTimestamp === 86400000,
        action: () => '昨天',
      },
    ]
    for (let i = 0; i < rules.length; i++) {
      if (rules[i].match()) {
        return rules[i].action()
      }
    }
  }
  minute = minute < 10 ? '0' + minute : minute
  let formatDateValue = _getRulesResult()
  if (formatDateValue) {
    formatDateValue = `${formatDateValue} ${h}:${minute}`
  } else {
    formatDateValue = dateFormat(targetDateStr, 'MM月dd日 hh:mm')
  }
  return formatDateValue
}

/**
 * @method 日期格式化展示
 * @param  data 日期
 * @param  format 格式化模版
 */
export function dateFormat(data: string | Date, format?: string): string {
  data = new Date(data)
  const year = `${data.getFullYear()}`
  let month = `${data.getMonth() + 1}`
  if (month.length === 1) {
    month = `0${month}`
  }
  let day = `${data.getDate()}`
  if (day.length === 1) {
    day = `0${day}`
  }
  let hours = `${data.getHours()}`
  if (hours.length === 1) {
    hours = `0${hours}`
  }
  let minutes = `${data.getMinutes()}`
  if (minutes.length === 1) {
    minutes = `0${minutes}`
  }
  let seconds = `${data.getSeconds()}`
  if (seconds.length === 1) {
    seconds = `0${seconds}`
  }

  return (format || 'yyyy-MM-dd hh:mm:ss')
    .replace(/yyyy/g, year)
    .replace(/MM/g, month)
    .replace(/dd/g, day)

    .replace(/hh/g, hours)
    .replace(/mm/g, minutes)
    .replace(/ss/g, seconds)
}

/**
 * @method 获取url链接参数 示例：getQueryVariable('id')
 * @param  keyName 名称
 */
export function getQueryVariable(keyName: string) {
  const query = window.location.search.substring(1)
  const vars = query.split('&')
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=')
    if (pair[0] == keyName) {
      return pair[1]
    }
  }
  return ''
}

/**
 * @method 对全局列表数据格式化 示例：listFormatDate<type>(list, data, formtDate)
 * @param  key 需要格式化的key
 * @param  targetKey 格式化好后的目标key 默认会携带 _xxx
 */
export function listFormatDate<T>(list: T[], sysTime: string, keyName: string, targetKey = 'formatDate') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  list.forEach((item: any) => {
    item[`_${targetKey}`] = formatDate(item[keyName as keyof typeof item], sysTime)
  })
  return list
}
