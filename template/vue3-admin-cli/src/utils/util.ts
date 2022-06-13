
/**
  * 错误提示
  * @param  text 提示内容
  * @param  error 实际代码报错信息
  */
export function exception(text: string, error?: any) {
    if (!text) return
    console.log(`%c${text}`, 'color:red', error)
}