#!/usr/bin/env node
const fs = require("fs");
const fsExtra = require("fs-extra");
const chalk = require("chalk");

function delDir(path) {
  let files = [];
  // 判断路径是否存在文件夹
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach((file, index) => {
      let curPath = path + "/" + file;
      //读取文件信息
      let stats = fs.statSync(curPath);
      if (stats.isFile()) {
        fs.unlinkSync(curPath);
      } else {
        delDir(curPath);
      }
    });
    //删除空文件夹
    fs.rmdirSync(path);
  }
}

/**
 * 更新文件内容.
 * @param {String} filePath
 * @param {Object} contents
 */
const updateFile = (filePath, contents) => {
  if (fsExtra.existsSync(filePath)) {
    const fileContent = Object.assign({}, require(filePath), contents);
    fsExtra.writeJSONSync(filePath, fileContent, { spaces: "\t" });
  } else {
    chalk.red(`${filePath}不存在`);
  }
};

module.exports = {
  delDir,
  updateFile,
};
