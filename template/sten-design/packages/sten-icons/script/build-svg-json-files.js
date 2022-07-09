const fs = require("fs");
const chalk = require("chalk");
const { resolve, extname } = require("path");
const svgo = require("./transform-svg-json");

const entryDir = resolve(__dirname, "../svgs");
const outDir = resolve(__dirname, "../icons");
const HTMLPATH = resolve(__dirname, "../index.html");
const outDirComponent = resolve(
  __dirname,
  "../../sten-components/src/components/icons"
);
const stenComponents = resolve(
  __dirname,
  "../../sten-components/components/gf-icon"
);

async function clearDir() {
  const rmDirList = [outDir];
  const mkdirList = [outDir];
  rmDirList.forEach((dir) => {
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true });
    }
  });
  mkdirList.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  });
}

/*
 *  移除svg某个属性
 */
function removeAttributes(json) {
  const removAttrKeyList = ["t"];
  removAttrKeyList.forEach((key) =>
    Reflect.deleteProperty(json.attributes, key)
  );
}
/*
 *  添加svg某个属性
 */
function addAttributes(json, key, value) {
  return Reflect.set(json, key, value);
}

async function start() {
  clearDir();
  const svgFilesList = fs.readdirSync(entryDir, "utf-8");
  const batches = svgFilesList
    .filter((f) => extname(f) === ".svg")
    .map(async (fileName) => {
      const svgContent = fs.readFileSync(resolve(entryDir, fileName));
      const { data: svgJSON, isColor } = await svgo(svgContent, fileName);
      removeAttributes(svgJSON);
      addAttributes(svgJSON, "_name", fileName.replace(/.svg/, ""));
      addAttributes(svgJSON, "_isColor", isColor);
      return svgJSON;
    });
  const svgJSONList = await Promise.all(batches);
  writeFiles(svgJSONList);
}

/*
 * 生成icon组件
 */
function generateComponent(
  iconName,
  outDirComponents = outDirComponent,
  iconBaseComponenPath = "../sten-icons/index",
  iconsSvgDataPath = "@sten-ui/icons"
) {
  const componentName = `icon-${iconName
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()}`;
  const componentsTemplate = `
import { Component, Host, h, Prop } from '@stencil/core';
import { Icons } from "${iconBaseComponenPath}";
import { ${iconName} as svgData } from "${iconsSvgDataPath}\";
@Component({
    tag: '${componentName}',
    shadow: false
})  
export class Icon${iconName} {
    @Prop() size: number | string = 30;
    @Prop() styles?: object = {};
    @Prop() color?: string = "#606266";
    @Prop() rotate?: number = 0;
    @Prop() spin?: boolean = false;
    @Prop() opacity?: number | string = 1;
    render() {
        const { size, styles, color, rotate, spin, opacity } = this;
        const hostStyles: any = { width: size + 'px', height: size + 'px' }
        return (
            <Host style={hostStyles}>
                <Icons {...{ svgData, size, styles, color, rotate, spin, opacity }}></Icons>
            </Host>
        );
    }
}
`;
  const fileName = `icon-${iconName}.tsx`;
  fs.writeFileSync(resolve(outDirComponents, fileName), componentsTemplate);
  return componentName;
}

function generateHtml(component) {
  const htmlTemplate = `
<!DOCTYPE html>
    <html dir="ltr" lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0" />
        <title>Icon</title>
        <link rel="stylesheet" href="/build/sten-icons.css">
        <script type="module" src="/build/sten-icons.esm.js"></script>
        <script nomodule src="/build/sten-icons.js"></script>
    </head>

    <body>
        ${component.map((c) => `<${c.cName}></${c.cName}>\n`).join("")}
    </body>

</html>`;
  fs.writeFileSync(HTMLPATH, htmlTemplate);
}

/*
 * 生成icon目标JSON数据
 */
function generateIconSvgJson(fileName, content) {
  const templateCode = `export default ${JSON.stringify(content)}`;
  fs.writeFileSync(resolve(outDir, fileName), templateCode);
}
/*
 * 总览所有icon
 */
function generateAllIconJson(AllComList) {
  const componentJsonLisFileName = "componentJsonLisFile.js";
  const componentJsonListTemplate = `export default {
        list:${JSON.stringify(AllComList.filter((i) => i.isColor === false))},
        colorList:${JSON.stringify(
          AllComList.filter((i) => i.isColor === true)
        )}
    }`;
  fs.writeFileSync(
    resolve(outDirComponent, componentJsonLisFileName),
    componentJsonListTemplate
  );
}
/*
 * 生成icon里的index.js 统一导出
 */
function generateIconIndexContent(content) {
  const fileName = "index.js";
  fs.writeFileSync(resolve(outDir, fileName), content);
}

/*
 * 写入icon源文件、组件
 */
function writeFiles(svgJSONList) {
  let indexFileContent = "";
  let componentNameList = [];
  svgJSONList.forEach((svgItem) => {
    const name = svgItem._name.replace(
      /([\\:\-\\_]+(.))/g,
      (_, sep, letter, offset) => (offset ? letter.toUpperCase() : letter)
    );
    const jsonSuffix = ".js";
    const svgJsonfileName = `${name}${jsonSuffix}`;
    indexFileContent += `export { default as ${name} } from './${svgJsonfileName}'\n`;
    // 写入svg json数据
    generateIconSvgJson(svgJsonfileName, svgItem);
    // 生成组件
    const componentName = generateComponent(name);
    // 组件列表
    componentNameList.push({
      cName: componentName,
      isColor: svgItem._isColor,
    });
  });
  generateIconIndexContent(indexFileContent);
  // generateHtml(componentNameList);
  // generateAllIconJson(componentNameList);
  console.log(chalk`{rgb(103, 194, 58) 【SVG】build success}`);
}

start();
