(self.webpackChunkrevisao_10_02_2021=self.webpackChunkrevisao_10_02_2021||[]).push([[686,396],{686:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>p});var t=a(575),s=a.n(t),i=a(913),r=a.n(i),l=a(898),o=a(396),u=a.n(o),p=function(){function e(){var n=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.getElementById("root");s()(this,e),this._root=a,this._$obs_1=l.default.observable("").pipe((function(e){return e.toString().toUpperCase()})),this._$computedPipeable_1=l.default.computed((function(){return n._$obs_1()}),[this._$obs_1]),this._input_1=null,this._value_1=null,this._config={title:"Pipeable Observable",input_1:"input_1",label_1:"Dados de entrada:",placeholder_1:"Digite algum texto...",value_1:"value_1"}}return r()(e,[{key:"render",value:function(){this._root.insertAdjacentHTML("beforeend",u()(this._config))}},{key:"getElements",value:function(){this._input_1=document.getElementById("input_1"),this._value_1=document.getElementById("value_1")}},{key:"addEventListener",value:function(){var e=this;this._input_1.addEventListener("input",(function(n){var a=n.target;e._$obs_1(a.value)}))}},{key:"subscribeObservable",value:function(){var e=this;this._$computedPipeable_1.subscribe((function(n){e._value_1.innerHTML="<label>Pipeable Value:</label> ".concat(n)}))}},{key:"init",value:function(){return this.render(),this.getElements(),this.addEventListener(),this.subscribeObservable(),this}}]),e}()},396:e=>{function n(){return`<div class="content">\n  <h2 class="subtitle">${this.title}</h2>\n  <article id="pipeable-observable">\n    <div class="container-fluid">\n      <div class="grid-12">\n        <section class="row">\n          <div class="grid-12 description">\n            <h3>Sintaxe</h3>\n            <pre class="code">\n                const $pipeable = so.observable(param [,function]).pipe([...function])<br>\n              </pre>\n            <p>Cria um Pipeable observable.</p>\n            <p>Pipeable Observable, é um observable que lembra das funções que transformarão seu valor. Toda vez que seu valor for atualizado, as funções pipeables serão executadas sobre o novo valor.</p>\n            <h3>Parâmetros</h3>\n            <p>\n              param: Função ou lista de funções.<br>\n              Funções que vão transformar o valor do Observable sempre que ele for atualizado.<br>\n              Essas funções devem receber um parâmetro (valor atual do observable) e retornar o valor transformado.\n            </p>\n            <h3>Métodos</h3>\n            <p>\n              prevValue() => retorna o valor anterior observable. <br>\n              getInitialValue() => retorna o valor inicial do observable.\n            </p>\n            <pre class="code">\n                const $pipeExample_1 = so.observable('caique').pipe(<br>\n                <span class="tab_1">(value) => value.toUpperCase()</span>\n                ) \n                cosole.log($pipeExample_1())// CAIQUE <br><br>\n                const $pipeExample_2 = so.observable(10).pipe(\n                  <span class="tab_2">(value) => Number(value), </span>\n                  <span class="tab_2">(value) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) </span>\n                ) <br>\n                $pipeExample_2.subscribe(console.log) <br>\n                $pipeExample_2() // R$ 10,00 <br>\n                $pipeExample_2(250) // R$ 250,00 <br>\n                $pipeExample_2('3000') // R$ 3.000,00 <br>\n                console.log($pipeExample_2.prevValue()) // R$ 250,00\n              </pre>\n          </div>\n        </section>\n        <section class="row examples">\n          <div class="grid-12">\n            <label for="${this.input_1}">${this.label_1}</label>\n            <input type="text" id="${this.input_1}" name="${this.input_1}" placeholder="${this.placeholder_1}">\n            <p class="word-break" id="${this.value_1}"></p>\n          </div>\n        </section>\n      </div>\n    </div>\n  </article>\n</div>`}e.exports=function(e){return n.call(e,e)}}}]);