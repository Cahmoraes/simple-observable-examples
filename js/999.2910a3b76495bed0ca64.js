(self.webpackChunkrevisao_10_02_2021=self.webpackChunkrevisao_10_02_2021||[]).push([[999,539],{999:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>c});var n=r(575),t=r.n(n),o=r(913),s=r.n(o),i=r(898),d=r(539),l=r.n(d),c=function(){function e(){var a=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.getElementById("root");t()(this,e),this._root=r,this._btnCadastrar=null,this._input_1=null,this._input_2=null,this._arraylength=null,this._lista=null,this._$array=i.Z.observableArray({nome:"caique",idade:22}),this._computedLength=i.Z.computed((function(){return"Elementos: (".concat(a._$array().length,")")}),[this._$array]),this._config={title:"Observable Array",label_1:"Nome",label_2:"Idade"}}return s()(e,[{key:"getElements",value:function(){this._btnCadastrar=document.getElementById("btn-cadastrar"),this._input_1=document.getElementById("input_1"),this._input_2=document.getElementById("input_2"),this._listaPessoas=document.getElementById("lista"),this._arraylength=document.getElementById("arraylength")}},{key:"render",value:function(){this._root.insertAdjacentHTML("beforeend",l()(this._config))}},{key:"remove",value:function(){console.log("remove")}},{key:"subscribeArray",value:function(){var e=this;this._$array.subscribe((function(a){e._listaPessoas.innerHTML=a.map((function(a,r){return"<li>\n          ".concat(e._config.label_1,": ").concat(a().nome," - \n          ").concat(e._config.label_2,": ").concat(a().idade," \n          ").concat(e.createRemovePessoaBtn(r),"</li>")})).join("")})),this._computedLength.subscribe((function(a){e._arraylength.textContent=a}))}},{key:"createRemovePessoaBtn",value:function(e){var a=document.createElement("button");return a.textContent="X",a.dataset.remove="".concat(e),a.outerHTML}},{key:"createPessoa",value:function(e,a){return{nome:e,idade:a}}},{key:"removePessoaFromList",value:function(e){this._$array.remove(e)}},{key:"addEventListenerCadastrar",value:function(){var e=this;this._root.querySelector("form").addEventListener("submit",(function(e){e.preventDefault()})),this._btnCadastrar.addEventListener("click",(function(a){e._input_1.value&&e._input_2.value?e._$array.add({nome:e._input_1.value,idade:e._input_2.value}):e._$array.add({nome:Date.now(),idade:Math.floor(50*Math.random()+1)})}))}},{key:"addEventListenerRemover",value:function(){var e=this;this._listaPessoas.addEventListener("click",(function(a){if("BUTTON"===a.target.tagName){var r=+a.target.dataset.remove;e.removePessoaFromList(r)}}))}},{key:"init",value:function(){return this.render(),this.getElements(),this.subscribeArray(),this.addEventListenerRemover(),this.addEventListenerCadastrar(),this}}]),e}()},539:e=>{function a(){return`<div class="content">\n  <h2 class="subtitle">${this.title}</h2>\n  <article id="observbaleArray">\n    <div class="container-fluid">\n      <div class="grid-12">\n        <section class="row">\n          <div class="grid-12 description">\n            <h3>Sintaxe</h3>\n            <pre class="code">\n                // const $array_1 = so.obervableArray([...params]) <br>\n                const $array_2 = so.obervableArray('elemento') <br>\n                const $array_3 = so.obervableArray(1,2,3,4) <br>\n                const $array_4 = so.obervableArray([1,2,3,4]) <br>\n              </pre>\n            <p>Cria um array de observables.</p>\n            <p>Cada obervable alterado ou removido reflete no array.</p>\n            <p>Se for passado um array como parâmetro no construtor, cada elemento do array será convertido para um elemento no Observable Array.</p>\n            <p>Pode passar quantos elementos forem necessários, cada elemento será convertido para um elemento no Observable Array.</p>\n            <h3>Parâmetro</h3>\n            <p>Arrays: Se for passado um array, cada elemento do array será convertido para um elemento do Observable Array.</p>\n            <p>Se nada for passado, será criado um Array vazio</p>\n            <pre class="code">\n                $array.add('novo elemento')\n              </pre>\n            <h3>Métodos</h3>\n            <p>\n              <strong>add(param)</strong>: Adiciona um novo elemento no array.<br>\n              Se o array estiver vazio e param for um array, cada item de param será adicionado como um item do array.\n            </p>\n            <p>\n              <strong>remove(param)</strong>: Remove elemento do Array.<br>\n              param: int, object, function. <br>\n              Se param for um número inteiro, removerá o índice do array do reepectivo param.<br>\n              Se param for uma função, deverá ser um elemento do array ex.: $array()[0]. <br>\n              Se param for um objeto, deverá ser passado como ex.: $array()[0]()\n            </p>\n            <pre class="code">\n              const $array = so.observableArray([1, 2, 3]) <br>\n              $array.add(4) <br>\n              $array.remove(1) // remove number 2 <br> \n              $array.remove($array.get(3)) // remove number 4\n            </pre>\n            <p>\n              <strong>clear()</strong>: Remove todas as ocorrências do ObservableArray.<br>\n              Além de limpar toda lista de subscribers do Array.\n            </p>\n            <p>\n              <strong>flatMap(function callback(currentValue[,index]))</strong><br>\n              O método flatMap() primeiro mapeia cada elemento usando uma função de mapeamento e, em seguida, nivela o resultado em um novo array. É idêntico a um map seguido por um flat de profundidade 1, mas flatMap é bastante útil e mescla ambos em um método um pouco mais eficiente.\n            </p>\n            <pre class="code">\n              const $arr = so.observableArray([1, 2, 3], [4, 5, 6]) <br>\n              console.log($arr()) // [[1, 2, 3], [4, 5, 6]] <br>\n              const flatArray = $arr.flatMap(item => item) <br>\n              console.log(flatArray) // [1, 2, 3, 4, 5, 6] \n            </pre>\n            <p>\n              <strong>get(index)</strong>: Retorna elemento do array, do índice especificado. <br>\n              Nota: Retorna como observable.\n            </p>\n            <p>\n              <strong>getValue(index)</strong>: Retorna elemento do array, do índice especificado.<br>\n              Retorna o valor do elemento do índice especificado.\n            </p>\n            <pre class="code">\n                const $array = so.observableArray([1, 2, 3, 4]) <br>\n                console.log($array.get(2)) // function observable(newParamValue) {...} <br>\n                console.log($array.getValue(2)) // 3 <br>\n              </pre>\n          </div>\n        </section>\n\n        <form class="row examples">\n          <div class="grid-12">\n            <div class="form-group">\n              <label for="input_1">${this.label_1}:</label>\n              <input type="text" id="input_1" name="input_1">\n            </div>\n          </div>\n          <div class="grid-12">\n            <div class="form-group">\n              <label for="input_2">${this.label_2}:</label>\n              <input type="text" id="input_2" name="input_2">\n            </div>\n          </div>\n          <div class="grid-12">\n            <button id="btn-cadastrar">Adicionar</button>\n          </div>\n          <div class="grid-12">\n            <p id="arraylength"></p>\n          </div>\n        </form>\n        <div class="row">\n          <div class="grid-12">\n            <ul id="lista">\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </article>\n</div>`}e.exports=function(e){return a.call(e,e)}}}]);