(self.webpackChunkrevisao_10_02_2021=self.webpackChunkrevisao_10_02_2021||[]).push([[179],{506:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},575:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},100:(e,t,n)=>{var r=n(489),i=n(67);function o(t,n,a){return i()?e.exports=o=Reflect.construct:e.exports=o=function(e,t,n){var i=[null];i.push.apply(i,t);var o=new(Function.bind.apply(e,i));return n&&r(o,n.prototype),o},o.apply(null,arguments)}e.exports=o},913:e=>{function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}},754:e=>{function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},205:(e,t,n)=>{var r=n(489);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},430:e=>{e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},67:e=>{e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},585:(e,t,n)=>{var r=n(8),i=n(506);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?i(e):t}},489:e=>{function t(n,r){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(n,r)}e.exports=t},957:(e,t,n)=>{var r=n(754),i=n(489),o=n(430),a=n(100);function s(t){var n="function"==typeof Map?new Map:void 0;return e.exports=s=function(e){if(null===e||!o(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return a(e,arguments,r(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),i(t,e)},s(t)}e.exports=s},97:(e,t,n)=>{"use strict";var r=n(575),i=n.n(r),o=n(913),a=n.n(o),s=n(205),l=n.n(s),c=n(585),u=n.n(c),f=n(754),p=n.n(f),h=n(957),d=n.n(h);const v=function(){return"/".concat("simple-observable-examples")};var b=n(898),m=window.location.pathname.slice(1)||"/",g=b.Z.observable(m,(function(e,t,n){n(t.replace("/",""))})),y=new(function(){function e(){return i()(this,e),e.instance||(e.instance=this),e.instance}return a()(e,[{key:"route",get:function(){return g}},{key:"setRoute",value:function(e){g(e)}},{key:"navigate",value:function(e){!function(e){window.history.pushState({},document.title,"".concat(window.location.origin,"/").concat(e))}(e.replace("/","")),this.setRoute(e)}}]),e}());Object.freeze(y);const k=y;var x=function(e){l()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=p()(t);if(n){var i=p()(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return u()(this,e)});function o(){var e;i()(this,o);var t=(e=r.call(this)).getAttribute("href");return e.setAttribute("href","".concat(v()).concat(t)),e._path=e.getAttribute("href"),e}return a()(o,[{key:"connectedCallback",value:function(){var e=this;this.addEventListener("click",(function(t){t.preventDefault(),k.navigate(e._path)}))}}]),o}(d()(HTMLAnchorElement));customElements.define("app-link",x,{extends:"a"});var w=n(319),_=n.n(w),O=n(499),M=n.n(O),R=function(){function e(t){i()(this,e),this._element=t}return a()(e,[{key:"init",value:function(){throw new Error("Init deve ser implementado")}}]),e}(),C=n(364),A=n.n(C);var E,L=function(e){l()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=p()(t);if(n){var i=p()(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return u()(this,e)});function o(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.getElementById("menu");return i()(this,o),(t=r.call(this,n))._router=e,t._config={title:t.titleSpinner()},t.$_activeItem=b.Z.observable(),t._menuItems=[],t._activeClass="active",t._menuHamburguer=null,t._navMenu=null,t._menuContainer=null,t}return a()(o,[{key:"render",value:function(){this._element.insertAdjacentHTML("beforeend",M()(this._config))}},{key:"subscribeObservable",value:function(){var e=this;this.$_activeItem.subscribe((function(t){t&&(e._menuItems.forEach((function(t){return t.classList.remove(e._activeClass)})),t.classList.add(e._activeClass),t.parentElement.classList.add(e._activeClass))}))}},{key:"getElements",value:function(){this._menuItems=_()(this._element.querySelectorAll("li")),this._menuHamburguer=this._element.querySelector('[data-menu="hamburguer"]'),this._navMenu=this._element.querySelector('[data-menu="nav"]'),this._menuContainer=this._element.querySelector('[data-menu="container"]')}},{key:"handleOutsideClick",value:function(e){var t=e.target;this._menuContainer.contains(t)||(this._navMenu.classList.remove(this._activeClass),this._menuHamburguer.classList.remove(this._activeClass),document.body.removeEventListener("click",this.handleOutsideClick))}},{key:"addEventLitenerMenu",value:function(){var e=this;this._router.route.subscribe((function(t){if("/"!==t){var n=e._element.querySelector('[href*="/'.concat(t,'"]'));n&&e.$_activeItem(n.parentElement)}else e.$_activeItem(e._element.querySelector("[href]"))})),this._menuHamburguer.addEventListener("click",(function(){e._navMenu.classList.add(e._activeClass),e._menuHamburguer.classList.add(e._activeClass),document.body.addEventListener("click",e.handleOutsideClick)}))}},{key:"titleSpinner",value:function(){return"\n    Simple".concat(A()({width:35,height:35,color_1:"#913BF3",color_2:"#84e",color_3:"#9B30F9",background:"#ccc"}),"bservable\n    ")}},{key:"bindMethods",value:function(){this.handleOutsideClick=this.handleOutsideClick.bind(this)}},{key:"init",value:function(){return this.bindMethods(),this.render(),this.getElements(),this.addEventLitenerMenu(),this.subscribeObservable(),this}}]),o}(R),$=n(757),S=n.n($),j=n(926),P=n.n(j),D=n(713),I=n.n(D);const T=[{path:v()||"/",component:"observable",options:{title:"Observable"}},{path:"".concat(v(),"/observable"),component:"observable",options:{title:"Observable"}},{path:"".concat(v(),"/middleware"),component:"middleware",options:{title:"Middleware"}},{path:"".concat(v(),"/observableArray"),component:"observableArray",options:{title:"Observable Array"}},{path:"".concat(v(),"/computedObservable"),component:"computedObservable",options:{title:"Computed Observable"}},{path:"".concat(v(),"/loading"),component:"loading",options:{title:"Carregando"}},(E={path:"*",component:"".concat(v(),"/notfound")},I()(E,"component","notfound"),I()(E,"options",{title:"Página não encontrada"}),E)];var B=n(48),H=n.n(B);var F=function(e){l()(c,e);var t,r,o,s=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p()(r);if(o){var n=p()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u()(this,e)});function c(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.getElementById("root");return i()(this,c),(t=s.call(this,n))._currentModule=null,t._routes=T,t._router=e,t}return a()(c,[{key:"subscribeObservable",value:function(){var e=this;this._router.route.subscribe((function(t){e.loadModule(e.findModule(t))}))}},{key:"setTitle",value:function(){var e;document.title="".concat("Simples Observable Examples"," - ").concat(null===(e=this._currentModule)||void 0===e?void 0:e.options.title)||0}},{key:"findModule",value:function(e){var t=new RegExp("".concat(e,"$"),"i");return this._currentModule=this._routes.find((function(e){if(e.path.match(t))return!0}))||this._routes.find((function(e){return"*"===e.path})),this._currentModule}},{key:"loadModule",value:(t=P()(S().mark((function e(t){var r,i;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=t.component,this.setTitle(),this.fallback(),e.next=6,n(717)("./"+r);case 6:i=e.sent,this.cleanTemplate(),new i.default(this._element).init(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),this._element.textContent=e.t0.message;case 14:case"end":return e.stop()}}),e,this,[[0,11]])}))),function(e){return t.apply(this,arguments)})},{key:"fallback",value:function(){this._element.innerHTML=this.spinner()}},{key:"cleanTemplate",value:function(){this._element.textContent=""}},{key:"spinner",value:function(){return"\n    ".concat(H()({width:90,height:90,color_1:"#913BF3",color_2:"#84e",color_3:"#9B30F9",background:"#f1f2f3"}),'\n      <div class="container center roxo">\n        <p>Carregando...</p>\n      </div>\n    ')}},{key:"init",value:function(){return this.subscribeObservable(),this}}]),c}(R),q=(new(function(){function e(){i()(this,e),this._currentRoute=b.Z.observable(window.location.pathname)}return a()(e,[{key:"addEventListener",value:function(){var e=this;window.addEventListener("popstate",(function(){e._currentRoute()!==e.getWindowRoute().replace("/","")&&e.setRoute(e.getWindowRoute())}))}},{key:"navigate",value:function(e){k.navigate(e)}},{key:"route",get:function(){return k.route}},{key:"getWindowRoute",value:function(){return window.location.pathname}},{key:"setRoute",value:function(e){k.setRoute(e)}},{key:"setCurrentRoute",value:function(e){void 0!==e&&this._currentRoute(e)}},{key:"subscribeObservable",value:function(){var e=this;k.route.subscribe((function(t){e.setCurrentRoute(t)}))}},{key:"verifyLocastorage",value:function(){var e="@SOExamplesPath",t=localStorage.getItem(e);if(t){localStorage.removeItem(e);var n=t.split("/")[1]||"/",r="".concat(v(),"/").concat(n);this.navigate(r)}}},{key:"init",value:function(){return this.verifyLocastorage(),this.addEventListener(),this.subscribeObservable(),this}}]),e}())).init();new L(q).init(),new F(q).init()},364:e=>{function t(){return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="background:transparent;display:block;position:relative;right:-3px;margin-left:-4px;" width="${this.width}" height="${this.height}" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n  <defs>\n    <path id="path" d="M50 15A15 35 0 0 1 50 85A15 35 0 0 1 50 15" fill="none"></path>\n    <path id="patha" d="M0 0A15 35 0 0 1 0 70A15 35 0 0 1 0 0" fill="none"></path>\n  </defs>\n  <g transform="rotate(0 50 50)">\n    <use xlink:href="#path" stroke="${this.background}" stroke-width="3"></use>\n  </g>\n  <g transform="rotate(60 50 50)">\n    <use xlink:href="#path" stroke="${this.background}" stroke-width="3"></use>\n  </g>\n  <g transform="rotate(120 50 50)">\n    <use xlink:href="#path" stroke="${this.background}" stroke-width="3"></use>\n  </g>\n  <g transform="rotate(0 50 50)">\n    <circle cx="50" cy="15" r="9" fill="${this.color_1}">\n      <animateMotion dur="1s" repeatCount="indefinite" begin="0s">\n        <mpath xlink:href="#patha"></mpath>\n      </animateMotion>\n    </circle>\n  </g>\n  <g transform="rotate(60 50 50)">\n    <circle cx="50" cy="15" r="9" fill="${this.color_2}">\n      <animateMotion dur="1s" repeatCount="indefinite" begin="-0.16666666666666666s">\n        <mpath xlink:href="#patha"></mpath>\n      </animateMotion>\n    </circle>\n  </g>\n  <g transform="rotate(120 50 50)">\n    <circle cx="50" cy="15" r="9" fill="${this.color_3}">\n      <animateMotion dur="1s" repeatCount="indefinite" begin="-0.3333333333333333s">\n        <mpath xlink:href="#patha"></mpath>\n      </animateMotion>\n    </circle>\n  </g>\n</svg>`}e.exports=function(e){return t.call(e,e)}},499:e=>{function t(){return`<div id="main-menu">\n\n  <div data-menu="container">\n    <h1 class="logo">\n      <div class="hamburguer" data-menu="hamburguer">\n        <div></div>\n        <div></div>\n        <div></div>\n      </div>\n      ${this.title}\n    </h1>\n    <nav id="nav-bar" data-menu="nav">\n      <ul>\n        <li>\n          <a is="app-link" href="/observable">Observable</a>\n        </li>\n        \x3c!-- <li>\n          <a is="app-link" href="/pipeableobservable">Pipeable Observable</a>\n        </li> --\x3e\n        <li>\n          <a is="app-link" href="/middleware">Middleware</a>\n        </li>\n        <li>\n          <a is="app-link" href="/observableArray">Observable Array</a>\n        </li>\n        <li>\n          <a is="app-link" href="/computedObservable">Computed Observable</a>\n        </li>\n        \x3c!-- <li>\n          <a is="app-link" href="/loading">Loading (example)</a>\n        </li>\n        <li>\n          <a is="app-link" href="/notfound">Not found (example)</a>\n        </li>\n        <li> --\x3e\n        <li>\n          <a target="_blank" href="https://raw.githubusercontent.com/Cahmoraes/simple-observable-examples/main/src/js/so.js">Download Dev Version ➤</a>\n        </li>\n\n        </li>\n      </ul>\n    </nav>\n  </div>\n</div>`}e.exports=function(e){return t.call(e,e)}},48:e=>{function t(){return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:#fff;display:block;" width="${this.width}" height="${this.height}" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n  <defs>\n    <path id="path" d="M50 15A15 35 0 0 1 50 85A15 35 0 0 1 50 15" fill="none"></path>\n    <path id="patha" d="M0 0A15 35 0 0 1 0 70A15 35 0 0 1 0 0" fill="none"></path>\n  </defs>\n  <g transform="rotate(0 50 50)">\n    <use xlink:href="#path" stroke="${this.background}" stroke-width="3"></use>\n  </g>\n  <g transform="rotate(60 50 50)">\n    <use xlink:href="#path" stroke="${this.background}" stroke-width="3"></use>\n  </g>\n  <g transform="rotate(120 50 50)">\n    <use xlink:href="#path" stroke="${this.background}" stroke-width="3"></use>\n  </g>\n  <g transform="rotate(0 50 50)">\n    <circle cx="50" cy="15" r="9" fill="${this.color_1}">\n      <animateMotion dur="1s" repeatCount="indefinite" begin="0s">\n        <mpath xlink:href="#patha"></mpath>\n      </animateMotion>\n    </circle>\n  </g>\n  <g transform="rotate(60 50 50)">\n    <circle cx="50" cy="15" r="9" fill="${this.color_2}">\n      <animateMotion dur="1s" repeatCount="indefinite" begin="-0.16666666666666666s">\n        <mpath xlink:href="#patha"></mpath>\n      </animateMotion>\n    </circle>\n  </g>\n  <g transform="rotate(120 50 50)">\n    <circle cx="50" cy="15" r="9" fill="${this.color_3}">\n      <animateMotion dur="1s" repeatCount="indefinite" begin="-0.3333333333333333s">\n        <mpath xlink:href="#patha"></mpath>\n      </animateMotion>\n    </circle>\n  </g>\n</svg>`}e.exports=function(e){return t.call(e,e)}},717:(e,t,n)=>{var r={"./computedObservable":[724,9,489],"./computedObservable/":[724,9,489],"./computedObservable/index":[724,9,489],"./computedObservable/index.js":[724,9,489],"./computedObservable/styles":[895,9,895],"./computedObservable/styles.scss":[895,9,895],"./computedObservable/template.html":[79,7,79],"./loading":[643,9,643],"./loading/":[643,9,643],"./loading/index":[643,9,643],"./loading/index.js":[643,9,643],"./loading/template.html":[31,7,31],"./middleware":[458,9,186,458],"./middleware/":[458,9,186,458],"./middleware/index":[458,9,186,458],"./middleware/index.js":[458,9,186,458],"./middleware/styles":[997,9,186,997],"./middleware/styles.scss":[997,9,186,997],"./middleware/template.html":[302,7,302],"./notfound":[103,9,103],"./notfound/":[103,9,103],"./notfound/index":[103,9,103],"./notfound/index.js":[103,9,103],"./notfound/styles":[734,9,734],"./notfound/styles.scss":[734,9,734],"./notfound/template.html":[920,7,920],"./observable":[515,9,515],"./observable/":[515,9,515],"./observable/index":[515,9,515],"./observable/index.js":[515,9,515],"./observable/template.html":[41,7,41],"./observableArray":[999,9,999],"./observableArray/":[999,9,999],"./observableArray/index":[999,9,999],"./observableArray/index.js":[999,9,999],"./observableArray/styles":[102,9,102],"./observableArray/styles.scss":[102,9,102],"./observableArray/template.html":[539,7,539],"./pipeableObservable":[686,9,686],"./pipeableObservable/":[686,9,686],"./pipeableObservable/index":[686,9,686],"./pipeableObservable/index.js":[686,9,686],"./pipeableObservable/styles":[605,9,605],"./pipeableObservable/styles.scss":[605,9,605],"./pipeableObservable/template.html":[396,7,396]};function i(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return Promise.all(t.slice(2).map(n.e)).then((()=>n.t(i,16|t[1])))}i.keys=()=>Object.keys(r),i.id=717,e.exports=i}},0,[[97,955,712]]]);