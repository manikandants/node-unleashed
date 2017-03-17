'use strict';

var Assemblies = require('./assemblies');
var BatchNumbers = require('./batchnumbers');
var BillOfaterials = require('./billofmaterials');
var Companies = require('./companies');
var CreditNotes = require('./creditnotes');
var CustomerDeliveryAddresses = require('./customerdeliveryaddresses');
var Customers = require('./customers');
var CustomerTypes = require('./customertypes');
var DeliveryMethods = require('./deliverymethods');
var PaymentTerms = require('./paymentterms');
var ProductGroups = require('./productgroups');
var Products = require('./products');
var PurchaseOrders = require('./purchaseorders');
var SalesOrderGroups = require('./salesordergroups');
var SalesOrders = require('./salesorders');
var SalesPersons = require('./salespersons');
var SalesShipments = require('./salesshipments');
var SerialNumbers = require('./serialnumbers');
var ShippingCompanies = require('./shippingcompanies');
var StockAdjustments = require('./stockadjustments');
var StockOnHand = require('./stockonhand');
var SupplierReturnReasons = require('./supplierreturnreasons');
var Suppliers = require('./suppliers');
var Taxes = require('./taxes');
var UnitOfMeasures = require('./unitofmeasures');
var Warehouses = require('./warehouses');
var WarehouseStockTransfers = require('./warehousestocktransfers');

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

  Unleashed.Assemblies = new Assemblies(options);
  Unleashed.BatchNumbers = new BatchNumbers(options);
  Unleashed.BillOfaterials = new BillOfaterials(options);
  Unleashed.Companies = new Companies(options);
  Unleashed.CreditNotes = new CreditNotes(options);
  Unleashed.CustomerDeliveryAddresses = new CustomerDeliveryAddresses(options);
  Unleashed.Customers = new Customers(options);
  Unleashed.CustomerTypes = new CustomerTypes(options);
  Unleashed.DeliveryMethods = new DeliveryMethods(options);
  Unleashed.PaymentTerms = new PaymentTerms(options);
  Unleashed.ProductGroups = new ProductGroups(options);
  Unleashed.Products = new Products(options);
  Unleashed.PurchaseOrders = new PurchaseOrders(options);
  Unleashed.SalesOrderGroups = new SalesOrderGroups(options);
  Unleashed.SalesOrders = new SalesOrders(options);
  Unleashed.SalesPersons = new SalesPersons(options);
  Unleashed.SalesShipments = new SalesShipments(options);
  Unleashed.SerialNumbers = new SerialNumbers(options);
  Unleashed.ShippingCompanies = new ShippingCompanies(options);
  Unleashed.StockAdjustments = new StockAdjustments(options);
  Unleashed.StockOnHand = new StockOnHand(options);
  Unleashed.SupplierReturnReasons = new SupplierReturnReasons(options);
  Unleashed.Suppliers = new Suppliers(options);
  Unleashed.Taxes = new Taxes(options);
  Unleashed.UnitOfMeasures = new UnitOfMeasures(options);
  Unleashed.Warehouses = new Warehouses(options);
  Unleashed.WarehouseStockTransfers = new WarehouseStockTransfers(options);

  callback(null, Unleashed);
};
