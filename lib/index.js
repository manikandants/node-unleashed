'use strict';

var Products = require('./products.js');
var SalesOrders = require('./salesOrders.js');
var Warehouses = require('./warehouses.js');

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
  Unleashed.Products = new Products(options);
  Unleashed.SalesOrders = new SalesOrders(options);
  Unleashed.Warehouses = new Warehouses(options);
  callback(null, Unleashed);
};
