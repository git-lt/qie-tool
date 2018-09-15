const opn = require('opn');
const exists = require('fs').existsSync;
const path = require('path');
const logger = require('../lib/logger');

const resolve = function (relativePath) { 
  return path.resolve(process.cwd(), relativePath) 
}

module.exports = () => {
  // 读取配置文件
  let config = {};
  if(exists(resolve('qie.config.js'))){
      config = require(resolve('qie.config.js'));
  }

  if(config.publish && config.publish.url){
    opn(config.publish.url)
  }else{
    logger.warn(`请在 qie.config.js 中配置 publish.url`)
  }
}
