
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const exists = require('fs').existsSync;
const logger = require('../lib/logger');
const inquirer = require('inquirer');

const resolve = function (relativePath) { 
    return path.resolve(process.cwd(), relativePath) 
}

module.exports = (env) => {
    // 读取配置文件
    if(!exists(resolve('qie.config.js'))){
        return logger.warn('缺少配置文件 qie.config.js, 请使用 qie init 初始化')
    }

    const config = require(resolve('qie.config.js'));

    // config.publish.url
    // config.publish.key

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
        { name: 'desc', type: 'input', message: `请输入版本说明:  ` }
    ]).then(answers => {
        const desc = answers.desc || '';
        const pkgJson = resolve('package.json');

        const params = {
            content,
            version: pkgJson.version,
            envName: env,
            desc,
        };

        axios.defaults.timeout = 30 * 1000;
        axios.defaults.responseType = 'json';
        axios
            .post(server, params)
            .then(res => res.data)
            .then(res => {
                if (res.success) {
                    delete res.data.content;
                    logger.success(`${JSON.stringify(res.data)}`);
                } else {
                    throw res;
                }
            })
            .catch(err => {
                logger.fatal(err);
            });
    }).catch(err => {
        logger.fatal(err);
    });
}