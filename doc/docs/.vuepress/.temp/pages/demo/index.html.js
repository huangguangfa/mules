export const data = {
  "key": "v-1473bf53",
  "path": "/demo/",
  "title": "demo",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "demo",
    "description": "页面的描述"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "demo",
      "slug": "demo",
      "children": []
    },
    {
      "level": 2,
      "title": "lang: en-UStitle: demodescription: 页面的描述",
      "slug": "lang-en-ustitle-demodescription-页面的描述",
      "children": []
    },
    {
      "level": 2,
      "title": "this is demo",
      "slug": "this-is-demo",
      "children": []
    }
  ],
  "git": {
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "demo/README.md"
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
