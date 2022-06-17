import { isString } from './type'
/**
 * 错误提示
 * @param  text 提示内容
 * @param  error 实际代码报错信息
 */
export function exception(text: string, error?: any) {
  if (!text) return
  console.log(`%c${text}`, 'color:red', error)
}

/**
 * @method 获取url字符串问号之后的值并转化为对象
 * @param {String} str 当前url字符串
 * @returns {Object} 查询字符串对象
 */
export const querystring = (str: any) => {
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
