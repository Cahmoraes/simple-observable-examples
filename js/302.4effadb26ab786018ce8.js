(self.webpackChunkrevisao_10_02_2021=self.webpackChunkrevisao_10_02_2021||[]).push([[302],{9302:a=>{function e(){return`<div class="content">\n  <h2 class="subtitle">${this.title}</h2>\n  <article id="middleware">\n    <div class="container-fluid">\n      <div class="grid-12">\n        <section class="row">\n          <div class="grid-12 description">\n            <h3>Sintaxe</h3>\n            <pre class="code">\n                function middleware(prevValue, newValue, next) {\n                  <span class="tab_1">console.log(prevValue) // 1</span>\n                  <span class="tab_1">console.log(newValue) // 2 </span>\n                  <span class="tab_1">console.log(next()) // 2 </span>\n                }\n                <span>const $obs = so.obervable(1, middleware)</span>\n                <span>$obs(2)</span>\n              </pre>\n            <p>Funções middleware interceptam o observable quando ele sofre uma mudança. Deste modo é possível realizar um side-effect durante a atualização do observable, além de interceptar, transformar e alterar o valor do observable.</p>\n            <h3>Parâmetros</h3>\n            <p><strong>prevValue:</strong> Valor anterior do observable.</p>\n            <p><strong>newValue:</strong> Novo valor passado para o observable via parâmetro: $obs('param')</p>\n            <p><strong>next:</strong> Função que ao ser executada, atualizará o valor do observable para o novo valor e retornará o novo valor atualizado. Se nada for passado para ela: next(), apenas atualizará o valor do observable com o newValue. Se for passado algum parâmtro, atualizará o valor do observable com o valor do parâmetro: next(3).</p>\n            <p>O exemplo abaixo demonstra os valores de prevValue e newValue sendo atualizados conforme o input recebe informação. E os dados do input atualizam o Observable com a chamada do next(event.target.value).</p>\n          </div>\n        </section>\n        <section class="row">\n          <div class="grid-12">\n            <div class="form-group">\n              <label for="input_1">${this.label_1}:</label>\n              <input type="text" id="${this.input_1}" name="${this.input_1}">\n            </div>\n            <div class="form-group">\n              <p>${this.label_2}:</p>\n              <div class="row">\n                <div class="grid-6">\n                  <span>${this.label_3}</span>\n                  <div class="row">\n                    <p class="grid-6 word-break" id="${this.output_1}"></p>\n                  </div>\n                </div>\n                <div class="grid-6">\n                  <span>${this.label_4}</span>\n                  <div class="row">\n                    <p class="grid-6 word-break" id="${this.output_2}"></p>\n                  </div>\n                </div>\n              </div>\n            </div>\n        </section>\n      </div>\n    </div>\n</div>\n</article>\n</div>`}a.exports=function(a){return e.call(a,a)}}}]);