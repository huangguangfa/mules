import { DATA_REGEX_PATTERN } from "../config/index";

/**
* @overview: 16进制颜色转rgb
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
        arr.push(parseInt("0x" + s))
    }
    return `rgba(${arr.join(",")}, ${opacity})`;
}

/**
* @overview: rgb转16进制颜色
* @author gf
* @param { color }  
* @return { string }
* @example rgbToColor16("rgb(81, 81, 162)") 
*/
export function rgbToColor16(rgbStr: string): string {
    const reg = DATA_REGEX_PATTERN.colorRgb;
    if (!reg.test(rgbStr)) { return };
    const arr = rgbStr.slice(4, rgbStr.length - 1).split(",");
    let color = '#';
    for (let i = 0; i < arr.length; i++) {
        let t = Number(arr[i]).toString(16)
        if (t == "0") {
            t = t + "0"
        }
        color += t;
    }
    return color;
}