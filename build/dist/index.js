"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _meal = _interopRequireDefault(require("./routes/meal.route"));

var _order = _interopRequireDefault(require("./routes/order.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// routes
var app = (0, _express.default)();
var port = process.env.PORT || 3000;
app.use(_bodyParser.default.json());
app.get('/', function (req, res) {
  return res.send('Welcome To Book-A-Meal!');
}); // Routes

app.use('/api/v1/meals', _meal.default);
app.use('/api/v1/menu', _meal.default);
app.use('/api/v1/orders', _order.default);
app.listen(port, function () {
  console.log("Server is up on port ".concat(port));
});
module.exports.app = app;