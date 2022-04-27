import { setStyleSheet } from "../../utils/dom";
let tepId = 0;
function checkInternalColor(color: string): boolean {
    const defaultColor: Array<string> = ["default", "primary", "success", "info", "warning", "danger"];
    return defaultColor.includes(color);
}

export function getButtonColor(color: string): string {
    if (checkInternalColor(color)) {
        return `gf-button--${color}`;
    }
    return `gf-button-${++tepId}`;
}

export function getButtonStyle(color: string, textColor: string): Record<string, string | undefined> {
    if (!checkInternalColor(color)) {
        const tempClass = `gf-button-${tepId}`;
        setStyleSheet(`.${tempClass}:hover, .${tempClass}:focus{
            border-color:${color} !important;
            background-color:${color} !important;
         }`)
        return {
            background: color,
            color: textColor
        }
    }
    return {}
}
