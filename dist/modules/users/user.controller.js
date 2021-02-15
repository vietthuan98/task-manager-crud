"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsers = getUsers;
exports.getProfile = getProfile;
exports.getUser = getUser;
exports.createUser = createUser;
exports.updateProfile = updateProfile;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.deleteProfile = deleteProfile;
exports.uploadAvatar = uploadAvatar;
exports.handleErrorUploadAvatar = handleErrorUploadAvatar;
exports.deleteAvatar = deleteAvatar;
exports.getAvatar = getAvatar;

var _user = _interopRequireDefault(require("./user.model"));

var _user2 = require("./user.validator");

var _sharp = _interopRequireDefault(require("sharp"));

var _email = require("../../plugins/email");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getUsers(_x, _x2) {
  return _getUsers.apply(this, arguments);
}

function _getUsers() {
  _getUsers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _user["default"].find({});

          case 3:
            result = _context.sent;
            res.status(200).send(result);
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            res.status(400).send(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getUsers.apply(this, arguments);
}

function getProfile(_x3, _x4) {
  return _getProfile.apply(this, arguments);
}

function _getProfile() {
  _getProfile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            res.send(req.user);

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getProfile.apply(this, arguments);
}

function getUser(_x5, _x6) {
  return _getUser.apply(this, arguments);
}

function _getUser() {
  _getUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _id, result;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _user["default"].findById(_id);

          case 4:
            result = _context3.sent;

            if (result) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.status(404).send('User does not exist.'));

          case 7:
            res.status(200).send(result);
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](1);
            res.status(400).send(_context3.t0);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 10]]);
  }));
  return _getUser.apply(this, arguments);
}

function createUser(_x7, _x8) {
  return _createUser.apply(this, arguments);
}

function _createUser() {
  _createUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var user;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            user = new _user["default"](req.body);
            _context4.next = 4;
            return user.save();

          case 4:
            res.status(200).send(user);
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            res.status(400).send(_context4.t0);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return _createUser.apply(this, arguments);
}

function updateProfile(_x9, _x10) {
  return _updateProfile.apply(this, arguments);
}

function _updateProfile() {
  _updateProfile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var fields, isValidOperation, user;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            fields = Object.keys(req.body);
            isValidOperation = (0, _user2.validateUpdateUser)(fields);

            if (isValidOperation) {
              _context5.next = 4;
              break;
            }

            return _context5.abrupt("return", res.status(404).send({
              error: 'Invalid params'
            }));

          case 4:
            _context5.prev = 4;
            user = req.user;
            fields.forEach(function (field) {
              user[field] = req.body[field];
            });
            _context5.next = 9;
            return user.save();

          case 9:
            res.status(200).send(user);
            _context5.next = 15;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](4);
            res.status(400).send(_context5.t0);

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[4, 12]]);
  }));
  return _updateProfile.apply(this, arguments);
}

function updateUser(_x11, _x12) {
  return _updateUser.apply(this, arguments);
}

function _updateUser() {
  _updateUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var fields, isValidOperation, _id, user;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            fields = Object.keys(req.body);
            isValidOperation = (0, _user2.validateUpdateUser)(fields);

            if (isValidOperation) {
              _context6.next = 4;
              break;
            }

            return _context6.abrupt("return", res.status(404).send({
              error: 'Invalid params'
            }));

          case 4:
            _id = req.params.id;
            _context6.prev = 5;
            _context6.next = 8;
            return _user["default"].findById(_id);

          case 8:
            user = _context6.sent;

            if (user) {
              _context6.next = 11;
              break;
            }

            return _context6.abrupt("return", res.status(404).send('User does not exist.'));

          case 11:
            fields.forEach(function (field) {
              user[field] = req.body[field];
            });
            _context6.next = 14;
            return user.save();

          case 14:
            res.status(200).send(user);
            _context6.next = 20;
            break;

          case 17:
            _context6.prev = 17;
            _context6.t0 = _context6["catch"](5);
            res.status(400).send(_context6.t0);

          case 20:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[5, 17]]);
  }));
  return _updateUser.apply(this, arguments);
}

function deleteUser(_x13, _x14) {
  return _deleteUser.apply(this, arguments);
}

function _deleteUser() {
  _deleteUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, user;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            _context7.prev = 1;
            _context7.next = 4;
            return _user["default"].findByIdAndDelete({
              _id: id
            });

          case 4:
            user = _context7.sent;

            if (user) {
              _context7.next = 7;
              break;
            }

            return _context7.abrupt("return", res.status(404).send('User does not exist.'));

          case 7:
            (0, _email.sendCancellationEmail)(user.email, user.name);
            res.status(200).send({
              message: 'User has been deleted'
            });
            _context7.next = 14;
            break;

          case 11:
            _context7.prev = 11;
            _context7.t0 = _context7["catch"](1);
            res.status(400).send(_context7.t0);

          case 14:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 11]]);
  }));
  return _deleteUser.apply(this, arguments);
}

function deleteProfile(_x15, _x16) {
  return _deleteProfile.apply(this, arguments);
}

function _deleteProfile() {
  _deleteProfile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var user;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            user = req.user;
            _context8.next = 4;
            return user.remove();

          case 4:
            (0, _email.sendCancellationEmail)(user.email, user.name);
            res.status(200).send({
              message: 'User has been deleted'
            });
            _context8.next = 11;
            break;

          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](0);
            res.status(400).send(_context8.t0);

          case 11:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 8]]);
  }));
  return _deleteProfile.apply(this, arguments);
}

function uploadAvatar(_x17, _x18) {
  return _uploadAvatar.apply(this, arguments);
}

function _uploadAvatar() {
  _uploadAvatar = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    var user, file, avatarBuffer;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            user = req.user, file = req.file;
            _context9.next = 4;
            return (0, _sharp["default"])(file.buffer).resize({
              width: 250,
              height: 250
            }).png().toBuffer();

          case 4:
            avatarBuffer = _context9.sent;
            user.avatar = avatarBuffer;
            _context9.next = 8;
            return user.save();

          case 8:
            res.status(200).send({
              message: 'Avatar uploaded'
            });
            _context9.next = 14;
            break;

          case 11:
            _context9.prev = 11;
            _context9.t0 = _context9["catch"](0);
            res.status(400).send(_context9.t0);

          case 14:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 11]]);
  }));
  return _uploadAvatar.apply(this, arguments);
}

function handleErrorUploadAvatar(_x19, _x20, _x21, _x22) {
  return _handleErrorUploadAvatar.apply(this, arguments);
}

function _handleErrorUploadAvatar() {
  _handleErrorUploadAvatar = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(err, req, res, next) {
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            res.status(400).send({
              error: err.message
            });

          case 1:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _handleErrorUploadAvatar.apply(this, arguments);
}

function deleteAvatar(_x23, _x24) {
  return _deleteAvatar.apply(this, arguments);
}

function _deleteAvatar() {
  _deleteAvatar = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(req, res) {
    var user;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            user = req.user;
            user.avatar = undefined;
            _context11.next = 5;
            return user.save();

          case 5:
            res.status(200).send({
              message: 'Avatar has been deleted successfully'
            });
            _context11.next = 11;
            break;

          case 8:
            _context11.prev = 8;
            _context11.t0 = _context11["catch"](0);
            res.status(400).send(_context11.t0);

          case 11:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 8]]);
  }));
  return _deleteAvatar.apply(this, arguments);
}

function getAvatar(_x25, _x26) {
  return _getAvatar.apply(this, arguments);
}

function _getAvatar() {
  _getAvatar = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(req, res) {
    var _id, user;

    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            _id = req.params.id;
            _context12.next = 4;
            return _user["default"].findById(_id);

          case 4:
            user = _context12.sent;

            if (!(!user || !user.avatar)) {
              _context12.next = 7;
              break;
            }

            return _context12.abrupt("return", new Error('Avatar does not exist.'));

          case 7:
            res.set('Content-type', 'image/jpg');
            res.status(200).send(user.avatar);
            _context12.next = 14;
            break;

          case 11:
            _context12.prev = 11;
            _context12.t0 = _context12["catch"](0);
            res.status(400).send(_context12.t0);

          case 14:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[0, 11]]);
  }));
  return _getAvatar.apply(this, arguments);
}