#!/usr/bin/env node
const path = require('path');
const fs = require('fs')
const prompt = require('./utils/prompt')
const inquirer = require('inquirer')
const { delDir, updateFile } = require('../lib/file')
const { clone } = require('../lib/download');
const symbols = require('log-symbols');
const chalk = require('chalk');

module.exports = function (projectName) {
    prompt().then(async (results) => {
        const { author, repository, choice, isOk, description } = results;
        if (!isOk) return;
        if (!fs.existsSync(projectName)) {
            // 1. clone git项目
            console.log('🚀正在为您创建项目: ' + projectName);

            await clone(`github.com:huanggungfa/${choice}`, projectName);
            console.log(symbols.success, chalk.green(`项目${projectName}创建成功`));
            console.log(chalk.red('cd ' + projectName + '\nnpm install\nnpm run dev或者npm run start'))
            // 2. 同步package.json的配置.
            const packageJson = path.join(path.resolve(projectName), 'package.json');
            const repositoryObj = repository ? {
                type: "git",
                url: repository
            } : {};
            updateFile(packageJson, {
                name: projectName,
                author,
                description,
                repository: repositoryObj
            });
        } else {
            console.log(chalk.red(`项目文件已经存在`));
            inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'isOk',
                    message: '是否删除该文件夹?'
                }
            ]).then((ans) => {
                if (ans.isOk) {
                    delDir(path.resolve(projectName))
                    console.log(chalk.green(`删除成功`));
                }
            })
        }
    });
}