export const data = {
  "key": "v-953546a4",
  "path": "/test.html",
  "title": "页面的标题",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "页面的标题",
    "description": "页面的描述"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1649531971000,
    "contributors": [
      {
        "name": "hgf",
        "email": "1454556135@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "test.md"
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
