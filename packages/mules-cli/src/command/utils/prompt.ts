#!/usr/bin/env node
import inquirer from 'inquirer';
import templates from '../../config/template';
// 定义和用户交互时的questions
export default function () {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'author',
      message: '请输入作者的名称',
    },
    {
      type: 'input',
      name: 'repository',
      message: '请输入仓库的项目地址',
    },
    {
      type: 'list',
      name: 'name',
      message: '请选择要开发的项目',
      choices: templates.map(item => item.name),
    },
    {
      type: 'input',
      name: 'description',
      message: '请输入项目描述',
    },
    {
      type: 'confirm',
      name: 'isOk',
      message: '请确认输入是否ok?',
    },
  ]);
}
