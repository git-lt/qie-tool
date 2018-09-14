const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer');
const logger = require('../lib/logger');

const CONFIG_NAME = 'qie.config.js';

function copyConfigJs(){
    figlet('qie cli', function(err, data) {
        if(err){
            logger.fatal('Some thing about figlet is wrong!');
        }
        console.log(chalk.yellow(data));
        let targetFilePath = path.resolve(CONFIG_NAME);
        let templatePath = path.join(__dirname,'../templates/configjs/'+CONFIG_NAME);
        let contents = fs.readFileSync(templatePath,'utf8');
        fs.writeFileSync(targetFilePath,contents,'utf8');
        console.log()
        logger.success(`初始化配置文件 ${CONFIG_NAME} 成功\n`);
        process.exit(0);
    });
}

module.exports = function(){
    // 配置文件如果存在则提示是否覆盖
    if(fs.existsSync(path.resolve(CONFIG_NAME))){
        // 连续提问
        inquirer.prompt([
            {
                name:'init-confirm',
                type:'confirm',
                message:`${CONFIG_NAME} 已经存在，是否覆盖?`,
                validate: function(input){
                    if(input.lowerCase !== 'y' && input.lowerCase !== 'n' ){
                        return '请输入 y/n !'
                    }
                    else{
                        return true;
                    }
                }
            }
        ])
            .then(answers=>{
                if(answers['init-confirm']){
                    copyConfigJs();
                }
                else{
                    process.exit(0);
                }
            })
            .catch(err=>{
                console.log(chalk.red(err));
            })
    }
    else{
        copyConfigJs();
    }
};

