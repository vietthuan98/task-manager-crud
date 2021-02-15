"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

_mongoose["default"].connect(process.env.MONGO_DB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true
});