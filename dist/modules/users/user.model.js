"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _validator = _interopRequireDefault(require("validator"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _task = _interopRequireDefault(require("../tasks/task.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var userSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    validate: function validate(value) {
      if (!_validator["default"].isEmail(value)) {
        throw {
          message: 'Email is invalid'
        };
      }
    }
  },
  age: {
    type: Number,
    "default": 0,
    validate: function validate(value) {
      if (value < 0) {
        throw {
          message: 'Age must be a positive number.'
        };
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate: function validate(value) {
      if (value.includes('password')) {
        throw {
          message: 'Password cannot contain "password"'
        };
      }
    }
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }],
  avatar: {
    type: Buffer
  }
}, {
  timestamps: true
});
userSchema.virtual('tasks', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'owner'
});

userSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  delete userObject.avatar;
  return userObject;
};

userSchema.statics.findByCredentials = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(email, password) {
    var user, isMatch;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return User.findOne({
              email: email
            });

          case 2:
            user = _context.sent;

            if (user) {
              _context.next = 5;
              break;
            }

            throw {
              message: 'User does not exist.'
            };

          case 5:
            _context.next = 7;
            return _bcryptjs["default"].compare(password, user.password);

          case 7:
            isMatch = _context.sent;

            if (isMatch) {
              _context.next = 10;
              break;
            }

            throw {
              message: 'Password wrong!'
            };

          case 10:
            return _context.abrupt("return", user);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

userSchema.methods.generateAuthToken = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  var token;
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          token = _jsonwebtoken["default"].sign({
            _id: this._id.toString()
          }, process.env.SECRET_KEY);
          this.tokens = this.tokens.concat({
            token: token
          });
          _context2.next = 4;
          return this.save();

        case 4:
          return _context2.abrupt("return", token);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, this);
})); //hash plain text password before save

userSchema.pre('save', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(next) {
    var hashedPassword;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!this.isModified('password')) {
              _context3.next = 5;
              break;
            }

            _context3.next = 3;
            return _bcryptjs["default"].hash(this.password, 8);

          case 3:
            hashedPassword = _context3.sent;
            this.password = hashedPassword;

          case 5:
            next();

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function (_x3) {
    return _ref3.apply(this, arguments);
  };
}()); //delete user task when user is removed

userSchema.pre('delete', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(next) {
    var user;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            user = this;

            _task["default"].deleteMany({
              owner: user._id
            });

            next();

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function (_x4) {
    return _ref4.apply(this, arguments);
  };
}());

var User = _mongoose["default"].model('User', userSchema);

var _default = User;
exports["default"] = _default;