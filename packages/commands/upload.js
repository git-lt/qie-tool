const path = require('path');
const checkProp = require('./check-prop');
const exists = require('fs').existsSync;
const gulp = require('gulp');
const logger = require('../lib/logger')

const resolve = function (relativePath) { 
    return path.resolve(process.cwd(), relativePath) 
}

module.exports = () => {

    // 读取配置文件
    let config = {};
    if(exists(resolve('qie.config.js'))){
        config = require(resolve('qie.config.js'));
    }

    const uploadConfig = config.upload.config;

    // 检查必填参数
    const check = checkProp(uploadConfig);
    const access = check('accessKeyId') 
        && check('accessKeySecret') 
        && check('bucket')
        && check('dir')
        && check('prefix');
    if(!access) return;

    // 检查上传目录
    const dirPath = resolve(uploadConfig.dir);
    if(!exists(dirPath)){
        return logger.warn(`${uploadConfig.dir} 目录不存在，请检查！`);
    }

    // 上传至 阿里云
    if(config.upload.server === 'ali'){
        require('./ali-upload')(uploadConfig, dirPath);
    }

    // 上传至 七牛云
    if(config.upload.server === 'qn'){
        require('./qn-upload')(uploadConfig, dirPath, gulp);
    }
};