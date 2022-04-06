/**
* @author gf
* @file Type
* @description 数据类型判断类
*/
import { is, match } from '../.internal/type'
import { DATA_REGEX_PATTERN } from '../config'

export default class Type {

    /**
    * @method 检测当前类型是否是对象
    * @param item 检测当前类型
    * @returns { Boolean } 如果是对象则返回true、否则返回false
    */
    static isObject(item: object | any): boolean {
        return is("Object")(item)
    }

    /**
    * @method 检测当前类型是否为纯粹对象(非window或者系统对象)
    * @param item 检测当前类型
    * @returns { Boolean } 如果是普通对象则返回true、否则返回false
    */
    static isPlainObject(item: object): boolean {
        if (typeof item !== 'object' || item === null) return false;
        let proto = item;
        while (Object.getPrototypeOf(proto) !== null) {
            proto = Object.getPrototypeOf(proto)
        }

        return Object.getPrototypeOf(item) === proto;
    }

    /**
    * @method 检测当前类型是否是空对象
    * @param item 检测当前类型
    * @returns { Boolean } 如果为空的对象则返回true、否则返回false
    */
    static isEmptyObject(item: object | any): boolean {
        return Type.isObject(item) && Object.keys(item).length === 0
    }

    /**
    * @method 检测当前类型是否是数组
    * @param item 检测当前类型
    * @returns { Boolean } 如果是数组则返回true、否则返回false
    */
    static isArray(item: Array<any> | any): boolean {
        return Array.isArray(item) || is("Array")(item)
    }

    /**
    * @method 检测当前类型是否是空数组
    * @param item 检测当前类型
    * @returns { Boolean } 如果为空数组则返回true、否则返回false
    */
    static isEmptyArray(item: Array<any>): boolean {
        return Type.isArray(item) && item.length === 0
    }

    /**
    * @method 检测当前类型是否为函数
    * @param item 检测当前类型
    * @returns { Boolean } 如果是函数则返回true、否则返回false
    */
    static isFunction(item: Function): boolean {
        return is("Function")(item)
    }

    /**
    * @method 检测当前类型是否为空函数
    * @param item 检测当前类型
    * @returns { Boolean } 如果是空函数则返回true、否则返回false
    */
    static isEmptyFuction(item: Function): boolean {
        if (!item) return true;
        const str = item.toString().replace(/\s/g, '');
        return Type.isFunction(item) && (str === 'functionEMPTY_FUNC(){}' || str === 'function(){}' || str === '()=>{}')
    }

    /**
    * @method 检测当前类型是否为字符串
    * @param item 检测当前类型
    * @returns { Boolean } 如果是字符串则返回true、否则返回false
    */
    static isString(item: string): boolean {
        return is("String", true)(item)
    }

    /**
    * @method 检测当前类型是否为空字符串
    * @param item 检测当前类型
    * @returns { Boolean } 如果是空字符串则返回true、否则返回false
    */
    static isEmptyString(item: string): boolean {
        return is("String", true)(item) && item.trim().length === 0;
    }

    /**
    * @method 检测当前类型是否为JSON字符串
    * @param item 检测当前类型
    * @returns { Boolean } 如果是JSON字符串则返回true、否则返回false
    */
    static isJsonString(item: string): boolean | any {
        try {
            if (typeof JSON.parse(item) === 'object') return true;
        } catch {
            return false
        }
    }

    /**
    * @method 检测当前类型是否为数字
    * @param item 检测当前类型
    * @returns { Boolean } 如果是数字则返回true、否则返回false
    */
    static isNumber(item: number): boolean {
        return is("Number", true)(item);
    }

    /**
    * @method 检测当前类型是否为布尔
    * @param item 检测当前类型
    * @returns { Boolean } 如果是布尔则返回true、否则返回false
    */
    static isBoolean(item: boolean): boolean {
        return is("Boolean", true)(item)
    }

    /**
    * @method 检测当前类型是否为Guid对象
    * @param item 检测当前类型
    * @param pattern 当前检测的正则匹配表达式（默认值：DATA_REGEX_PATTERN.guid）
    * @returns { Boolean } 如果是Guid对象返回true、否则返回false
    */
    static isGuid(item: string, pattern: string = DATA_REGEX_PATTERN.guid) {
        return match(item, pattern, 'i')
    }

    /**
    * @method 检测当前类型是否为正确的手机号
    * @param item 检测当前类型
    * @param pattern 当前检测的正则匹配表达式（默认值：DATA_REGEX_PATTERN.mobile）
    * @returns { Boolean } 如果是为正确的手机号返回true、否则返回false
    */
    static isMobilePhone(item: string | number, pattern: string = DATA_REGEX_PATTERN.mobile): boolean {
        return match(item, pattern)
    }

    /**
    * @method 检测当前类型是否为座机号
    * @param item 检测当前类型
    * @param pattern 当前检测的正则匹配表达式（默认值：DATA_REGEX_PATTERN.Tel
    * @returns { Boolean } 如果是座机号返回true、否则返回false
    */
    static isTelPhone(item: string | number, pattern: string = DATA_REGEX_PATTERN.tel): boolean {
        return match(item, pattern)
    }

    /**
    * @method 检测当前类型是否为电话号码(手机或者座机)
    * @param item 检测当前类型
    * @param {Object} {mobile,tel} 当前检测手机和座机的正则匹配表达式（默认值：DATA_REGEX_PATTERN.mobile和DATA_REGEX_PATTERN.tel）
    * @returns { Boolean } 如果是座机号返回true、否则返回false
    */
    static isPhone(item: string | number, { mobile = DATA_REGEX_PATTERN.mobile, tel = DATA_REGEX_PATTERN.tel } = {}): boolean {
        return Type.isMobilePhone(item, mobile) || Type.isTelPhone(item, tel)
    }

    /**
    * @method 检测当前类型是否正确邮箱
    * @param item 检测当前类型
    * @param pattern 当前检测的正则匹配表达式（默认值：DATA_REGEX_PATTERN.email）
    * @returns { Boolean } 如果是正确邮箱返回true、否则返回false
    */
    static isEmail(item:string, pattern: string = DATA_REGEX_PATTERN.email) {
        return match(item, pattern)
    }

    /**
    * @method 检测当前类型是否正确身份证(支持15位或18位)
    * @param item 检测当前类型
    * @param pattern 当前检测的正则匹配表达式（默认值：DATA_REGEX_PATTERN.idcard）
    * @returns { Boolean } 如果是正确身份证返回true、否则返回false
    */
    static isIdCard(item: string | number, pattern: string = DATA_REGEX_PATTERN.idcard): boolean {
        return match(item, pattern)
    }

    /**
    * @method 检测密码复杂度规则
    * @param item 检测当前类型
    * @param options 当前检测密码复杂度的配置选项(默认值:{ pattern: DATA_REGEX_PATTERN.letterNumberChar, min: 8, max: 30 })
    * @returns { Boolean } 如果是正确复杂度规则返回true、否则返回false
    */
    static isValidPassword(item: string, options: object = {}) {
        const _default = { pattern: DATA_REGEX_PATTERN.letterNumber, min: 8, max: 30 };
        const _options = {
            ..._default,
            ...options
        }
        return match(item, _options.pattern.replace(`{min,max}`, `{${_options.min},${_options.max}}`))
    }

    /**
    * @method 检测日期是否合法
    * @param item 检测当前类型
    * @returns { Boolean } 如果是合法日期返回true、否则返回false
    */
    static isValidDate(item: Date | any): boolean {
        return item instanceof Date && !isNaN(item.getTime())
    }

    /**
    * @method 检测当前值是0或者true条件
    * @param item 检测当前类型
    * @returns { Boolean } 如果是0或者true条件返回true、否则返回false
    */
    static isTrueOrZero(item:string | number): boolean {
        return !!item || item === 0 || item === '0'
    }

    /**
    * @method 检测当前值是0或者true条件
    * @param item 检测当前类型
    * @returns { Boolean } 如果是0或者true条件返回true、否则返回false
    */
    static def(item:any, defs:any) {
        return (item === undefined || item === null) ? defs : item
    }

    /**
    * @method 将当前的JSON转化为相应的对象
    * @param item 当前的JSON
    * @param defs 默认值
    * @returns {Object|Array} 如果当前数据可以转化成功则转化，否则将返回默认值
    */
    static json(item:string, defs:any) {
        try {
            return JSON.parse(item)
        } catch (e) {
            return defs
        }
    }
}   