
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const exists = require('fs').existsSync;
const logger = require('../lib/logger');
const inquirer = require('inquirer');
const Spinner = require('../lib/spinner');

const resolve = function (relativePath) { 
    return path.resolve(process.cwd(), relativePath);
}

module.exports = (env) => {
    // 读取配置文件
    if(!exists(resolve('qie.config.js'))){
        return logger.warn('缺少配置文件 qie.config.js, 请使用 qie init 初始化')
    }

    const config = require(resolve('qie.config.js'));

    // 检查 url
    if(!config.publish.url){
        return logger.warn('请在配置文件 qie.config.js 中配置 publish.url')
    }

    // 检查 env
    if(!config.publish.env[env]){
        return logger.warn(`请在配置文件 qie.config.js 中配置 publish.env.${env}`)
    }

    const envName = config.publish.env[env]
    
    const regDomain = /^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/;

    // 检查环境名称是否是合法域名
    if(!regDomain.test(envName)){
        return logger.warn(`${envName} 格式错误，例：www.xxx.com / dev.xxx.com`)
    }

    // 检查 index.html
    const indexHtmPath = resolve(`${config.upload.config.dir}/index.html`);
    if(!exists(indexHtmPath)){
        return logger.fatal(`读取 index.html 失败, 请查路径 ${indexHtmPath} 是否存在`)
    }

    let content = '';
    try {
        content = fs.readFileSync(indexHtmPath).toString('utf-8');
    } catch (err) {
        return logger.fatal(err);
    }

    inquirer.prompt([
        { name: 'desc', type: 'input', message: `[${envName}] - 请输入版本说明:  ` }
    ]).then(answers => {
        const desc = answers.desc || '';
        const pkgJson = require(resolve('package.json'));

        const params = {
            desc,
            content,
            envName,
            version: pkgJson.version,
            key: config.publish.key,
        };
        const apiUrl = `${config.publish.url}/pub/version`;
        axios.defaults.timeout = 30 * 1000;
        axios.defaults.responseType = 'json';

        const spinner = new Spinner('正在发布...');
        axios
            .post(apiUrl, params)
            .then(res => res.data)
            .then(res => {
                spinner.stop();
                if (res.success) {
                    delete res.data.content;
                    logger.success(`${JSON.stringify(res.data)}`);
                } else {
                    throw res;
                }
                process.exit(0);
            })
            .catch(err => {
                spinner.stop();
                logger.fatal(err);
                process.exit(0);
            });
    }).catch(err => {
        logger.fatal(err);
    });
}