'use strict';

var Unleashed = require('../lib/index.js');

var ul = new Unleashed({
  mode: 'sandbox',
  apiId: '7d83c61e-b387-4ea6-babf-45b83cf4a1b1',
  apiKey: 'lcHDEpL3way3buYgemlunU3s66NgebB48kqlBLBBPGTj9qTm2hbXdOk3MBr6gAZmDNrFSiniaoPUE0H2TVbQ=='
}, function(err, unleashed) {
  console.log(err, unleashed);
  unleashed.SalesOrders.get({
    pageSize: 200
  }, 1, function(err, body) {
    console.log(err, body);
  });
});
