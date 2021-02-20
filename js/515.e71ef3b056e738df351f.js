(self.webpackChunkrevisao_10_02_2021=self.webpackChunkrevisao_10_02_2021||[]).push([[515,41],{515:(e,n,i)=>{"use strict";i.r(n),i.d(n,{default:()=>c});var t=i(575),s=i.n(t),a=i(913),r=i.n(a),o=i(898),l=i(41),b=i.n(l),c=function(){function e(){var n=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.getElementById("root");s()(this,e),this._root=i,this._$obs_1=o.Z.observable(0),this._$computedInicial=o.Z.computed((function(){return n._$obs_1.getInitialValue()}),[this._$obs_1]),this._$computedPrev=o.Z.computed((function(){return n._$obs_1.prevValue()}),[this._$obs_1]),this._button_1=null,this._inicialValue=null,this._prevValue=null,this._config={title:"Observable",button_1:"button_1"}}return r()(e,[{key:"render",value:function(){this._root.insertAdjacentHTML("beforeend",b()(this._config))}},{key:"getElements",value:function(){this._button_1=document.getElementById("button_1"),this._prevValue=document.getElementById("prevValue"),this._inicialValue=document.getElementById("inicialValue")}},{key:"addEventListener",value:function(){var e=this;this._button_1.addEventListener("click",(function(){e._$obs_1(e._$obs_1()+1)}))}},{key:"subscribeObservable",value:function(){var e=this;this._$obs_1.subscribe((function(n){e._button_1.textContent="Valor atual: (".concat(n,")")})),this._$computedInicial.subscribe((function(n){e._inicialValue.textContent="Valor inicial: (".concat(n,")")})),this._$computedPrev.subscribe((function(n){e._prevValue.textContent="Valor anterior: (".concat(n,")")}))}},{key:"init",value:function(){return this.render(),this.getElements(),this.addEventListener(),this.subscribeObservable(),this}}]),e}()},41:e=>{function n(){return`<div class="content">\n  <h2 class="subtitle">${this.title}</h2>\n  <article id="observable">\n    <div class="container-fluid">\n      <div class="grid-12">\n        <section class="row">\n          <div class="grid-12 description">\n            <h3>Sintaxe</h3>\n            <pre class="code">\n              const $observable = so.observable(param [,function])\n            </pre>\n            <p>Cria um observable.</p>\n            <h3>Parâmetros</h3>\n            <p>\n              param: String, Number, Object, null, Function.<br>\n              Valor inicial do observable.\n            </p>\n            <p>\n              function: Função Middleware. Intercepta todas as mudanças de valor no Observable.<br>\n              Para saber mais sobre Middleware, acesse: <a is="app-link" href="/middleware">Middleware</a>.\n            </p>\n            <h3>Métodos</h3>\n            <h4>subscribe(fn)</h4>\n            <p>Inscreve no Observable, recebe uma função de callback e retorna uma inscrição.</p>\n            <pre class="code">\n              const subscription = $observable.subscribe(value => value.toUpperCase())<br>\n              subscription.dispose() // cancela a inscrição.\n            </pre>\n            <h4>prevValue</h4>\n            <p>Retorna o valor anterior observable.</p>\n            <h4>getInitialValue</h4>\n            <p>retorna o valor inicial do observable.</p>\n            <pre class="code">\n              const $observable = so.observable(1)<br>\n              $observable(3) <br>\n              $observable(5) <br>\n              console.log($observable.prevValue()) // 3 <br>\n              console.log($observable.getInitialValue()) // 1 <br>\n            </pre>\n            <h4>pipe(...fn)</h4>\n            <p>Retorna um Pipeable Obseravable. Recebe uma ou mais funções que vão transformar o valor do observable sempre que ele for exibido.</p>\n            <pre class="code">\n              const $pipeable = $observable.pipe(fn1, fn2, fn3)\n            </pre>\n            <p>\n              Clique aqui para mais informações sobre\n              <a is="app-link" href="/pipeableobservable">Pipeable Observable</a>.\n            </p>\n          </div>\n        </section>\n        <section class="row examples">\n          <div class="grid-12">\n            <button id="${this.button_1}"></button>\n          </div>\n          <div class="grid-12 MT10">\n            <div class="row">\n              <div class="grid-6">\n                <p id="inicialValue"></p>\n              </div>\n              <div class="grid-6">\n                <p id="prevValue"></p>\n              </div>\n            </div>\n          </div>\n        </section>\n      </div>\n    </div>\n  </article>\n</div>`}e.exports=function(e){return n.call(e,e)}}}]);