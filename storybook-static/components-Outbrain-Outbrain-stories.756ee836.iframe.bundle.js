/*! For license information please see components-Outbrain-Outbrain-stories.756ee836.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkupday_react_components=self.webpackChunkupday_react_components||[]).push([[655],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}})},"./src/components/Outbrain/Outbrain.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Huawei:function(){return Huawei},Web:function(){return Web},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Outbrain_stories}});var _Web$parameters,_Web$parameters2,_Web$parameters2$docs,_Huawei$parameters,_Huawei$parameters2,_Huawei$parameters2$d,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),jsx_runtime=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js")),Outbrain=function Outbrain(_ref){_ref.args;var widgetId=_ref.widgetId,contentUrl=_ref.contentUrl,installationKey=_ref.installationKey;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("div",{className:"OUTBRAIN","data-widget-id":widgetId,"data-ob-contenturl":contentUrl,"data-ob-installation-key":installationKey})})},Outbrain_stories={title:"Form/Outbrain",component:Outbrain},Template=function Template(args){return(0,jsx_runtime.jsx)(Outbrain,(0,objectSpread2.Z)({},args))},resolveUrl=function resolveUrl(url){return window.location.href.replace("http://localhost:3000",url)},Web=Template.bind({});Web.args={widgetId:"MB_30",contentUrl:resolveUrl("https://newsfeed.upday.com/"),installationKey:"DEUPD1KDIH66FLLBKJM3C0O1E"};var Huawei=Template.bind({});Huawei.args={widgetId:"MB_30",contentUrl:resolveUrl("https://newsfeed.upday.com/"),installationKey:"DEUPD1KDIH66FLLBKJM3C0O1E"},Web.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Web.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Web$parameters=Web.parameters)||void 0===_Web$parameters?void 0:_Web$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <Outbrain {...args} />"},null===(_Web$parameters2=Web.parameters)||void 0===_Web$parameters2||null===(_Web$parameters2$docs=_Web$parameters2.docs)||void 0===_Web$parameters2$docs?void 0:_Web$parameters2$docs.source)})}),Huawei.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Huawei.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Huawei$parameters=Huawei.parameters)||void 0===_Huawei$parameters?void 0:_Huawei$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <Outbrain {...args} />"},null===(_Huawei$parameters2=Huawei.parameters)||void 0===_Huawei$parameters2||null===(_Huawei$parameters2$d=_Huawei$parameters2.docs)||void 0===_Huawei$parameters2$d?void 0:_Huawei$parameters2$d.source)})});var __namedExportsOrder=["Web","Huawei"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);