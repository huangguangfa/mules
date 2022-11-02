import compressing from 'compressing';
import pump from 'pump';
import download from 'download';
import chalk from 'chalk';
import path from 'path';
import fs from 'fs';

async function unCompress(url: string, projectName: string) {
  return new Promise(async (resove, reject) => {
    const data = await download(url);
    // 下载写入zip包
    const zipPath = path.join(path.resolve(`${projectName}.zip`));
    await fs.promises.writeFile(zipPath, data);
    const tempFileName = 'temp';
    // 解压包
    compressing.zip
      .uncompress(zipPath, tempFileName)
      .then(res => {
        // 删除临时的zip包
        fs.unlinkSync(zipPath);
        // 移动目录并且重新命名
        fs.rename(path.join(path.resolve(`${tempFileName}`)), projectName, err => {
          if (err) {
            console.log(chalk.red(err));
            reject();
          } else {
            // 判断临时目录是否存在、存在就删除
            if (fs.existsSync(tempFileName)) {
              fs.rmdir(tempFileName, err => {
                if (!err) resove('');
                if (err) reject();
              });
            } else {
              resove('');
            }
          }
        });
      })
      .catch(err => {
        console.log(chalk.red('拉取远端解压失败'));
        reject(err);
      });
  });
}

/* 
压缩脚手架
*/
function compress() {
  // 流打包
  const tarStream = new compressing.zip.Stream();
  tarStream.addEntry('../../../template/vue3-admin-cli');
  const destStream = fs.createWriteStream('../../../zip/vue3-cli.zip');
  pump(tarStream, destStream, function () {});
}

export { unCompress, compress };
