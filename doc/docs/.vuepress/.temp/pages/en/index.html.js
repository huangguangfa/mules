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
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "en/README.md"
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
