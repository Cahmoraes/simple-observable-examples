(self.webpackChunkrevisao_10_02_2021=self.webpackChunkrevisao_10_02_2021||[]).push([[539],{539:r=>{function a(){return`<div class="content">\n  <h2 class="subtitle">${this.title}</h2>\n  <article id="observbaleArray">\n    <div class="container-fluid">\n      <div class="grid-12">\n        <section class="row">\n          <div class="grid-12 description">\n            <h3>Sintaxe</h3>\n            <pre class="code">\n                // const $array_1 = so.obervableArray([...params]) <br>\n                const $array_2 = so.obervableArray('elemento') <br>\n                const $array_3 = so.obervableArray(1,2,3,4) <br>\n                const $array_4 = so.obervableArray([1,2,3,4]) <br>\n              </pre>\n            <p>Cria um array de observables.</p>\n            <p>Cada obervable alterado ou removido reflete no array.</p>\n            <p>Se for passado um array como parâmetro no construtor, cada elemento do array será convertido para um elemento no Observable Array.</p>\n            <p>Pode passar quantos elementos forem necessários, cada elemento será convertido para um elemento no Observable Array.</p>\n            <h3>Parâmetro</h3>\n            <p>Arrays: Se for passado um array, cada elemento do array será convertido para um elemento do Observable Array.</p>\n            <p>Se nada for passado, será criado um Array vazio</p>\n            <pre class="code">\n                $array.add('novo elemento')\n              </pre>\n            <h3>Métodos</h3>\n            <p>\n              <strong>add(param)</strong>: Adiciona um novo elemento no array.<br>\n              Se o array estiver vazio e param for um array, cada item de param será adicionado como um item do array.\n            </p>\n            <p>\n              <strong>remove(param)</strong>: Remove elemento do Array.<br>\n              param: int, object, function. <br>\n              Se param for um número inteiro, removerá o índice do array do reepectivo param.<br>\n              Se param for uma função, deverá ser um elemento do array ex.: $array()[0]. <br>\n              Se param for um objeto, deverá ser passado como ex.: $array()[0]()\n            </p>\n            <pre class="code">\n              const $array = so.observableArray([1, 2, 3]) <br>\n              $array.add(4) <br>\n              $array.remove(1) // remove number 2 <br> \n              $array.remove($array.get(3)) // remove number 4\n            </pre>\n            <p>\n              <strong>clear()</strong>: Remove todas as ocorrências do ObservableArray.<br>\n              Além de limpar toda lista de subscribers do Array.\n            </p>\n            <p>\n              <strong>flatMap(function callback(currentValue[,index]))</strong><br>\n              O método flatMap() primeiro mapeia cada elemento usando uma função de mapeamento e, em seguida, nivela o resultado em um novo array. É idêntico a um map seguido por um flat de profundidade 1, mas flatMap é bastante útil e mescla ambos em um método um pouco mais eficiente.\n            </p>\n            <pre class="code">\n              const $arr = so.observableArray([1, 2, 3], [4, 5, 6]) <br>\n              console.log($arr()) // [[1, 2, 3], [4, 5, 6]] <br>\n              const flatArray = $arr.flatMap(item => item) <br>\n              console.log(flatArray) // [1, 2, 3, 4, 5, 6] \n            </pre>\n            <p>\n              <strong>get(index)</strong>: Retorna elemento do array, do índice especificado. <br>\n              Nota: Retorna como observable.\n            </p>\n            <p>\n              <strong>getValue(index)</strong>: Retorna elemento do array, do índice especificado.<br>\n              Retorna o valor do elemento do índice especificado.\n            </p>\n            <pre class="code">\n                const $array = so.observableArray([1, 2, 3, 4]) <br>\n                console.log($array.get(2)) // function observable(newParamValue) {...} <br>\n                console.log($array.getValue(2)) // 3 <br>\n              </pre>\n          </div>\n        </section>\n\n        <form class="row examples">\n          <div class="grid-12">\n            <div class="form-group">\n              <label for="input_1">${this.label_1}:</label>\n              <input type="text" id="input_1" name="input_1">\n            </div>\n          </div>\n          <div class="grid-12">\n            <div class="form-group">\n              <label for="input_2">${this.label_2}:</label>\n              <input type="text" id="input_2" name="input_2">\n            </div>\n          </div>\n          <div class="grid-12">\n            <button id="btn_cadastrar">Adicionar</button>\n          </div>\n          <div class="grid-12">\n            <p id="arraylength"></p>\n          </div>\n        </form>\n        <div class="row">\n          <div class="grid-12">\n            <ul id="lista">\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </article>\n</div>`}r.exports=function(r){return a.call(r,r)}}}]);