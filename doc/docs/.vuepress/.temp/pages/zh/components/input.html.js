export const data = {
  "key": "v-09456080",
  "path": "/zh/components/input.html",
  "title": "input",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "input",
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
      "title": "Input 按钮",
      "slug": "input-按钮",
      "children": [
        {
          "level": 3,
          "title": "配置属性",
          "slug": "配置属性",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1653063332000,
    "contributors": [
      {
        "name": "hgf",
        "email": "1454556135@qq.com",
        "commits": 4
      }
    ]
  },
  "filePathRelative": "zh/components/input.md"
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
