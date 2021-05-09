webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./gigya/index.js":
/*!************************!*\
  !*** ./gigya/index.js ***!
  \************************/
/*! exports provided: GigyaContext, useGigya, GigyaProvider, useGigyaAuth, AuthorizedView, NotAuthorizedView, useShowScreenset, Profile, RegistrationLogin, ScreenContainer, StandaloneScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./gigya/context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GigyaContext", function() { return _context__WEBPACK_IMPORTED_MODULE_0__["GigyaContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useGigya", function() { return _context__WEBPACK_IMPORTED_MODULE_0__["useGigya"]; });

/* harmony import */ var _gigyaProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gigyaProvider */ "./gigya/gigyaProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GigyaProvider", function() { return _gigyaProvider__WEBPACK_IMPORTED_MODULE_1__["GigyaProvider"]; });

/* harmony import */ var _useGigyaAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useGigyaAuth */ "./gigya/useGigyaAuth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useGigyaAuth", function() { return _useGigyaAuth__WEBPACK_IMPORTED_MODULE_2__["useGigyaAuth"]; });

/* harmony import */ var _authorizationView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authorizationView */ "./gigya/authorizationView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthorizedView", function() { return _authorizationView__WEBPACK_IMPORTED_MODULE_3__["AuthorizedView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotAuthorizedView", function() { return _authorizationView__WEBPACK_IMPORTED_MODULE_3__["NotAuthorizedView"]; });

/* harmony import */ var _useScreenset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useScreenset */ "./gigya/useScreenset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useShowScreenset", function() { return _useScreenset__WEBPACK_IMPORTED_MODULE_4__["useShowScreenset"]; });

/* harmony import */ var _screens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screens */ "./gigya/screens.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return _screens__WEBPACK_IMPORTED_MODULE_5__["Profile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegistrationLogin", function() { return _screens__WEBPACK_IMPORTED_MODULE_5__["RegistrationLogin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenContainer", function() { return _screens__WEBPACK_IMPORTED_MODULE_5__["ScreenContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StandaloneScreen", function() { return _screens__WEBPACK_IMPORTED_MODULE_5__["StandaloneScreen"]; });










/***/ }),

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




var ScreenContainerContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
function Screen(_ref) {
  var screenSet = _ref.screenSet,
      startScreen = _ref.startScreen,
      props = _ref.props;

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
  }
};
var Profile = function Profile() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Screen, {
    screenSet: "Default-ProfileUpdate",
    startScreen: "gigya-update-profile-screen",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
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
      lineNumber: 25,
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
      lineNumber: 30,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
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
      lineNumber: 42,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Screen, {
    screenSet: screenSet,
    startScreen: startScreen,
    container: container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.8d24ccf6e014f298af25.hot-update.js.map