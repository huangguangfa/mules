const getAnnotation = ($element, attributeName) => {
  let annotation
  if ($element.nodeType === 1) {
    annotation = $element.getAttribute(attributeName)
  } else if ($element.nodeType === 8) {
    annotation = $element.textContent
  }
  return annotation ? JSON.parse(annotation) : []
}

const setAnnotation = ($element, attributeName, annotation) => {
  annotation = JSON.stringify(annotation)
  if ($element.nodeType === 1) {
    $element.setAttribute(attributeName, annotation)
  } else if ($element.nodeType === 8) {
    $element.textContent = annotation
  }
}

const DomHint = {
  install(Vue, { attributeName = '__vue__' } = {}) {
    Vue.mixin({
      mounted() {
        const { $el } = this
        let name = this.$options.__file || this.$options.name
        console.log(name)
        const path = name && name.endsWith('.vue') ? name : false
        if (path) {
          $el.addEventListener(
            'click',
            function (e) {
              if (!e.shiftKey) return
              if (path.includes('src/App.vue')) return
              const url = `${location.origin}/__open-in-editor?file=${path}`
              fetch(url)
            },
            true
          )
        }
        if (name) {
          const annotate = getAnnotation($el, attributeName)
          if (!annotate.includes(name)) {
            annotate.push(name)
          }
          setAnnotation($el, attributeName, annotate)
        }
      },
    })
  },
}

export default DomHint
