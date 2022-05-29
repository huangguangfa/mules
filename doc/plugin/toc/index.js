const { path } = require("@vuepress/utils");

const markdownItContainer = require('./markdownItContainer')

module.exports = (options = {}, app) => {
    function render() {
        return `<Toc></Toc>`
    }
    return {
        define: {

        },
        name: "vuepress-plugin-toc",
        extendsMarkdown: (md) => {
            md.use(markdownItContainer, 'toc', { render })
        },
        clientConfigFile: path.resolve(__dirname, './clientConfig.js')
    }
};
