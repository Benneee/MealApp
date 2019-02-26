"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('API Test', function () {
  it('should return Welcome To Book-A-Meal! as response', function (done) {
    (0, _supertest.default)(_index.app).get('/').expect(200).expect('Welcome To Book-A-Meal!').end(done);
  });
});