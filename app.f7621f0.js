!function(e){function t(t){for(var r,c,i=t[0],l=t[1],a=t[2],d=0,f=[];d<i.length;d++)c=i[d],o[c]&&f.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);f.length;)f.shift()();return s.push.apply(s,a||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={1:0},s=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="./";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var u=l;s.push(["./src/index.tsx",0]),n()}({"./config/configValues.js":function(e,t,n){"use strict";e.exports={values:{development:{url:{basePath:"/",publicPath:"/",historyType:"browser"}},github:{url:{basePath:"/",publicPath:"./",historyType:"hash"}},production:{url:{basePath:"/",publicPath:"./",historyType:"browser"}}}}},"./config/index.js":function(e,t,n){"use strict";(function(t){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=n("./config/configValues.js"),s={development:"development",production:"production",github:"github"},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object.keys(s).includes(e)?s[e]:s.development},i=c(t.env.APP_ENV),l=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}({environment:i},o.values[i]);e.exports={ENVIRONMENT:s,getEnvironment:c,config:l}}).call(this,n("./node_modules/process/browser.js"))},"./node_modules/css-loader/index.js!./src/components/App/styles.legacy.css":function(e,t,n){(e.exports=n("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,".app {\r\n  justify-content: flex-start;\r\n  margin: 0;\r\n  padding: var(--m-xl);\r\n}\r\n\r\n#root {\r\n  height: 100%;\r\n}\r\n",""])},"./node_modules/css-loader/index.js!./src/styles/root.css":function(e,t,n){(t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(!1)).i(n("./node_modules/css-loader/index.js!./src/styles/typography.css"),""),t.push([e.i,"/* This is an example of the escape hatch for PostCSS.\r\n * Ideally you want to avoid using this as much as possible.\r\n *\r\n * However, there *are* cases where vanilla CSS is more appropriate\r\n * so this is still provided as a fallback.\r\n*/\r\n\r\n/* Relative path resolution */\r\n\r\n:root {\r\n  --font-color-override: hsl(0, 0%, 0%);\r\n}\r\n\r\n/* Global HTML rules */\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  color: var(--font-color-override);\r\n}\r\n\r\na {\r\n  color: var(--blue-60);\r\n}\r\n",""])},"./node_modules/css-loader/index.js!./src/styles/typography.css":function(e,t,n){(e.exports=n("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"html {\r\n  font-size: 1em;\r\n}\r\n\r\nbody {\r\n  font-family: Arial, sans-serif;\r\n  font-weight: 400;\r\n  line-height: 1.45;\r\n  color: #333;\r\n}\r\n\r\np {\r\n  margin-bottom: 1.3em;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4 {\r\n  margin: 1.414em 0 0.5em;\r\n  font-weight: inherit;\r\n  line-height: 1.2;\r\n}\r\n\r\nh1 {\r\n  margin-top: 0;\r\n  font-size: 3.157em;\r\n}\r\n\r\nh2 {\r\n  font-size: 2.369em;\r\n}\r\n\r\nh3 {\r\n  font-size: 1.777em;\r\n}\r\n\r\nh4 {\r\n  font-size: 1.333em;\r\n}\r\n\r\nsmall,\r\n.font_small {\r\n  font-size: 0.75em;\r\n}\r\n",""])},"./node_modules/css-loader/index.js??ref--5-1!./node_modules/postcss-loader/lib/index.js!./src/components/App/styles.scss":function(e,t,n){(t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,":root{--blue-40:#45a1ff;--blue-50:#0a84ff;--blue-60:#0a84ff;--blue-70:#003eaa;--blue-80:#002275;--blue-90:#000f40;--teal-40:#00feff;--teal-50:#00c8d7;--teal-60:#008ea4;--teal-70:#005a71;--teal-80:#002d3e;--magenta-50:#ff1ad9;--magenta-60:#ed00b5;--magenta-70:#b5007f;--magenta-80:#7d004f;--magenta-90:#440027;--green-50:#30e60b;--green-60:#12bc00;--green-70:#058b00;--green-80:#006504;--green-90:#003706;--yellow-50:#ffe900;--yellow-60:#d7b600;--yellow-70:#a47f00;--yellow-80:#715100;--yellow-90:#3e2800;--red-50:#ff0039;--red-60:#d70022;--red-70:#a4000f;--red-80:#5a0002;--red-90:#3e0200;--orange-50:#ff9400;--orange-60:#d76e00;--orange-70:#a44900;--orange-80:#712b00;--orange-90:#3e1300;--ink-70:#363959;--ink-80:#202340;--ink-90:#0f1126;--grey-10:#f9f9f9;--grey-20:#ededf0;--grey-30:#d7d7db;--grey-40:#b1b1b3;--grey-50:#737373;--grey-60:#4a4a4f;--grey-70:#38383d;--grey-80:#2a2a2e;--grey-90:#0c0c0d;--white:#fff;--black:#000;--m:4px;--m-s:8px;--m-s:calc(var(--m) * 2);--m-m:16px;--m-m:calc(var(--m) * 4);--m-l:32px;--m-l:calc(var(--m) * 8);--m-xl:64px;--m-xl:calc(var(--m) * 16);--curve:2px}@keyframes fyrtdLZ2br9PQOqBzEARQ{to{transform:rotateX(1turn) rotateY(1turn) rotate(1turn)}}._2NJIZX_RcQUZUpdEbCsXNQ{animation:fyrtdLZ2br9PQOqBzEARQ 60s ease-in-out infinite;border-radius:50%;height:auto;width:200px;transition:all 1s}.k0IxfRu8Nb-cdAiNQ4DWp{border-radius:100px;border-radius:calc(var(--curve) * 50);color:#d76e00;color:var(--orange-60);align-self:center;transition:border-radius .3s ease-in}.k0IxfRu8Nb-cdAiNQ4DWp ._2uLTF1NqLRDgFRDDjIM4oF{font-style:italic}.k0IxfRu8Nb-cdAiNQ4DWp:hover{border-radius:2px;border-radius:var(--curve)}.k0IxfRu8Nb-cdAiNQ4DWp:hover ._2uLTF1NqLRDgFRDDjIM4oF{color:red;text-decoration:underline}._Y5TZDnliC1I-neCaNLFa{display:grid;grid-gap:16px;grid-gap:var(--m-m);grid-template-columns:1fr 1fr 1fr;grid-template-rows:1fr 2fr 2fr;margin:0 auto;max-width:960px;max-width:calc(var(--m) * 240)}._Y5TZDnliC1I-neCaNLFa ._2J6H8Y7c5fxcHGabNW7Lz2{grid-column-start:span 3}._Y5TZDnliC1I-neCaNLFa ._2oTSsqqs0CxgdG7fVoPyEf{width:100%;height:100%;outline:2px solid #b1b1b3;outline:solid 2px var(--grey-40);transform-origin:center;transition:all .1s ease-in}._Y5TZDnliC1I-neCaNLFa ._2oTSsqqs0CxgdG7fVoPyEf:hover{outline:5px solid #45a1ff;outline:solid 5px var(--blue-40);transform:scale(1.05)}._Y5TZDnliC1I-neCaNLFa ._2oTSsqqs0CxgdG7fVoPyEf>*{width:90%;height:90%;margin:5%;display:flex;justify-content:center;align-items:center;flex-direction:column}._Y5TZDnliC1I-neCaNLFa ._2oTSsqqs0CxgdG7fVoPyEf:nth-child(2n){grid-column:1/2}._Y5TZDnliC1I-neCaNLFa ._2oTSsqqs0CxgdG7fVoPyEf:nth-child(odd){grid-column:2/3}",""]),t.locals={robot:"_2NJIZX_RcQUZUpdEbCsXNQ",a:"fyrtdLZ2br9PQOqBzEARQ",themedDiv:"k0IxfRu8Nb-cdAiNQ4DWp",sub:"_2uLTF1NqLRDgFRDDjIM4oF",grid:"_Y5TZDnliC1I-neCaNLFa",row:"_2J6H8Y7c5fxcHGabNW7Lz2",box:"_2oTSsqqs0CxgdG7fVoPyEf"}},"./src/actions/index.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.incrementAsync=t.decrement=t.increment=void 0;var r=n("./src/types/index.ts"),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:r.ActionTypes.INCREMENT,value:e}};t.increment=o;t.decrement=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:r.ActionTypes.DECREMENT,value:e}};t.incrementAsync=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return function(n){setTimeout(function(){return n(o(e))},t)}}},"./src/components/App/hello.jpg":function(e,t,n){e.exports=n.p+"./f/afa648da6fc4a46c.jpg"},"./src/components/App/index.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n("./node_modules/react-hot-loader/index.js");var r=n("./config/index.js"),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n("./node_modules/react/index.js")),s=n("./node_modules/react-router-dom/es/index.js"),c=l(n("./src/components/Echo/index.tsx")),i=l(n("./src/containers/Counter.ts"));function l(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var y,b,v,h=n("./src/components/App/hello.jpg"),g=n("./src/components/App/styles.scss"),_=(n("./src/styles/root.css"),n("./src/components/App/styles.legacy.css"),function(e){return o.createElement("div",m({className:g.box},e),e.children)}),x=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,f(t).apply(this,arguments))}var n,l,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.Component),n=t,(l=[{key:"render",value:function(){return o.createElement("div",{className:"app ".concat(g.grid)},o.createElement("div",{className:g.row},o.createElement("h1",null,"jsapp-boilerplate"),o.createElement("div",null,o.createElement("a",{href:"https://github.com/gyng/jsapp-boilerplate"},"GitHub")," · ",o.createElement("span",null,"Find me in ",o.createElement("code",null,"src/components/App/index.tsx")))),o.createElement(_,{className:g.box,style:{alignSelf:"flex-start"}},o.createElement(s.Switch,null,o.createElement(s.Route,{path:"/counter",component:i.default}),o.createElement(s.Route,{path:"/",render:function(){return o.createElement(s.Link,{to:"/counter"},"Link to /counter. Click to show counter. Back/Forward buttons and page refresh work.")}}))),o.createElement(_,null,o.createElement("div",null,o.createElement("img",{className:g.robot,src:h,alt:"Cute robot?"}),o.createElement(c.default,{text:"Hello, world!"}))),o.createElement(_,null,o.createElement("div",{className:g.themedDiv,style:{border:"solid 1px grey"}},"This div is themed using ",o.createElement("span",{className:g.sub},"PostCSS")," ","and",o.createElement("span",{className:g.sub},"React's style prop"))),o.createElement(_,null,o.createElement("div",null,"Configuration ",o.createElement("pre",null,JSON.stringify(r.config,null,2)))))}}])&&u(n.prototype,l),a&&u(n,a),t}();v=void 0,(b="defaultProps")in(y=x)?Object.defineProperty(y,b,{value:v,enumerable:!0,configurable:!0,writable:!0}):y[b]=v,x.defaultProps={match:{url:"unknown"}};var O=x;t.default=O},"./src/components/App/styles.legacy.css":function(e,t,n){var r=n("./node_modules/css-loader/index.js!./src/components/App/styles.legacy.css");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("./node_modules/style-loader/lib/addStyles.js")(r,o);r.locals&&(e.exports=r.locals)},"./src/components/App/styles.scss":function(e,t,n){var r=n("./node_modules/css-loader/index.js??ref--5-1!./node_modules/postcss-loader/lib/index.js!./src/components/App/styles.scss");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("./node_modules/style-loader/lib/addStyles.js")(r,o);r.locals&&(e.exports=r.locals)},"./src/components/Counter/index.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n("./node_modules/react/index.js"));function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,i(t).apply(this,arguments))}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,r.Component),n=t,(o=[{key:"render",value:function(){return r.createElement("div",null,r.createElement("div",{className:"value"},this.props.value),r.createElement("button",{className:"increment",onClick:this.props.onIncrementClick},"INCREMENT"),r.createElement("button",{className:"decrement",onClick:this.props.onDecrementClick},"DECREMENT"),r.createElement("button",{className:"increment",onClick:this.props.onIncrementClickAsync},"INCREMENT AFTER 1 SECOND"),r.createElement("div",{style:{fontFamily:"monospace"}},"components/Counter/index.tsx"),r.createElement("div",{style:{fontFamily:"monospace"}},"containers/Counter/index.tsx"))}}])&&s(n.prototype,o),a&&s(n,a),t}();t.default=a},"./src/components/Echo/index.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n("./node_modules/react/index.js"));var o=function(e){return r.createElement("p",{style:{fontStyle:"italic"}},e.text)};t.default=o},"./src/containers/Counter.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=n("./node_modules/react-redux/es/index.js"),s=n("./src/actions/index.ts"),c=(r=n("./src/components/Counter/index.tsx"))&&r.__esModule?r:{default:r};var i=(0,o.connect)(function(e){return{value:e.counters.value}},function(e){return{onDecrementClick:function(){return e((0,s.decrement)())},onIncrementClick:function(){return e((0,s.increment)())},onIncrementClickAsync:function(){return e((0,s.incrementAsync)())}}})(c.default);t.default=i},"./src/index.tsx":function(e,t,n){"use strict";var r=y(n("./node_modules/react/index.js")),o=y(n("./node_modules/react-dom/index.js")),s=n("./node_modules/react-redux/es/index.js"),c=n("./node_modules/redux/es/redux.js"),i=m(n("./node_modules/redux-thunk/es/index.js")),l=m(n("./node_modules/history/createBrowserHistory.js")),a=m(n("./node_modules/history/createHashHistory.js")),u=n("./node_modules/react-router-dom/es/index.js"),d=n("./node_modules/react-router-redux/es/index.js"),f=m(n("./src/components/App/index.tsx")),p=m(n("./src/reducers/index.ts"));function m(e){return e&&e.__esModule?e:{default:e}}function y(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({actionsBlacklist:[]}):c.compose,O=(0,c.combineReducers)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){_(e,t,n[t])})}return e}({},p.default,{router:d.routerReducer})),j=(0,{browser:l.default,hash:a.default}.hash)({basename:"/"}),E=[i.default,(0,d.routerMiddleware)(j)],w=(0,c.createStore)(O,x(c.applyMiddleware.apply(void 0,E))),P=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,h(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,u.Route),t}();o.render(r.createElement(s.Provider,{store:w},r.createElement(d.ConnectedRouter,{history:j},r.createElement(r.Fragment,null,r.createElement(P,{path:"/counter",component:f.default,unusedProp:"unused"}),r.createElement(P,{path:"/",exact:!0,component:f.default,unusedProp:"unused"})))),document.getElementById("root"))},"./src/reducers/counters.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("./src/types/index.ts");function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){s(e,t,n[t])})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{value:0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.ActionTypes.INCREMENT:return o({},e,{value:e.value+t.value});case r.ActionTypes.DECREMENT:return o({},e,{value:e.value-t.value});default:return e}}},"./src/reducers/index.ts":function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={counters:((r=n("./src/reducers/counters.ts"))&&r.__esModule?r:{default:r}).default};t.default=o},"./src/styles/root.css":function(e,t,n){var r=n("./node_modules/css-loader/index.js!./src/styles/root.css");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("./node_modules/style-loader/lib/addStyles.js")(r,o);r.locals&&(e.exports=r.locals)},"./src/types/index.ts":function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.ActionTypes=void 0,t.ActionTypes=r,function(e){e.INCREMENT="INCREMENT",e.DECREMENT="DECREMENT"}(r||(t.ActionTypes=r={}))}});