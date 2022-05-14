export const data = {
  "key": "v-56bebe96",
  "path": "/zh/components/button.html",
  "title": "button",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "button",
    "date": "2022-5-9",
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
      "title": "Button 按钮",
      "slug": "button-按钮",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1652405518000,
    "contributors": [
      {
        "name": "hgf",
        "email": "1454556135@qq.com",
        "commits": 9
      }
    ]
  },
  "filePathRelative": "zh/components/button.md"
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
