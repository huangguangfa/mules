#!/usr/bin/env node
const { promisify } = require("util");
const downloadGitRepo = require("download-git-repo");
const ora = require("ora");
const chalk = require("chalk");
const { unCompress } = require("../lib/compressing");
/**
 * 从git仓库上下载项目到本地
 * @param { string } repo git仓库地址
 * @param { string } projectName 项目名称
 */
const clone = async function (tempInfo, projectName) {
  //包装为promise方法
  const download = promisify(downloadGitRepo);
  //显示下载进度
  const snip = ora("正在拉取模板，🚗🚗🚗🚗🚗🚗...");
  snip.start();
  try {
    const { type, repositories } = tempInfo;
    if (type === "zip") {
      await unCompress(repositories, projectName);
    } else {
      await download(repositories, projectName);
    }
    snip.succeed();
  } catch (err) {
    console.log("    ", "----------------------------------------");
    console.log(
      "    ",
      chalk.red(projectName + "构建失败: "),
      err && err.message
    );
    process.exit(0);
  }
};
module.exports = {
  clone,
};
