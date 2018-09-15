# qie-cli


## 功能列表

- `qie` 显示帮助
- `qie ip` 显示本机IP
- `qie init` 初始化 `qie.config.js` 配置文件
- `qie upload` 上传文件至七牛或阿里云
- `qie publish dev.abc.com` 保存单页应用数据至数据库
- `qie push` git推送当前分支代码到远端
- `qie open` 打开前端项目管理平台

## 配置文件

`qie.config.js` 

```javascript
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
```

参考

- [meet-cli](https://github.com/linweiwei123/meet-cli)
- [multipages-generator](https://github.com/linweiwei123/multipages-generator)