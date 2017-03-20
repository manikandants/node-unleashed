'use strict';

var Unleashed = require('../lib/index.js');
var should = require('should');

var ul = new Unleashed({
  mode: 'sandbox',
  apiId: 'a7befc2b-4d6b-4b74-9eff-b18c21228849',
  apiKey: 'vW6Hpla1Z5IJhKHzXNGlKrqSBPgAcCvMl9bJ3601012RhiYZPUPwkjSkyGRlgjE1Eki7VfhmwuTQlCTptnQ=='
}, function(err, unleashed) {
  describe('Unleashed', function() {
    this.timeout(10000);
    describe('Assemblies', function() {
      it('getAll should get all Assemblies', function(done) {
        unleashed.Assemblies.getAll({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });
      it('get should get paginated Assemblies', function(done) {
        unleashed.Assemblies.get({
          
        }, 1, function(err, body) {
          should(err).be.null();
          done();
        });
      });
      it('getById should get Assembly by id', function(done) {
        unleashed.Assemblies.getById({
          
        }, '5c800652-5b67-439b-8ac9-55a6b541ec0a', function(err, body) {
          should(err).be.null();
          done();
        });
      });
    });
    describe('BatchNumbers', function() {
      it('getAll should get all Batch Numers', function(done) {
        unleashed.BatchNumbers.getAll({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });
      it('get should get paginated Batch Numbers', function(done) {
        unleashed.BatchNumbers.get({
          
        }, 1, function(err, body) {
          should(err).be.null();
          done();
        });
      });
      it('getById should get Batch Number by id', function(done) {
        unleashed.BatchNumbers.getById({
          
        }, 'b5c2574e-0a13-4b40-96d6-f5a5156e2dcd', function(err, body) {
          should(err).be.null();
          done();
        });
      });
    });
    describe('BillOfMaterials', function() {
      it('getAll should get all Bill of Materials', function(done) {
        unleashed.BillOfMaterials.getAll({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });
    });
    describe('Companies', function() {
      it('getAll should get all Companies', function(done) {
        unleashed.Companies.getAll({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });
    });
    describe('CreditNotes', function() {
      it('getAll should get all Credit Notes', function(done) {
        unleashed.CreditNotes.getAll({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });
      it('get should get paginated Credit Notes', function(done) {
        unleashed.CreditNotes.get({
          
        }, 1, function(err, body) {
          should(err).be.null();
          done();
        });
      });
      /*it('getById should get Credit Note by id', function(done) {
        unleashed.CreditNotes.getById({
          
        }, 'b5c2574e-0a13-4b40-96d6-f5a5156e2dcd', function(err, body) {
          should(err).be.null();
          done();
        });
      });*/
    });
    describe('CustomerDeliveryAddresses', function() {
      it('getAll should get all Customer Delivery Addresses', function(done) {
        unleashed.CustomerDeliveryAddresses.getAll({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });
    });
    describe('Customers', function() {
      it('get should get paginated Customers', function(done) {
        unleashed.Customers.get({
          
        }, 1, function(err, body) {
          should(err).be.null();
          done();
        });
      });
      it('getById should get Customer by id', function(done) {
        unleashed.Customers.getById({
          
        }, '6bb157ee-5da0-48d1-90fd-5b0b4ede5b50', function(err, body) {
          should(err).be.null();
          done();
        });
      });
      /*it('create should create Customer', function(done) {
        unleashed.Customers.create({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });*/
    });
    describe('CustomerTypes', function() {
      it('getAll should get all Customer Types', function(done) {
        unleashed.CustomerTypes.getAll({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });
    });
    describe('DeliveryMethods', function() {
      it('getAll should get all Delivery Methods', function(done) {
        unleashed.DeliveryMethods.getAll({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });
    });
    describe('PaymentTerms', function() {
      it('getAll should get all Payment Terms', function(done) {
        unleashed.PaymentTerms.getAll({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });
    });
    describe('ProductGroups', function() {
      it('getAll should get all Product Groups', function(done) {
        unleashed.ProductGroups.getAll({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });
    });
    describe('Products', function() {
      it('get should get paginated Products', function(done) {
        unleashed.Products.get({
          
        }, 1, function(err, body) {
          should(err).be.null();
          done();
        });
      });
      it('getById should get Product by id', function(done) {
        unleashed.Products.getById({
          
        }, '8461b79e-1189-4eba-9685-3fbc4f1282d7', function(err, body) {
          should(err).be.null();
          done();
        });
      });
      /*it('create should create Product', function(done) {
        unleashed.Products.create({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });
      it('update should update Product', function(done) {
        unleashed.Products.update({
          
        }, '52c66c7f-dbf4-458e-a738-eb2b22da59d8', function(err, body) {
          should(err).be.null();
          done();
        });
      });
      it('obsolete should Obsolete Product', function(done) {
        unleashed.Products.obsolete({
          
        }, '52c66c7f-dbf4-458e-a738-eb2b22da59d8', function(err, body) {
          should(err).be.null();
          done();
        });
      });
      it('updatePrices should update Product price', function(done) {
        unleashed.Products.updatePrices({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });*/
    });
    describe('PurchaseOrders', function() {
      it('get should get all purchase orders', function(done) {
        unleashed.PurchaseOrders.getAll({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });
      it('getById should get purchase order by id', function(done) {
        unleashed.PurchaseOrders.getById({
          
        }, '00d8d248-e211-4f68-a637-d41a8cbab4c1', function(err, body) {
          should(err).be.null();
          done();
        });
      });
      /*it('create should create purchase order', function(done) {
        unleashed.PurchaseOrders.create({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });
      it('createBatch should create purchase order in batch', function(done) {
        unleashed.PurchaseOrders.createBatch({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });*/
    });
    describe('SalesOrderGroups', function() {
      it('getAll should get all Sales Order Groups', function(done) {
        unleashed.SalesOrderGroups.getAll({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });
    });
    describe('SalesPersons', function() {
      it('get should get all Sales persons', function(done) {
        unleashed.SalesPersons.getAll({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });
      /*it('create should create sales persons', function(done) {
        unleashed.SalesPersons.create({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });
      it('update should update sales person', function(done) {
        unleashed.SalesPersons.update({
          
        }, '52c66c7f-dbf4-458e-a738-eb2b22da59d8', function(err, body) {
          should(err).be.null();
          done();
        });
      });*/
    });
    describe('SalesShipments', function() {
      it('get should get paginated sales shipments', function(done) {
        unleashed.SalesShipments.get({
          
        }, 1, function(err, body) {
          should(err).be.null();
          done();
        });
      });
      it('getById should get sales shipments by id', function(done) {
        unleashed.SerialNumbers.getById({
          
        }, '7a6c635b-532c-4478-9d10-3ea8cc2c5f92', function(err, body) {
          should(err).be.null();
          done();
        });
      });
      /*it('create should create sales shipments', function(done) {
        unleashed.SalesShipments.create({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });
      it('update should update sales shipments', function(done) {
        unleashed.SalesShipments.update({
          
        }, '52c66c7f-dbf4-458e-a738-eb2b22da59d8', function(err, body) {
          should(err).be.null();
          done();
        });
      });
      it('delete should delete sales shipments', function(done) {
        unleashed.SalesShipments.delete({
          
        }, '52c66c7f-dbf4-458e-a738-eb2b22da59d8', function(err, body) {
          should(err).be.null();
          done();
        });
      });*/
    });
    describe('SerialNumbers', function() {
      it('getAll should get all Serial Numbers', function(done) {
        unleashed.SerialNumbers.getAll({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });
      it('get should get paginated Serial Numbers', function(done) {
        unleashed.SerialNumbers.get({
          
        }, 1, function(err, body) {
          should(err).be.null();
          done();
        });
      });
      it('getById should get Serial Number by id', function(done) {
        unleashed.SerialNumbers.getById({
          
        }, '7a6c635b-532c-4478-9d10-3ea8cc2c5f92', function(err, body) {
          should(err).be.null();
          done();
        });
      });
    });
    describe('ShippingCompanies', function() {
      it('getAll should get all Shipping Companies', function(done) {
        unleashed.ShippingCompanies.getAll({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });
      it('getById should get Shipping Company by id', function(done) {
        unleashed.ShippingCompanies.getById({
          
        }, 'd9b36f62-e420-42f6-945d-316b4186a08d', function(err, body) {
          should(err).be.null();
          done();
        });
      });
    });
    describe('StockAdjustments', function() {
      it('get should get stock adjustments', function(done) {
        unleashed.StockAdjustments.get({
          
        }, 1, function(err, body) {
          should(err).be.null();
          done();
        });
      });
      it('getById should get stock adjustments by id', function(done) {
        unleashed.StockAdjustments.getById({
          
        }, '5eabc142-1e29-46a9-b909-422d9ef0e19a', function(err, body) {
          should(err).be.null();
          done();
        });
      });
      /*it('create should create stock adjustments', function(done) {
        unleashed.StockAdjustments.create({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });*/
    });
    describe('StockOnHand', function() {
      it('getAll should get all Stock on hand', function(done) {
        unleashed.StockOnHand.getAll({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });
      it('getById should get Stock on hand by id', function(done) {
        unleashed.StockOnHand.getById({
          
        }, '52c66c7f-dbf4-458e-a738-eb2b22da59d8', function(err, body) {
          should(err).be.null();
          done();
        });
      });
      it('getByIdInAllWarehouses should get Stock on all warehouses by id', function(done) {
        unleashed.StockOnHand.getByIdInAllWarehouses({
          
        }, '52c66c7f-dbf4-458e-a738-eb2b22da59d8', function(err, body) {
          should(err).be.null();
          done();
        });
      });
    });
    describe('SupplierReturnReasons', function() {
      it('getAll should get all Supplier Return Reasons', function(done) {
        unleashed.SupplierReturnReasons.getAll({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });
    });
    describe('Taxes', function() {
      it('getAll should get all Taxes', function(done) {
        unleashed.Taxes.getAll({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });
    });
    describe('UnitOfMeasures', function() {
      it('getAll should get all Taxes', function(done) {
        unleashed.UnitOfMeasures.getAll({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });
    });
    describe('Warehouses', function() {
      it('getAll should get all Taxes', function(done) {
        unleashed.UnitOfMeasures.getAll({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });
    });
    describe('WarehouseStockTransfers', function() {
      it('getAll should get all Warehouse Stock Transfers', function(done) {
        unleashed.WarehouseStockTransfers.getAll({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });
      /*it('getById should get Warehouse Stock Transfers by id', function(done) {
        unleashed.WarehouseStockTransfers.getById({
          
        }, '5c800652-5b67-439b-8ac9-55a6b541ec0a', function(err, body) {
          should(err).be.null();
          done();
        });
      });*/
    });
  });
});
