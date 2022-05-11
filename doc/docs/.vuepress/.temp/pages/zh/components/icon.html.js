export const data = {
  "key": "v-238c7d6f",
  "path": "/zh/components/icon.html",
  "title": "button",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "button",
    "date": "2022-5-10",
    "tags": [
      "vue",
      "webpack"
    ],
    "description": "页面的描述"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Icon",
      "slug": "icon",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1652199512000,
    "contributors": [
      {
        "name": "hgf",
        "email": "1454556135@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "zh/components/icon.md"
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
