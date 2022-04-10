export const searchIndex = [
  {
    "title": "首页",
    "headers": [
      {
        "level": 3,
        "title": "首页",
        "slug": "首页",
        "children": []
      }
    ],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "title",
    "headers": [],
    "path": "/en/",
    "pathLocale": "/en/",
    "extraFields": []
  },
  {
    "title": "core首页",
    "headers": [
      {
        "level": 3,
        "title": "demo",
        "slug": "demo",
        "children": []
      }
    ],
    "path": "/zh/core/",
    "pathLocale": "/zh/core",
    "extraFields": []
  },
  {
    "title": "安装",
    "headers": [],
    "path": "/zh/core/install.html",
    "pathLocale": "/zh/core",
    "extraFields": []
  },
  {
    "title": "Type",
    "headers": [
      {
        "level": 2,
        "title": "isObject",
        "slug": "isobject",
        "children": []
      }
    ],
    "path": "/zh/core/type.html",
    "pathLocale": "/zh/core",
    "extraFields": []
  },
  {
    "title": "sten-icon",
    "headers": [
      {
        "level": 3,
        "title": "@gf-ui/sten-icon安装",
        "slug": "gf-ui-sten-icon安装",
        "children": []
      }
    ],
    "path": "/zh/sten-icon/install.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
