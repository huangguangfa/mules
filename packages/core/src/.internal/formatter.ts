import Type from "../type";

export function parseDate(date: Date | number, format: string): string {
    if (Type.isNumber(date as number)) date = new Date(date as number * 1000);
    if (!Type.isValidDate(date)) date = new Date();
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, ((date as Date).getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    const _pad = (str: string) => ('00' + str).substr(str.length);
    let o = {
        'M+': (date as Date).getMonth() + 1,
        'd+': (date as Date).getDate(),
        'h+': (date as Date).getHours() > 12 ? (date as Date).getHours() - 12 : (date as Date).getHours(),
        'H+': (date as Date).getHours(),
        'm+': (date as Date).getMinutes(),
        's+': (date as Date).getSeconds()
    }
    for (let k in o) {
        if (new RegExp(`(${k})`).test(format)) {
            let str = o[k as keyof typeof o] + '';
            format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : _pad(str))
        }
    }
    return format;
}


export function parseNumber(num: number, { precision = 2, thousandth = false } = {}):string {
    if (isNaN(num)) return "";
    let [temp, digit, integer, buffer, positive] = [0.00, 0, 0, <Array<string>>[], true];
    const _zero = (val:number, len:number):string => {
        const _temp = val.toString()
        const _buffer:Array<string> = []
        for (let i = 0, loop = len - _temp.length; i < loop; i++) {
            _buffer.push('0');
        }
        _buffer.push(_temp);
        return _buffer.join('')
    }
    // 取出正负号
    positive = (num >= 0)
    // 强制转换为绝对值数浮点
    temp = (isNaN(temp = parseFloat(String(num)))) ? 0 : Math.abs(temp)
    // 所有内容用正数规则处理
    // 分离整数部分
    integer = parseInt(String(temp))
    // 分离小数部分(四舍五入)
    digit = parseInt(String((temp - integer) * Math.pow(10, precision) + 0.5))
    do {
        buffer.unshift(_zero(integer % 1000, 3))
    } while ((integer = parseInt(String(integer / 1000))))
    // 最高段区去掉前导0
    buffer[0] = parseInt(buffer[0]).toString()
    return ((positive) ? '' : '-') + buffer.join(thousandth ? ',' : '') + (precision > 0 ? ('.' + _zero(digit, precision)) : '')
}

