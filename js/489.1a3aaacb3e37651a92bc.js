(self.webpackChunkrevisao_10_02_2021=self.webpackChunkrevisao_10_02_2021||[]).push([[489],{724:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});var i=n(575),s=n.n(i),u=n(913),l=n.n(u),o=n(898),a=n(79),_=n.n(a),r=function(){function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.getElementById("root");s()(this,t),this._root=n,this._btnCadastrar=null,this._input_1=null,this._input_2=null,this._computedValue=null,this._$obs_1=o.Z.observable(""),this._$obs_2=o.Z.observable(""),this._$computed=o.Z.computed((function(){return"".concat(e._$obs_1()," ").concat(e._$obs_2())}),[this._$obs_1,this._$obs_2]),this._config={title:"Computed Observable",label_1:"Nome",label_2:"Sobrenome",label_3:"Computed Value"}}return l()(t,[{key:"getElements",value:function(){this._input_1=document.getElementById("input_1"),this._input_2=document.getElementById("input_2"),this._computedValue=document.getElementById("computed-value")}},{key:"subscribe",value:function(){var t=this;this._$computed.subscribe((function(e){return t._computedValue.textContent=e}))}},{key:"addEventListenerInputs",value:function(){var t=this;this._input_1.addEventListener("keyup",(function(e){var n=e.target.value;t._$obs_1(n)})),this._input_2.addEventListener("keyup",(function(e){var n=e.target.value;t._$obs_2(n)}))}},{key:"render",value:function(){this._root.insertAdjacentHTML("beforeend",_()(this._config))}},{key:"init",value:function(){return this.render(),this.getElements(),this.subscribe(),this.addEventListenerInputs(),this}}]),t}()},79:t=>{function e(){return`<div id="computedObservbale">\n  <div class="container">\n    <div class="grid-12">\n      <h2 class="subtitle">${this.title}</h2>\n      <div class="form-group">\n        <label for="input_1">${this.label_1}:</label>\n        <input type="text" id="input_1" name="input_1">\n      </div>\n      <div class="form-group">\n        <label for="input_2">${this.label_2}:</label>\n        <input type="text" id="input_2" name="input_2">\n      </div>\n    </div>\n    <div class="grid-12">\n      <span>${this.label_3}:</span>\n      <p id="computed-value"></p>\n    </div>\n  </div>\n</div>`}t.exports=function(t){return e.call(t,t)}}}]);