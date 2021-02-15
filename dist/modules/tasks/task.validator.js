"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateUpdateTask = void 0;

var validateUpdateTask = function validateUpdateTask(fields) {
  var allowedFields = ['description', 'completed'];
  var isValid = fields.every(function (field) {
    return allowedFields.includes(field);
  });
  return isValid;
};

exports.validateUpdateTask = validateUpdateTask;