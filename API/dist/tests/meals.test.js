"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _expect = _interopRequireDefault(require("expect"));

var _index = require("../index");

var _mealDummyData = _interopRequireDefault(require("../utils/mealDummyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Meal API\'s test', function () {
  /*
  
      test to get all meals
      response must be an object
      created meals must also be of type 'object'  
  */
  describe('#GET, fetch all Meals test', function () {
    it('should return all meals', function (done) {
      (0, _supertest.default)(_index.app).get('/api/v1/meals').expect(200).expect(function (res) {
        (0, _expect.default)(res.body).toBeAn('object');
        (0, _expect.default)(res.body.data[0]).toBeAn('object');
      }).end(done);
    });
  });
  describe('#POST, add meal API test', function () {
    it('should create a meal', function (done) {
      (0, _supertest.default)(_index.app).post('/api/v1/meals').send(_mealDummyData.default).expect(201).expect(function (res) {
        (0, _expect.default)(res.body).toBeAn('object');
        (0, _expect.default)(res.body.data[0]).toBeAn('object').toIncludeKeys(['id', 'name', 'size', 'price']);
      }).end(done);
    });
  });
  describe('#GET, fetch a single meal by id', function () {
    /*
        this test should return a single meal by id
        the next test should return an HTTP code of 204 if meal id doesn't exist
    */
    it('should return a single meal', function (done) {
      (0, _supertest.default)(_index.app).get('/api/v1/meals/1').expect(200).expect(function (res) {
        (0, _expect.default)(res.body).toBeAn('object');
        (0, _expect.default)(res.body.data).toBeAn('object').toIncludeKeys(['id', 'name', 'size', 'price']);
      }).end(done);
    });
    it('should return a code of 404 for an id whose meal doesn\'t exist', function (done) {
      (0, _supertest.default)(_index.app).get('/api/v1/meals/30').expect(404).end(done);
    });
  });
  describe('#PUT, edit an existing meal', function () {
    /*
        this test should return a 202 after an edit
    */
    it('should edit a meal by id successfully', function (done) {
      (0, _supertest.default)(_index.app).put('/api/v1/meals/4').send(_mealDummyData.default).expect(202).end(done);
    });
    /*
     this test should return a 404 if meal with given id is not found
    */

    it('should return a 404 status if id of meal does not exist', function (done) {
      (0, _supertest.default)(_index.app).put('/api/v1/meals').send(_mealDummyData.default).expect(404).end(done);
    });
  });
  describe('#DELETE, delete a meal with a given id', function () {
    /*
        this test should return a 202 when deletion is complete
    */
    it('should return a 202 when deletion of a meal with given id is complete', function (done) {
      (0, _supertest.default)(_index.app).delete('/api/v1/meals/3').expect(202).end(done);
    });
    /*
        this test should return a 404 if meal with given id is not found
    */

    it('should return a 404 if meal id does not exist', function (done) {
      (0, _supertest.default)(_index.app).delete('/api/v1/meals/10').expect(404).end(done);
    });
  });
});