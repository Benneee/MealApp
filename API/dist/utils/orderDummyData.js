"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  orders: [{
    id: 1,
    meal_order: [{
      id: 1,
      name: 'Coconut Rice',
      size: 'Large',
      price: "600"
    }, {
      id: 2,
      name: 'Fried Rice',
      size: 'Medium',
      price: "700"
    }],
    customer_name: "Tola Titi",
    customer_id: 1,
    customer_address: "5 address street, place",
    customer_phone_number: "08096785689",
    purchase_total: "1300"
  }, {
    id: 2,
    meal_order: [{
      id: 1,
      name: 'Beans and Dodo',
      size: 'Large',
      price: "300"
    }, {
      id: 2,
      name: 'Amala and Ewedu',
      size: 'Medium',
      price: "500"
    }],
    customer_name: "Bola Tolu",
    customer_id: 2,
    customer_address: "7 address street, place",
    customer_phone_number: "08096785678",
    purchase_total: "800"
  }]
};
exports.default = _default;