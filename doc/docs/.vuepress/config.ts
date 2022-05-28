/*
 * @Author: gf
 * @Date: 2022-05-22 11:36:55
 */
const { path } = require('@vuepress/utils')
import { defineUserConfig } from '@vuepress/cli';
import sidebar from "../../config/sidebar.config";
import { viteBundler } from '@vuepress/bundler-vite'
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
const commentPlugin = require("../../plugin/comment2/node/index");
const demoCodePlugin = require("../../plugin/demo-code/src/node/index")
const copyCodePlugin = require("../../plugin/copy-code/index")

import { registerInternalComponents } from "../../config/plugins.config"
export default defineUserConfig({
    // 站点配置
    lang: 'zh-CN',
    title: 'gf-ui系列文档',
    // 主题和它的配置
    locales: {
        '/zh/core': {
            lang: '简体中文',
        },
        '/en/': {
            lang: 'English',
        }
    },
    clientConfigFile: path.resolve(__dirname, './clientConfig.ts'),
    base: "/doc/",
    bundler: viteBundler({
        viteOptions: {
            // @ts-expect-error Invalid types can be ignored
            ssr: {
                noExternal: ['customElements'],
            },
        },
        vuePluginOptions: {
            template: {
                // 自定义元素
                compilerOptions: {
                    isCustomElement: tag => tag.includes('gf')
                }
            }
        },
    }),
    plugins: [
        registerComponentsPlugin({
            ...registerInternalComponents()
        }),
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
        copyCodePlugin(),
        commentPlugin({
            type: "giscus",
            repo: "huanggungfa/doc-comment",
            repoId: "R_kgDOHZreBQ",
            category: "General",
            categoryId: "DIC_kwDOHZreBc4CPTz5",
        }),
    ],
    head: [
        ['link', { rel: 'icon', href: '/images/logo.png' }],
        ['link', { rel: 'icon', href: '/css/reset.css' }]
    ],
    theme: defaultTheme({
        subSidebar: 'auto',
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
                text: '首页',
                link: "/",
                activeMatch: '/doc',
            },
            {
                text: 'gf-ui系列',
                children: [
                    {
                        text: "组件库",
                        link: "/zh/components/install",
                    },
                    {
                        text: "核心库",
                        link: "/zh/core/install/"
                    }
                ]
            }
        ],
        sidebar,
        notFound: ['您当前路径不存在、请返回首页吧'],
        logo: 'https://blogs-macos.oss-cn-shenzhen.aliyuncs.com/tabbar-navigation/blogs.png',
    }),
    markdown: {
        code: {
            lineNumbers: false
        }
    }
})