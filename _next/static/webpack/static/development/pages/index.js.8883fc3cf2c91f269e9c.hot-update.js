webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./gigya/screens.js":
/*!**************************!*\
  !*** ./gigya/screens.js ***!
  \**************************/
/*! exports provided: Screen, ScreenSets, Profile, RegistrationLogin, ScreenContainer, StandaloneScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return Screen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenSets", function() { return ScreenSets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationLogin", function() { return RegistrationLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenContainer", function() { return ScreenContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandaloneScreen", function() { return StandaloneScreen; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./gigya/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined,
    _jsxFileName = "D:\\dina\\demo\\boombuy-dimension\\gigya\\screens.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var ScreenContainerContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
function Screen(_ref) {
  var screenSet = _ref.screenSet,
      startScreen = _ref.startScreen,
      props = _objectWithoutProperties(_ref, ["screenSet", "startScreen"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ScreenContainerContext),
      container = _useContext.container;

  var show = Object(___WEBPACK_IMPORTED_MODULE_0__["useShowScreenset"])(screenSet, startScreen, container, props);
  show();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null);
}
var ScreenSets = {
  Profile: {
    screenSet: "Default-ProfileUpdate",
    startScreen: 'gigya-update-profile-screen'
  },
  Register: {
    screenSet: "Default-RegistrationLogin",
    startScreen: 'gigya-register-screen'
  },
  Login: {
    screenSet: "Default-RegistrationLogin",
    startScreen: 'gigya-login-screen'
  },
  Lite: {
    screenSet: "Default-RegistrationLogin",
    startScreen: 'gigya-login-screen'
  }
};
var Profile = function Profile() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Screen, {
    screenSet: "Default-ProfileUpdate",
    startScreen: "gigya-update-profile-screen",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 12
    }
  });
};
var RegistrationLogin = function RegistrationLogin() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Screen, {
    screenSet: "Default-RegistrationLogin",
    startScreen: "gigya-register-screen",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  });
};
var ScreenContainer = function ScreenContainer(_ref2) {
  var children = _ref2.children,
      containerId = _ref2.containerId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(containerId || "default-gigya-screen-container"),
      _useState2 = _slicedToArray(_useState, 2),
      container = _useState2[0],
      setContainer = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ScreenContainerContext.Provider, {
    value: {
      container: container,
      setContainer: setContainer
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  })));
};
function StandaloneScreen(_ref3) {
  var screenSet = _ref3.screenSet,
      startScreen = _ref3.startScreen;
  var container = "gigya-screen-".concat(screenSet, "-").concat(startScreen);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Screen, {
    screenSet: screenSet,
    startScreen: startScreen,
    container: container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.8883fc3cf2c91f269e9c.hot-update.js.map