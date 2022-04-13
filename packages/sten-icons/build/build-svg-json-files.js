const fs = require('fs');
const { resolve, extname } = require("path");
const svgo = require("./transform-svg-json")

const entryDir = resolve(__dirname, '../svgs');
const outDir = resolve(__dirname, '../icons');
const outDirEsm = resolve(__dirname, '../icons_esm');



async function build(entryDir, outDir, outDirEsm, prefix, suffix) {
    fs.rmdirSync(outDir, { recursive: true });
    fs.rmdirSync(outDirEsm, { recursive: true });
    fs.mkdirSync(outDirEsm);
    fs.mkdirSync(outDir);
}


function start() {
    const svgFilesList = fs.readdirSync(entryDir, 'utf-8');
    const batches = svgFilesList
        .filter((f) => extname(f) === '.svg')
        .map(async (fileName) => {
            const svgContent = fs.readFileSync(resolve(entryDir, fileName));
            const data = await svgo(svgContent, fileName)
            console.log(JSON.stringify(data, null, 2))
        });

    //  const arr = await Promise.all(batches);
}


start()