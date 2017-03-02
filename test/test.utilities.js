'use strict'

var testUtil = require('./util')

var bearerToken = 'TEST_INTEGRATOR_EXTENSION_BEARER_TOKEN'
var _integrationId = '_integrationId'
var _connectorId = 'connector1'

describe('Lambda connector utilities tests', function () {
  it('should fail with 422 for myUtility error', function (done) {
    var extensionProperties = {
      diy: false,
      _connectorId: _connectorId,
      type: 'utility',
      function: 'myUtility'
    }

    var options = {
      error: true,
      bearerToken: bearerToken,
      _integrationId: _integrationId
    }

    testUtil.invokeFunction(options, extensionProperties, 'installerSettingsTest', function (error, data) {
      if (error) return done(error)

      var expected = [{ code: 'Error', message: 'myUtility error' }]
      testUtil.validateErrorRetured(data, expected, done)
    })
  })

  it('should pass after successfully executing myUtility', function (done) {
    var extensionProperties = {
      diy: false,
      _connectorId: _connectorId,
      function: 'myUtility',
      type: 'utility'
    }

    var options = {
      a: 'b',
      bearerToken: bearerToken,
      _integrationId: _integrationId
    }

    testUtil.invokeFunction(options, extensionProperties, 'installerSettingsTest', function (error, data) {
      if (error) return done(error)

      data.StatusCode.should.equal(200)

      options.function = 'myUtility'
      var body = JSON.parse(data.Payload)
      body.should.eql(options)

      done()
    })
  })
})
