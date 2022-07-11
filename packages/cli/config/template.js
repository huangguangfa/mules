const { zipUrl } = require("./baseUrl");
/**
 * 模板配置信息
 * @param { string } name 展示模板名称
 * @param { string } repositories 仓库存放名称
 * @param { string } type 仓库类型：zip | url
 * @param { string } desc 模板描述
 * @param { string } author 模板维护者
 */

module.exports = [
  {
    name: "vue3-ts",
    type: "zip",
    repositories: zipUrl + "vue3-ts.zip",
    desc: "企业级应用框架,基于vue3+TS",
    author: "gf",
  },
  {
    name: "sten-design",
    type: "zip",
    repositories: zipUrl + "sten-design.zip",
    desc: "企业级跨框架UI框架,基于Stencil+TS+Lerna",
    author: "gf",
  },
];
