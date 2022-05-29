#!/usr/bin/env node
const inquirer = require('inquirer');
const templates = require('../../config/template')
// 定义和用户交互时的questions
module.exports = function () {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'author',
            message: '请输入作者的名称'
        },
        {
            type: 'input',
            name: 'repository',
            message: '请输入GitHub的项目地址'
        },
        {
            type: 'list',
            name: 'choice',
            message: '请选择要开发的项目',
            choices: templates.map(item => item.repositories)
        },
        {
            type: 'input',
            name: 'description',
            message: '请输入项目描述'
        },
        {
            type: 'confirm',
            name: 'isOk',
            message: '请确认输入是否ok?'
        }
    ])
};
