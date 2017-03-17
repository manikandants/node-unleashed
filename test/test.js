'use strict';

var Unleashed = require('../lib/index.js');

var ul = new Unleashed({
  mode: 'sandbox',
  apiId: 'a7befc2b-4d6b-4b74-9eff-b18c21228849',
  apiKey: 'vW6Hpla1Z5IJhKHzXNGlKrqSBPgAcCvMl9bJ3601012RhiYZPUPwkjSkyGRlgjE1Eki7VfhmwuTQlCTptnQ=='
}, function(err, unleashed) {
  unleashed.SalesOrders.get({
    OrderNumber: 'SO-00000124'
  }, 1, function(err, body) {
    console.log(err, body);
  });
  unleashed.Products.get({

  }, 1, function(err, body) {
    console.log(err, body);
  });
  unleashed.Warehouses.get({

  }, function(err, body) {
    console.log(err, body);
  });
});
