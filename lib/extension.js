'use strict'

var AbstractExtension = require('integrator-extension')
var util = require('util')

function LambdaExtension () {}

util.inherits(LambdaExtension, AbstractExtension)

module.exports = new LambdaExtension()
