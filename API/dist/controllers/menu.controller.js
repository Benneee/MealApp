"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _menu = _interopRequireDefault(require("../services/menu.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuController = {
  getMenu: function getMenu(req, res) {
    var dayMenu = _menu.default.getMenu();

    return res.json({
      status: "success",
      data: dayMenu
    }).status(200);
  },
  addMenu: function addMenu(req, res) {
    /* 
        Expect JSON of the following format:
          {
            date: "the desired date",
            meals: [
                collection of meals (likely 3);
            ]
        }
    
    */
    var newMenu = req.body;

    var createdMenu = _menu.default.addMenu(newMenu);

    res.status(201);
    return res.json({
      status: "new menu successfully created",
      data: createdMenu
    });
  }
};
var _default = MenuController;
exports.default = _default;