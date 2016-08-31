# lambda-integrator-extension
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

This module extends [integrator-extension](https://github.com/celigo/integrator-extension) and can be used to host extension functions on [AWS Lambda](http://docs.aws.amazon.com/lambda/latest/dg/welcome.html). This allows to run the extension code in a server-less environment that helps in simplifying the deployment and maintenance process. To use this option your stack must be of type lambda in integrator.io. integrator.io uses the AWS [IAM User](http://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html) Access Keys
provided on the stack to invoke the extension functions and get the results. The associated AWS IAM user must be assigned "lambda:InvokeFunction" permission for the AWS Lambda Function provided on the stack via an attached [IAM policy](http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html?icmpid=docs_iam_console).

#### Usage

```js
var lambdaExtension = require('lambda-integrator-extension')

exports.handler = lambdaExtension.createHandler(config)
```

#### createHandler(callback)

createHandler function loads the configuration and returns the handler that should be used when creating the AWS Lambda Function. The result of execution of createHandler function needs
to be assigned to exports.handler which in turn will be executed whenever integrator.io sends a request to execute any of the extension functions.
