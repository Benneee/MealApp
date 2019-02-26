"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _order = _interopRequireDefault(require("../services/order.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OrderController = {
  getAllOrders: function getAllOrders(req, res) {
    var allOrders = _order.default.fetchAllOrders();

    return res.json({
      status: "success",
      data: allOrders
    }).status(200);
  },
  addOrder: function addOrder(req, res) {
    /*
        Expect JSON of the following format
        {
            meal_order: "meal_order",
            customer_name: "customer_name",
            customer_id: "customer_id",
            customer_address: "customer_address",
            customer_phone_number: "customer_phone_number",
            customer_address: "customer_address",
            purchase_total: "purchase_total"
        }
    */
    var newOrder = req.body;

    var createdOrder = _order.default.addOrder(newOrder);

    res.status(201);
    return res.json({
      status: "success",
      data: createdOrder
    });
  },
  editOrder: function editOrder(req, res) {
    /*
        Expect JSON of the following format
        {
            meal_order: "meal_order",
            customer_name: "customer_name",
            customer_id: "customer_id",
            customer_address: "customer_address",
            customer_phone_number: "customer_phone_number",
            customer_address: "customer_address",
            purchase_total: "purchase_total"
        }
    */
    var id = req.params.id;
    var entry = req.body;

    var result = _order.default.editAnOrder(id, entry);

    var response = {};
    var status = 0;

    if (result.orderIdAvailable) {
      response = _objectSpread({}, response, {
        status: 'success',
        message: "Order with id: ".concat(id, " edited successfully."),
        data: result.editedOrder
      });
      status = 202;
    } else {
      response = _objectSpread({}, response, {
        status: 'error',
        message: "Order with id: ".concat(id, " not found")
      });
      status = 404;
    }

    return res.status(status).json({
      response: response
    });
  }
};
var _default = OrderController;
exports.default = _default;