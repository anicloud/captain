/**
 * Created by huangbin on 6/25/16.
 */

if (process.env.BUILD_MODE == 'prod') {
  module.exports = require('./configureStoreProd')
} else {
  module.exports = require('./configureStoreDev')
}