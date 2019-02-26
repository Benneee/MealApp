"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _menuDummyData = _interopRequireDefault(require("../utils/menuDummyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuService = {
  addMenu: function addMenu(menu) {
    _menuDummyData.default.menu.push(menu);

    return _menuDummyData.default.menu;
  },
  getMenu: function getMenu() {
    return _menuDummyData.default.menu;
  }
};
var _default = MenuService;
exports.default = _default;