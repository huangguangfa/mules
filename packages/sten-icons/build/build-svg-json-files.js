const fs = require('fs');
const { resolve, extname } = require("path");
const { optimize } = require('svgo');

// const svgoPlugin = require('./plugins/svgo.plugin')


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
    const files = fs.readdirSync(entryDir, 'utf-8');
    const batches = files
        .filter((f) => extname(f) === '.svg')
        .map(async (file) => {
            const fileContent = fs.readFileSync(resolve(__dirname, '../svgs', file));
            const { data } = optimize(fileContent, {
                name: 'preset-default',
                params: {
                    overrides: {
                        convertShapeToPath: {
                            convertArcs: true
                        },
                        convertPathData: false
                    }
                },
                plugins: [
                    {
                        name: 'convertColors',
                        params: { currentColor: /^(?!url|none)./ },
                    },
                    {
                        name: 'cleanupListOfValues',
                        active: true,
                    },
                    {
                        name: 'removeStyleElement',
                        active: true,
                    },
                    {
                        name: 'removeViewBox',
                        active: false,
                    },
                    {
                        name: 'removeDimensions',
                        active: true,
                    },
                ]
            })
            console.log(data)
        });

    //  const arr = await Promise.all(batches);
}

start()