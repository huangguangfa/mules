/**
* @author gf
* @file Type
* @description 数据类型判断类
*/
import { is, match } from '../.internal/type'
// import { DATA_REGEX_PATTERN } from '../config'

export default class Type{
    /**
    * @method 检测当前类型是否是对象
    * @param item 检测当前类型
    * @returns { Boolean } 如果是对象则返回true、否则返回false
    */
   static isObject(item){
       return is("Object")(item)
   }
}