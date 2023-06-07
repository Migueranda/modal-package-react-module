"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Modal(_ref) {
  var setOpenModal = _ref.setOpenModal;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modalBackground"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modalContainer"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "titleCloseBtn"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      setOpenModal(false);
    }
  }, "X")), /*#__PURE__*/_react.default.createElement("div", {
    className: "title"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "body"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Employee created!")), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      setOpenModal(false);
    },
    id: "cancelBtn"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/CreateEmployee"
  }, "create new employee")), /*#__PURE__*/_react.default.createElement("button", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/EmployeeList"
  }, "See new employee")))));
}
var _default = Modal;
exports.default = _default;