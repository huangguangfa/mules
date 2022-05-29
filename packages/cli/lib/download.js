#!/usr/bin/env node
const { promisify } = require('util')
const ora = require('ora')
const chalk = require('chalk');
const downloadGitRepo = require('download-git-repo')
/**
 * 从git仓库上下载项目到本地
 * @param { string } repo git仓库地址
 * @param { string } desc 本地路径
 */
const clone = async function (repo, desc) {
    console.log(repo, desc)
    //包装为promise方法
    const download = promisify(downloadGitRepo)
    //显示下载进度
    const snip = ora('正在拉取模板1，🍵...')
    snip.start()
    try {
        await download(repo, desc)
        snip.succeed()
    } catch (err) {
        console.log('    ', '----------------------------------------')
        console.log('    ', chalk.red(desc + '构建失败: '), err.message);
        process.exit(0);
    }
}
module.exports = {
    clone
}
