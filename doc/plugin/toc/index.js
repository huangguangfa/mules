const { path } = require("@vuepress/utils");
module.exports = (options = {}, app) => ({
    define: {

    },
    name: "vuepress-plugin-toc",
    multiple: false,
    clientConfigFile: path.resolve(__dirname, './clientConfig.js'),
});
