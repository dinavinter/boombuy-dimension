webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: Bar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bar", function() { return Bar; });
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _gigya__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gigya */ "./gigya/index.js");


var _this = undefined,
    _jsxFileName = "D:\\dina\\demo\\boombuy-dimension\\components\\Navbar.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var LinkButton = function LinkButton(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", _extends({}, props, {
    type: "button",
    className: "link-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }), props.children);
};

var Logout = function Logout(props) {
  var _useGigyaAuth = Object(_gigya__WEBPACK_IMPORTED_MODULE_4__["useGigyaAuth"])(),
      logout = _useGigyaAuth.logout;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LinkButton, _extends({}, props, {
    onClick: logout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 12
    }
  }), "Logout");
};

function Bar(_ref) {
  var openScreen = _ref.openScreen;

  var _useGigyaAuth2 = Object(_gigya__WEBPACK_IMPORTED_MODULE_4__["useGigyaAuth"])(),
      account = _useGigyaAuth2.account,
      logout = _useGigyaAuth2.logout;

  var gigya = Object(_gigya__WEBPACK_IMPORTED_MODULE_4__["useGigya"])();
  var accountEmail = account && account.profile && account.profile.email;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
    color: "light",
    light: true,
    expand: "md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavbarBrand"], {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, " Id-Booom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
    className: "mr-auto",
    navbar: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    href: "javascript:;",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, "# ", accountEmail)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    href: "javascript:;",
    onClick: function onClick(e) {
      return openScreen(_gigya__WEBPACK_IMPORTED_MODULE_4__["ScreenSets"].Lite);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 22
    }
  }, "Subscribe")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_gigya__WEBPACK_IMPORTED_MODULE_4__["NotAuthorizedView"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    href: "javascript:;",
    onClick: function onClick(e) {
      return openScreen(_gigya__WEBPACK_IMPORTED_MODULE_4__["ScreenSets"].Login);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, "Login"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_gigya__WEBPACK_IMPORTED_MODULE_4__["AuthorizedView"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    href: "javascript:;",
    onClick: function onClick(e) {
      return openScreen(_gigya__WEBPACK_IMPORTED_MODULE_4__["ScreenSets"].Profile);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, "Profile"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_gigya__WEBPACK_IMPORTED_MODULE_4__["AuthorizedView"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    href: "javascript:;",
    onClick: logout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  }, "Logout"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    href: "javascript:;",
    onClick: function onClick(e) {
      gigya.accounts.auth.fido.login();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }, "Fido Login"))));
}

/***/ })

})
//# sourceMappingURL=index.js.83caec6e252ea1bf2ef5.hot-update.js.map