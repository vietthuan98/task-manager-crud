"use strict";

require("@babel/polyfill");

var _express = _interopRequireDefault(require("express"));

require("./db/mongoose");

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

var app = (0, _express["default"])();
var port = process.env.PORT;
app.use(_express["default"].json());
app.use('/api', _router["default"]);
app.listen(port, function () {
  console.log('Server run in port: ' + port);
});