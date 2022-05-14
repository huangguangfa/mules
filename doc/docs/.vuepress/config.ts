import { defineUserConfig } from '@vuepress/cli';
import sidebar from "../../config/sidebar.config";
import { viteBundler } from '@vuepress/bundler-vite'
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
const { demoCodePlugin } = require("vuepress-plugin-demo-code")
const copyCodePlugin = require("../../plugin/copy-code/index")
import { registerInternalComponents } from "../../config/plugins.config"
import vue from '@vitejs/plugin-vue'
export default defineUserConfig({
    // 站点配置
    lang: 'zh-CN',
    title: '@gf-ui系列文档',
    // 主题和它的配置
    locales: {
        '/zh/core': {
            lang: '简体中文',
        },
        '/en/': {
            lang: 'English',
        }
    },
    base: "/doc/",
    bundler: viteBundler({
        viteOptions: {
            // plugins: [
            //     vue({
            //         template: {
            //             compilerOptions: {
            //                 isCustomElement: (tag) => tag.includes("gf-")
            //             }
            //         }
            //     })
            // ]
        },
        vuePluginOptions: {}
    }),
    plugins: [
        searchPlugin({
            locales: {
                '/zh': {
                    placeholder: '搜索文档'
                }
            },
        }),
        mediumZoomPlugin(),
        demoCodePlugin({
            showText: '显示代码',
            hideText: '隐藏代码',
            minHeight: 0,
            styleStr: 'text-decoration: underline;',
            copyOptions: { align: 'top', selector: '.demo-and-code-wrapper div[class*="language-"] pre' }
        }),
        registerComponentsPlugin({
            ...registerInternalComponents()
        }),
        copyCodePlugin()
    ],
    head: [
        ['link', { rel: 'icon', href: '/images/logo.png' }],
        ['link', { rel: 'icon', href: '/css/reset.css' }]
    ],
    theme: defaultTheme({
        selectLanguageText: '简体中文',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        tip: '提示',
        warning: '注意',
        danger: '警告',
        backToHome: '返回首页',
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
        navbar: [
            {
                text: 'gf-ui系列库',
                children: [
                    {
                        text: "@gf-ui/components",
                        link: "/zh/components/install",
                    },
                    {
                        text: "@gf-ui/core",
                        link: "/zh/core/install/"
                    },
                    {
                        text: "@gf-ui/sten-icons",
                        link: "/zh/sten-icon/install",
                    }
                ]
            }
        ],
        sidebar,
        notFound: ['您当前路径不存在、请返回首页吧'],
        logo: 'https://blogs-macos.oss-cn-shenzhen.aliyuncs.com/tabbar-navigation/blogs.png',
    })
})