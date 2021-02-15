"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticate = authenticate;
exports.logOut = logOut;
exports.logOutAll = logOutAll;
exports.login = login;
exports.signUp = signUp;

var _user = _interopRequireDefault(require("../users/user.model"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _email = require("../../plugins/email");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function authenticate(_x, _x2, _x3) {
  return _authenticate.apply(this, arguments);
}

function _authenticate() {
  _authenticate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var token, decoded, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            token = req.header('Authorization').replace('Bearer ', '');
            decoded = _jsonwebtoken["default"].verify(token, process.env.SECRET_KEY);
            _context.next = 5;
            return _user["default"].findOne({
              _id: decoded._id,
              'tokens.token': token
            });

          case 5:
            user = _context.sent;

            if (user) {
              _context.next = 8;
              break;
            }

            throw {
              message: 'User does not exist'
            };

          case 8:
            req.token = token;
            req.user = user;
            next();
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            res.status(400).send({
              message: 'Please authenticate'
            });

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));
  return _authenticate.apply(this, arguments);
}

function logOut(_x4, _x5) {
  return _logOut.apply(this, arguments);
}

function _logOut() {
  _logOut = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var user, token;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            user = req.user, token = req.token;
            user.tokens = user.tokens.filter(function (_token) {
              return _token.token !== token;
            });
            _context2.next = 5;
            return user.save();

          case 5:
            res.status(200).send();
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            res.status(500).send(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _logOut.apply(this, arguments);
}

function logOutAll(_x6, _x7) {
  return _logOutAll.apply(this, arguments);
}

function _logOutAll() {
  _logOutAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var user;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            user = req.user;
            user.tokens = [];
            _context3.next = 5;
            return user.save();

          case 5:
            res.status(200).send();
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            res.status(500).send(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _logOutAll.apply(this, arguments);
}

function login(_x8, _x9) {
  return _login.apply(this, arguments);
}

function _login() {
  _login = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body, email, password, user, token;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            _context4.next = 4;
            return _user["default"].findByCredentials(email, password);

          case 4:
            user = _context4.sent;
            _context4.next = 7;
            return user.generateAuthToken();

          case 7:
            token = _context4.sent;
            res.status(200).send({
              user: user,
              token: token
            });
            _context4.next = 14;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            res.status(400).send(_context4.t0);

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 11]]);
  }));
  return _login.apply(this, arguments);
}

function signUp(_x10, _x11) {
  return _signUp.apply(this, arguments);
}

function _signUp() {
  _signUp = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var user, token;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            user = new _user["default"](req.body);
            _context5.next = 4;
            return user.save();

          case 4:
            (0, _email.sendWelcomeEmail)(user.email, user.name);
            _context5.next = 7;
            return user.generateAuthToken();

          case 7:
            token = _context5.sent;
            res.status(200).send({
              user: user,
              token: token
            });
            _context5.next = 14;
            break;

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            res.status(400).send(_context5.t0);

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 11]]);
  }));
  return _signUp.apply(this, arguments);
}