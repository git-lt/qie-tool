const aliOss = require('meetyou-ali-oss');

module.exports = (config, dirPath) => {
  config.srcDir = dirPath
  return aliOss(config)
}
