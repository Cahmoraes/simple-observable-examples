(self.webpackChunkrevisao_10_02_2021=self.webpackChunkrevisao_10_02_2021||[]).push([[999],{999:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var a=n(575),i=n.n(a),r=n(913),s=n.n(r),o=n(898),l=n(539),d=n.n(l),u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.getElementById("root");i()(this,e),this._root=t,this._btnCadastrar=null,this._input_1=null,this._input_2=null,this._lista=null,this._$array=o.Z.observableArray({nome:"caique",idade:22}),this._config={title:"Observable Array",label_1:"Nome",label_2:"Idade"}}return s()(e,[{key:"getElements",value:function(){this._btnCadastrar=document.getElementById("btn-cadastrar"),this._input_1=document.getElementById("input_1"),this._input_2=document.getElementById("input_2"),this._listaPessoas=document.getElementById("lista")}},{key:"render",value:function(){this._root.insertAdjacentHTML("beforeend",d()(this._config))}},{key:"remove",value:function(){console.log("remove")}},{key:"subscribeArray",value:function(){var e=this;this._$array.subscribe((function(t){e._listaPessoas.innerHTML=t.map((function(t,n){return"<li>\n          ".concat(e._config.label_1,": ").concat(t().nome," - \n          ").concat(e._config.label_2,": ").concat(t().idade," \n          ").concat(e.createRemovePessoaBtn(n),"</li>")})).join("")}))}},{key:"createRemovePessoaBtn",value:function(e){var t=document.createElement("button");return t.textContent="X",t.dataset.remove="".concat(e),t.outerHTML}},{key:"createPessoa",value:function(e,t){return{nome:e,idade:t}}},{key:"removePessoaFromList",value:function(e){this._$array.remove(e)}},{key:"addEventListenerCadastrar",value:function(){var e=this;this._btnCadastrar.addEventListener("click",(function(t){e._input_1.value&&e._input_2.value?e._$array.add({nome:e._input_1.value,idade:e._input_2.value}):alert("preencha um valor")}))}},{key:"addEventListenerRemover",value:function(){var e=this;this._listaPessoas.addEventListener("click",(function(t){if("BUTTON"===t.target.tagName){var n=+t.target.dataset.remove;e.removePessoaFromList(n)}}))}},{key:"init",value:function(){return this.render(),this.getElements(),this.subscribeArray(),this.addEventListenerRemover(),this.addEventListenerCadastrar(),this}}]),e}()},539:e=>{function t(){return`<div id="observbaleArray">\n  <div class="container">\n    <div class="grid-12">\n      <h2 class="subtitle">${this.title}</h2>\n      <section class="row">\n        <div class="grid-12 description">\n          <strong>\n            const $array = so.obervableArray([...params])\n          </strong>\n          <p>Permite criar um array de observables.</p>\n          <p>Cada obervable alterado ou removido, reflete no array.</p>\n        </div>\n      </section>\n\n      <section class="row">\n        <div class="grid-12">\n          <div class="form-group">\n            <label for="input_1">${this.label_1}:</label>\n            <input type="text" id="input_1" name="input_1">\n          </div>\n        </div>\n        <div class="grid-12">\n          <div class="form-group">\n            <label for="input_2">${this.label_2}:</label>\n            <input type="text" id="input_2" name="input_2">\n          </div>\n        </div>\n        <div class="grid-12">\n          <button id="btn-cadastrar">Adicionar</button>\n        </div>\n      </section>\n\n\n    </div>\n    <div class="grid-12">\n      <ul id="lista">\n      </ul>\n    </div>\n  </div>\n</div>`}e.exports=function(e){return t.call(e,e)}}}]);