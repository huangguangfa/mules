const fs = require('fs');
const { resolve, extname } = require("path");
const { stringify } = require('svgson');
const svgo = require("./transform-svg-json");

const entryDir = resolve(__dirname, '../src/svgs');
const outDir = resolve(__dirname, '../src/icons');
const outDirEsm = resolve(__dirname, '../src/icons_esm');


async function clearDir() {
    fs.rmdirSync(outDir, { recursive: true });
    fs.rmdirSync(outDirEsm, { recursive: true });
    fs.mkdirSync(outDirEsm);
    fs.mkdirSync(outDir);
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
    return Reflect.set(json, key, value)
}

async function start() {
    clearDir()
    const svgFilesList = fs.readdirSync(entryDir, 'utf-8');
    const batches = svgFilesList
        .filter(f => extname(f) === '.svg')
        .map(async fileName => {
            const svgContent = fs.readFileSync(resolve(entryDir, fileName));
            const svgJSON = await svgo(svgContent, fileName);
            // const svg = stringify(data);
            // console.log(svg)
            removeAttributes(svgJSON);
            addAttributes(svgJSON, '_name', fileName.replace(/.svg/, ''))
            return svgJSON;
        });
    const svgJSONList = await Promise.all(batches);
    writeFiles(svgJSONList)
}

function saveSvgJson(svgInfo) {
    const jsonSuffix = '.js'
    const fileName = `${svgInfo._name}${jsonSuffix}`;
    const templateCode = `exports.default = ${JSON.stringify(svgInfo)}`;
    fs.writeFileSync(resolve(outDir, fileName), templateCode);
    console.log(template)
}

function writeFiles(svgJSONList) {
    svgJSONList.forEach(svgItem => {
        saveSvgJson(svgItem)
    })
    // const jsonFileName = 'icon.js'
    // fs.writeFileSync(resolve(outDir, jsonFileName), 'const a = 1', 'utf-8');
}

start()