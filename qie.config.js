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