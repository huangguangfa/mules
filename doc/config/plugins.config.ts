const { path } = require('@vuepress/utils')

export default [
    ['flexsearch'],
    [
        '@vuepress/docsearch',
        {
            apiKey: 'xasxa',
            indexName: 'xasxasxas',
            placeholder: "搜索",
            locales: {
                '/': {
                    placeholder: '搜索文档',
                    translations: {
                        button: {
                            buttonText: '搜索文档',
                        },
                    },
                },
                '/zh/': {
                    placeholder: '搜索文档',
                    translations: {
                        button: {
                            buttonText: '搜索文档',
                        },
                    },
                },
                '/en/': {
                    placeholder: '搜索文档',
                    translations: {
                        button: {
                            buttonText: '搜索文档',
                        },
                    },
                },
            },
        },
    ]
]

export const registerInternalComponents = () => {
    return {
        components: {
            GfIcons: path.resolve(__dirname, '../_components/gf-Icons/index.vue'),
        }
    }
}