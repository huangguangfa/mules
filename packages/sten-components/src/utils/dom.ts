
/**
* @overview 设置样式表
* @author gf
* @param { v }  类名和样式
*/
export function setStyleSheet(v: string): void {
    let styleSheet = document.styleSheets[0];
    styleSheet.insertRule(v);
}