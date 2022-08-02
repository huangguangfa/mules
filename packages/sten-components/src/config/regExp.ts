/**
 * @constant 正则表达式常量
 */
export const DATA_REGEX_PATTERN = {
  color16: /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/,  // 匹配是否是16进制的颜色
  colorRgb: /^(rgb|RGB)/      // 匹配是否是rgb颜色
}
