#!/usr/bin/env node
import { program } from 'commander';
import { list, init, run } from './comand';
import packageInfo from '../package.json';

/*  查询当前cli版本 */
program.version(packageInfo.version, '-v, --version');

function start() {
  const commandMap = [
    {
      name: '初始化模版-cli',
      command: 'init <ProjectName>',
      description: '初始化cli模版',
      alias: 'get',
      action: init,
    },
    {
      name: '查看模版',
      command: 'list',
      description: '查看当前模版列表',
      alias: 'ls',
      action: list,
    },
    {
      name: '启动项目',
      command: 'run <ScriptName>',
      description: '用于启动项目、自动切换当前项目正确版本',
      alias: 'r',
      action: run,
    },
  ];
  for (let i = 0; i < commandMap.length; i++) {
    const { command, description, alias, action } = commandMap[i];
    program
      .command(command)
      .description(description)
      .alias(alias)
      .action(param => {
        action(param);
      });
  }
}

start();

// 把参数设置到program
program.parse(process.argv);

if (program.args.length === 0) {
  program.help();
}
