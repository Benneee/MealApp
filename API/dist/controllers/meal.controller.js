"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meal = _interopRequireDefault(require("../services/meal.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var MealController = {
  fetchAllMeals: function fetchAllMeals(req, res) {
    var allMeals = _meal.default.fetchAllMeals();

    return res.json({
      status: "success",
      data: allMeals
    }).status(200);
  },
  addMeal: function addMeal(req, res) {
    /*
        Expect JSON of the following format:
        {
            name: "food name",
            size: "large",
            price: "900"
        }
      */
    var newMeal = req.body;

    var createdMeal = _meal.default.addMeal(newMeal);

    res.status(201);
    return res.json({
      status: "meal successfully added",
      data: createdMeal
    });
  },
  getSingleMeal: function getSingleMeal(req, res) {
    var id = req.params.id;

    var foundMeal = _meal.default.getAMealById(id);

    var response = {};

    if (_typeof(foundMeal) === 'object') {
      res.status(200);
      response = res.json({
        status: 'success',
        data: foundMeal
      });
    } else {
      res.status(404);
      response = res.json({
        status: 'failed',
        message: "Meal with id: ".concat(id, " does not exist")
      });
    }

    return response;
  },
  editMeal: function editMeal(req, res) {
    /*
       Expect JSON of the following format:
       {
           "name": "food name",
           "size": "large",
           "price": "900"
       }
     */
    var id = req.params.id;
    var entry = req.body;

    var result = _meal.default.editAMeal(id, entry);

    var response = {};
    var status = 0;

    if (result.idAvailable) {
      response = _objectSpread({}, response, {
        status: 'success',
        message: "Meal with id: ".concat(id, " edited successfully."),
        data: result.editedMeal
      });
      status = 202;
    } else {
      response = _objectSpread({}, response, {
        status: 'error',
        message: "Meal with id: ".concat(id, " not found.")
      });
      status = 404;
    }

    return res.status(status).json({
      response: response
    });
  },
  deleteMeal: function deleteMeal(req, res) {
    var id = req.params.id;

    var idAvailable = _meal.default.deleteMealById(id);

    var response = {};
    var status = 0;

    if (idAvailable) {
      response = _objectSpread({}, response, {
        status: 'success',
        message: "Meal with id: ".concat(id, " deleted successfully")
      });
      status = 202;
    } else {
      response = _objectSpread({}, response, {
        status: 'error',
        message: "Meal with id: ".concat(id, " not found.")
      });
      status = 404;
    }

    return res.status(status).json({
      response: response
    });
  }
};
var _default = MealController;
exports.default = _default;