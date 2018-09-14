const qiniu = require('gulp-qiniu');

module.exports = (config, dirPath, gulp) => {
  gulp.task('upload', () => {
    const qiniuConfig = {
      accessKey: config.accessKeyId,
      secretKey: config.accessKeySecret,
      bucket: config.bucket,
      private: false,
    }

    gulp.src(`${dirPath}/**`).pipe(qiniu(qiniuConfig, {
      dir: config.prefix,
      version: false
    }));
  });

  gulp.start('upload');
}