const OSS = require('ali-oss');
const clui = require('clui');
const logger = require('../lib/logger');

const Progress = clui.Progress;

module.exports = (config, dirPath) => {
  // 显示进度
  let client = new OSS(config);
  const progressBar = new Progress(0);

  client.multipartUpload(`${dirPath}/**`, 'local-file', {
    progress: p => progressBar.update(p, 100)
  }).then((res) => {
    logger.success(`文件上传成功\n`)
  }).catch((err) => {
    logger.fatal(err)
  });
}
