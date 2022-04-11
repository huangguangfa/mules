export const data = {
  "key": "v-4eaf9f84",
  "path": "/guide/page.html",
  "title": "cuide-page",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "cuide-page",
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
  "filePathRelative": "guide/page.md"
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
