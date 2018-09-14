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
module.exports = {
    repository: '',         // 当前项目仓库地址
    pubUrl: '',             // 发布平台的地址
    upload: {
        server: 'qn',       // 阿里云：ali 七牛云: qn
        config: {
            accessKeyId: "",
            accessKeySecret: "",
            bucket: "",     // 空间名称
            region: "",     // bucket 所在的区域
            srcDir: "",     // 上传目录名
            ignoreDir: false,
            deduplication: true,
            ignoreSuffix: 'html',
            prefix: "",     // 项目名称 eg: /game/
        }
    }
}
```

参考

- [meet-cli](https://github.com/linweiwei123/meet-cli)
- [multipages-generator](https://github.com/linweiwei123/multipages-generator)