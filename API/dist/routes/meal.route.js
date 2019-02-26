"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _meal = _interopRequireDefault(require("../controllers/meal.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// controller
var router = (0, _express.Router)();
router.get('/', _meal.default.fetchAllMeals);
router.post('/', _meal.default.addMeal);
router.put('/:id', _meal.default.editMeal);
router.get('/:id', _meal.default.getSingleMeal);
router.delete('/:id', _meal.default.deleteMeal);
var _default = router;
exports.default = _default;