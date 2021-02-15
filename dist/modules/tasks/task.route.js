"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _task = require("./task.controller");

var _auth = require("../auth/auth.controller");

var taskRoute = function taskRoute(router) {
  router.get('/tasks', _task.getTasks);
  router.get('/tasks/profile', _auth.authenticate, _task.getTasksByUser);
  router.get('/tasks/:id', _task.getTask);
  router.post('/tasks', _auth.authenticate, _task.createTask);
  router.patch('/tasks/profile/:id', _auth.authenticate, _task.updateTaskByUser);
  router.patch('/tasks/:id', _task.updateTask);
  router["delete"]('/tasks/profile/:id', _auth.authenticate, _task.deleteTaskByUser);
  router["delete"]('/tasks/:id', _task.deleteTask);
};

var _default = taskRoute;
exports["default"] = _default;