(self.webpackChunkrevisao_10_02_2021=self.webpackChunkrevisao_10_02_2021||[]).push([[179],{506:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},575:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},100:(e,t,n)=>{var r=n(489),o=n(67);function i(t,n,u){return o()?e.exports=i=Reflect.construct:e.exports=i=function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&r(i,n.prototype),i},i.apply(null,arguments)}e.exports=i},913:e=>{function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}},754:e=>{function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},205:(e,t,n)=>{var r=n(489);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},430:e=>{e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},67:e=>{e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},585:(e,t,n)=>{var r=n(8),o=n(506);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},489:e=>{function t(n,r){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(n,r)}e.exports=t},957:(e,t,n)=>{var r=n(754),o=n(489),i=n(430),u=n(100);function a(t){var n="function"==typeof Map?new Map:void 0;return e.exports=a=function(e){if(null===e||!i(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return u(e,arguments,r(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o(t,e)},a(t)}e.exports=a},662:(e,t,n)=>{"use strict";var r=n(575),o=n.n(r),i=n(913),u=n.n(i),a=n(205),c=n.n(a),s=n(585),l=n.n(s),f=n(754),p=n.n(f),v=n(957),b=n.n(v);const h=function(){return"/".concat("simple-observable-examples")};var d=n(898),y=window.location.pathname.slice(1)||"/",m=d.Z.observable(y,(function(e,t,n){n(t.replace("/",""))})),_=function(){function e(){o()(this,e)}return u()(e,null,[{key:"router",get:function(){return m}},{key:"setRoute",value:function(e){m(e)}},{key:"navigate",value:function(e){this.setRoute(e)}}]),e}();var g=function(e){c()(i,e);var t,n,r=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=p()(t);if(n){var o=p()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return l()(this,e)});function i(){var e;o()(this,i);var t=(e=r.call(this)).getAttribute("href");return e.setAttribute("href","".concat(h()).concat(t)),e._path=e.getAttribute("href").replace("/",""),e}return u()(i,[{key:"connectedCallback",value:function(){var e=this;this.addEventListener("click",(function(t){t.preventDefault(),_.navigate(e._path)}))}}]),i}(b()(HTMLAnchorElement));customElements.define("app-link",g,{extends:"a"});var k=n(319),w=n.n(k),R=n(499),x=n.n(R),O=function(){function e(t){o()(this,e),this._element=t}return u()(e,[{key:"init",value:function(){throw new Error("Init deve ser implementado")}}]),e}();var E=function(e){c()(i,e);var t,n,r=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=p()(t);if(n){var o=p()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return l()(this,e)});function i(e){var t;return o()(this,i),(t=r.call(this,e))._config={title:"Menu"},t.$_activeItem=d.Z.observable(),t._menuItems=[],t._activeClass="active",t}return u()(i,[{key:"render",value:function(){this._element.insertAdjacentHTML("beforeend",x()(this._config))}},{key:"subscribe",value:function(){var e=this;this.$_activeItem.subscribe((function(t){t&&(e._menuItems.forEach((function(t){return t.classList.remove(e._activeClass)})),t.classList.add(e._activeClass))}))}},{key:"getElements",value:function(){this._menuItems=w()(this._element.querySelectorAll("a"))}},{key:"addEventLitenerMenu",value:function(){var e=this;_.router.subscribe((function(t){if("/"!==t){var n=e._element.querySelector('[href*="/'.concat(t,'"]'));n&&e.$_activeItem(n)}else e.$_activeItem(e._element.querySelector("[href]"))}))}},{key:"init",value:function(){return this.render(),this.getElements(),this.addEventLitenerMenu(),this.subscribe(),this}}]),i}(O),C=n(757),A=n.n(C),L=n(926),S=n.n(L);const I=[{path:h()||"/",component:"observable",options:{title:"Observable"}},{path:"".concat(h(),"/observable"),component:"observable",options:{title:"Observable"}},{path:"".concat(h(),"/observableArray"),component:"observableArray",options:{title:"Observable Array"}},{path:"".concat(h(),"/computedObservable"),component:"computedObservable",options:{title:"Computed Observable"}}];var M=function(e){c()(s,e);var t,r,i,a=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p()(r);if(i){var n=p()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l()(this,e)});function s(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.getElementById("root");return o()(this,s),(e=a.call(this,t))._module=null,e._routes=I,e}return u()(s,[{key:"subscribeObservable",value:function(){var e=this;_.router.subscribe((function(t){if(t){var n=e.findModule(t);e.loadComponent(n.component)}}))}},{key:"setTitle",value:function(){document.title="".concat("Simples Observable Examples"," - ").concat(this._module.options.title)||0}},{key:"findModule",value:function(e){var t=new RegExp("".concat(e),"i");return this._module=this._routes.find((function(e){var n=e.path.match(t);if(Array.isArray(n))return!0})),this._module?this._module:null}},{key:"loadComponent",value:(t=S()(A().mark((function e(t){var r;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setTitle(),this._element.innerHTML="Carregando...",e.next=5,n(234)("./".concat(t,"/"));case 5:r=e.sent,this.cleanTemplate(),new r.default(this._element).init(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),this._element.textContent=e.t0.message;case 13:case"end":return e.stop()}}),e,this,[[0,10]])}))),function(e){return t.apply(this,arguments)})},{key:"cleanTemplate",value:function(){this._element.innerHTML=""}},{key:"init",value:function(){return this.subscribeObservable(),this}}]),s}(O),j=(new(function(){function e(){o()(this,e),this._currentRoute=d.Z.observable(window.location.pathname)}return u()(e,[{key:"addEventListener",value:function(){var e=this;window.addEventListener("popstate",(function(){console.log(e._currentRoute(),e.getWindowRoute()),e._currentRoute()!==e.getWindowRoute()&&e.setRoute(e.getWindowRoute())}))}},{key:"navigate",value:function(e){_.navigate(e)}},{key:"route",get:function(){return _.router}},{key:"getWindowRoute",value:function(){return window.location.pathname.replace("/","")}},{key:"setRoute",value:function(e){_.setRoute(e)}},{key:"setCurrentRoute",value:function(e){void 0!==e&&this._currentRoute(e)}},{key:"subscribeObservable",value:function(){var e=this;_.router.subscribe((function(t){e.setCurrentRoute(t)}))}},{key:"verifyLocastorage",value:function(){var e="@SOExamplesPath",t=localStorage.getItem(e);if(t){localStorage.removeItem(e);var n=t.split("/")[1]||"/",r="".concat(h(),"/").concat(n);console.log({totalPath:r}),this.navigate(r)}}},{key:"init",value:function(){return this.verifyLocastorage(),this.addEventListener(),this.subscribeObservable(),this}}]),e}())).init();new E(document.getElementById("menu")).init();var P=new M(document.getElementById("root")).init();j.route.subscribe((function(e){P.loadComponent(P.findModule(e).component)}))},499:e=>{function t(){return`<div id="main-menu">\n  <h3>\n    ${this.title}\n  </h3>\n  <ul>\n    <li>\n      <a is="app-link" href="/observable">Observable</a>\n    </li>\n    <li>\n      <a is="app-link" href="/observableArray">Observable Array</a>\n    </li>\n    <li>\n      <a is="app-link" href="/computedObservable">Computed Observable</a>\n    </li>\n    \x3c!-- <li><a href="javascript:void(0)" data-menu="observableArray">Observable Array</a></li>\n    <li><a href="javascript:void(0)" data-menu="computedObservable">Computed Observable</a></li> --\x3e\n  </ul>\n</div>`}e.exports=function(e){return t.call(e,e)}},234:(e,t,n)=>{var r={"./computedObservable/":[724,489],"./observable/":[515,515],"./observableArray/":[999,999]};function o(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((()=>n(o)))}o.keys=()=>Object.keys(r),o.id=234,e.exports=o}},0,[[662,955,712]]]);