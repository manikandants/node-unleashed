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
      it('getById should get Credit Note by id', function(done) {
        unleashed.CreditNotes.getById({
          
        }, 'b5c2574e-0a13-4b40-96d6-f5a5156e2dcd', function(err, body) {
          should(err).be.null();
          done();
        });
      });
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
      it('create should create Customer', function(done) {
        unleashed.Customers.create({
          
        }, function(err, body) {
          should(err).be.null();
          done();
        });
      });
    });
  });
});
