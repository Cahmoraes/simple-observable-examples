(self.webpackChunkrevisao_10_02_2021=self.webpackChunkrevisao_10_02_2021||[]).push([[396],{396:e=>{function n(){return`<div class="content">\n  <h2 class="subtitle">${this.title}</h2>\n  <div id="pipeable-observable">\n    <div class="container-fluid">\n      <div class="grid-12">\n        <section class="row">\n          <div class="grid-12 description">\n            <h3>Sintaxe</h3>\n            <div class="code">\n              const $pipeable = so.observable(param [,function]).pipe([...function])<br>\n            </div>\n            <p>Cria um Pipeable observable.</p>\n            <p>Pipeable Observable, é um observable que lembra das funções que que transformarão seu valor. Toda vez que o valor for atualizado, as funções pipeables serão executadas sobre o valor.</p>\n            <h3>Parâmetros</h3>\n            <p>\n              param: Função ou lista de funções<br>\n              Funções que vão transformar o valor do Observable sempre que ele for atualizado.<br>\n            </p>\n            <h3>Métodos</h3>\n            <p>\n              prevValue() => retorna o valor anterior observable. <br>\n              getInitialValue() => retorna o valor inicial do observable.\n            </p>\n\n            <div class="code">\n              const $pipe = so.observable('caique').pipe(<br>\n              (value) => value.toUpperCase()<br>\n              )<br>\n            </div>\n          </div>\n        </section>\n        <section class="row examples">\n          <div class="grid-12">\n            <input type="text" id="${this.input_1}" placeholder="${this.placeholder_1}">\n            <p id="${this.value_1}"></p>\n          </div>\n        </section>\n      </div>\n    </div>\n  </div>\n</div>`}e.exports=function(e){return n.call(e,e)}}}]);