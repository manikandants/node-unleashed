'use strict';

var crypto = require('crypto');
var querystring = require('querystring');

var generateSignature = function(str, key) {
  var signature;
  var hmac = crypto.createHmac('sha256', key);
  signature = hmac.update(str).digest('base64');
  return signature;
};

exports.getApiMeta = function(query, apiId, apiKey) {
  var qs = querystring.stringify(query);
  return {
    qs: qs,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'api-auth-id': apiId,
      'api-auth-signature': generateSignature(qs, apiKey)
    }
  };
};

exports.responseHandler = function(err, response, body, callback) {
  if (err) {
    console.log(err);
    return callback(err);
  }
  if (response.statusCode !== 200) {
    console.log(response.statusCode);
    return callback(response.statusCode);
  }
  return callback(null, body);
};
