(self.webpackChunkrevisao_10_02_2021=self.webpackChunkrevisao_10_02_2021||[]).push([[179],{506:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},575:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},100:(e,t,n)=>{var r=n(489),o=n(67);function i(t,n,u){return o()?e.exports=i=Reflect.construct:e.exports=i=function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&r(i,n.prototype),i},i.apply(null,arguments)}e.exports=i},913:e=>{function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}},754:e=>{function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},205:(e,t,n)=>{var r=n(489);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},430:e=>{e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},67:e=>{e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},585:(e,t,n)=>{var r=n(8),o=n(506);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},489:e=>{function t(n,r){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(n,r)}e.exports=t},957:(e,t,n)=>{var r=n(754),o=n(489),i=n(430),u=n(100);function a(t){var n="function"==typeof Map?new Map:void 0;return e.exports=a=function(e){if(null===e||!i(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return u(e,arguments,r(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o(t,e)},a(t)}e.exports=a},97:(e,t,n)=>{"use strict";var r=n(575),o=n.n(r),i=n(913),u=n.n(i),a=n(205),c=n.n(a),s=n(585),l=n.n(s),f=n(754),v=n.n(f),p=n(957),b=n.n(p);const h=function(){return"/".concat("simple-observable-examples")};var d=n(898),y=window.location.pathname.slice(1)||"/",m=d.Z.observable(y,(function(e,t,n){n(t.replace("/",""))})),_=new(function(){function e(){return o()(this,e),e.instance||(e.instance=this),e.instance}return u()(e,[{key:"route",get:function(){return m}},{key:"setRoute",value:function(e){m(e)}},{key:"navigate",value:function(e){!function(e){window.history.pushState({},document.title,"".concat(window.location.origin,"/").concat(e))}(e.replace("/","")),this.setRoute(e)}}]),e}());Object.freeze(_);const w=_;var x=function(e){c()(i,e);var t,n,r=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=v()(t);if(n){var o=v()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return l()(this,e)});function i(){var e;o()(this,i);var t=(e=r.call(this)).getAttribute("href");return e.setAttribute("href","".concat(h()).concat(t)),e._path=e.getAttribute("href"),e}return u()(i,[{key:"connectedCallback",value:function(){var e=this;this.addEventListener("click",(function(t){t.preventDefault(),w.navigate(e._path)}))}}]),i}(b()(HTMLAnchorElement));customElements.define("app-link",x,{extends:"a"});var O=n(319),g=n.n(O),k=n(499),R=n.n(k),E=function(){function e(t){o()(this,e),this._element=t}return u()(e,[{key:"init",value:function(){throw new Error("Init deve ser implementado")}}]),e}();var A=function(e){c()(i,e);var t,n,r=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=v()(t);if(n){var o=v()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return l()(this,e)});function i(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.getElementById("menu");return o()(this,i),(t=r.call(this,n))._router=e,t._config={title:"Menu"},t.$_activeItem=d.Z.observable(),t._menuItems=[],t._activeClass="active",t}return u()(i,[{key:"render",value:function(){this._element.insertAdjacentHTML("beforeend",R()(this._config))}},{key:"subscribeObservable",value:function(){var e=this;this.$_activeItem.subscribe((function(t){t&&(e._menuItems.forEach((function(t){return t.classList.remove(e._activeClass)})),t.classList.add(e._activeClass))}))}},{key:"getElements",value:function(){this._menuItems=g()(this._element.querySelectorAll("a"))}},{key:"addEventLitenerMenu",value:function(){var e=this;this._router.route.subscribe((function(t){if("/"!==t){var n=e._element.querySelector('[href*="/'.concat(t,'"]'));n&&e.$_activeItem(n)}else e.$_activeItem(e._element.querySelector("[href]"))}))}},{key:"init",value:function(){return this.render(),this.getElements(),this.addEventLitenerMenu(),this.subscribeObservable(),this}}]),i}(E),j=n(757),L=n.n(j),S=n(926),C=n.n(S);const M=[{path:h()||"/",component:"observable",options:{title:"Observable"}},{path:"".concat(h(),"/observable"),component:"observable",options:{title:"Observable"}},{path:"".concat(h(),"/observableArray"),component:"observableArray",options:{title:"Observable Array"}},{path:"".concat(h(),"/computedObservable"),component:"computedObservable",options:{title:"Computed Observable"}}];var I=function(e){c()(s,e);var t,r,i,a=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v()(r);if(i){var n=v()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l()(this,e)});function s(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.getElementById("root");return o()(this,s),(t=a.call(this,n))._module=null,t._routes=M,t._router=e,t}return u()(s,[{key:"subscribeObservable",value:function(){var e=this;this._router.route.subscribe((function(t){if(t){var n=e.findModule(t);e.loadModule(n)}}))}},{key:"setTitle",value:function(){var e;document.title="".concat("Simples Observable Examples"," - ").concat(null===(e=this._module)||void 0===e?void 0:e.options.title)||0}},{key:"findModule",value:function(e){var t="/"===e?e:"/".concat(e),n=new RegExp("".concat(t,"$"),"i");return this._module=this._routes.find((function(e){var t=e.path.match(n);if(Array.isArray(t))return!0})),this._module?this._module:null}},{key:"loadModule",value:(t=C()(L().mark((function e(t){var r,o,i;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=(t||"notfound").component,o=void 0===r?"notfound":r,this.setTitle(),this._element.innerHTML="Carregando...",e.next=6,n(717)("./"+o);case 6:i=e.sent,this.cleanTemplate(),new i.default(this._element).init(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),this._element.textContent=e.t0.message;case 14:case"end":return e.stop()}}),e,this,[[0,11]])}))),function(e){return t.apply(this,arguments)})},{key:"cleanTemplate",value:function(){this._element.innerHTML=""}},{key:"init",value:function(){return this.subscribeObservable(),this}}]),s}(E),T=(new(function(){function e(){o()(this,e),this._currentRoute=d.Z.observable(window.location.pathname)}return u()(e,[{key:"addEventListener",value:function(){var e=this;window.addEventListener("popstate",(function(){e._currentRoute()!==e.getWindowRoute().replace("/","")&&e.setRoute(e.getWindowRoute())}))}},{key:"navigate",value:function(e){w.navigate(e)}},{key:"route",get:function(){return w.route}},{key:"getWindowRoute",value:function(){return window.location.pathname}},{key:"setRoute",value:function(e){w.setRoute(e)}},{key:"setCurrentRoute",value:function(e){void 0!==e&&this._currentRoute(e)}},{key:"subscribeObservable",value:function(){var e=this;w.route.subscribe((function(t){e.setCurrentRoute(t)}))}},{key:"verifyLocastorage",value:function(){var e="@SOExamplesPath",t=localStorage.getItem(e);if(t){localStorage.removeItem(e);var n=t.split("/")[1]||"/",r="".concat(h(),"/").concat(n);this.navigate(r)}}},{key:"init",value:function(){return this.verifyLocastorage(),this.addEventListener(),this.subscribeObservable(),this}}]),e}())).init();new A(T).init(),new I(T).init()},499:e=>{function t(){return`<div id="main-menu">\n  <h3>\n    ${this.title}\n  </h3>\n  <ul>\n    <li>\n      <a is="app-link" href="/observable">Observable</a>\n    </li>\n    <li>\n      <a is="app-link" href="/observableArray">Observable Array</a>\n    </li>\n    <li>\n      <a is="app-link" href="/computedObservable">Computed Observable</a>\n    </li>\n  </ul>\n</div>`}e.exports=function(e){return t.call(e,e)}},717:(e,t,n)=>{var r={"./computedObservable":[724,9,489],"./computedObservable/":[724,9,489],"./computedObservable/index":[724,9,489],"./computedObservable/index.js":[724,9,489],"./computedObservable/styles":[895,9,895],"./computedObservable/styles.scss":[895,9,895],"./computedObservable/template.html":[79,7,79],"./notfound":[494,9,724],"./notfound/":[494,9,724],"./notfound/index":[494,9,724],"./notfound/index.js":[494,9,724],"./notfound/template.html":[920,7,920],"./observable":[515,9,515],"./observable/":[515,9,515],"./observable/index":[515,9,515],"./observable/index.js":[515,9,515],"./observable/template.html":[41,7,41],"./observableArray":[999,9,999],"./observableArray/":[999,9,999],"./observableArray/index":[999,9,999],"./observableArray/index.js":[999,9,999],"./observableArray/styles":[102,9,102],"./observableArray/styles.scss":[102,9,102],"./observableArray/template.html":[539,7,539]};function o(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[2]).then((()=>n.t(o,16|t[1])))}o.keys=()=>Object.keys(r),o.id=717,e.exports=o}},0,[[97,955,712]]]);