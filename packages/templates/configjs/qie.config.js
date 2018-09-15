const pkgJson = require('./package.json');

// 带 * 的为必填项
module.exports = {
  publish: {
    url: '',                    // * 前端项目管理平台地址
    key: '',                    // * 前端项目管理平台中应用的 KEY
  },
  upload: {
    server: 'qn',               // * 阿里云：ali 七牛云: qn
    config: {
      accessKeyId: "",        // * CDN 的应用ID
      accessKeySecret: "",    // * CDN 的应用Secret
      bucket: "",             // * 空间名称
      dir: "",                // * 需要上传的本地目录名
      region: "",             // bucket 所在的区域
      ignoreDir: false,
      deduplication: true,
      ignoreSuffix: 'html',
      prefix: `/${pkgJson.name}/`,     // CDN资源前缀，可以为空
    }
  }
}