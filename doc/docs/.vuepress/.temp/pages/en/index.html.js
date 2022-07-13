export const data = {
  "key": "v-2d0a870d",
  "path": "/en/",
  "title": "title",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "title",
    "description": "this is description"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1649583076000,
    "contributors": [
      {
        "name": "hgf",
        "email": "1454556135@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "en/README.md",
  "readingTime": {
    "minutes": 0.01,
    "words": 3
  }
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
