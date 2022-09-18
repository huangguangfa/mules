import { Type } from '@mules/core'
import { defaultWindow } from '../_configurable'
import { EMPTY_FUNC } from '../../config'

export function useEventListener(...args: Array<any>) {
  let target: EventTarget | undefined
  let event: string
  let listener: any
  let options: any

  if (Type.isString(args[0])) {
    ;[event, listener, options] = args
    target = defaultWindow
  } else {
    ;[target, event, listener, options] = args
  }

  if (!target) return EMPTY_FUNC
  let cleanup = EMPTY_FUNC

  const execute = () => {
    target.addEventListener(event, listener, options)
    cleanup = () => {
      target.removeEventListener(event, listener, options)
    }
    return cleanup
  }

  return execute()
}
