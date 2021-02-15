"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendCancellationEmail = exports.sendWelcomeEmail = void 0;

var _mail = _interopRequireDefault(require("@sendgrid/mail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

_mail["default"].setApiKey(process.env.SENDGRID_API_KEY);

var sendWelcomeEmail = function sendWelcomeEmail(email, name) {
  _mail["default"].send({
    to: email,
    from: 'vietthuan98@gmail.com',
    subject: 'Thank for joining in.',
    text: "Welcome to the app, ".concat(name, ". Let me know how you get along with the app.")
  });
};

exports.sendWelcomeEmail = sendWelcomeEmail;

var sendCancellationEmail = function sendCancellationEmail(email, name) {
  _mail["default"].send({
    to: email,
    from: 'vietthuan98@gmail.com',
    subject: 'Sorry to see you go!',
    text: "Goodbye, ".concat(name, ". I hope to see you back sometime soon.")
  });
};

exports.sendCancellationEmail = sendCancellationEmail;