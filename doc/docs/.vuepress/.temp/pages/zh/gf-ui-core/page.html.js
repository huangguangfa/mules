export const data = {
  "key": "v-5a3fa14d",
  "path": "/zh/gf-ui-core/page.html",
  "title": "demo-child",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "demo-child",
    "description": "页面的描述"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "zh/gf-ui-core/page.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
