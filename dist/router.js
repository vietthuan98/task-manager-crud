"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("./modules/users/user.route"));

var _task = _interopRequireDefault(require("./modules/tasks/task.route"));

var _auth = _interopRequireDefault(require("./modules/auth/auth.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

(0, _user["default"])(router);
(0, _task["default"])(router);
(0, _auth["default"])(router);
var _default = router;
exports["default"] = _default;