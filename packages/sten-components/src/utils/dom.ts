
/**
* @overview 设置样式表
* @author gf
* @param { v }  
*/
export function setStyleSheet(v: string): void {
    let styleSheet = document.styleSheets[0];
    styleSheet.insertRule(v);
}