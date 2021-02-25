(self.webpackChunkrevisao_10_02_2021=self.webpackChunkrevisao_10_02_2021||[]).push([[686,396],{686:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>p});var a=t(575),s=t.n(a),i=t(913),r=t.n(i),o=t(898),l=t(396),u=t.n(l),p=function(){function e(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.getElementById("root");s()(this,e),this._root=t,this._$obs_1=o.Z.observable("").pipe((function(e){return e.toString().toUpperCase()})),this._$computedPipeable_1=o.Z.computed((function(){return n._$obs_1()}),[this._$obs_1]),this._input_1=null,this._value_1=null,this._config={title:"Pipeable Observable",input_1:"input_1",label_1:"Dados de entrada:",placeholder_1:"Digite algum texto...",value_1:"value_1"}}return r()(e,[{key:"render",value:function(){this._root.insertAdjacentHTML("beforeend",u()(this._config))}},{key:"getElements",value:function(){this._input_1=document.getElementById("input_1"),this._value_1=document.getElementById("value_1")}},{key:"addEventListener",value:function(){var e=this;this._input_1.addEventListener("input",(function(n){var t=n.target;e._$obs_1(t.value)}))}},{key:"subscribeObservable",value:function(){var e=this;this._$computedPipeable_1.subscribe((function(n){e._value_1.innerHTML="<label>Pipeable Value:</label> ".concat(n)}))}},{key:"init",value:function(){return this.render(),this.getElements(),this.addEventListener(),this.subscribeObservable(),this}}]),e}()},396:e=>{function n(){return`<div class="content">\n  <h2 class="subtitle">${this.title}</h2>\n  <article id="pipeable-observable">\n    <div class="container-fluid">\n      <div class="grid-12">\n        <section class="row">\n          <div class="grid-12 description">\n            <h3>Sintaxe</h3>\n            <pre class="code">\n                const $pipeable = so.observable(param [,function]).pipe([...function])<br>\n              </pre>\n            <p>Cria um Pipeable observable.</p>\n            <p>Pipeable Observable, é um observable que lembra das funções que transformarão seu valor. Toda vez que seu valor for atualizado, as funções pipeables serão executadas sobre o novo valor.</p>\n            <h3>Parâmetros</h3>\n            <p>\n              param: Função ou lista de funções.<br>\n              Funções que vão transformar o valor do Observable sempre que ele for atualizado.<br>\n              Essas funções devem receber um parâmetro (valor atual do observable) e retornar o valor transformado.\n            </p>\n            <h3>Métodos</h3>\n            <p>\n              prevValue() => retorna o valor anterior observable. <br>\n              getInitialValue() => retorna o valor inicial do observable.\n            </p>\n            <pre class="code">\n                const $pipe = so.observable('caique').pipe(<br>\n                <span class="tab_1">(value) => value.toUpperCase()</span>\n                )<br>\n                // CAIQUE\n              </pre>\n          </div>\n        </section>\n        <section class="row examples">\n          <div class="grid-12">\n            <label for="${this.input_1}">${this.label_1}</label>\n            <input type="text" id="${this.input_1}" name="${this.input_1}" placeholder="${this.placeholder_1}">\n            <p class="word-break" id="${this.value_1}"></p>\n          </div>\n        </section>\n      </div>\n    </div>\n  </article>\n</div>`}e.exports=function(e){return n.call(e,e)}}}]);