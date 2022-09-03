#!/usr/bin/env node
import { program } from 'commander';
import { list, init } from './comand';
import packageInfo from '../package.json';

/*  查询当前cli版本*/
program.version(packageInfo.version, '-v, --version');

/* 
初始化模版
*/
program
  .command('init <ProjectName>')
  .description('初始化cli模版')
  .alias('get')
  .action(projectName => {
    init(projectName);
  });

/* 
查看模版
*/
program
  .command('list')
  .description('查看当前模版列表')
  .alias('ls')
  .action(() => {
    list();
  });

// 把参数设置到program
program.parse(process.argv);
if (program.args.length === 0) {
  program.help();
}
