export const data = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "guide",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "guide",
    "description": "页面的描述"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "guide",
      "slug": "guide",
      "children": []
    }
  ],
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
  "filePathRelative": "guide/README.md"
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
