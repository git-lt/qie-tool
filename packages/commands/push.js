const inquirer = require('inquirer');
const shellHelper = require('../lib/shellHelper');
const logger = require('../lib/logger');

module.exports = () => {
  inquirer.prompt([
    {
      name: 'message',
      type: 'input',
      message: `请输入 git commit 信息: \n `
    }
  ]).then(answers => {
    let message = answers.message;
    shellHelper.series([
      'git pull',
      'git add .',
      `git commit -m "${message}"`,
      'git push',
    ], function (err) {
      if (err) {
        logger.fatal(err);
        process.exit(0);
      }
      logger.success('Git push finished!')
      process.exit(0);
    });
  }).catch(err => {
    logger.fatal(err);
  });
}