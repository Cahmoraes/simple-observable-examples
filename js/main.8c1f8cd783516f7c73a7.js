(self.webpackChunkrevisao_10_02_2021=self.webpackChunkrevisao_10_02_2021||[]).push([[179],{506:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},575:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},100:(e,t,n)=>{var r=n(489),o=n(67);function i(t,n,u){return o()?e.exports=i=Reflect.construct:e.exports=i=function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&r(i,n.prototype),i},i.apply(null,arguments)}e.exports=i},913:e=>{function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}},754:e=>{function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},205:(e,t,n)=>{var r=n(489);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},430:e=>{e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},67:e=>{e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},585:(e,t,n)=>{var r=n(8),o=n(506);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},489:e=>{function t(n,r){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(n,r)}e.exports=t},957:(e,t,n)=>{var r=n(754),o=n(489),i=n(430),u=n(100);function c(t){var n="function"==typeof Map?new Map:void 0;return e.exports=c=function(e){if(null===e||!i(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return u(e,arguments,r(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o(t,e)},c(t)}e.exports=c},517:(e,t,n)=>{"use strict";var r=n(898),o=n(319),i=n.n(o),u=n(575),c=n.n(u),a=n(913),s=n.n(a),l=n(205),f=n.n(l),p=n(585),v=n.n(p),h=n(754),b=n.n(h),d=n(499),y=n.n(d),m=function(){function e(t){c()(this,e),this._element=t}return s()(e,[{key:"init",value:function(){throw new Error("Init deve ser implementado")}}]),e}();var _=function(e){f()(u,e);var t,n,o=(t=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=b()(t);if(n){var o=b()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return v()(this,e)});function u(e){var t;return c()(this,u),(t=o.call(this,e))._config={title:"Menu"},t.$_activeItem=r.Z.observable(),t._menuItems=[],t._activeClass="active",t}return s()(u,[{key:"render",value:function(){this._element.insertAdjacentHTML("beforeend",y()(this._config))}},{key:"subscribe",value:function(){var e=this;this.$_activeItem.subscribe((function(t){t&&(e._menuItems.forEach((function(t){return t.classList.remove(e._activeClass)})),t.classList.add(e._activeClass))}))}},{key:"getElements",value:function(){this._menuItems=i()(this._element.querySelectorAll("a"))}},{key:"addEventLitenerMenu",value:function(){var e=this;this._element.addEventListener("click",(function(t){t.preventDefault();var n=t.target;if("A"===n.tagName){var r=n;e.$_activeItem(r)}}))}},{key:"init",value:function(){return this.render(),this.getElements(),this.addEventLitenerMenu(),this.subscribe(),this}}]),u}(m),g=n(757),w=n.n(g),x=n(926),k=n.n(x),R=n(957),O=n.n(R);var E=r.Z.observable(),A=function(e){f()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=b()(t);if(n){var o=b()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return v()(this,e)});function o(){var e;return c()(this,o),(e=r.call(this))._path=e.getAttribute("href"),e}return s()(o,[{key:"connectedCallback",value:function(){var e=this;this.addEventListener("click",(function(t){t.preventDefault(),window.history.pushState({},"",window.location.origin+e._path),E(e._path)}))}}]),o}(O()(HTMLAnchorElement));var L=function(e){f()(u,e);var t,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b()(r);if(o){var n=b()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v()(this,e)});function u(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.getElementById("root"),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E;return c()(this,u),(e=i.call(this,t))._$module=n,e}return s()(u,[{key:"subscribeObservable",value:function(){var e=this;this._$module.subscribe((function(t){t&&e.loadModule(t)}))}},{key:"loadModule",value:(t=k()(w().mark((function e(t){var r;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this._element.innerHTML="Carregando...",e.next=4,n(7)("./pages".concat(t,"/"));case 4:r=e.sent,this._element.innerHTML="",new r.default(this._element).init(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),this._element.textContent=e.t0.message;case 12:case"end":return e.stop()}}),e,this,[[0,9]])}))),function(e){return t.apply(this,arguments)})},{key:"init",value:function(){return this.subscribeObservable(),this.loadModule("/observableArray"),this}}]),u}(m);const M=[{path:"/",component:"observableArray"},{path:"/observableArray",component:"observableArray"},{path:"/computedObservable",component:"computedObservable"}];var j=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M;c()(this,e),this._currentRoute=r.Z.observable(window.location.pathname),this._routes=t}return s()(e,[{key:"addEventListener",value:function(){var e=this;window.addEventListener("popstate",(function(){e._currentRoute()!==e.getRoute()&&e.setRoute(e.getRoute())}))}},{key:"route",get:function(){return this._currentRoute}},{key:"getRoute",value:function(){return window.location.pathname}},{key:"setRoute",value:function(e){void 0!==e&&this._currentRoute(e)}},{key:"subscribeObservable",value:function(){var e=this;E.subscribe((function(t){e.setRoute(t)}))}},{key:"init",value:function(){return this.addEventListener(),this.subscribeObservable(),this}}]),e}(),C=r.Z.observable();customElements.define("app-link",A,{extends:"a"}),new _(document.getElementById("menu"),C).init();var D=new L(document.getElementById("root")).init();(new j).init().route.subscribe((function(e){D.loadModule(e)}))},499:e=>{function t(){return`<div id="main-menu">\n  <h3>\n    ${this.title}\n  </h3>\n  <ul>\n    <li>\n      <a is="app-link" href="/observableArray">Observable Array</a>\n    </li>\n    <li>\n      <a is="app-link" href="/computedObservable">Computed Observable</a>\n    </li>\n    \x3c!-- <li><a href="javascript:void(0)" data-menu="observableArray">Observable Array</a></li>\n    <li><a href="javascript:void(0)" data-menu="computedObservable">Computed Observable</a></li> --\x3e\n  </ul>\n</div>`}e.exports=function(e){return t.call(e,e)}},7:(e,t,n)=>{var r={"./pages/computedObservable/":[724,489],"./pages/observableArray/":[999,999]};function o(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((()=>n(o)))}o.keys=()=>Object.keys(r),o.id=7,e.exports=o}},0,[[517,955,712]]]);