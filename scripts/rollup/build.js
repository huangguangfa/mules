
'use strict';
const rollup = require('rollup');
// const { babel , getBabelOutputPlugin } = require('@rollup/plugin-babel');
// const { nodeResolve } = require('@rollup/plugin-node-resolve');
// const { uglify } = require('rollup-plugin-uglify')
const chalk = require('chalk');

const argv = require('minimist')(process.argv.slice(2));
const Bundles = require('./bundles');
const { getFilename } = Bundles;
const bundles = Bundles.bundles;
const isWatchMode = argv.watch;
const buildMode = typeof argv.mode === 'string' && argv.mode.split(" ") || bundles.map( i=> i.entry);


function resolveEntryFork(resolvedEntry) {
    return require.resolve(`../../packages/${resolvedEntry}`);
}

// console.log('babelbabelbabel',babel)

function getPlugins(){
    return [
        // nodeResolve(),
        // babel({
        //     runtimeHelpers: true,
        //     exclude: "node_modules/**",
        //     externalHelpers: true
        //     // babelHelpers:"runtime",
        //     // exclude:"node_module"
        // }),
        // getBabelOutputPlugin({ 
        //     presets: ['@babel/env'],
        //     allowAllFormats:true,
        //     plugins: [
        //         ['@babel/plugin-transform-runtime', { useESModules: true }]
        //     ]
        // }),
        // uglify()
        // (process.env.NODE_ENV === 'production' && uglify())
    ]
}

function getRollupOutputOptions(
    outputPath,
    outputDir,
    format,
    globalName,
    globals,
){
    const config = {
        name: globalName,
        sourcemap: false,
        globals
    }
    return format.map( type => {
        const name = `${globalName}.${type}.js`
        return {
            ...config,
            file:`${outputPath.replace('index.js', '')}${outputDir}/${name}`,
            format:type
        }
    })
}

function handleRollupError(error) {
    console.error(
      `\x1b[31m-- 错误：${error.code}${error.plugin ? ` (${error.plugin})` : ''} --`
    );
}

async function createBundle(bundle){
    const { format, entry, outputDir } = bundle;
    // const filename = getFilename(bundle);
    let resolvedEntry = resolveEntryFork(entry);
    const rollupOutputOptions = getRollupOutputOptions(resolvedEntry, outputDir, format, entry);
    const rollupConfig = {
        input: resolvedEntry,
        plugins: getPlugins(),
        output: rollupOutputOptions
    }
    if (isWatchMode) {
        const watcher = rollup.watch(rollupConfig);
        watcher.on('event', async event => {
            switch (event.code) {
                case 'BUNDLE_START':
                    console.log(`${chalk.bgYellow.black(`【${entry}】模块打包中..... `)}`);
                    break;
                case 'BUNDLE_END':
                    console.log(`${chalk.bgGreen.black(`【${entry}】模块打包成功！ `)} \n`);
                    break;
                case 'ERROR':
                case 'FATAL':
                    console.log(`${chalk.bgRed.black(' 打包错误! ')} \n`);
                    handleRollupError(event.error);
                    break;
            }
        });
    } else{
        try {
            const result = await rollup.rollup(rollupConfig);
            for( let outputConfig of rollupOutputOptions ){
                await result.write(outputConfig);
            }
            console.log(chalk`{rgb(103, 194, 58) 【${entry}】 build success}`);
        } catch (error) {
            throw error;
        }
    }
}

// 循环模块 逐一打包
function buildEverything(){
    for (const bundle of bundles) {
        if(buildMode.includes(bundle.entry)) createBundle(bundle);
    }
}

buildEverything();