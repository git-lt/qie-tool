const pkgJson = require('./package.json');

// 带 * 的为必填项
module.exports = {
  publish: {
    url: '',                    // * 前端项目管理平台地址
    key: '',                    // * 前端项目管理平台中应用的 KEY
    env: {
      dev: '',  // 开发环境
      test: '', // 测试环境
      pre: '',  // 预发环境
      pro: '',  // 生产环境
      // ... 更多环境配置, 使用： qie publish dev/test/pre/pro
    }
  },
  upload: {
    server: 'qn',               // * 阿里云：ali 七牛云: qn
    config: {
      accessKeyId: "",          // * CDN 的应用ID
      accessKeySecret: "",      // * CDN 的应用Secret
      bucket: "",               // * 空间名称(桶名)
      dir: "dist",              // * 需要上传的本地目录名
      region: "",               // * bucket 所在的区域（七牛选填）
      prefix: pkgJson.name,     // * CDN资源前缀

      ignoreDir: false,
      deduplication: true,
      ignoreSuffix: 'html,css',
    }
  }
}