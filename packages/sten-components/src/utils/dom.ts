

export function setStyleSheet(v: string): void {
    let styleSheet = document.styleSheets[0];
    styleSheet.insertRule(v);
}