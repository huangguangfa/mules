export const toString = Object.prototype.toString
/** 一个内部方法、用作公共抽离 */
const { is } = (function _internal() {
  const is = (type: string, primitive?: boolean) => {
    return function (obj: unknown): boolean {
      return primitive ? typeof obj === type.toLowerCase() : toString.call(obj) === `[object ${type}]`
    }
  }
  return { is }
})()

/**
 * 是否是一个el元素
 * @param  e 节点
 * @returns {type: Boolean}
 */
export const isElement = (e: unknown): e is Element => {
  if (typeof Element === 'undefined') return false
  return e instanceof Element
}
/**
 * 判断是否是客户端
 * @returns {type: Boolean}
 */
export const isClient = typeof window !== 'undefined'
/**
 * 判断是对象
 * @returns {type: Boolean}
 */
export const isPrimitiveObject = (item: unknown): boolean => {
  return is('Object', true)(item)
}

/**
 * @method 检测当前类型是否是对象
 * @param item 检测当前类型
 * @returns { Boolean } 如果是对象则返回true、否则返回false
 */
export const isObject = (item: unknown): boolean => {
  return is('Object')(item)
}
/**
 * @method 检测当前类型是否是空对象
 * @param item 检测当前类型
 * @returns { Boolean } 如果为空的对象则返回true、否则返回false
 */
export const isEmptyObject = (item: object): boolean => {
  return isObject(item) && Object.keys(item).length === 0
}
/**
 * @method 检测当前值是0或者true条件
 * @param item 检测当前类型
 * @returns { Boolean } 如果是0或者true条件返回true、否则返回false
 */
export const def = (item: unknown, defs: unknown) => {
  return item === undefined || item === null ? defs : item
}

/**
 * @method 检测当前类型是否为字符串
 * @param item 检测当前类型
 * @returns { Boolean } 如果是字符串则返回true、否则返回false
 */
export const isString = (item: unknown): boolean => {
  return is('String', true)(item)
}

/**
 * @method 检测当前类型是否为函数
 * @param item 检测当前类型
 * @returns { Boolean } 如果是函数则返回true、否则返回false
 */
export const isFunction = (item: unknown): boolean => {
  return is('Function')(item)
}

/**
 * @method 检测当前类型是否为空函数
 * @param item 检测当前类型
 * @returns { Boolean } 如果是空函数则返回true、否则返回false
 */
export const isEmptyFunction = (item: () => void | unknown): boolean => {
  if (!item) return true
  const str = item.toString().replace(/\s/g, '')
  return isFunction(item) && (str === 'functionEMPTY_FUNC(){}' || str === 'function(){}' || str === '()=>{}')
}

/**
 * @method 检测当前类型是否是数组
 * @param item 检测当前类型
 * @returns { Boolean } 如果是数组则返回true、否则返回false
 */
export const isArray = (item: Array<unknown> | unknown): boolean => {
  return Array.isArray(item) || is('Array')(item)
}

/**
 * @method 检测当前类型是否是空数组
 * @param item 检测当前类型
 * @returns { Boolean } 如果为空数组则返回true、否则返回false
 */
export const isEmptyArray = (item: Array<unknown> | unknown): boolean => {
  return isArray(item) && (item as unknown[]).length === 0
}
