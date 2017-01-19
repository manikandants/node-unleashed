'use strict';

var request = require('request');
var utils = require('./utils.js');

var SalesOrders = function(options) {
  this.apiId = options.apiId;
  this.apiKey = options.apiKey;
  this.url = options.url;
};

SalesOrders.prototype.get = function(query, page, callback) {
  var apiMeta = utils.getApiMeta(query, this.apiId, this.apiKey);
  console.log(apiMeta);
  request({
    method: 'GET',
    url: this.url + '/SalesOrders/Page/' + page + '?' + apiMeta.qs,
    headers: apiMeta.headers
  }, function(err, response, body) {
    utils.responseHandler(err, response, body, callback);
  });
};

module.exports = SalesOrders;
