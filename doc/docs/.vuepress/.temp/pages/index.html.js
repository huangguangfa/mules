export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "首页",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "首页",
    "description": "页面的描述"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "首页",
      "slug": "首页",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1649656556000,
    "contributors": [
      {
        "name": "hgf",
        "email": "1454556135@qq.com",
        "commits": 3
      },
      {
        "name": "gf",
        "email": "1454556135@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "README.md"
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
