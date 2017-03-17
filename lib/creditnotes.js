'use strict';

var request = require('request');
var utils = require('./utils.js');

var CreditNotes = function(options) {
  this.apiId = options.apiId;
  this.apiKey = options.apiKey;
  this.url = options.url + '/CreditNotes';
};

CreditNotes.prototype.get = function(query, callback) {
  var apiMeta = utils.getApiMeta(query, this.apiId, this.apiKey);
  request({
    method: 'GET',
    url: this.url + '?' + apiMeta.qs,
    headers: apiMeta.headers
  }, function(err, response, body) {
    utils.responseHandler(err, response, body, callback);
  });
};

module.exports = CreditNotes;
