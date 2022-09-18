import { setStyleSheet, color16ToRgb, defaultNamespace } from '../../utils/index'
let tepId = 0
function checkInternalColor(color: string): boolean {
  const defaultColor: Array<string> = ['default', 'primary', 'success', 'info', 'warning', 'danger']
  return defaultColor.includes(color)
}

export function getButtonColor(color: string): string {
  if (checkInternalColor(color)) {
    return `${defaultNamespace}-button--${color}`
  }
  return `${defaultNamespace}-button-${++tepId}`
}

export function getButtonStyle(color: string, textColor: string): Record<string, string | undefined> {
  if (checkInternalColor(color)) return {}
  let rgb = color16ToRgb(color, 0.8)
  const tempClass = `${defaultNamespace}-button-${tepId}`
  const colorTemplate = (colors: string) => `border-color:${colors} !important; background-color:${colors} !important;`
  const classHover = `.${tempClass}:hover{ ${colorTemplate(rgb)}  }`
  const classActive = `.${tempClass}:active{ ${colorTemplate(color)} }`
  ;[classActive, classHover].forEach(css => setStyleSheet(css))
  return {
    background: color,
    color: textColor,
  }
}
