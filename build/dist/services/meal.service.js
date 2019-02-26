"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mealDummyData = _interopRequireDefault(require("../utils/mealDummyData"));

var _meal = _interopRequireDefault(require("../models/meal.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var MealService = {
  fetchAllMeals: function fetchAllMeals() {
    var validMeals = _mealDummyData.default.meals.map(function (meal) {
      var newMeal = new _meal.default();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.size = meal.size;
      newMeal.price = meal.price;
      return newMeal;
    });

    return validMeals;
  },
  addMeal: function addMeal(meal) {
    var mealLength = _mealDummyData.default.meals.length;
    var lastId = _mealDummyData.default.meals[mealLength - 1].id;
    var newId = lastId + 1;
    meal.id = newId;

    _mealDummyData.default.meals.push(meal);

    return _mealDummyData.default.meals;
  },
  getAMealById: function getAMealById(id) {
    var meal = _mealDummyData.default.meals.find(function (meal) {
      return meal.id == id;
    });

    if (meal) {
      return meal;
    } else {
      return "Meal with id: ".concat(id, " does not exist");
    }
  },
  deleteMealById: function deleteMealById(id) {
    var checkId = parseInt(id, Number);

    var newMealList = _mealDummyData.default.meals.filter(function (meal) {
      return meal.id !== checkId;
    });

    var idAvailable = _mealDummyData.default.meals.length !== newMealList.length;
    _mealDummyData.default.meals = newMealList;

    if (id) {
      return idAvailable;
    } else {
      return "Meal with id: ".concat(id, " unavailable");
    }
  },
  editAMeal: function editAMeal(id, meal) {
    var checkId = parseInt(id, Number);

    var newMealList = _mealDummyData.default.meals.filter(function (meal) {
      return meal.id !== checkId;
    });

    var idAvailable = _mealDummyData.default.meals.length !== newMealList.length;
    var editedMeal = {
      id: checkId,
      name: meal.name,
      size: meal.size,
      price: meal.price
    };

    if (idAvailable) {
      _mealDummyData.default.meals = [editedMeal].concat(_toConsumableArray(newMealList));
    }

    return {
      idAvailable: idAvailable,
      editedMeal: editedMeal
    };
  }
};
var _default = MealService;
exports.default = _default;