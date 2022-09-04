import type { DirectiveBinding, ObjectDirective } from 'vue'

function createDocumentHandler(e: MouseEvent) {
  e.preventDefault()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { value: bindingFn } = (e.target as any).__binding
  bindingFn(e)
}

const mouseRight: ObjectDirective = {
  beforeMount(el: HTMLElement & { __binding: DirectiveBinding }, binding: DirectiveBinding) {
    el.__binding = binding
    el.addEventListener('contextmenu', createDocumentHandler)
  },
  // updated(el: HTMLElement, binding: DirectiveBinding) {},
  unmounted(el: HTMLElement & { __binding: DirectiveBinding | null }) {
    el.__binding = null
    el.removeEventListener('contextmenu', createDocumentHandler)
  },
}

export default mouseRight
