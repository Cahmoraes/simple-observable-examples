import so from '../../js/so'
import template from './template.html'

export default class memoObservable {
  constructor(element = document.getElementById(process.env.ROOT_ELEMENT)) {
    this._root = element
    this._btnCadastrar = null
    this._input_1 = null
    this._$memo_1 = so.memo()
    this._output_1 = null

    this._config = {
      title: 'Memo Observable',
      label_1: 'Digite um valor para memorizar:',
      label_2: 'Memorizar',
      label_3: 'Valor memorizado:',
      label_4: 'Release',
      input_1: 'input_1',
      output_1: 'output_1',
      btnCadastrar: 'btnCadastrar',
      btnRelease: 'btnRelease',
    }
  }

  getElements() {
    this._input_1 = document.getElementById(this._config.input_1)
    this._btnRelease = document.getElementById(this._config.btnRelease)
    this._btnCadastrar = document.getElementById(this._config.btnCadastrar)
    this._output_1 = document.getElementById(this._config.output_1)
  }

  subscribeObservable() {
    this._$memo_1.subscribe(memoValue => {
      this._output_1.textContent = memoValue
    })
  }

  addEventListenerInputs() {
    this._btnCadastrar.addEventListener('click', () => {
      this._$memo_1(this._input_1.value)
    })

    this._btnRelease.addEventListener('click', () => {
      this._$memo_1.release()
    })
  }

  render() {
    this._root.insertAdjacentHTML('beforeend', template(this._config))
  }

  init() {
    this.render()
    this.getElements()
    this.subscribeObservable()
    this.addEventListenerInputs()
    return this
  }
}