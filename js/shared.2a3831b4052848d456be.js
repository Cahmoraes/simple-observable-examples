(self.webpackChunkrevisao_10_02_2021=self.webpackChunkrevisao_10_02_2021||[]).push([[712],{228:e=>{e.exports=function(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}},646:(e,r,t)=>{var n=t(228);e.exports=function(e){if(Array.isArray(e))return n(e)}},713:e=>{e.exports=function(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}},860:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},206:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:(e,r,t)=>{var n=t(646),a=t(860),o=t(379),u=t(206);e.exports=function(e){return n(e)||a(e)||o(e)||u()}},8:e=>{function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},379:(e,r,t)=>{var n=t(228);e.exports=function(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}},140:(e,r,t)=>{"use strict";t.d(r,{Z:()=>o});var n=t(8),a=t.n(n);const o={property:function(e,r){try{if("object"!==a()(e))throw new Error("ThisArgs should be an Object Instance");if("object"!==a()(r))throw new Error("handler should be an Object");Object.keys(r).forEach((function(t){if(Array.isArray(r[t]))r[t].forEach((function(r){r(e,t)}));else{var n=r[t];if("function"!=typeof n)throw new Error("decorator should be a function");n(e,t)}}))}catch(e){console.error(e.message)}},method:function(e,r){try{if("function"!=typeof e)throw new Error("Clazz should be a Constructor Function");if("object"!==a()(r))throw new Error("handler should be an Object");Object.keys(r).forEach((function(t){if(Array.isArray(r[t]))r[t].reverse().forEach((function(r){var n=e.prototype[t];if("function"!=typeof n)throw new Error("".concat(t," isn't at prototype of ").concat(e.name));e.prototype[t]=function(){for(var e=arguments.length,a=new Array(e),o=0;o<e;o++)a[o]=arguments[o];return r(n.bind(this),t,a)}}));else{var n=e.prototype[t];if("function"!=typeof n)throw new Error("".concat(t," isn't at prototype of ").concat(e.name));var a=r[t];e.prototype[t]=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return a(n.bind(this),t,r)}}}))}catch(e){console.error(e.message)}}}},898:(e,r,t)=>{"use strict";t.d(r,{Z:()=>D});var n,a,o,u,i,c,s,b,l,f,v,p,m,y,d,g,S,O,h=t(8),w=t.n(h),V=t(319),A=t.n(V),E=t(713),j=t.n(E);function P(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function F(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?P(Object(t),!0).forEach((function(r){j()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const D=(n=function(e){var r=e.state,t=e.getSubscribers;function n(e){return F({},Object.assign(r,e))}function a(){return r.currentValue}return{getObservableValue:a,setObservableValues:function(e){n({prevValue:a()}),function(e){n({currentValue:e})}(e),f.createFnNotifyAll({getSubscribers:t,getObservableValue:a})()},getPrevObservableValue:function(){return r.prevValue},getInitialObservableValue:function(){return r.initialValue}}},a=function(e){var r=e.state,t=e.getSubscribers;function n(){return r.computedValue}return{getObservableValue:n,setObservableValue:function(){var e;e={computedValue:r.computedFn()},F({},Object.assign(r,e)),f.createFnNotifyAll({getSubscribers:t,getObservableValue:n})()}}},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];function r(r){return e=A()(r)}function t(){r([])}function n(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];r([].concat(A()(e),n))}function a(){return A()(e)}function o(r){return e[r]}function u(t){var n=e;"number"==typeof t&&(n=e.filter((function(e,r){return r!==t}))),"function"==typeof t&&(n=e.filter((function(e){return e!==t}))),"object"===w()(t)&&(n=e.filter((function(e){return e()!==t}))),r(n)}return{getElement:o,getElements:a,addElement:n,removeElement:u,clearArray:t}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];function r(r){return e=A()(r)}function t(r){return e.includes(r)}function n(n){!t(n)&&r([].concat(A()(e),[n]))}function a(){return A()(e)}function o(t){r(e.filter((function(e){return e!==t})))}function u(){r([])}return{addSubscriber:n,getSubscribers:a,removeSubscriber:o,clearSubscribers:u}},i=function(e){var r=e.subscribersState,t=e.observableState,n=f.createFnNotifyAll({getSubscribers:r.getSubscribers,getObservableValue:t.getObservableValue});return{subscribe:{get:function(){return f.createFnSubscribe({subscribersState:r,notify:n})},enumerable:!0},prevValue:{get:function(){return t.getPrevObservableValue()},enumerable:!0},initialValue:{get:function(){return t.getInitialObservableValue()},enumerable:!0}}},c=function(e){var r=e.observableState;return{pipe:{get:function(){return function(){var e=f.pipe.apply(f,arguments)(r.getObservableValue());return r.setObservableValues(e),this}},enumerable:!0}}},s=function(e){var r=e.subscribersState,t=e.observableArrayState,n=f.createFnNotifyAll({getSubscribers:r.getSubscribers,getObservableValue:t.getElements});return{subscribe:{get:function(){return f.createFnObservableArraySubscribe({subscribersState:r,notify:n})},enumerable:!0},dispose:{get:function(){return r.clearSubscribers},enumerable:!0},add:{get:function(){return function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];y.createObservableArrayElement({observableArrayState:t,elements:r,notifyAll:n})}},enumerable:!0},remove:{get:function(){return function(e){t.removeElement(e),n()}},enumerable:!0},get:{get:function(){return function(e){if("number"!=typeof e)throw new Error("index should be a type number");return t.getElement(e)}},enumerable:!0},getValue:{get:function(){return function(e){if("number"!=typeof e)throw new Error("index must be a type number");return t.getElement(e)}},enumerable:!0},flatMap:{get:function(){return function(e){if("function"!=typeof e)throw new Error("flatMap should receive a function as callback");return this().map((function(r,t){return e(r(),t)})).reduce((function(e,r){return e.concat(r)}),[])}},enumerable:!0},clear:{get:function(){return function(){t.clearArray(),n(),r.clearSubscribers()}},enumerable:!0}}},b=function(e){var r=e.subscribersState,t=e.observableState,n=e.subscriptionsDependencies,a=f.createFnNotifyAll({getSubscribers:r.getSubscribers,getObservableValue:t.getObservableValue});return{subscribe:{get:function(){return f.createFnComputedSubscribe({subscribersState:r,subscriptionsDependencies:n,notify:a})},enumerable:!0}}},l=function(e){var r=e.cache;return{name:{value:e.fnName},release:{get:function(){return function(){r.clear()}},enumerable:!0}}},f={createFnSubscribe:function(e){var r=e.subscribersState,t=e.notify;return function(e){if("function"!=typeof e)throw new Error("Subscribe should receive a callback function");return r.addSubscriber(e),t(),{dispose:f.createFnDispose({removeSubscriber:r.removeSubscriber,subscriberToRemove:e})}}},createFnComputedSubscribe:function(e){var r=e.subscribersState,t=e.subscriptionsDependencies,n=e.notify;return function(e){if("function"!=typeof e)throw new Error("Subscribe must receive a callback function");return r.addSubscriber(e),n(),{dispose:f.createFnComputedDispose({removeSubscriber:r.removeSubscriber,subscriberToRemove:e,subscriptionsDependencies:t})}}},createFnObservableArraySubscribe:function(e){var r=e.subscribersState,t=e.notify;return function(e){if("function"!=typeof e)throw new Error("Subscribe must receive a callback function");return r.addSubscriber(e),t(),{dispose:f.createFnDispose({removeSubscriber:r.removeSubscriber,subscriberToRemove:e})}}},createFnComputedDispose:function(e){var r=e.removeSubscriber,t=e.subscriberToRemove,n=e.subscriptionsDependencies;return function(){r(t),m.removeComputedDependencies(n)}},createFnNotifyAll:function(e){var r=e.getSubscribers,t=e.getObservableValue;return function(){if(!r().length)return null;r().forEach((function(e){e(t())}))}},createFnDispose:function(e){var r=e.removeSubscriber,t=e.subscriberToRemove;return function(){r(t)}},pipe:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(e){return r.reduce((function(e,r){return r(e)}),e)}},combineProperties:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.reduce((function(e,r){return Object.assign(e,r)}),{})},memoizer:function(e){var r=new Map,t=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];var o=JSON.stringify(n);if(r.has(o))return r.get(o);var u=e.apply(void 0,n);return r.set(o,u),u};return Object.defineProperties(t,l({cache:r,fnName:"".concat(e.name,"M")})),t}},v={createMiddlewareFnNext:function(e){var r=e.observableState,t=e.newParameterValue;return function(e){return r.setObservableValues(e||t),r.getObservableValue()}},createMiddleware:function(e){var r=e.middleware,t=e.observableState,n=e.newParameterValue;return"function"==typeof r&&r.bind(this,t.getObservableValue(),n,v.createMiddlewareFnNext({observableState:t,newParameterValue:n}))}},p=function(e){var r=e.parameterValue;return"function"==typeof r?r():r},m={validateComputedObervableParams:function(e){var r=e.computedFn,t=e.dependencies;if("function"!=typeof r)throw new Error("computedFn must be a function");if(!Array.isArray(t))throw new Error("dependencies must be a Array");if(0===t.length)throw new Error("dependencies is empty");if(!Object.prototype.hasOwnProperty.call(t[0],"subscribe"))throw new Error("dependencie must be a observable")},removeComputedDependencies:function(e){e.map((function(e){return e.dispose()}))}},y={createElementArray:function(e){var r=e.addElement,t=e.element,n=e.notifyAll;r(t),t.subscribe(n)},createObservableArrayElement:function(e){var r=e.observableArrayState,t=e.elements,n=e.notifyAll;if(void 0===t||0===t.length)return[];t.forEach((function(e){return y.createElementArray({addElement:r.addElement,element:O.observable(e),notifyAll:n})}))}},d=function(e){var r=e.observableState,t=e.newParameterValue,n=e.createdMiddleware;if(void 0===t)return r.getObservableValue();if("function"==typeof n&&n(),"function"==typeof t){var a=t(r.getObservableValue());return void 0===a?r.setObservableValues(r.getObservableValue()):r.setObservableValues(a),r.getObservableValue()}return r.setObservableValues(t),r.getObservableValue()},g=function(e){var r=e.dependencies,t=e.observableState,n=function(){return t.setObservableValue()};return{createDependenciesState:function(){return r.map((function(e){return Object.prototype.hasOwnProperty.call(e,"subscribe")&&"function"==typeof e.subscribe&&e.subscribe(n)}))}}},S=function(e){var r=e.observableArrayState,t=e.subscribersState,n=e.newParamValue,a=e.notifyObservableArray;return void 0===n||0===n.length?r.getElements():"function"==typeof n?n(r.getElements()):(r.clearArray(),t.clearSubscribers(),y.createObservableArrayElement({observableArrayState:r,elements:n,notifyAll:a}),void a())},O={observable:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=p({parameterValue:e}),a=u(),o={initialValue:t,prevValue:null,currentValue:t},s=n({state:o,getSubscribers:a.getSubscribers});function b(e){var t=v.createMiddleware({middleware:r,observableState:s,newParameterValue:e});return d({observableState:s,newParameterValue:e,createdMiddleware:t})}return Object.defineProperties(b,f.combineProperties(i({subscribersState:a,observableState:s}),c({observableState:s}))),b},computed:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;m.validateComputedObervableParams({computedFn:e,dependencies:r});var t=u(),n={computedValue:e(),computedFn:e},o=a({state:n,getSubscribers:t.getSubscribers}),c=g({dependencies:r,observableState:o}).createDependenciesState();function s(){return o.getObservableValue()}return Object.defineProperties(s,f.combineProperties(i({subscribersState:t,observableState:o}),b({subscribersState:t,observableState:o,subscriptionsDependencies:c}))),s},observableArray:function(){for(var e=o(),r=u(),t=f.createFnNotifyAll({getSubscribers:r.getSubscribers,getObservableValue:e.getElements}),n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];function c(){for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return S({observableArrayState:e,subscribersState:r,newParamValue:a,notifyObservableArray:t})}return y.createObservableArrayElement({observableArrayState:e,elements:a,notifyAll:t}),Object.defineProperties(c,s({subscribersState:r,observableArrayState:e})),c},memo:function(e){var r=p({parameterValue:e}),t=u(),a=n({state:{initialValue:r,prevValue:null,currentValue:r},getSubscribers:t.getSubscribers});var o=f.memoizer((function(e){return d({observableState:a,newParameterValue:e})}));return Object.defineProperties(o,f.combineProperties(i({subscribersState:t,observableState:a}),c({observableState:a}))),o}})}},0,[[898,955],[140,955]]]);