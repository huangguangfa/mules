export const data = {
  "key": "v-542c0b7a",
  "path": "/zh/2021/01/03/README.html",
  "title": "页面的标题",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "页面的标题",
    "description": "页面的描述",
    "date": "2021-01-03T00:00:00.000Z",
    "permalinkPattern": ":year/:month/:day/:slug.html"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "zh/README.md"
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
