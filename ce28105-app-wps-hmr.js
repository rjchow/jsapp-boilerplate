webpackHotUpdate("app",{

/***/ "./src/reducers/counter.ts":
/*!*********************************!*\
  !*** ./src/reducers/counter.ts ***!
  \*********************************/
/*! exports provided: counterReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counterReducer", function() { return counterReducer; });
/* harmony import */ var _src_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/actions */ "./src/actions/index.ts");
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typesafe-actions */ "./node_modules/typesafe-actions/dist/index.umd.js");
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var counterReducer = function counterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    value: 0
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_1__["getType"])(_src_actions__WEBPACK_IMPORTED_MODULE_0__["increment"]):
      return _objectSpread({}, state, {
        value: state.value + action.payload.value
      });

    case Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_1__["getType"])(_src_actions__WEBPACK_IMPORTED_MODULE_0__["decrement"]):
      return _objectSpread({}, state, {
        value: state.value - action.payload.value
      });

    default:
      return state;
  }
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(counterReducer, "counterReducer", "/mnt/d/p/jsapp-boilerplate/src/reducers/counter.ts");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvY291bnRlci50cyJdLCJuYW1lcyI6WyJjb3VudGVyUmVkdWNlciIsInN0YXRlIiwidmFsdWUiLCJhY3Rpb24iLCJ0eXBlIiwiZ2V0VHlwZSIsImFjdGlvbnMiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBTU8sSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUdUO0FBQUEsTUFGbkJDLEtBRW1CLHVFQUZLO0FBQUVDLFNBQUssRUFBRTtBQUFULEdBRUw7QUFBQSxNQURuQkMsTUFDbUI7O0FBQ25CLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtDLGdFQUFPLENBQUNDLHNEQUFELENBQVo7QUFDRSwrQkFDS0wsS0FETDtBQUVFQyxhQUFLLEVBQUVELEtBQUssQ0FBQ0MsS0FBTixHQUFjQyxNQUFNLENBQUNJLE9BQVAsQ0FBZUw7QUFGdEM7O0FBSUYsU0FBS0csZ0VBQU8sQ0FBQ0Msc0RBQUQsQ0FBWjtBQUNFLCtCQUNLTCxLQURMO0FBRUVDLGFBQUssRUFBRUQsS0FBSyxDQUFDQyxLQUFOLEdBQWNDLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlTDtBQUZ0Qzs7QUFJRjtBQUNFLGFBQU9ELEtBQVA7QUFaSjtBQWNELENBbEJNOzs7Ozs7Ozs7OzBCQUFNRCxjIiwiZmlsZSI6ImNlMjgxMDUtYXBwLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCJAc3JjL2FjdGlvbnNcIjtcbmltcG9ydCB7IFJvb3RBY3Rpb24gfSBmcm9tIFwiQHNyYy90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0VHlwZSB9IGZyb20gXCJ0eXBlc2FmZS1hY3Rpb25zXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvdW50ZXJzU3RhdGUge1xuICB2YWx1ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgY291bnRlclJlZHVjZXIgPSAoXG4gIHN0YXRlOiBJQ291bnRlcnNTdGF0ZSA9IHsgdmFsdWU6IDAgfSxcbiAgYWN0aW9uOiBSb290QWN0aW9uXG4pOiBJQ291bnRlcnNTdGF0ZSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGdldFR5cGUoYWN0aW9ucy5pbmNyZW1lbnQpOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZhbHVlOiBzdGF0ZS52YWx1ZSArIGFjdGlvbi5wYXlsb2FkLnZhbHVlXG4gICAgICB9O1xuICAgIGNhc2UgZ2V0VHlwZShhY3Rpb25zLmRlY3JlbWVudCk6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdmFsdWU6IHN0YXRlLnZhbHVlIC0gYWN0aW9uLnBheWxvYWQudmFsdWVcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=