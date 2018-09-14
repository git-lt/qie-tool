const logger = require('../lib/logger');

module.exports = (value) => (key) => {
  if (!value[key]) {
    logger.warn(`请在 qie.config.js 中设置 ${key}`)
    return false
  } else {
    return true
  }
}