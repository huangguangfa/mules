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
    "title": "Crypto类",
    "headers": [
      {
        "level": 3,
        "title": "encrypt",
        "slug": "encrypt",
        "children": []
      },
      {
        "level": 3,
        "title": "decrypt",
        "slug": "decrypt",
        "children": []
      }
    ],
    "path": "/zh/core/ctypto.html",
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
    "title": "Storage类",
    "headers": [],
    "path": "/zh/core/storage.html",
    "pathLocale": "/zh/core",
    "extraFields": []
  },
  {
    "title": "Type类",
    "headers": [
      {
        "level": 3,
        "title": "isObject",
        "slug": "isobject",
        "children": []
      },
      {
        "level": 3,
        "title": "isEmptyObject",
        "slug": "isemptyobject",
        "children": []
      },
      {
        "level": 3,
        "title": "isPlainObject",
        "slug": "isplainobject",
        "children": []
      },
      {
        "level": 3,
        "title": "isArray",
        "slug": "isarray",
        "children": []
      },
      {
        "level": 3,
        "title": "isEmptyArray",
        "slug": "isemptyarray",
        "children": []
      },
      {
        "level": 3,
        "title": "isFunction",
        "slug": "isfunction",
        "children": []
      },
      {
        "level": 3,
        "title": "isEmptyFuction",
        "slug": "isemptyfuction",
        "children": []
      },
      {
        "level": 3,
        "title": "isString",
        "slug": "isstring",
        "children": []
      },
      {
        "level": 3,
        "title": "isString",
        "slug": "isstring-1",
        "children": []
      },
      {
        "level": 3,
        "title": "isJsonString",
        "slug": "isjsonstring",
        "children": []
      },
      {
        "level": 3,
        "title": "isNumber",
        "slug": "isnumber",
        "children": []
      },
      {
        "level": 3,
        "title": "isBoolean",
        "slug": "isboolean",
        "children": []
      },
      {
        "level": 3,
        "title": "isGuid",
        "slug": "isguid",
        "children": []
      },
      {
        "level": 3,
        "title": "isEmail",
        "slug": "isemail",
        "children": []
      },
      {
        "level": 3,
        "title": "isIdCard",
        "slug": "isidcard",
        "children": []
      },
      {
        "level": 3,
        "title": "isPhone",
        "slug": "isphone",
        "children": []
      },
      {
        "level": 3,
        "title": "isMobilePhone",
        "slug": "ismobilephone",
        "children": []
      },
      {
        "level": 3,
        "title": "isTelPhone",
        "slug": "istelphone",
        "children": []
      },
      {
        "level": 3,
        "title": "isValidPassword",
        "slug": "isvalidpassword",
        "children": []
      },
      {
        "level": 3,
        "title": "isValidDate",
        "slug": "isvaliddate",
        "children": []
      },
      {
        "level": 3,
        "title": "isTrueOrZero",
        "slug": "istrueorzero",
        "children": []
      },
      {
        "level": 3,
        "title": "isValidDate",
        "slug": "isvaliddate-1",
        "children": []
      },
      {
        "level": 3,
        "title": "json",
        "slug": "json",
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
