!function(e){function t(t){for(var n,c,i=t[0],a=t[1],l=t[2],d=0,f=[];d<i.length;d++)c=i[d],o[c]&&f.push(o[c][0]),o[c]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(u&&u(t);f.length;)f.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var a=r[i];0!==o[a]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={1:0},s=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="./";var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=a;s.push(["./src/index.tsx",0]),r()}({"./node_modules/css-loader/index.js!./src/components/App/styles.legacy.css":function(e,t,r){(e.exports=r("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,".app {\r\n  align-content: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  justify-content: center;\r\n  margin: 0;\r\n  padding: 0;\r\n  text-align: center;\r\n  width: 100%;\r\n  min-height: 100%;\r\n}\r\n\r\n#root {\r\n  height: 100%;\r\n}\r\n",""])},"./node_modules/css-loader/index.js!./src/styles/root.css":function(e,t,r){(t=e.exports=r("./node_modules/css-loader/lib/css-base.js")(!1)).i(r("./node_modules/css-loader/index.js!./src/styles/variables.css"),""),t.i(r("./node_modules/css-loader/index.js!./src/styles/typography.css"),""),t.push([e.i,"/* This is an example of the escape hatch for PostCSS.\r\n * Ideally you want to avoid using this as much as possible.\r\n *\r\n * However, there *are* cases where vanilla CSS is more appropriate\r\n * so this is still provided as a fallback.\r\n*/\r\n\r\n/* Relative path resolution */\r\n\r\n:root {\r\n  --font-color-override: hsl(0, 0%, 95%);\r\n}\r\n\r\n/* Global HTML rules */\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  background-color: rgb(38, 38, 38);\r\n  color: var(--font-color-override);\r\n}\r\n\r\na {\r\n  color: var(--blue-40);\r\n}\r\n",""])},"./node_modules/css-loader/index.js!./src/styles/typography.css":function(e,t,r){(e.exports=r("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"html {\r\n  font-size: 1em;\r\n}\r\n\r\nbody {\r\n  font-family: Arial, sans-serif;\r\n  font-weight: 400;\r\n  line-height: 1.45;\r\n  color: #333;\r\n}\r\n\r\np {\r\n  margin-bottom: 1.3em;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4 {\r\n  margin: 1.414em 0 0.5em;\r\n  font-weight: inherit;\r\n  line-height: 1.2;\r\n}\r\n\r\nh1 {\r\n  margin-top: 0;\r\n  font-size: 3.157em;\r\n}\r\n\r\nh2 {\r\n  font-size: 2.369em;\r\n}\r\n\r\nh3 {\r\n  font-size: 1.777em;\r\n}\r\n\r\nh4 {\r\n  font-size: 1.333em;\r\n}\r\n\r\nsmall,\r\n.font_small {\r\n  font-size: 0.75em;\r\n}\r\n",""])},"./node_modules/css-loader/index.js!./src/styles/variables.css":function(e,t,r){(e.exports=r("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,":root {\n  --blue-40: #45a1ff;\n  --blue-50: #0a84ff;\n  --blue-60: #0a84ff;\n  --blue-70: #003eaa;\n  --blue-80: #002275;\n  --blue-90: #000f40;\n  --teal-40: #00feff;\n  --teal-50: #00c8d7;\n  --teal-60: #008ea4;\n  --teal-70: #005a71;\n  --teal-80: #002d3e;\n  --m: 4px;\n  --m-s: calc(var(--m) * 2);\n  --m-m: calc(var(--m) * 4);\n  --m-l: calc(var(--m) * 8);\n  --m-xl: calc(var(--m) * 16);\n  --curve: 2px;\n}\n",""])},"./node_modules/css-loader/index.js??ref--5-1!./node_modules/postcss-loader/lib/index.js!./src/components/App/styles.scss":function(e,t,r){(t=e.exports=r("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,":root{--blue-40:#45a1ff;--blue-50:#0a84ff;--blue-60:#0a84ff;--blue-70:#003eaa;--blue-80:#002275;--blue-90:#000f40;--teal-40:#00feff;--teal-50:#00c8d7;--teal-60:#008ea4;--teal-70:#005a71;--teal-80:#002d3e;--m:4px;--m-s:calc(var(--m) * 2);--m-m:calc(var(--m) * 4);--m-l:calc(var(--m) * 8);--m-xl:calc(var(--m) * 16);--curve:2px}@-webkit-keyframes fyrtdLZ2br9PQOqBzEARQ{to{-webkit-transform:rotateX(1turn) rotateY(1turn) rotate(1turn);transform:rotateX(1turn) rotateY(1turn) rotate(1turn)}}@keyframes fyrtdLZ2br9PQOqBzEARQ{to{-webkit-transform:rotateX(1turn) rotateY(1turn) rotate(1turn);transform:rotateX(1turn) rotateY(1turn) rotate(1turn)}}._2NJIZX_RcQUZUpdEbCsXNQ{-webkit-animation:fyrtdLZ2br9PQOqBzEARQ 60s ease-in-out infinite;animation:fyrtdLZ2br9PQOqBzEARQ 60s ease-in-out infinite;border-radius:50%;height:auto;width:200px;margin-bottom:var(--m-l)}._2NJIZX_RcQUZUpdEbCsXNQ,.k0IxfRu8Nb-cdAiNQ4DWp{-ms-flex-item-align:center;align-self:center}.k0IxfRu8Nb-cdAiNQ4DWp{border-radius:calc(var(--curve) * 50);margin:10px 0;color:var(--teal-40);padding:var(--m-l);-webkit-transition:border-radius .3s ease-in;transition:border-radius .3s ease-in}.k0IxfRu8Nb-cdAiNQ4DWp ._2uLTF1NqLRDgFRDDjIM4oF{font-style:italic}.k0IxfRu8Nb-cdAiNQ4DWp:hover{border-radius:var(--curve)}.k0IxfRu8Nb-cdAiNQ4DWp:hover ._2uLTF1NqLRDgFRDDjIM4oF{color:red;text-decoration:underline}._Y5TZDnliC1I-neCaNLFa{display:grid;grid-gap:var(--m-l);grid-template-columns:1fr 1fr 1fr;margin:0 auto;max-width:calc(var(--m) * 240)}",""]),t.locals={robot:"_2NJIZX_RcQUZUpdEbCsXNQ",a:"fyrtdLZ2br9PQOqBzEARQ",themedDiv:"k0IxfRu8Nb-cdAiNQ4DWp",sub:"_2uLTF1NqLRDgFRDDjIM4oF",grid:"_Y5TZDnliC1I-neCaNLFa"}},"./src/actions/index.ts":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.incrementAsync=t.decrement=t.increment=void 0;var n=r("./src/types/index.ts"),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:n.ActionTypes.INCREMENT,value:e}};t.increment=o;t.decrement=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:n.ActionTypes.DECREMENT,value:e}};t.incrementAsync=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return function(r){setTimeout(function(){return r(o(e))},t)}}},"./src/components/App/hello.jpg":function(e,t,r){e.exports=r.p+"./f/afa648da6fc4a46c.jpg"},"./src/components/App/index.tsx":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r("./node_modules/react-hot-loader/index.js");var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r("./node_modules/react/index.js")),o=r("./node_modules/react-router-dom/es/index.js"),s=i(r("./src/components/Echo/index.tsx")),c=i(r("./src/containers/Counter.ts"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,m,y,b=r("./src/components/App/hello.jpg"),v=r("./src/components/App/styles.scss"),h=(r("./src/styles/root.css"),r("./src/components/App/styles.legacy.css"),function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,d(t).apply(this,arguments))}var r,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,n.Component),r=t,(i=[{key:"render",value:function(){return n.createElement("div",{className:"app"},n.createElement("div",{className:v.grid},n.createElement("div",{style:{gridColumn:"1 / 4",marginBottom:"72px"}},n.createElement("h1",null,"jsapp-boilerplate"),n.createElement("div",null,"Find me in"," ",n.createElement("span",{style:{fontFamily:"monospace"}},"src/components/App/index.tsx"))),n.createElement("div",{style:{alignSelf:"center",border:"solid 1px grey",borderRadius:"var(--curve)",margin:"var(--m-m) 0",padding:"var(--m-m)"}},n.createElement(o.Switch,null,n.createElement(o.Route,{path:"/counter",component:c.default}),n.createElement(o.Route,{path:"/",render:function(){return n.createElement(o.Link,{to:"/counter"},"Link to /counter. Click to show counter. Back/Forward buttons work.")}}))),n.createElement("div",{style:{alignSelf:"center"}},n.createElement("img",{className:v.robot,src:b,alt:"Cute robot?"}),n.createElement(s.default,{text:"Hello, world!"})),n.createElement("div",{className:v.themedDiv,style:{border:"solid 1px grey",gridColumn:"3 / 4"}},"This div is themed using ",n.createElement("span",{className:v.sub},"PostCSS")," ","and",n.createElement("span",{className:v.sub},"React's style prop"))))}}])&&l(r.prototype,i),a&&l(r,a),t}());y=void 0,(m="defaultProps")in(p=h)?Object.defineProperty(p,m,{value:y,enumerable:!0,configurable:!0,writable:!0}):p[m]=y,h.defaultProps={match:{url:"unknown"}};var _=h;t.default=_},"./src/components/App/styles.legacy.css":function(e,t,r){var n=r("./node_modules/css-loader/index.js!./src/components/App/styles.legacy.css");"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r("./node_modules/style-loader/lib/addStyles.js")(n,o);n.locals&&(e.exports=n.locals)},"./src/components/App/styles.scss":function(e,t,r){var n=r("./node_modules/css-loader/index.js??ref--5-1!./node_modules/postcss-loader/lib/index.js!./src/components/App/styles.scss");"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r("./node_modules/style-loader/lib/addStyles.js")(n,o);n.locals&&(e.exports=n.locals)},"./src/components/Counter/index.tsx":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r("./node_modules/react/index.js"));function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,i(t).apply(this,arguments))}var r,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(t,n.Component),r=t,(o=[{key:"render",value:function(){return n.createElement("div",null,n.createElement("div",{className:"value"},this.props.value),n.createElement("button",{className:"increment",onClick:this.props.onIncrementClick},"INCREMENT"),n.createElement("button",{className:"decrement",onClick:this.props.onDecrementClick},"DECREMENT"),n.createElement("button",{className:"increment",onClick:this.props.onIncrementClickAsync},"INCREMENT AFTER 1 SECOND"),n.createElement("div",{style:{fontFamily:"monospace"}},"components/Counter/index.tsx"),n.createElement("div",{style:{fontFamily:"monospace"}},"containers/Counter/index.tsx"))}}])&&s(r.prototype,o),l&&s(r,l),t}();t.default=l},"./src/components/Echo/index.tsx":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r("./node_modules/react/index.js"));var o=function(e){return n.createElement("p",{style:{fontStyle:"italic",textAlign:"center"}},e.text)};t.default=o},"./src/containers/Counter.ts":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=r("./node_modules/react-redux/es/index.js"),s=r("./src/actions/index.ts"),c=(n=r("./src/components/Counter/index.tsx"))&&n.__esModule?n:{default:n};var i=(0,o.connect)(function(e){return{value:e.counters.value}},function(e){return{onDecrementClick:function(){return e((0,s.decrement)())},onIncrementClick:function(){return e((0,s.increment)())},onIncrementClickAsync:function(){return e((0,s.incrementAsync)())}}})(c.default);t.default=i},"./src/index.tsx":function(e,t,r){"use strict";var n=m(r("./node_modules/react/index.js")),o=m(r("./node_modules/react-dom/index.js")),s=r("./node_modules/react-redux/es/index.js"),c=r("./node_modules/redux/es/redux.js"),i=p(r("./node_modules/redux-thunk/es/index.js")),a=p(r("./node_modules/history/createBrowserHistory.js")),l=r("./node_modules/react-router-dom/es/index.js"),u=r("./node_modules/react-router-redux/es/index.js"),d=p(r("./src/components/App/index.tsx")),f=p(r("./src/reducers/index.ts"));function p(e){return e&&e.__esModule?e:{default:e}}function m(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({actionsBlacklist:[]}):c.compose,O=(0,c.combineReducers)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){_(e,t,r[t])})}return e}({},f.default,{router:u.routerReducer})),j=(0,a.default)({basename:"/jsapp-boilerplate"}),x=[i.default,(0,u.routerMiddleware)(j)],E=(0,c.createStore)(O,g(c.applyMiddleware.apply(void 0,x))),w=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,v(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,l.Route),t}();o.render(n.createElement(s.Provider,{store:E},n.createElement(u.ConnectedRouter,{history:j},n.createElement(n.Fragment,null,n.createElement(w,{path:"/counter",component:d.default,unusedProp:"unused"}),n.createElement(w,{path:"/",exact:!0,component:d.default,unusedProp:"unused"})))),document.getElementById("root"))},"./src/reducers/counters.ts":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("./src/types/index.ts");function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){s(e,t,r[t])})}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{value:0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.ActionTypes.INCREMENT:return o({},e,{value:e.value+t.value});case n.ActionTypes.DECREMENT:return o({},e,{value:e.value-t.value});default:return e}}},"./src/reducers/index.ts":function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={counters:((n=r("./src/reducers/counters.ts"))&&n.__esModule?n:{default:n}).default};t.default=o},"./src/styles/root.css":function(e,t,r){var n=r("./node_modules/css-loader/index.js!./src/styles/root.css");"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r("./node_modules/style-loader/lib/addStyles.js")(n,o);n.locals&&(e.exports=n.locals)},"./src/types/index.ts":function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.ActionTypes=void 0,t.ActionTypes=n,function(e){e.INCREMENT="INCREMENT",e.DECREMENT="DECREMENT"}(n||(t.ActionTypes=n={}))}});