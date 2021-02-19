const environment = (process.env.NODE_ENV || 'development').trim()
console.log(environment)

if (environment === 'development') {
  module.exports = require('./config/webpack.dev.config')
} else {
  module.exports = require('./config/webpack.prod.config')
}