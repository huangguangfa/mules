/**
* @author gf
* @file Type
* @description 数据类型判断类
*/
import { is } from '../.internal/type'
// import { DATA_REGEX_PATTERN } from '../config'

export default class Type {
    /**
    * @method 检测当前类型是否是对象
    * @param item 检测当前类型
    * @returns { Boolean } 如果是对象则返回true、否则返回false
    */
    static isObject(item:any): boolean {
        return is("Object")(item)
    }

    /**
    * @method 检测当前类型是否为纯粹对象(非window或者系统对象)
    * @param item 检测当前类型
    * @returns { Boolean } 如果是普通对象则返回true、否则返回false
    */
    static isPlainObject(item) {
        if (typeof item !== 'object' || item === null) return false;
        let proto = item;
        while (Object.getPrototypeOf(proto) !== null) {
            proto = Object.getPrototypeOf(proto)
        }

        return Object.getPrototypeOf(item) === proto;
    }
}