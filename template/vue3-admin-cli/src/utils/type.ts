
export const toString = Object.toString
/**
  * 一个内部方法、用作公共抽离
  */
const { is } = function _internal() {
  const is = (type: string, primitive?: boolean) => {
    return function (obj: any): boolean {
      return primitive ? typeof obj === type.toLowerCase() : toString.call(obj) === `[object ${type}]`
    }
  }

  return { is }
}()



/**
  * 是否是一个el元素
  * @param  e 节点
  * @returns {type: Boolean} 
  */
export const isElement = (e: unknown): e is Element => {
  if (typeof Element === 'undefined') return false;
  return e instanceof Element;
}
/**
  * 判断是否是客户端
  * @returns {type: Boolean} 
  */
export const isClient = typeof window !== 'undefined';
/**
  * 判断是对象
  * @returns {type: Boolean} 
  */
export const isPrimitiveObject = (item: any): boolean => {
  return is("Object", true)(item)
}

/**
    * @method 检测当前值是0或者true条件
    * @param item 检测当前类型
    * @returns { Boolean } 如果是0或者true条件返回true、否则返回false
    */
export const def = (item: any, defs: any) => {
  return (item === undefined || item === null) ? defs : item
}