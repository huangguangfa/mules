#!/usr/bin/env node
import path from 'path';
import fs from 'fs';
import prompt from './utils/prompt';
import inquirer from 'inquirer';

import { delDir, updateFile } from '../lib/file';
import { clone } from '../lib/download';
import templates from '../config/template';
import symbols from 'log-symbols';
import chalk from 'chalk';

export function init(projectName: string) {
  prompt().then(async results => {
    const { author, repository, name, isOk, description } = results;
    if (!isOk) return;
    if (!fs.existsSync(projectName)) {
      // 1. clone git项目
      console.log('🚀正在为您创建项目: ' + projectName);
      const tempInfo = templates.find(item => item.name === name);
      if (!tempInfo) return chalk.red(`项目${projectName}创建异常`);
      // 开始下载
      await clone(tempInfo, projectName);
      // 创建成功
      console.log(symbols.success, chalk.green(`项目${projectName}创建成功`));
      console.log(chalk.blue('cd ' + projectName + '\nnpm install\nnpm run dev或者npm run start'));
      try {
        // 2. 同步package.json的配置
        const packageJson = path.join(path.resolve(projectName), 'package.json');
        const repositoryObj = repository
          ? {
              type: 'git',
              url: repository,
            }
          : {};
        updateFile(packageJson, {
          name: projectName,
          author,
          description,
          repository: repositoryObj,
        });
      } catch (err) {}
    } else {
      console.log(chalk.red(`项目文件已经存在`));
      inquirer
        .prompt([
          {
            type: 'confirm',
            name: 'isOk',
            message: '是否删除该文件夹?',
          },
        ])
        .then(ans => {
          if (ans.isOk) {
            delDir(path.resolve(projectName));
            console.log(chalk.green(`删除成功`));
          }
        });
    }
  });
}
