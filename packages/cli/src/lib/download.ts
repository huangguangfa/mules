#!/usr/bin/env node
import { promisify } from 'util';
// @ts-ignore
import downloadGitRepo from 'download-git-repo';
import ora from 'ora';
import chalk from 'chalk';
import { unCompress } from '../lib/compressing';

import type { TemplateInfo } from '../config/template';

/**
 * 从git仓库上下载项目到本地
 * @param { string } repo git仓库地址
 * @param { string } projectName 项目名称
 */
const clone = async function (tempInfo: TemplateInfo, projectName: string) {
  //包装为promise方法
  const download = promisify(downloadGitRepo);
  //显示下载进度
  const snip = ora('正在拉取模板，🚗🚗🚗🚗🚗🚗...');
  snip.start();
  try {
    const { type, repositories } = tempInfo;
    if (type === 'zip') {
      await unCompress(repositories, projectName);
    } else {
      await download(repositories, projectName);
    }
    snip.succeed();
  } catch (err) {
    console.log('    ', '----------------------------------------');
    // @ts-ignore
    console.log('    ', chalk.red(projectName + '构建失败: '), err && err.message);
    process.exit(0);
  }
};

export { clone };
