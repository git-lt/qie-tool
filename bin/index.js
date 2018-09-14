// #!/usr/bin/env node
// const path = require('path');
// const fs = require('fs');
// const program = require('commander');
// // const question = require('../packages/commands/question');
// // const publish = require('../packages/commands/publish');
// // const upload = require('../packages/commands/upload');
// // const initial = require('../packages/commands/initial');
// // const showIP = require('../packages/commands/ip');
// // const open = require('../packages/commands/open');

// let config = {};

// // 配置文件如果存在则读取
// if(fs.existsSync(path.resolve('meet.config.js'))){
//     config = require(path.resolve('meet.config.js'));
// }

// program
//   .version(require('../package').version)
//   .usage('<command> [options]')
//   .command('ip', '显示本机IP地址')
//   .command('init', '初始化 qie.config.js 配置文件')
//   .command('publish', '保存单页应用版本信息至数据库')
//   .command('upload', '上传文件至七牛或阿里云')
//   .command('push', 'Git推送当前分支到远端')
//   .command('open', '打开前端管理平台')
//   .command('question', '询问配置')
//   .parse(process.argv)

// program
//     .command('init')
//     .description('初始化 qie.config.js 配置文件')
//     // .action(initial);

// program
//     .command('publish')
//     .description('保存单页应用版本信息至数据库')
//     // .action(function(){
//     //     publish(config)
//     // });

// program
//     .command('push')
//     .description('Git推送当前分支到远端')
//     // .action(function(){
//     //     publish(config)
//     // });
// program
//     .command('upload')
//     .description('上传文件至七牛云或阿里云')
//     // .action(function () {
//     //     upload(config.upload);
//     // });

// program
//     .command('ip')
//     .description('显示本机IP地址')
//     // .action(showIP);

// program
//     .command('question')
//     .description('询问配置')
//     // .action(function(){
//     //     question()
//     // });

// program.parse(process.argv);