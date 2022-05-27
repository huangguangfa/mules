export const themeData = {
  "subSidebar": "auto",
  "selectLanguageText": "简体中文",
  "lastUpdatedText": "上次更新",
  "contributorsText": "贡献者",
  "tip": "提示",
  "warning": "注意",
  "danger": "警告",
  "backToHome": "返回首页",
  "openInNewWindow": "在新窗口打开",
  "toggleDarkMode": "切换夜间模式",
  "toggleSidebar": "切换侧边栏",
  "navbar": [
    {
      "text": "首页",
      "link": "/",
      "activeMatch": "/doc"
    },
    {
      "text": "gf-ui系列",
      "children": [
        {
          "text": "组件库",
          "link": "/zh/components/install"
        },
        {
          "text": "核心库",
          "link": "/zh/core/install/"
        }
      ]
    }
  ],
  "sidebar": {
    "/zh/core/": [
      {
        "text": "gf-ui/core",
        "children": [
          "/zh/core/install",
          "/zh/core/type",
          "/zh/core/ctypto",
          "/zh/core/storage"
        ]
      }
    ],
    "/zh/components/": [
      {
        "text": "跨框架UI库",
        "children": [
          {
            "text": "安装",
            "link": "/zh/components/install"
          },
          {
            "text": "基础组件",
            "children": [
              {
                "text": "Button 按钮",
                "link": "/zh/components/button"
              },
              {
                "text": "Icon 图标",
                "link": "/zh/components/icon"
              },
              {
                "text": "Input 输入框",
                "link": "/zh/components/input"
              }
            ]
          }
        ]
      }
    ]
  },
  "notFound": [
    "您当前路径不存在、请返回首页吧"
  ],
  "logo": "https://blogs-macos.oss-cn-shenzhen.aliyuncs.com/tabbar-navigation/blogs.png",
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "contributors": true
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
