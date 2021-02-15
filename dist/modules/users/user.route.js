"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = require("./user.controller");

var _auth = require("../auth/auth.controller");

var _uploadAvatar = _interopRequireDefault(require("../../middleware/uploadAvatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userRoute = function userRoute(router) {
  router.get('/users', _auth.authenticate, _user.getUsers);
  router.get('/users/:id/avatar', _user.getAvatar);
  router.get('/users/profile', _auth.authenticate, _user.getProfile);
  router.get('/users/:id', _auth.authenticate, _user.getUser);
  router.post('/users/profile/avatar', _auth.authenticate, _uploadAvatar["default"].single('avatar'), _user.uploadAvatar, _user.handleErrorUploadAvatar);
  router.post('/users', _auth.authenticate, _user.createUser);
  router.patch('/users/profile', _auth.authenticate, _user.updateProfile);
  router.patch('/users/:id', _auth.authenticate, _user.updateUser);
  router["delete"]('/users/profile/avatar', _auth.authenticate, _user.deleteAvatar);
  router["delete"]('/users/profile', _auth.authenticate, _user.deleteProfile);
  router["delete"]('/users/:id', _auth.authenticate, _user.deleteUser);
};

var _default = userRoute;
exports["default"] = _default;