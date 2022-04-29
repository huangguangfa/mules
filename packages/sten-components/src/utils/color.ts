import { DATA_REGEX_PATTERN } from "../config/index";


/**
* @overview: 16进制颜色转rgb //方法描述
* @author gf
* @param { color, opacity }  
* @return { string }
* @example color16ToRgb("#BF0060") 
*/
export function color16ToRgb(color: string, opacity: number = 1): string {
    const regColor = DATA_REGEX_PATTERN.color16;
    if (!regColor.test(color)) { return; }
    let newStr = (color.toLowerCase()).replace(/\#/g, '')
    let len = newStr.length;
    if (len == 3) {
        let t = ''
        for (let i = 0; i < len; i++) {
            t += newStr.slice(i, i + 1).concat(newStr.slice(i, i + 1))
        }
        newStr = t
    }
    let arr = [];
    for (let i = 0; i < 6; i = i + 2) {
        let s = newStr.slice(i, i + 2)
        console.log(s)
        arr.push(parseInt("0x" + s))
    }
    return `rgba(${arr.join(",")}, ${opacity})`;
}