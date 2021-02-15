"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTasks = getTasks;
exports.getTask = getTask;
exports.updateTask = updateTask;
exports.deleteTask = deleteTask;
exports.getTasksByUser = getTasksByUser;
exports.createTask = createTask;
exports.updateTaskByUser = updateTaskByUser;
exports.deleteTaskByUser = deleteTaskByUser;

var _task = _interopRequireDefault(require("./task.model"));

var _task2 = require("./task.validator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getTasks(_x, _x2) {
  return _getTasks.apply(this, arguments);
}

function _getTasks() {
  _getTasks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _task["default"].find({});

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
  return _getTasks.apply(this, arguments);
}

function getTask(_x3, _x4) {
  return _getTask.apply(this, arguments);
}

function _getTask() {
  _getTask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _id, result;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _task["default"].findById(_id);

          case 4:
            result = _context2.sent;

            if (result) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(404).send('Task does not exist.'));

          case 7:
            res.status(200).send(result);
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](1);
            res.status(400).send(_context2.t0);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 10]]);
  }));
  return _getTask.apply(this, arguments);
}

function updateTask(_x5, _x6) {
  return _updateTask.apply(this, arguments);
}

function _updateTask() {
  _updateTask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var fields, isValid, _id, task;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            fields = Object.keys(req.body);
            isValid = (0, _task2.validateUpdateTask)(fields);

            if (isValid) {
              _context3.next = 4;
              break;
            }

            return _context3.abrupt("return", res.status(404).send({
              error: 'Invalid params'
            }));

          case 4:
            _context3.prev = 4;
            _id = req.params.id;
            _context3.next = 8;
            return _task["default"].findById(_id);

          case 8:
            task = _context3.sent;

            if (task) {
              _context3.next = 11;
              break;
            }

            return _context3.abrupt("return", res.status(404).send('Task does not exist.'));

          case 11:
            fields.forEach(function (field) {
              task[field] = req.body[field];
            });
            _context3.next = 14;
            return task.save();

          case 14:
            res.status(200).send(task);
            _context3.next = 20;
            break;

          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3["catch"](4);
            res.status(400).send(_context3.t0);

          case 20:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[4, 17]]);
  }));
  return _updateTask.apply(this, arguments);
}

function deleteTask(_x7, _x8) {
  return _deleteTask.apply(this, arguments);
} //task by user profile
//GET /tasks/profile?completed=true


function _deleteTask() {
  _deleteTask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, task;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _task["default"].findByIdAndDelete({
              _id: id
            });

          case 4:
            task = _context4.sent;

            if (task) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.status(404).send('Task does not exist.'));

          case 7:
            res.status(200).send(task);
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](1);
            res.status(400).send(_context4.t0);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 10]]);
  }));
  return _deleteTask.apply(this, arguments);
}

function getTasksByUser(_x9, _x10) {
  return _getTasksByUser.apply(this, arguments);
}

function _getTasksByUser() {
  _getTasksByUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var match, sort, _req$query, completed, limit, skip, sortBy, _sortBy$split, _sortBy$split2, field, order, user;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            match = {};
            sort = {};
            _req$query = req.query, completed = _req$query.completed, limit = _req$query.limit, skip = _req$query.skip, sortBy = _req$query.sortBy;

            if (completed) {
              match.completed = completed === 'true';
            }

            if (sortBy) {
              _sortBy$split = sortBy.split(':'), _sortBy$split2 = _slicedToArray(_sortBy$split, 2), field = _sortBy$split2[0], order = _sortBy$split2[1];
              sort[field] = order === 'asc' ? 1 : -1;
            }

            _context5.prev = 5;
            user = req.user; // c1: const result = await Task.find({ owner: user._id });
            // c2:

            _context5.next = 9;
            return user.populate({
              path: 'tasks',
              match: match,
              options: {
                limit: +limit,
                skip: +skip,
                sort: sort
              }
            }).execPopulate();

          case 9:
            res.status(200).send(user.tasks);
            _context5.next = 15;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](5);
            res.status(400).send(_context5.t0);

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[5, 12]]);
  }));
  return _getTasksByUser.apply(this, arguments);
}

function createTask(_x11, _x12) {
  return _createTask.apply(this, arguments);
}

function _createTask() {
  _createTask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var user, task;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            user = req.user;
            task = new _task["default"](_objectSpread(_objectSpread({}, req.body), {}, {
              owner: user._id
            }));
            _context6.next = 5;
            return task.save();

          case 5:
            res.status(200).send(task);
            _context6.next = 11;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            res.status(400).send(_context6.t0);

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 8]]);
  }));
  return _createTask.apply(this, arguments);
}

function updateTaskByUser(_x13, _x14) {
  return _updateTaskByUser.apply(this, arguments);
}

function _updateTaskByUser() {
  _updateTaskByUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var fields, isValid, user, _id, task;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            fields = Object.keys(req.body);
            isValid = (0, _task2.validateUpdateTask)(fields);

            if (isValid) {
              _context7.next = 4;
              break;
            }

            return _context7.abrupt("return", res.status(404).send({
              error: 'Invalid params'
            }));

          case 4:
            _context7.prev = 4;
            user = req.user;
            _id = req.params.id;
            _context7.next = 9;
            return _task["default"].findOne({
              _id: _id,
              owner: user._id
            });

          case 9:
            task = _context7.sent;

            if (task) {
              _context7.next = 12;
              break;
            }

            return _context7.abrupt("return", res.status(404).send('Task does not exist.'));

          case 12:
            fields.forEach(function (field) {
              task[field] = req.body[field];
            });
            _context7.next = 15;
            return task.save();

          case 15:
            res.status(200).send(task);
            _context7.next = 21;
            break;

          case 18:
            _context7.prev = 18;
            _context7.t0 = _context7["catch"](4);
            res.status(400).send(_context7.t0);

          case 21:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[4, 18]]);
  }));
  return _updateTaskByUser.apply(this, arguments);
}

function deleteTaskByUser(_x15, _x16) {
  return _deleteTaskByUser.apply(this, arguments);
}

function _deleteTaskByUser() {
  _deleteTaskByUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var user, _id, task;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            user = req.user;
            _id = req.params.id;
            _context8.next = 5;
            return _task["default"].findOneAndDelete({
              _id: _id,
              owner: user._id
            });

          case 5:
            task = _context8.sent;

            if (task) {
              _context8.next = 8;
              break;
            }

            return _context8.abrupt("return", res.status(404).send('Task does not exist.'));

          case 8:
            res.status(200).send(task);
            _context8.next = 14;
            break;

          case 11:
            _context8.prev = 11;
            _context8.t0 = _context8["catch"](0);
            res.status(400).send(_context8.t0);

          case 14:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 11]]);
  }));
  return _deleteTaskByUser.apply(this, arguments);
}