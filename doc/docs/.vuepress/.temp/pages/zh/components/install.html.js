export const data = {
  "key": "v-0239b762",
  "path": "/zh/components/install.html",
  "title": "sten-icon",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "sten-icon",
    "date": "2017-12-28  // 时间格式，日期是可以填写 时分秒 的，格式为 2019-10-20 00:00:00。",
    "tags": [
      "vue",
      "webpack"
    ],
    "description": "页面的描述"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "@gf-ui/components安装",
      "slug": "gf-ui-components安装",
      "children": []
    }
  ],
  "git": {
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "zh/components/install.md"
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
