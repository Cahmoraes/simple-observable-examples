(self.webpackChunkrevisao_10_02_2021=self.webpackChunkrevisao_10_02_2021||[]).push([[179],{506:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},575:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},100:(e,t,n)=>{var r=n(489),o=n(67);function i(t,n,u){return o()?e.exports=i=Reflect.construct:e.exports=i=function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&r(i,n.prototype),i},i.apply(null,arguments)}e.exports=i},913:e=>{function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}},754:e=>{function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},205:(e,t,n)=>{var r=n(489);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},430:e=>{e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},67:e=>{e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},585:(e,t,n)=>{var r=n(8),o=n(506);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},489:e=>{function t(n,r){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(n,r)}e.exports=t},957:(e,t,n)=>{var r=n(754),o=n(489),i=n(430),u=n(100);function a(t){var n="function"==typeof Map?new Map:void 0;return e.exports=a=function(e){if(null===e||!i(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return u(e,arguments,r(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o(t,e)},a(t)}e.exports=a},517:(e,t,n)=>{"use strict";var r=n(319),o=n.n(r),i=n(575),u=n.n(i),a=n(913),c=n.n(a),s=n(205),l=n.n(s),f=n(585),p=n.n(f),v=n(754),h=n.n(v),b=n(499),d=n.n(b),m=function(){function e(t){u()(this,e),this._element=t}return c()(e,[{key:"init",value:function(){throw new Error("Init deve ser implementado")}}]),e}(),y=n(898),w=window.location.pathname.slice(1)||"/",_=y.Z.observable(w,(function(e,t,n){n(t.replace("/",""))})),x=function(){function e(){u()(this,e),this._currentRoute=y.Z.observable(window.location.pathname)}return c()(e,[{key:"addEventListener",value:function(){var e=this;window.addEventListener("popstate",(function(){e._currentRoute()!==e.getWindowRoute()&&_(e.getWindowRoute())}))}},{key:"route",get:function(){return _}},{key:"getWindowRoute",value:function(){return window.location.pathname}},{key:"setRoute",value:function(e){void 0!==e&&this._currentRoute(e)}},{key:"subscribeObservable",value:function(){var e=this;_.subscribe((function(t){e.setRoute(t)}))}},{key:"init",value:function(){return this.addEventListener(),this.subscribeObservable(),this}}]),e}();var g=function(e){l()(i,e);var t,n,r=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=h()(t);if(n){var o=h()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return p()(this,e)});function i(e){var t;return u()(this,i),(t=r.call(this,e))._config={title:"Menu"},t.$_activeItem=y.Z.observable(),t._menuItems=[],t._activeClass="active",t}return c()(i,[{key:"render",value:function(){this._element.insertAdjacentHTML("beforeend",d()(this._config))}},{key:"subscribe",value:function(){var e=this;this.$_activeItem.subscribe((function(t){t&&(e._menuItems.forEach((function(t){return t.classList.remove(e._activeClass)})),t.classList.add(e._activeClass))}))}},{key:"getElements",value:function(){this._menuItems=o()(this._element.querySelectorAll("a"))}},{key:"addEventLitenerMenu",value:function(){var e=this;_.subscribe((function(t){if("/"!==t){var n=e._element.querySelector('[href*="/'.concat(t,'"]'));n&&e.$_activeItem(n)}}))}},{key:"init",value:function(){return this.render(),this.getElements(),this.addEventLitenerMenu(),this.subscribe(),this}}]),i}(m),k=n(757),O=n.n(k),R=n(926),E=n.n(R);const A=[{path:"/",component:"observableArray"},{path:"/simple-observable-examples",component:"observableArray"},{path:"/simple-observable-examples/observableArray",component:"observableArray"},{path:"/simple-observable-examples/computedObservable",component:"computedObservable"}];var C=function(e){l()(a,e);var t,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h()(r);if(o){var n=h()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p()(this,e)});function a(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.getElementById("root"),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_;return u()(this,a),(e=i.call(this,t))._$module=n,e._routes=A,e}return c()(a,[{key:"subscribeObservable",value:function(){var e=this;this._$module.subscribe((function(t){if(t){var n=e.findModule(t);e.loadComponent(n.component)}}))}},{key:"findModule",value:function(e){return this._routes.find((function(t){var n=new RegExp("".concat(e),"ig"),r=t.path.match(n);if(Array.isArray(r))return!0}))||null}},{key:"loadComponent",value:(t=E()(O().mark((function e(t){var r,o;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this._element.innerHTML="Carregando...",r=t.replace("simple-observable-examples/",""),e.next=5,n(234)("./".concat(r,"/"));case 5:o=e.sent,this.cleanTemplate(),new o.default(this._element).init(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),this._element.textContent=e.t0.message;case 13:case"end":return e.stop()}}),e,this,[[0,10]])}))),function(e){return t.apply(this,arguments)})},{key:"cleanTemplate",value:function(){this._element.innerHTML=""}},{key:"init",value:function(){return this.subscribeObservable(),this}}]),a}(m),S=n(957);var L=function(e){l()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=h()(t);if(n){var o=h()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return p()(this,e)});function o(){var e;u()(this,o);var t=(e=r.call(this)).getAttribute("href");return e.setAttribute("href","".concat("/".concat("simple-observable-examples")).concat(t)),e._path=e.getAttribute("href"),e}return c()(o,[{key:"connectedCallback",value:function(){var e=this;this.addEventListener("click",(function(t){t.preventDefault(),window.history.pushState({},"",window.location.origin+e._path),_(e._path)}))}}]),o}(n.n(S)()(HTMLAnchorElement));customElements.define("app-link",L,{extends:"a"}),new g(document.getElementById("menu")).init();var M=new C(document.getElementById("root")).init(),j=(new x).init(),I=localStorage.getItem("@SOExamplesPath");if(I){localStorage.removeItem("@SOExamplesPath"),window.history.pushState({},"",window.location.origin+"/"+I);var P=I.split("/")[1]||"/";_(P)}else j.route.subscribe((function(e){M.loadComponent(M.findModule(e).component)}))},499:e=>{function t(){return`<div id="main-menu">\n  <h3>\n    ${this.title}\n  </h3>\n  <ul>\n    <li>\n      <a is="app-link" href="/observableArray">Observable Array</a>\n    </li>\n    <li>\n      <a is="app-link" href="/computedObservable">Computed Observable</a>\n    </li>\n    \x3c!-- <li><a href="javascript:void(0)" data-menu="observableArray">Observable Array</a></li>\n    <li><a href="javascript:void(0)" data-menu="computedObservable">Computed Observable</a></li> --\x3e\n  </ul>\n</div>`}e.exports=function(e){return t.call(e,e)}},234:(e,t,n)=>{var r={"./computedObservable/":[724,489],"./observableArray/":[999,999]};function o(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((()=>n(o)))}o.keys=()=>Object.keys(r),o.id=234,e.exports=o}},0,[[517,955,712]]]);