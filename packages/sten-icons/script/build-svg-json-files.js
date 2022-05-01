const fs = require('fs');
const { resolve, extname } = require("path");
const { stringify } = require('svgson')
const svgo = require("./transform-svg-json")

const entryDir = resolve(__dirname, '../src/svgs');
const outDir = resolve(__dirname, '../src/icons');
const outDirEsm = resolve(__dirname, '../src/icons_esm');


// async function build(entryDir, outDir, outDirEsm, prefix, suffix) {
//     fs.rmdirSync(outDir, { recursive: true });
//     fs.rmdirSync(outDirEsm, { recursive: true });
//     fs.mkdirSync(outDirEsm);
//     fs.mkdirSync(outDir);
// }


async function start() {
    const svgFilesList = fs.readdirSync(entryDir, 'utf-8');
    const batches = svgFilesList
        .filter(f => extname(f) === '.svg')
        .map(async fileName => {
            const svgContent = fs.readFileSync(resolve(entryDir, fileName));
            const svgJSON = await svgo(svgContent, fileName);
            // const svg = stringify(data);
            // console.log(svg)
            return svgJSON;
        });
    const arr = await Promise.all(batches);
    console.log(arr)
    // writeFiles()
}

function writeFiles() {
    const jsonFileName = 'icon.js'
    fs.writeFileSync(resolve(outDir, jsonFileName), 'const a = 1', 'utf-8');
}

start()