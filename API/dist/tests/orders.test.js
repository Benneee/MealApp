"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _expect = _interopRequireDefault(require("expect"));

var _index = require("../index");

var _orderDummyData = _interopRequireDefault(require("../utils/orderDummyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Order API Test', function () {
  /*
      test to fetch all orders
      test to see if body of response is an object
      test to see if nested data in body of response is an object
  */
  describe('#GET, fetch all the orders', function () {
    it('should return all the orders', function (done) {
      (0, _supertest.default)(_index.app).get('/api/v1/orders').expect(200).expect(function (res) {
        (0, _expect.default)(res.body).toBeAn('object');
        (0, _expect.default)(res.body.data[0]).toBeAn('object');
      }).end(done);
    });
  });
  /*
      test the 'add an order' API
      test to see if the body of response is an object
      test to see if nested data in body of response is an object
  */

  describe('#POST, add an order', function () {
    it('should add a new order', function (done) {
      (0, _supertest.default)(_index.app).post('/api/v1/orders').send(_orderDummyData.default).expect(201).expect(function (res) {
        (0, _expect.default)(res.body).toBeAn('object');
        (0, _expect.default)(res.body.data[0]).toBeAn('object');
      }).end(done);
    });
  });
  /*
      test to edit an order with an existing id
  */

  describe('#PUT, edit an order', function () {
    it('should edit an order by id', function (done) {
      (0, _supertest.default)(_index.app).put('/api/v1/orders/2').send(_orderDummyData.default).expect(202).end(done);
    });
    it('should return a 404 if order id does not exist', function (done) {
      (0, _supertest.default)(_index.app).put('/api/v1/orders/10').send(_orderDummyData.default).expect(404).end(done);
    });
  });
});