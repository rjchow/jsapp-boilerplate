webpackHotUpdate(0,{

/***/ "./src/components/Counter/Counter.tsx":
/*!********************************************!*\
  !*** ./src/components/Counter/Counter.tsx ***!
  \********************************************/
/*! exports provided: Counter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Counter", function() { return Counter; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var styles = __webpack_require__(/*! ./counter.scss */ "./src/components/Counter/counter.scss");

var Counter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter() {
    _classCallCheck(this, Counter);

    return _possibleConstructorReturn(this, _getPrototypeOf(Counter).apply(this, arguments));
  }

  _createClass(Counter, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: styles.container
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(styles.value, "value")
      }, this.props.value), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        className: "increment",
        onClick: this.props.onIncrementClick
      }, "INCREMENT"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        className: "decrement",
        onClick: this.props.onDecrementClick
      }, "DECREMENT"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        className: "increment",
        onClick: this.props.onIncrementClickAsync
      }, "INCREMENT AFTER 1 SECOND"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        className: "increment",
        onClick: function onClick() {
          _this.props.onIncrementClickAsyncPromise("/");
        }
      }, "INCREMENT BY HTTP STATUS OF \"/\""), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
        href: "https://github.com/gyng/jsapp-boilerplate/blob/master/src/components/Counter/index.tsx"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: {
          fontFamily: "monospace"
        }
      }, "components/Counter/index.tsx")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
        href: "https://github.com/gyng/jsapp-boilerplate/blob/master/src/containers/Counter.ts"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: {
          fontFamily: "monospace"
        }
      }, "containers/Counter/index.tsx")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
        href: "https://github.com/gyng/jsapp-boilerplate/blob/master/src/reducers/counters.ts"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: {
          fontFamily: "monospace"
        }
      }, "reducers/counters.ts"))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Counter;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

_defineProperty(Counter, "defaultProps", {
  value: 0
});

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Counter, "Counter", "/mnt/d/p/jsapp-boilerplate/src/components/Counter/Counter.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3VudGVyL0NvdW50ZXIudHN4Il0sIm5hbWVzIjpbInN0eWxlcyIsInJlcXVpcmUiLCJDb3VudGVyIiwiY29udGFpbmVyIiwiY2xhc3NOYW1lcyIsInZhbHVlIiwicHJvcHMiLCJvbkluY3JlbWVudENsaWNrIiwib25EZWNyZW1lbnRDbGljayIsIm9uSW5jcmVtZW50Q2xpY2tBc3luYyIsIm9uSW5jcmVtZW50Q2xpY2tBc3luY1Byb21pc2UiLCJmb250RmFtaWx5IiwiUmVhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsNkRBQUQsQ0FBdEI7O0FBVU8sSUFBTUMsT0FBYjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDZCQUdrQjtBQUFBOztBQUNkLGFBQ0U7QUFBSyxpQkFBUyxFQUFFRixNQUFNLENBQUNHO0FBQXZCLFNBQ0U7QUFBSyxpQkFBUyxFQUFFQyxpREFBVSxDQUFDSixNQUFNLENBQUNLLEtBQVIsRUFBZSxPQUFmO0FBQTFCLFNBQ0csS0FBS0MsS0FBTCxDQUFXRCxLQURkLENBREYsRUFLRSxpRUFDRTtBQUFRLGlCQUFTLEVBQUMsV0FBbEI7QUFBOEIsZUFBTyxFQUFFLEtBQUtDLEtBQUwsQ0FBV0M7QUFBbEQscUJBREYsRUFJRTtBQUFRLGlCQUFTLEVBQUMsV0FBbEI7QUFBOEIsZUFBTyxFQUFFLEtBQUtELEtBQUwsQ0FBV0U7QUFBbEQscUJBSkYsRUFPRTtBQUNFLGlCQUFTLEVBQUMsV0FEWjtBQUVFLGVBQU8sRUFBRSxLQUFLRixLQUFMLENBQVdHO0FBRnRCLG9DQVBGLEVBY0U7QUFDRSxpQkFBUyxFQUFDLFdBRFo7QUFFRSxlQUFPLEVBQUUsbUJBQU07QUFDYixlQUFJLENBQUNILEtBQUwsQ0FBV0ksNEJBQVgsQ0FBd0MsR0FBeEM7QUFDRDtBQUpILDZDQWRGLEVBdUJFO0FBQUcsWUFBSSxFQUFDO0FBQVIsU0FDRTtBQUFLLGFBQUssRUFBRTtBQUFFQyxvQkFBVSxFQUFFO0FBQWQ7QUFBWix3Q0FERixDQXZCRixFQTRCRTtBQUFHLFlBQUksRUFBQztBQUFSLFNBQ0U7QUFBSyxhQUFLLEVBQUU7QUFBRUEsb0JBQVUsRUFBRTtBQUFkO0FBQVosd0NBREYsQ0E1QkYsRUFrQ0U7QUFBRyxZQUFJLEVBQUM7QUFBUixTQUNFO0FBQUssYUFBSyxFQUFFO0FBQUVBLG9CQUFVLEVBQUU7QUFBZDtBQUFaLGdDQURGLENBbENGLENBTEYsQ0FERjtBQThDRDtBQWxESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsRUFBNkJDLCtDQUE3Qjs7Z0JBQWFWLE8sa0JBQzBDO0FBQUVHLE9BQUssRUFBRTtBQUFULEM7Ozs7Ozs7Ozs7OzBCQUQxQ0gsTyIsImZpbGUiOiI1NmNiOTFlLTAtd3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3Qgc3R5bGVzID0gcmVxdWlyZShcIi4vY291bnRlci5zY3NzXCIpO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDb3VudGVyUHJvcHMge1xuICBvbkRlY3JlbWVudENsaWNrOiAoKSA9PiB2b2lkO1xuICBvbkluY3JlbWVudENsaWNrOiAoKSA9PiB2b2lkO1xuICBvbkluY3JlbWVudENsaWNrQXN5bmM6ICgpID0+IHZvaWQ7XG4gIG9uSW5jcmVtZW50Q2xpY2tBc3luY1Byb21pc2U6ICh1cmw6IHN0cmluZykgPT4gdm9pZDtcbiAgdmFsdWU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBDb3VudGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElDb3VudGVyUHJvcHMsIHt9PiB7XG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBQYXJ0aWFsPElDb3VudGVyUHJvcHM+ID0geyB2YWx1ZTogMCB9O1xuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLnZhbHVlLCBcInZhbHVlXCIpfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImluY3JlbWVudFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25JbmNyZW1lbnRDbGlja30+XG4gICAgICAgICAgICBJTkNSRU1FTlRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRlY3JlbWVudFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25EZWNyZW1lbnRDbGlja30+XG4gICAgICAgICAgICBERUNSRU1FTlRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbmNyZW1lbnRcIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkluY3JlbWVudENsaWNrQXN5bmN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgSU5DUkVNRU5UIEFGVEVSIDEgU0VDT05EXG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbmNyZW1lbnRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uSW5jcmVtZW50Q2xpY2tBc3luY1Byb21pc2UoXCIvXCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBJTkNSRU1FTlQgQlkgSFRUUCBTVEFUVVMgT0YgXCIvXCJcbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ3luZy9qc2FwcC1ib2lsZXJwbGF0ZS9ibG9iL21hc3Rlci9zcmMvY29tcG9uZW50cy9Db3VudGVyL2luZGV4LnRzeFwiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250RmFtaWx5OiBcIm1vbm9zcGFjZVwiIH19PlxuICAgICAgICAgICAgICBjb21wb25lbnRzL0NvdW50ZXIvaW5kZXgudHN4XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9neW5nL2pzYXBwLWJvaWxlcnBsYXRlL2Jsb2IvbWFzdGVyL3NyYy9jb250YWluZXJzL0NvdW50ZXIudHNcIj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udEZhbWlseTogXCJtb25vc3BhY2VcIiB9fT5cbiAgICAgICAgICAgICAgY29udGFpbmVycy9Db3VudGVyL2luZGV4LnRzeFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9neW5nL2pzYXBwLWJvaWxlcnBsYXRlL2Jsb2IvbWFzdGVyL3NyYy9yZWR1Y2Vycy9jb3VudGVycy50c1wiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250RmFtaWx5OiBcIm1vbm9zcGFjZVwiIH19PnJlZHVjZXJzL2NvdW50ZXJzLnRzPC9kaXY+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=