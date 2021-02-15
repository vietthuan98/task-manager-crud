"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _auth = require("./auth.controller");

var authRoute = function authRoute(router) {
  router.post('/login', _auth.login);
  router.post('/signup', _auth.signUp);
  router.post('/logout', _auth.authenticate, _auth.logOut);
  router.post('/logoutAll', _auth.authenticate, _auth.logOutAll);
};

var _default = authRoute;
exports["default"] = _default;