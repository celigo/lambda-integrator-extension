var lambdaExtension = require('../../lib/lambda')
var testModule = require('./testModule')

var options = {
  connectors: {
    'connector1': testModule,
    'connector2': testModule
  }
}

exports.handler = lambdaExtension.createHandler(options)
