(self.webpackChunkrevisao_10_02_2021=self.webpackChunkrevisao_10_02_2021||[]).push([[712],{228:e=>{e.exports=function(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}},646:(e,r,t)=>{var n=t(228);e.exports=function(e){if(Array.isArray(e))return n(e)}},713:e=>{e.exports=function(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}},860:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},206:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:(e,r,t)=>{var n=t(646),a=t(860),u=t(379),i=t(206);e.exports=function(e){return n(e)||a(e)||u(e)||i()}},8:e=>{function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},379:(e,r,t)=>{var n=t(228);e.exports=function(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}},898:(e,r,t)=>{"use strict";t.d(r,{Z:()=>l});var n=t(8),a=t.n(n),u=t(319),i=t.n(u),o=t(713),b=t.n(o);function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){b()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const l=(f=function(e){var r=e.state,t=e.getSubscribers;function n(e){return c({},Object.assign(r,e))}function a(){return r.currentValue}return{getObservableValue:a,setObservableValues:function(e){n({prevValue:a()}),function(e){n({currentValue:e})}(e),O.createFnNotifyAll({getSubscribers:t,getObservableValue:a})()},getPrevObservableValue:function(){return r.prevValue},getInitialObservableValue:function(){return r.initialValue}}},v=function(e){var r=e.state,t=e.getSubscribers;function n(){return r.computedValue}return{getObservableValue:n,setObservableValue:function(){var e;e={computedValue:r.computedFn()},c({},Object.assign(r,e)),O.createFnNotifyAll({getSubscribers:t,getObservableValue:n})()}}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];function r(r){return e=i()(r)}function t(){r([])}function n(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];r([].concat(i()(e),n))}function u(){return e}function o(r){return e[r]}function b(t){var n=e;"number"==typeof t&&(n=e.filter((function(e,r){return r!==t}))),"function"==typeof t&&(n=e.filter((function(e){return e!==t}))),"object"===a()(t)&&(n=e.filter((function(e){return e()!==t}))),r(n)}return{getElement:o,getElements:u,addElement:n,removeElement:b,clearArray:t}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];function r(r){return e=i()(r)}function t(r){return e.includes(r)}function n(n){!t(n)&&r([].concat(i()(e),[n]))}function a(){return i()(e)}function u(t){r(e.filter((function(e){return e!=t})))}function o(){r([])}return{addSubscriber:n,getSubscribers:a,removeSubscriber:u,clearSubscribers:o}},d=function(e){var r=e.subscribersState,t=e.observableState,n=O.createFnNotifyAll({getSubscribers:r.getSubscribers,getObservableValue:t.getObservableValue});return{subscribe:{get:function(){return O.createFnSubscribe({subscribersState:r,notify:n})},enumerable:!0},prevValue:{get:function(){return t.getPrevObservableValue()},enumerable:!0},initialValue:{get:function(){return t.getInitialObservableValue()},enumerable:!0}}},y=function(e){var r=e.observableState;return{pipe:{get:function(){return function(){var e=O.pipe.apply(O,arguments)(r.getObservableValue());return r.setObservableValues(e),this}},enumerable:!0}}},S=function(e){var r=e.subscribersState,t=e.observableArrayState,n=O.createFnNotifyAll({getSubscribers:r.getSubscribers,getObservableValue:t.getElements});return{subscribe:{get:function(){return O.createFnObservableArraySubscribe({subscribersState:r,notify:n})},enumerable:!0},dispose:{get:function(){return r.clearSubscribers},enumerable:!0},add:{get:function(){return function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];A.createObservableArrayElement({observableArrayState:t,elements:r,notifyAll:n})}},enumerable:!0},remove:{get:function(){return function(e){t.removeElement(e),n()}},enumerable:!0},get:{get:function(){return function(e){if("number"!=typeof e)throw new Error("index should be a type number");return t.getElement(e)}},enumerable:!0},getValue:{get:function(){return function(e){if("number"!=typeof e)throw new Error("index must be a type number");var r=t.getElement(e);if(r)return r()}},enumerable:!0},flatMap:{get:function(){return function(e){if("function"!=typeof e)throw new Error("flatMap should receive a function as callback");return this().map((function(r,t){return e(r(),t)})).reduce((function(e,r){return e.concat(r)}),[])}},enumerable:!0},clear:{get:function(){return function(){t.clearArray(),n(),r.clearSubscribers()}},enumerable:!0}}},g=function(e){var r=e.subscribersState,t=e.observableState,n=e.subscriptionsDependencies,a=O.createFnNotifyAll({getSubscribers:r.getSubscribers,getObservableValue:t.getObservableValue});return{subscribe:{get:function(){return O.createFnComputedSubscribe({subscribersState:r,subscriptionsDependencies:n,notify:a})},enumerable:!0}}},O={createFnSubscribe:function(e){var r=e.subscribersState,t=e.notify;return function(e){if("function"!=typeof e)throw new Error("Subscribe should receive a callback function");return r.addSubscriber(e),t(),{dispose:O.createFnDispose({removeSubscriber:r.removeSubscriber,subscriberToRemove:e})}}},createFnComputedSubscribe:function(e){var r=e.subscribersState,t=e.subscriptionsDependencies,n=e.notify;return function(e){if("function"!=typeof e)throw new Error("Subscribe must receive a callback function");return r.addSubscriber(e),n(),{dispose:O.createFnComputedDispose({removeSubscriber:r.removeSubscriber,subscriberToRemove:e,subscriptionsDependencies:t})}}},createFnObservableArraySubscribe:function(e){var r=e.subscribersState,t=e.notify;return function(e){if("function"!=typeof e)throw new Error("Subscribe must receive a callback function");return r.addSubscriber(e),t(),{dispose:O.createFnDispose({removeSubscriber:r.removeSubscriber,subscriberToRemove:e})}}},createFnComputedDispose:function(e){var r=e.removeSubscriber,t=e.subscriberToRemove,n=e.subscriptionsDependencies;return function(){r(t),V.removeComputedDependencies(n)}},createFnNotifyAll:function(e){var r=e.getSubscribers,t=e.getObservableValue;return function(){if(!r().length)return null;r().map((function(e){e(t())}))}},createFnDispose:function(e){var r=e.removeSubscriber,t=e.subscriberToRemove;return function(){r(t)}},pipe:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(e){return r.reduce((function(e,r){return r(e)}),e)}},combineProperties:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.reduce((function(e,r){return Object.assign(e,r)}),{})},memoizer:function(e){var r=new Map,t=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];var u=JSON.stringify(n);if(r.has(u))return r.get(u);var i=e.apply(void 0,n);return r.set(u,i),i};return Object.defineProperties(t,function(e){var r=e.cache;return{name:{value:e.fnName},release:{get:function(){return function(){r.clear()}},enumerable:!0}}}({cache:r,fnName:"".concat(e.name,"M")})),t}},w={createMiddlewareFnNext:function(e){var r=e.observableState,t=e.newParameterValue;return function(e){return r.setObservableValues(e||t),r.getObservableValue()}},createMiddleware:function(e){var r=e.middleware,t=e.observableState,n=e.newParameterValue;return"function"==typeof r&&r.bind(this,t.getObservableValue(),n,w.createMiddlewareFnNext({observableState:t,newParameterValue:n}))}},V={validateComputedObervableParams:function(e){var r=e.computedFn,t=e.dependencies;if("function"!=typeof r)throw new Error("computedFn must be a function");if(!Array.isArray(t))throw new Error("dependencies must be a Array");if(0===t.length)throw new Error("dependencies is empty");if(!t[0].hasOwnProperty("subscribe"))throw new Error("dependencie must be a observable")},removeComputedDependencies:function(e){e.map((function(e){return e.dispose()}))}},A={createElementArray:function(e){var r=e.addElement,t=e.element,n=e.notifyAll;r(t),t.subscribe(n)},createObservableArrayElement:function(e){var r=e.observableArrayState,t=e.elements,n=e.notifyAll;if(void 0===t||0===t.length)return[];t.forEach((function(e){return A.createElementArray({addElement:r.addElement,element:j.observable(e),notifyAll:n})}))}},h=function(e){var r=e.observableState,t=e.newParameterValue,n=e.createdMiddleware;if(void 0===t)return r.getObservableValue();if("function"==typeof n&&n(),"function"==typeof t){var a=t(r.getObservableValue());return void 0===a?r.setObservableValues(r.getObservableValue()):r.setObservableValues(a),r.getObservableValue()}return r.setObservableValues(t),r.getObservableValue()},E=function(e){var r=e.dependencies,t=e.observableState,n=function(){return t.setObservableValue()};return{createDependenciesState:function(){return r.map((function(e){return e.hasOwnProperty("subscribe")&&"function"==typeof e.subscribe&&e.subscribe(n)}))}}},P=function(e){var r=e.observableArrayState,t=e.subscribersState,n=e.newParamValue,a=e.notifyObservableArray;return void 0===n||0===n.length?r.getElements():"function"==typeof n?n(r.getElements()):(r.clearArray(),t.clearSubscribers(),A.createObservableArrayElement({observableArrayState:r,elements:n,notifyAll:a}),void a())},j={observable:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=m(),n={initialValue:e,prevValue:null,currentValue:e},a=f({state:n,getSubscribers:t.getSubscribers});function u(e){var t=w.createMiddleware({middleware:r,observableState:a,newParameterValue:e});return h({observableState:a,newParameterValue:e,createdMiddleware:t})}return Object.defineProperties(u,O.combineProperties(d({subscribersState:t,observableState:a}),y({observableState:a}))),u},computed:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;V.validateComputedObervableParams({computedFn:e,dependencies:r});var t=m(),n={computedValue:e(),computedFn:e},a=v({state:n,getSubscribers:t.getSubscribers}),u=E({dependencies:r,observableState:a}).createDependenciesState();function i(){return a.getObservableValue()}return Object.defineProperties(i,O.combineProperties(d({subscribersState:t,observableState:a}),g({subscribersState:t,observableState:a,subscriptionsDependencies:u}))),i},observableArray:function(){for(var e=p(),r=m(),t=O.createFnNotifyAll({getSubscribers:r.getSubscribers,getObservableValue:e.getElements}),n=arguments.length,a=new Array(n),u=0;u<n;u++)a[u]=arguments[u];function i(){for(var n=arguments.length,a=new Array(n),u=0;u<n;u++)a[u]=arguments[u];return P({observableArrayState:e,subscribersState:r,newParamValue:a,notifyObservableArray:t})}return A.createObservableArrayElement({observableArrayState:e,elements:a,notifyAll:t}),Object.defineProperties(i,S({subscribersState:r,observableArrayState:e})),i},memo:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=m(),n={initialValue:e,prevValue:null,currentValue:e},a=f({state:n,getSubscribers:t.getSubscribers});function u(e){var t=w.createMiddleware({middleware:r,observableState:a,newParameterValue:e});return h({observableState:a,newParameterValue:e,createdMiddleware:t})}var i=O.memoizer(u);return Object.defineProperties(i,O.combineProperties(d({subscribersState:t,observableState:a}),y({observableState:a}))),i}});var f,v,p,m,d,y,S,g,O,w,V,A,h,E,P,j}},0,[[898,955]]]);