"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _orderDummyData = _interopRequireDefault(require("../utils/orderDummyData"));

var _order = _interopRequireDefault(require("../models/order.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var OrderService = {
  fetchAllOrders: function fetchAllOrders() {
    var validOrders = _orderDummyData.default.orders.map(function (order) {
      var newOrder = new _order.default();
      newOrder.id = order.id;
      newOrder.meal_order = order.meal_order;
      newOrder.customer_name = order.customer_name;
      newOrder.customer_id = order.customer_id;
      newOrder.customer_address = order.customer_address;
      newOrder.customer_phone_number = order.customer_phone_number;
      newOrder.purchase_total = order.purchase_total;
      return newOrder;
    });

    return validOrders;
  },
  addOrder: function addOrder(order) {
    var orderLength = _orderDummyData.default.orders.length;
    var lastOrderId = _orderDummyData.default.orders[orderLength - 1].id;
    var newOrderId = lastOrderId + 1;
    order.id = newOrderId;

    _orderDummyData.default.orders.push(order);

    return _orderDummyData.default.orders;
  },
  editAnOrder: function editAnOrder(id, order) {
    var checkOrderId = parseInt(id, Number);

    var newOrderList = _orderDummyData.default.orders.filter(function (order) {
      return order.id !== checkOrderId;
    });

    var orderIdAvailable = _orderDummyData.default.orders.length !== newOrderList.length;
    var editedOrder = {
      id: checkOrderId,
      meal_order: order.meal_order,
      customer_name: order.customer_name,
      customer_id: order.customer_id,
      customer_address: order.customer_address,
      customer_phone_number: order.customer_phone_number,
      purchase_total: order.purchase_total
    };

    if (orderIdAvailable) {
      _orderDummyData.default.orders = [editedOrder].concat(_toConsumableArray(newOrderList));
    }

    return {
      editedOrder: editedOrder,
      orderIdAvailable: orderIdAvailable
    };
  }
};
var _default = OrderService;
exports.default = _default;