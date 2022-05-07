const fs = require('fs');
const chalk = require('chalk');
const { resolve, extname } = require("path");
const svgo = require("./transform-svg-json");

const entryDir = resolve(__dirname, '../src/svgs');
const outDir = resolve(__dirname, '../src/icons');
const HTMLPATH = resolve(__dirname, '../src/index.html');
const outDirComponent = resolve(__dirname, '../src/components');


async function clearDir() {
    const rmDirList = [outDir, outDirComponent];
    const mkdirList = [outDir, outDirComponent];
    rmDirList.forEach(dir => {
        if (fs.existsSync(dir)) {
            fs.rmSync(dir, { recursive: true })
        }
    });
    mkdirList.forEach(dir => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir)
        }
    });
}

/* 
*  移除svg某个属性
*/
function removeAttributes(json) {
    const removAttrKeyList = ["t"];
    removAttrKeyList.forEach(key => Reflect.deleteProperty(json.attributes, key));
}
/* 
*  添加svg某个属性
*/
function addAttributes(json, key, value) {
    return Reflect.set(json, key, value);
}

async function start() {
    clearDir()
    const svgFilesList = fs.readdirSync(entryDir, 'utf-8');
    const batches = svgFilesList
        .filter(f => extname(f) === '.svg')
        .map(async fileName => {
            const svgContent = fs.readFileSync(resolve(entryDir, fileName));
            const svgJSON = await svgo(svgContent, fileName);
            removeAttributes(svgJSON);
            addAttributes(svgJSON, '_name', fileName.replace(/.svg/, ''))
            return svgJSON;
        });
    const svgJSONList = await Promise.all(batches);
    writeFiles(svgJSONList)
}

/* 
* 生成icon组件
*/
function generateComponent(iconName) {
    const componentName = `gf-icon-${iconName.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
    const componentsTemplate = `
import { Component, Host, h, Prop } from '@stencil/core';
import { Icons } from "../icon-base/index";
import { ${iconName} as svgData } from "../icons\";
@Component({
    tag: '${componentName}',
    shadow: false
})  
export class GfIcon${iconName} {
    @Prop() size: number | string = 25;
    @Prop() styles?: object = {};
    @Prop() color?: string = "#000000";
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
    const fileName = `gf-icon-${iconName}.tsx`;
    fs.writeFileSync(resolve(outDirComponent, fileName), componentsTemplate);
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
        ${component.map(c => `<${c}></${c}>\n`).join("")}
    </body>

</html>`
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
* 生成icon里的index.js 统一导出
*/
function generateIconIndexContent(content) {
    const fileName = 'index.js'
    fs.writeFileSync(resolve(outDir, fileName), content);
}

/* 
* 写入icon源文件、组件
*/
function writeFiles(svgJSONList) {
    let indexFileContent = '';
    let componentNameList = [];
    svgJSONList.forEach(svgItem => {
        const name = svgItem._name.replace(/([\\:\-\\_]+(.))/g, (_, sep, letter, offset) => offset ? letter.toUpperCase() : letter);
        const jsonSuffix = '.js'
        const svgJsonfileName = `${name}${jsonSuffix}`;
        indexFileContent += `export { default as ${name} } from './${svgJsonfileName}'\n`;
        generateIconSvgJson(svgJsonfileName, svgItem);
        const componentName = generateComponent(name);
        componentNameList.push(componentName);
    })
    generateIconIndexContent(indexFileContent);
    generateHtml(componentNameList);
    console.log(chalk`{rgb(103, 194, 58) 【SVG】build success}`);
}

start()