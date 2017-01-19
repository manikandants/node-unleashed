'use strict';

var SalesOrders = require('./salesOrders.js');

var urls = {
  sandbox: 'https://api.unleashedsoftware.com/',
  production: 'https://api.unleashedsoftware.com/'
};

module.exports = function(options, callback) {
  var Unleashed = function() {};
  options = options || {};
  options.mode = options.mode || 'sandbox';
  options.url = options.url || urls[options.mode];
  if (!options.apiId) {
    return console.error('apiId is required.');
  }
  if (!options.apiKey) {
    return console.error('apiKey is required.');
  }
  this.url = options.url;
  this.apiId = options.apiId;
  this.apiKey = options.apiKey;
  Unleashed.SalesOrders = new SalesOrders(options);
  callback(null, Unleashed);
};
