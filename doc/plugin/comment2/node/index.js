const { path } = require("@vuepress/utils");
const {
    addCustomElement,
    addViteSsrExternal
} = require("vuepress-shared");


/** Comment Plugin */
module.exports = (options) => {
    return {
        name: "vuepress-plugin-comment2",

        alias: {
            "@CommentProvider": path.resolve(__dirname, "../client/components/Giscus.js")
        },

        define: () => ({
            COMMENT_OPTIONS: options,
        }),

        extendsBundlerOptions: (config, app) => {
            addCustomElement({ app, config }, "GiscusWidget");
            addViteSsrExternal({ app, config }, "giscus");
        },

        clientConfigFile: path.resolve(__dirname, "../client/config.js"),
    };
};
