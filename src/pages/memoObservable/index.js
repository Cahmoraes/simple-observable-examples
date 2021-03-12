import so from '../../js/so'
import sd from '../../js/sd'
import template from './template.html'
import { domInject } from '../../js/utils/decorators/decoratos'

export default class memoObservable {
  constructor (element = document.getElementById(process.env.ROOT_ELEMENT)) {
    this._root = element
    this._btnCadastrar = null
    sd.property(
      this,
      {
        _input_1: domInject('#input_1'),
        _btnRelease: domInject('#btnRelease'),
        _btnCadastrar: domInject('#btnCadastrar'),
        _output_1: domInject('#output_1')
      }
    )
    this._$memo_1 = so.memo()
    this._config = {
      title: 'Memo Observable',
      label_1: 'Digite um valor para memorizar:',
      label_2: 'Memorizar',
      label_3: 'Valor memorizado:',
      label_4: 'Release',
      input_1: 'input_1',
      output_1: 'output_1',
      btnCadastrar: 'btnCadastrar',
      btnRelease: 'btnRelease'
    }
  }

  subscribeObservable () {
    this._$memo_1.subscribe(memoValue => {
      this._output_1.textContent = memoValue
    })
  }

  addEventListenerInputs () {
    this._btnCadastrar.addEventListener('click', () => {
      this._$memo_1(this._input_1.value)
    })

    this._btnRelease.addEventListener('click', () => {
      this._$memo_1.release()
    })
  }

  render () {
    this._root.insertAdjacentHTML('beforeend', template(this._config))
  }

  init () {
    this.render()
    this.subscribeObservable()
    this.addEventListenerInputs()
    return this
  }
}
