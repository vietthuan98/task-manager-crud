"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateUpdateUser = void 0;

var validateUpdateUser = function validateUpdateUser(fields) {
  var allowedFields = ['name', 'email', 'password', 'age'];
  var isValidOperation = fields.every(function (field) {
    return allowedFields.includes(field);
  });
  return isValidOperation;
};

exports.validateUpdateUser = validateUpdateUser;