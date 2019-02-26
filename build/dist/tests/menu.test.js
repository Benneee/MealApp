"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _expect = _interopRequireDefault(require("expect"));

var _index = require("../index");

var _menuDummyData = _interopRequireDefault(require("../utils/menuDummyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Menu API\'s test', function () {
  /*
      test to get all menu items
      response must be an object
      created menu must also be an object
  */
  describe('#GET, fetch menu API test', function () {
    it('should return all menu items', function (done) {
      (0, _supertest.default)(_index.app).get('/api/v1/menu').expect(200).expect(function (res) {
        (0, _expect.default)(res.body).toBeAn('object');
        (0, _expect.default)(res.body.data[0]).toBeAn('object');
      }).end(done);
    });
  });
  describe('#POST, add Menu API test', function () {
    it('should create a menu for the day', function (done) {
      (0, _supertest.default)(_index.app).post('/api/v1/menu').send(_menuDummyData.default).expect(201).expect(function (res) {
        (0, _expect.default)(res.body).toBeAn('object');
        (0, _expect.default)(res.body.data[0]).toBeAn('object');
      }).end(done);
    });
  });
});