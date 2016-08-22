var lambdaExtension = require('../../lib/lambda')

var options = {}
exports.options = options

exports.handler = lambdaExtension.createHandler(options)
