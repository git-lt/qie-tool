const pkgJson = require('./package.json');

// 带 * 的为必填项
module.exports = {
  publish: {
    url: '',                    // * 前端项目管理平台地址
    key: '',                    // * 前端项目管理平台中应用的 KEY
  },
  upload: {
    server: 'ali',               // * 阿里云：ali 七牛云: qn
    config: {
      accessKeyId: "LTAI3pEfvZ5b9LC9",          // * CDN 的应用ID
      accessKeySecret: "4zJn2XV4YflWemydhq6ZHExuuoWHtx",      // * CDN 的应用Secret
      bucket: "qie-dev",               // * 空间名称
      dir: "dist",                     // * 需要上传的本地目录名
      region: "oss-cn-beijing",        // bucket 所在的区域 (阿里云必填)
      prefix: `${pkgJson.name}`,       // * CDN资源前缀，资源分类名
      ignoreDir: false,
      deduplication: true,
      ignoreSuffix: 'html, css',
    }
  }
}