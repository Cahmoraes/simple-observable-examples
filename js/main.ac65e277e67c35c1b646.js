(self.webpackChunkrevisao_10_02_2021=self.webpackChunkrevisao_10_02_2021||[]).push([[179],{1506:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},8926:e=>{function t(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}e.exports=function(e){return function(){var n=this,r=arguments;return new Promise((function(o,i){var a=e.apply(n,r);function s(e){t(a,o,i,s,c,"next",e)}function c(e){t(a,o,i,s,c,"throw",e)}s(void 0)}))}}},4575:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},9100:(e,t,n)=>{var r=n(9489),o=n(7067);function i(t,n,a){return o()?e.exports=i=Reflect.construct:e.exports=i=function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&r(i,n.prototype),i},i.apply(null,arguments)}e.exports=i},3913:e=>{function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}},9754:e=>{function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},2205:(e,t,n)=>{var r=n(9489);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},430:e=>{e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},7067:e=>{e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},8585:(e,t,n)=>{var r=n(8),o=n(1506);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},9489:e=>{function t(n,r){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(n,r)}e.exports=t},5957:(e,t,n)=>{var r=n(9754),o=n(9489),i=n(430),a=n(9100);function s(t){var n="function"==typeof Map?new Map:void 0;return e.exports=s=function(e){if(null===e||!i(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return a(e,arguments,r(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o(t,e)},s(t)}e.exports=s},7757:(e,t,n)=>{e.exports=n(5666)},2097:(e,t,n)=>{"use strict";var r=n(4575),o=n.n(r),i=n(3913),a=n.n(i),s=n(2205),c=n.n(s),l=n(8585),u=n.n(l),h=n(9754),f=n.n(h),p=n(5957),d=n.n(p);const v=function(){return"/".concat("simple-observable-examples")};var m=n(9898),b=(window.location.pathname.slice(1)||"").replace("/",""),y=m.Z.observable(b,(function(e,t,n){n(t.replace("/",""))})),g=new(function(){function e(){return o()(this,e),e.instance||(e.instance=this),e.instance}return a()(e,[{key:"route",get:function(){return y}},{key:"setRoute",value:function(e){y(e)}},{key:"navigate",value:function(e){!function(e){window.history.pushState({},document.title,"".concat(window.location.origin,"/").concat(e))}(e.replace("/","")),this.setRoute(e)}}]),e}());Object.freeze(g);const w=g;var x=function(e){c()(i,e);var t,n,r=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=f()(t);if(n){var o=f()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return u()(this,e)});function i(){var e;o()(this,i);var t=(e=r.call(this)).getAttribute("href");return e.setAttribute("href","".concat(v()).concat(t)),e._path=e.getAttribute("href"),e}return a()(i,[{key:"connectedCallback",value:function(){var e=this;this.addEventListener("click",(function(t){t.preventDefault(),w.navigate(e._path)}))}}]),i}(d()(HTMLAnchorElement));window.customElements.define("app-link",x,{extends:"a"});var k=n(319),_=n.n(k),O=n(9499),L=n.n(O),E=function(){function e(t){o()(this,e),this._element=t}return a()(e,[{key:"init",value:function(){throw new Error("Init deve ser implementado")}}]),e}(),M=n(4364),R=n.n(M);var C,j=function(e){c()(i,e);var t,n,r=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=f()(t);if(n){var o=f()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return u()(this,e)});function i(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.getElementById("menu");return o()(this,i),(t=r.call(this,n))._router=e,t._config={title:t.titleSpinner()},t.$_activeItem=m.Z.observable(),t._menuItems=[],t._activeClass="active",t._menuHamburguer=null,t._navMenu=null,t._menuContainer=null,t}return a()(i,[{key:"render",value:function(){return this._element.insertAdjacentHTML("beforeend",L()(this._config))}},{key:"subscribeObservable",value:function(){var e=this;this.$_activeItem.subscribe((function(t){t&&(e._menuItems.forEach((function(t){return t.classList.remove(e._activeClass)})),t.classList.add(e._activeClass),t.parentElement.classList.add(e._activeClass))}))}},{key:"getElements",value:function(){this._menuItems=_()(this._element.querySelectorAll("li")),this._menuHamburguer=this._element.querySelector('[data-menu="hamburguer"]'),this._navMenu=this._element.querySelector('[data-menu="nav"]'),this._menuContainer=this._element.querySelector('[data-menu="container"]')}},{key:"handleOutsideClick",value:function(e){var t=e.target;this._menuContainer.contains(t)||(this._navMenu.classList.remove(this._activeClass),this._menuHamburguer.classList.remove(this._activeClass),document.body.removeEventListener("click",this.handleOutsideClick))}},{key:"addEventLitenerMenu",value:function(){var e=this;this._router.route.subscribe((function(t){if("/"!==t){var n=t.replace("/",""),r=e._element.querySelector('[href*="/'.concat(n,'"]'));r&&e.$_activeItem(r.parentElement)}else e.$_activeItem(e._element.querySelector("[href]").parentElement);e._navMenu.classList.remove(e._activeClass),e._menuHamburguer.classList.remove(e._activeClass)})),this._menuHamburguer.addEventListener("click",(function(){e._navMenu.classList.add(e._activeClass),e._menuHamburguer.classList.add(e._activeClass),document.body.addEventListener("click",e.handleOutsideClick)}))}},{key:"titleSpinner",value:function(){return"\n    Simple".concat(R()({width:35,height:35,color_1:"#913BF3",color_2:"#84e",color_3:"#9B30F9",background:"#ccc"}),"bservable\n    ")}},{key:"bindMethods",value:function(){this.handleOutsideClick=this.handleOutsideClick.bind(this)}},{key:"init",value:function(){return this.bindMethods(),this.render(),this.getElements(),this.subscribeObservable(),this.addEventLitenerMenu(),this}}]),i}(E),A=n(7757),S=n.n(A),P=n(8926),$=n.n(P),T=n(9713),I=n.n(T);const D=[{path:v()||"/",component:"observable",options:{title:"Observable"}},{path:"".concat(v(),"/observable"),component:"observable",options:{title:"Observable"}},{path:"".concat(v(),"/middleware"),component:"middleware",options:{title:"Middleware"}},{path:"".concat(v(),"/observableArray"),component:"observableArray",options:{title:"Observable Array"}},{path:"".concat(v(),"/computedObservable"),component:"computedObservable",options:{title:"Computed Observable"}},{path:"".concat(v(),"/memoObservable"),component:"memoObservable",options:{title:"Memo Observable"}},{path:"".concat(v(),"/loading"),component:"loading",options:{title:"Carregando"}},(C={path:"*",component:"".concat(v(),"/notfound")},I()(C,"component","notfound"),I()(C,"options",{title:"Página não encontrada"}),C)];var F=n(48),N=n.n(F);var H=function(e){c()(l,e);var t,r,i,s=(r=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f()(r);if(i){var n=f()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u()(this,e)});function l(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.getElementById("root");return o()(this,l),(t=s.call(this,n))._currentModule=null,t._routes=D,t._router=e,t}return a()(l,[{key:"subscribeObservable",value:function(){var e=this;this._router.route.subscribe((function(t){e.loadModule(e.findModule(t))}))}},{key:"setTitle",value:function(){var e;document.title="".concat("Simples Observable Examples"," - ").concat(null===(e=this._currentModule)||void 0===e?void 0:e.options.title)||0}},{key:"findModule",value:function(e){var t=new RegExp("".concat(e,"$"),"i");return this._currentModule=this._routes.find((function(e){return e.path.match(t)}))||this._routes.find((function(e){return"*"===e.path})),this._currentModule}},{key:"loadModule",value:(t=$()(S().mark((function e(t){var r,o;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=t.component,this.setTitle(),this.fallback(),e.next=6,n(717)("./"+r);case 6:o=e.sent,this.cleanTemplate(),new(0,o.default)(this._element).init(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),this._element.textContent=e.t0.message;case 15:case"end":return e.stop()}}),e,this,[[0,12]])}))),function(e){return t.apply(this,arguments)})},{key:"fallback",value:function(){this._element.innerHTML=this.spinner()}},{key:"cleanTemplate",value:function(){this._element.textContent=""}},{key:"spinner",value:function(){return"\n    ".concat(N()({width:90,height:90,color_1:"#913BF3",color_2:"#84e",color_3:"#9B30F9",background:"#f1f2f3"}),'\n      <div class="container center roxo">\n        <p>Carregando...</p>\n      </div>\n    ')}},{key:"init",value:function(){return this.subscribeObservable(),this}}]),l}(E),B=(new(function(){function e(){o()(this,e),this._currentRoute=m.Z.observable(window.location.pathname)}return a()(e,[{key:"addEventListener",value:function(){var e=this;window.addEventListener("popstate",(function(){e._currentRoute()!==e.getWindowRoute().replace("/","")&&e.setRoute(e.getWindowRoute())}))}},{key:"navigate",value:function(e){w.navigate(e)}},{key:"route",get:function(){return w.route}},{key:"getWindowRoute",value:function(){return window.location.pathname}},{key:"setRoute",value:function(e){w.setRoute(e)}},{key:"setCurrentRoute",value:function(e){void 0!==e&&this._currentRoute(e)}},{key:"subscribeObservable",value:function(){var e=this;w.route.subscribe((function(t){e.setCurrentRoute(t)}))}},{key:"verifyLocastorage",value:function(){var e="@SOExamplesPath",t=window.localStorage.getItem(e);if(t){window.localStorage.removeItem(e);var n=t.split("/")[1]||"/",r="".concat(v(),"/").concat(n);this.navigate(r)}}},{key:"init",value:function(){return this.verifyLocastorage(),this.addEventListener(),this.subscribeObservable(),this}}]),e}())).init();new j(B).init(),new H(B).init()},4364:e=>{function t(){return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="background:transparent;display:block;position:relative;right:-3px;margin-left:-4px;" width="${this.width}" height="${this.height}" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n  <defs>\n    <path id="path" d="M50 15A15 35 0 0 1 50 85A15 35 0 0 1 50 15" fill="none"></path>\n    <path id="patha" d="M0 0A15 35 0 0 1 0 70A15 35 0 0 1 0 0" fill="none"></path>\n  </defs>\n  <g transform="rotate(0 50 50)">\n    <use xlink:href="#path" stroke="${this.background}" stroke-width="3"></use>\n  </g>\n  <g transform="rotate(60 50 50)">\n    <use xlink:href="#path" stroke="${this.background}" stroke-width="3"></use>\n  </g>\n  <g transform="rotate(120 50 50)">\n    <use xlink:href="#path" stroke="${this.background}" stroke-width="3"></use>\n  </g>\n  <g transform="rotate(0 50 50)">\n    <circle cx="50" cy="15" r="9" fill="${this.color_1}">\n      <animateMotion dur="1s" repeatCount="indefinite" begin="0s">\n        <mpath xlink:href="#patha"></mpath>\n      </animateMotion>\n    </circle>\n  </g>\n  <g transform="rotate(60 50 50)">\n    <circle cx="50" cy="15" r="9" fill="${this.color_2}">\n      <animateMotion dur="1s" repeatCount="indefinite" begin="-0.16666666666666666s">\n        <mpath xlink:href="#patha"></mpath>\n      </animateMotion>\n    </circle>\n  </g>\n  <g transform="rotate(120 50 50)">\n    <circle cx="50" cy="15" r="9" fill="${this.color_3}">\n      <animateMotion dur="1s" repeatCount="indefinite" begin="-0.3333333333333333s">\n        <mpath xlink:href="#patha"></mpath>\n      </animateMotion>\n    </circle>\n  </g>\n</svg>`}e.exports=function(e){return t.call(e,e)}},9499:e=>{function t(){return`<div id="main-menu">\n\n  <div data-menu="container">\n    <h1 class="logo">\n      <div class="hamburguer" data-menu="hamburguer">\n        <div></div>\n        <div></div>\n        <div></div>\n      </div>\n      ${this.title}\n    </h1>\n    <nav id="nav-bar" data-menu="nav">\n      <ul>\n        <li>\n          <a is="app-link" href="/observable">Observable</a>\n        </li>\n        \x3c!-- <li>\n          <a is="app-link" href="/pipeableobservable">Pipeable Observable</a>\n        </li> --\x3e\n        <li>\n          <a is="app-link" href="/middleware">Middleware</a>\n        </li>\n        <li>\n          <a is="app-link" href="/observableArray">Observable Array</a>\n        </li>\n        <li>\n          <a is="app-link" href="/computedObservable">Computed Observable</a>\n        </li>\n        <li>\n          <a is="app-link" href="/memoObservable">Memo Observable</a>\n        </li>\n        \x3c!-- <li>\n          <a is="app-link" href="/loading">Loading (example)</a>\n        </li>\n        <li>\n          <a is="app-link" href="/notfound">Not found (example)</a>\n        </li>\n        <li> --\x3e\n        <li>\n          <a target="_blank" href="https://raw.githubusercontent.com/Cahmoraes/simple-observable-examples/main/src/js/so.js">Download Dev Version ➤</a>\n        </li>\n\n        </li>\n      </ul>\n    </nav>\n  </div>\n</div>`}e.exports=function(e){return t.call(e,e)}},48:e=>{function t(){return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:#fff;display:block;" width="${this.width}" height="${this.height}" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n  <defs>\n    <path id="path" d="M50 15A15 35 0 0 1 50 85A15 35 0 0 1 50 15" fill="none"></path>\n    <path id="patha" d="M0 0A15 35 0 0 1 0 70A15 35 0 0 1 0 0" fill="none"></path>\n  </defs>\n  <g transform="rotate(0 50 50)">\n    <use xlink:href="#path" stroke="${this.background}" stroke-width="3"></use>\n  </g>\n  <g transform="rotate(60 50 50)">\n    <use xlink:href="#path" stroke="${this.background}" stroke-width="3"></use>\n  </g>\n  <g transform="rotate(120 50 50)">\n    <use xlink:href="#path" stroke="${this.background}" stroke-width="3"></use>\n  </g>\n  <g transform="rotate(0 50 50)">\n    <circle cx="50" cy="15" r="9" fill="${this.color_1}">\n      <animateMotion dur="1s" repeatCount="indefinite" begin="0s">\n        <mpath xlink:href="#patha"></mpath>\n      </animateMotion>\n    </circle>\n  </g>\n  <g transform="rotate(60 50 50)">\n    <circle cx="50" cy="15" r="9" fill="${this.color_2}">\n      <animateMotion dur="1s" repeatCount="indefinite" begin="-0.16666666666666666s">\n        <mpath xlink:href="#patha"></mpath>\n      </animateMotion>\n    </circle>\n  </g>\n  <g transform="rotate(120 50 50)">\n    <circle cx="50" cy="15" r="9" fill="${this.color_3}">\n      <animateMotion dur="1s" repeatCount="indefinite" begin="-0.3333333333333333s">\n        <mpath xlink:href="#patha"></mpath>\n      </animateMotion>\n    </circle>\n  </g>\n</svg>`}e.exports=function(e){return t.call(e,e)}},5666:e=>{var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),a=new R(r||[]);return i._invoke=function(e,t,n){var r=h;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return j()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=L(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=u(e,t,n);if("normal"===c.type){if(r=n.done?d:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}(e,n,a),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",v={};function m(){}function b(){}function y(){}var g={};g[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(C([])));x&&x!==n&&r.call(x,i)&&(g=x);var k=y.prototype=m.prototype=Object.create(g);function _(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function n(o,i,a,s){var c=u(e[o],e,i);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(h).then((function(e){l.value=e,a(l)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var o;this._invoke=function(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}}function L(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,L(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=u(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function C(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:j}}function j(){return{value:t,done:!0}}return b.prototype=k.constructor=y,y.constructor=b,b.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},_(O.prototype),O.prototype[a]=function(){return this},e.AsyncIterator=O,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new O(l(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},_(k),c(k,s,"Generator"),k[i]=function(){return this},k.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=C,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(M),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return s.type="throw",s.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),M(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;M(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:C(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}},717:(e,t,n)=>{var r={"./computedObservable":[5489,9,489],"./computedObservable/":[5489,9,489],"./computedObservable/index":[5489,9,489],"./computedObservable/index.js":[5489,9,489],"./computedObservable/styles":[6895,9,895],"./computedObservable/styles.scss":[6895,9,895],"./computedObservable/template.html":[8079,7,79],"./loading":[4643,9,643],"./loading/":[4643,9,643],"./loading/index":[4643,9,643],"./loading/index.js":[4643,9,643],"./loading/template.html":[4031,7,31],"./memoObservable":[6776,9,776],"./memoObservable/":[6776,9,776],"./memoObservable/index":[6776,9,776],"./memoObservable/index.js":[6776,9,776],"./memoObservable/template.html":[6173,7,173],"./middleware":[458,9,186,458],"./middleware/":[458,9,186,458],"./middleware/index":[458,9,186,458],"./middleware/index.js":[458,9,186,458],"./middleware/styles":[3997,9,186,997],"./middleware/styles.scss":[3997,9,186,997],"./middleware/template.html":[9302,7,302],"./notfound":[6103,9,103],"./notfound/":[6103,9,103],"./notfound/index":[6103,9,103],"./notfound/index.js":[6103,9,103],"./notfound/styles":[6734,9,734],"./notfound/styles.scss":[6734,9,734],"./notfound/template.html":[8920,7,920],"./observable":[6515,9,515],"./observable/":[6515,9,515],"./observable/index":[6515,9,515],"./observable/index.js":[6515,9,515],"./observable/template.html":[2041,7,41],"./observableArray":[4999,9,999],"./observableArray/":[4999,9,999],"./observableArray/index":[4999,9,999],"./observableArray/index.js":[4999,9,999],"./observableArray/styles":[1102,9,102],"./observableArray/styles.scss":[1102,9,102],"./observableArray/template.html":[3539,7,539],"./pipeableObservable":[2686,9,686],"./pipeableObservable/":[2686,9,686],"./pipeableObservable/index":[2686,9,686],"./pipeableObservable/index.js":[2686,9,686],"./pipeableObservable/styles":[3605,9,605],"./pipeableObservable/styles.scss":[3605,9,605],"./pipeableObservable/template.html":[6396,7,396]};function o(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return Promise.all(t.slice(2).map(n.e)).then((()=>n.t(o,16|t[1])))}o.keys=()=>Object.keys(r),o.id=717,e.exports=o}},0,[[2097,955,712]]]);