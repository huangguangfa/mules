#!/usr/bin/env node
import templates from '../config/template';
import chalk from 'chalk';

export function list() {
  for (let key in templates) {
    let temp = templates[key];
    console.log('  ' + chalk.green('✦') + '  ' + chalk.green(temp.name) + ' -' + temp.desc);
  }
  if (!templates || templates.length == 0) {
    console.log(chalk.yellow('当前无可用模板'));
  }
}
