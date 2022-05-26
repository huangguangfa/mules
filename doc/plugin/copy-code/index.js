const { path } = require("@vuepress/utils");
module.exports = (options = {}, app) => ({
  define: {
    snippetorsCodeCopyOptions: {
      selector: options.selector || 'div[class*="language-"]',
      align: options.align || "bottom",
      color: options.color || "#27b1ff",
      backgroundColor: options.backgroundColor || "#0075b8",
      backgroundTransition: options.backgroundTransition !== false,
      successText: options.successText || "复制成功!",
      successTextColor: options.successTextColor || options.color || "#27b1ff",
      staticIcon: options.staticIcon === true,
    },
  },
  name: "vuepress-plugin-code-copy",
  multiple: false,
  clientConfigFile: path.resolve(__dirname, './clientConfig.js'),
  clientAppEnhanceFiles: path.resolve(__dirname, "./client.js"),
});
