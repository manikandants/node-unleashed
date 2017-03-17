'use strict';

var request = require('request');
var utils = require('./utils.js');

var SupplierReturnReasons = function(options) {
  this.apiId = options.apiId;
  this.apiKey = options.apiKey;
  this.url = options.url + '/SupplierReturnReasons';
};

SupplierReturnReasons.prototype.get = function(query, callback) {
  var apiMeta = utils.getApiMeta(query, this.apiId, this.apiKey);
  request({
    method: 'GET',
    url: this.url + '?' + apiMeta.qs,
    headers: apiMeta.headers
  }, function(err, response, body) {
    utils.responseHandler(err, response, body, callback);
  });
};

module.exports = SupplierReturnReasons;
