(self.webpackChunkrevisao_10_02_2021=self.webpackChunkrevisao_10_02_2021||[]).push([[179],{506:t=>{t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},926:t=>{function e(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}t.exports=function(t){return function(){var n=this,r=arguments;return new Promise((function(o,i){var a=t.apply(n,r);function c(t){e(a,o,i,c,s,"next",t)}function s(t){e(a,o,i,c,s,"throw",t)}c(void 0)}))}}},575:t=>{t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},100:(t,e,n)=>{var r=n(489),o=n(67);function i(e,n,a){return o()?t.exports=i=Reflect.construct:t.exports=i=function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&r(i,n.prototype),i},i.apply(null,arguments)}t.exports=i},913:t=>{function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}},754:t=>{function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(n)}t.exports=e},205:(t,e,n)=>{var r=n(489);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},430:t=>{t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}},67:t=>{t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},585:(t,e,n)=>{var r=n(8),o=n(506);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},489:t=>{function e(n,r){return t.exports=e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(n,r)}t.exports=e},957:(t,e,n)=>{var r=n(754),o=n(489),i=n(430),a=n(100);function c(e){var n="function"==typeof Map?new Map:void 0;return t.exports=c=function(t){if(null===t||!i(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return a(t,arguments,r(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o(e,t)},c(e)}t.exports=c},757:(t,e,n)=>{t.exports=n(666)},97:(t,e,n)=>{"use strict";var r=n(575),o=n.n(r),i=n(913),a=n.n(i),c=n(205),s=n.n(c),u=n(585),l=n.n(u),f=n(754),h=n.n(f),p=n(957),d=n.n(p);const v=function(){return"/".concat("simple-observable-examples")};var m=n(898),b=(window.location.pathname.slice(1)||"").replace("/",""),y=m.Z.observable(b,(function(t,e,n){n(e.replace("/",""))})),g=new(function(){function t(){return o()(this,t),t.instance||(t.instance=this),t.instance}return a()(t,[{key:"route",get:function(){return y}},{key:"setRoute",value:function(t){y(t)}},{key:"navigate",value:function(t){!function(t){window.history.pushState({},document.title,"".concat(window.location.origin,"/").concat(t))}(t.replace("/","")),this.setRoute(t)}}]),t}());Object.freeze(g);const w=g;var x=function(t){s()(i,t);var e,n,r=(e=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=h()(e);if(n){var o=h()(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return l()(this,t)});function i(){var t;o()(this,i);var e=(t=r.call(this)).getAttribute("href");return t.setAttribute("href","".concat(v()).concat(e)),t._path=t.getAttribute("href"),t}return a()(i,[{key:"connectedCallback",value:function(){var t=this;this.addEventListener("click",(function(e){e.preventDefault(),w.navigate(t._path)}))}}]),i}(d()(HTMLAnchorElement));customElements.define("app-link",x,{extends:"a"});var k=n(319),_=n.n(k),O=n(499),L=n.n(O),E=function(){function t(e){o()(this,t),this._element=e}return a()(t,[{key:"init",value:function(){throw new Error("Init deve ser implementado")}}]),t}(),M=n(364),R=n.n(M);var C,j=function(t){s()(i,t);var e,n,r=(e=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=h()(e);if(n){var o=h()(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return l()(this,t)});function i(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.getElementById("menu");return o()(this,i),(e=r.call(this,n))._router=t,e._config={title:e.titleSpinner()},e.$_activeItem=m.Z.observable(),e._menuItems=[],e._activeClass="active",e._menuHamburguer=null,e._navMenu=null,e._menuContainer=null,e}return a()(i,[{key:"render",value:function(){this._element.insertAdjacentHTML("beforeend",L()(this._config))}},{key:"subscribeObservable",value:function(){var t=this;this.$_activeItem.subscribe((function(e){e&&(t._menuItems.forEach((function(e){return e.classList.remove(t._activeClass)})),e.classList.add(t._activeClass),e.parentElement.classList.add(t._activeClass))}))}},{key:"getElements",value:function(){this._menuItems=_()(this._element.querySelectorAll("li")),this._menuHamburguer=this._element.querySelector('[data-menu="hamburguer"]'),this._navMenu=this._element.querySelector('[data-menu="nav"]'),this._menuContainer=this._element.querySelector('[data-menu="container"]')}},{key:"handleOutsideClick",value:function(t){var e=t.target;this._menuContainer.contains(e)||(this._navMenu.classList.remove(this._activeClass),this._menuHamburguer.classList.remove(this._activeClass),document.body.removeEventListener("click",this.handleOutsideClick))}},{key:"addEventLitenerMenu",value:function(){var t=this;this._router.route.subscribe((function(e){if("/"!==e){var n=t._element.querySelector('[href*="/'.concat(e,'"]'));n&&t.$_activeItem(n.parentElement)}else t.$_activeItem(t._element.querySelector("[href]"))})),this._menuHamburguer.addEventListener("click",(function(){t._navMenu.classList.add(t._activeClass),t._menuHamburguer.classList.add(t._activeClass),document.body.addEventListener("click",t.handleOutsideClick)}))}},{key:"titleSpinner",value:function(){return"\n    Simple".concat(R()({width:35,height:35,color_1:"#913BF3",color_2:"#84e",color_3:"#9B30F9",background:"#ccc"}),"bservable\n    ")}},{key:"bindMethods",value:function(){this.handleOutsideClick=this.handleOutsideClick.bind(this)}},{key:"init",value:function(){return this.bindMethods(),this.render(),this.getElements(),this.addEventLitenerMenu(),this.subscribeObservable(),this}}]),i}(E),A=n(757),S=n.n(A),P=n(926),$=n.n(P),T=n(713),I=n.n(T);const D=[{path:v()||"/",component:"observable",options:{title:"Observable"}},{path:"".concat(v(),"/observable"),component:"observable",options:{title:"Observable"}},{path:"".concat(v(),"/middleware"),component:"middleware",options:{title:"Middleware"}},{path:"".concat(v(),"/observableArray"),component:"observableArray",options:{title:"Observable Array"}},{path:"".concat(v(),"/computedObservable"),component:"computedObservable",options:{title:"Computed Observable"}},{path:"".concat(v(),"/loading"),component:"loading",options:{title:"Carregando"}},(C={path:"*",component:"".concat(v(),"/notfound")},I()(C,"component","notfound"),I()(C,"options",{title:"Página não encontrada"}),C)];var F=n(48),N=n.n(F);var B=function(t){s()(u,t);var e,r,i,c=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=h()(r);if(i){var n=h()(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return l()(this,t)});function u(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.getElementById("root");return o()(this,u),(e=c.call(this,n))._currentModule=null,e._routes=D,e._router=t,e}return a()(u,[{key:"subscribeObservable",value:function(){var t=this;this._router.route.subscribe((function(e){t.loadModule(t.findModule(e))}))}},{key:"setTitle",value:function(){var t;document.title="".concat("Simples Observable Examples"," - ").concat(null===(t=this._currentModule)||void 0===t?void 0:t.options.title)||0}},{key:"findModule",value:function(t){var e=new RegExp("".concat(t,"$"),"i");return this._currentModule=this._routes.find((function(t){if(t.path.match(e))return!0}))||this._routes.find((function(t){return"*"===t.path})),this._currentModule}},{key:"loadModule",value:(e=$()(S().mark((function t(e){var r,o;return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.component,this.setTitle(),this.fallback(),t.next=6,n(717)("./"+r);case 6:o=t.sent,this.cleanTemplate(),new o.default(this._element).init(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),this._element.textContent=t.t0.message;case 14:case"end":return t.stop()}}),t,this,[[0,11]])}))),function(t){return e.apply(this,arguments)})},{key:"fallback",value:function(){this._element.innerHTML=this.spinner()}},{key:"cleanTemplate",value:function(){this._element.textContent=""}},{key:"spinner",value:function(){return"\n    ".concat(N()({width:90,height:90,color_1:"#913BF3",color_2:"#84e",color_3:"#9B30F9",background:"#f1f2f3"}),'\n      <div class="container center roxo">\n        <p>Carregando...</p>\n      </div>\n    ')}},{key:"init",value:function(){return this.subscribeObservable(),this}}]),u}(E),G=(new(function(){function t(){o()(this,t),this._currentRoute=m.Z.observable(window.location.pathname)}return a()(t,[{key:"addEventListener",value:function(){var t=this;window.addEventListener("popstate",(function(){t._currentRoute()!==t.getWindowRoute().replace("/","")&&t.setRoute(t.getWindowRoute())}))}},{key:"navigate",value:function(t){w.navigate(t)}},{key:"route",get:function(){return w.route}},{key:"getWindowRoute",value:function(){return window.location.pathname}},{key:"setRoute",value:function(t){w.setRoute(t)}},{key:"setCurrentRoute",value:function(t){void 0!==t&&this._currentRoute(t)}},{key:"subscribeObservable",value:function(){var t=this;w.route.subscribe((function(e){t.setCurrentRoute(e)}))}},{key:"verifyLocastorage",value:function(){var t="@SOExamplesPath",e=localStorage.getItem(t);if(e){localStorage.removeItem(t);var n=e.split("/")[1]||"/",r="".concat(v(),"/").concat(n);this.navigate(r)}}},{key:"init",value:function(){return this.verifyLocastorage(),this.addEventListener(),this.subscribeObservable(),this}}]),t}())).init();new j(G).init(),new B(G).init()},364:t=>{function e(){return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="background:transparent;display:block;position:relative;right:-3px;margin-left:-4px;" width="${this.width}" height="${this.height}" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n  <defs>\n    <path id="path" d="M50 15A15 35 0 0 1 50 85A15 35 0 0 1 50 15" fill="none"></path>\n    <path id="patha" d="M0 0A15 35 0 0 1 0 70A15 35 0 0 1 0 0" fill="none"></path>\n  </defs>\n  <g transform="rotate(0 50 50)">\n    <use xlink:href="#path" stroke="${this.background}" stroke-width="3"></use>\n  </g>\n  <g transform="rotate(60 50 50)">\n    <use xlink:href="#path" stroke="${this.background}" stroke-width="3"></use>\n  </g>\n  <g transform="rotate(120 50 50)">\n    <use xlink:href="#path" stroke="${this.background}" stroke-width="3"></use>\n  </g>\n  <g transform="rotate(0 50 50)">\n    <circle cx="50" cy="15" r="9" fill="${this.color_1}">\n      <animateMotion dur="1s" repeatCount="indefinite" begin="0s">\n        <mpath xlink:href="#patha"></mpath>\n      </animateMotion>\n    </circle>\n  </g>\n  <g transform="rotate(60 50 50)">\n    <circle cx="50" cy="15" r="9" fill="${this.color_2}">\n      <animateMotion dur="1s" repeatCount="indefinite" begin="-0.16666666666666666s">\n        <mpath xlink:href="#patha"></mpath>\n      </animateMotion>\n    </circle>\n  </g>\n  <g transform="rotate(120 50 50)">\n    <circle cx="50" cy="15" r="9" fill="${this.color_3}">\n      <animateMotion dur="1s" repeatCount="indefinite" begin="-0.3333333333333333s">\n        <mpath xlink:href="#patha"></mpath>\n      </animateMotion>\n    </circle>\n  </g>\n</svg>`}t.exports=function(t){return e.call(t,t)}},499:t=>{function e(){return`<div id="main-menu">\n\n  <div data-menu="container">\n    <h1 class="logo">\n      <div class="hamburguer" data-menu="hamburguer">\n        <div></div>\n        <div></div>\n        <div></div>\n      </div>\n      ${this.title}\n    </h1>\n    <nav id="nav-bar" data-menu="nav">\n      <ul>\n        <li>\n          <a is="app-link" href="/observable">Observable</a>\n        </li>\n        \x3c!-- <li>\n          <a is="app-link" href="/pipeableobservable">Pipeable Observable</a>\n        </li> --\x3e\n        <li>\n          <a is="app-link" href="/middleware">Middleware</a>\n        </li>\n        <li>\n          <a is="app-link" href="/observableArray">Observable Array</a>\n        </li>\n        <li>\n          <a is="app-link" href="/computedObservable">Computed Observable</a>\n        </li>\n        \x3c!-- <li>\n          <a is="app-link" href="/loading">Loading (example)</a>\n        </li>\n        <li>\n          <a is="app-link" href="/notfound">Not found (example)</a>\n        </li>\n        <li> --\x3e\n        <li>\n          <a target="_blank" href="https://raw.githubusercontent.com/Cahmoraes/simple-observable-examples/main/src/js/so.js">Download Dev Version ➤</a>\n        </li>\n\n        </li>\n      </ul>\n    </nav>\n  </div>\n</div>`}t.exports=function(t){return e.call(t,t)}},48:t=>{function e(){return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:#fff;display:block;" width="${this.width}" height="${this.height}" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n  <defs>\n    <path id="path" d="M50 15A15 35 0 0 1 50 85A15 35 0 0 1 50 15" fill="none"></path>\n    <path id="patha" d="M0 0A15 35 0 0 1 0 70A15 35 0 0 1 0 0" fill="none"></path>\n  </defs>\n  <g transform="rotate(0 50 50)">\n    <use xlink:href="#path" stroke="${this.background}" stroke-width="3"></use>\n  </g>\n  <g transform="rotate(60 50 50)">\n    <use xlink:href="#path" stroke="${this.background}" stroke-width="3"></use>\n  </g>\n  <g transform="rotate(120 50 50)">\n    <use xlink:href="#path" stroke="${this.background}" stroke-width="3"></use>\n  </g>\n  <g transform="rotate(0 50 50)">\n    <circle cx="50" cy="15" r="9" fill="${this.color_1}">\n      <animateMotion dur="1s" repeatCount="indefinite" begin="0s">\n        <mpath xlink:href="#patha"></mpath>\n      </animateMotion>\n    </circle>\n  </g>\n  <g transform="rotate(60 50 50)">\n    <circle cx="50" cy="15" r="9" fill="${this.color_2}">\n      <animateMotion dur="1s" repeatCount="indefinite" begin="-0.16666666666666666s">\n        <mpath xlink:href="#patha"></mpath>\n      </animateMotion>\n    </circle>\n  </g>\n  <g transform="rotate(120 50 50)">\n    <circle cx="50" cy="15" r="9" fill="${this.color_3}">\n      <animateMotion dur="1s" repeatCount="indefinite" begin="-0.3333333333333333s">\n        <mpath xlink:href="#patha"></mpath>\n      </animateMotion>\n    </circle>\n  </g>\n</svg>`}t.exports=function(t){return e.call(t,t)}},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new R(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return j()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?d:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=d,n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function m(){}function b(){}function y(){}var g={};g[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(C([])));x&&x!==n&&r.call(x,i)&&(g=x);var k=y.prototype=m.prototype=Object.create(g);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function C(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:j}}function j(){return{value:e,done:!0}}return b.prototype=k.constructor=y,y.constructor=b,b.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},_(O.prototype),O.prototype[a]=function(){return this},t.AsyncIterator=O,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new O(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(k),s(k,c,"Generator"),k[i]=function(){return this},k.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=C,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(M),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),M(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;M(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:C(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}},717:(t,e,n)=>{var r={"./computedObservable":[724,9,489],"./computedObservable/":[724,9,489],"./computedObservable/index":[724,9,489],"./computedObservable/index.js":[724,9,489],"./computedObservable/styles":[895,9,895],"./computedObservable/styles.scss":[895,9,895],"./computedObservable/template.html":[79,7,79],"./loading":[643,9,643],"./loading/":[643,9,643],"./loading/index":[643,9,643],"./loading/index.js":[643,9,643],"./loading/template.html":[31,7,31],"./middleware":[458,9,186,458],"./middleware/":[458,9,186,458],"./middleware/index":[458,9,186,458],"./middleware/index.js":[458,9,186,458],"./middleware/styles":[997,9,186,997],"./middleware/styles.scss":[997,9,186,997],"./middleware/template.html":[302,7,302],"./notfound":[103,9,103],"./notfound/":[103,9,103],"./notfound/index":[103,9,103],"./notfound/index.js":[103,9,103],"./notfound/styles":[734,9,734],"./notfound/styles.scss":[734,9,734],"./notfound/template.html":[920,7,920],"./observable":[515,9,515],"./observable/":[515,9,515],"./observable/index":[515,9,515],"./observable/index.js":[515,9,515],"./observable/template.html":[41,7,41],"./observableArray":[999,9,999],"./observableArray/":[999,9,999],"./observableArray/index":[999,9,999],"./observableArray/index.js":[999,9,999],"./observableArray/styles":[102,9,102],"./observableArray/styles.scss":[102,9,102],"./observableArray/template.html":[539,7,539],"./pipeableObservable":[686,9,686],"./pipeableObservable/":[686,9,686],"./pipeableObservable/index":[686,9,686],"./pipeableObservable/index.js":[686,9,686],"./pipeableObservable/styles":[605,9,605],"./pipeableObservable/styles.scss":[605,9,605],"./pipeableObservable/template.html":[396,7,396]};function o(t){if(!n.o(r,t))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],o=e[0];return Promise.all(e.slice(2).map(n.e)).then((()=>n.t(o,16|e[1])))}o.keys=()=>Object.keys(r),o.id=717,t.exports=o}},0,[[97,955,712]]]);