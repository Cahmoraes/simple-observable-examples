import so from '../../js/so'
import template from './template.html'
import './styles'

export default class computedObservable {
  constructor(element = document.getElementById(process.env.ROOT_ELEMENT)) {
    this._root = element
    this._btnCadastrar = null
    this._input_1 = null
    this._input_2 = null
    this._computedValue = null
    this._$obs_1 = so.observable('')
    this._$obs_2 = so.observable('')
    this._$computed = so.computed(() => {
      return `${this._$obs_1()} ${this._$obs_2()}`
    }, [this._$obs_1, this._$obs_2])

    this._config = {
      title: 'Computed Observable',
      label_1: 'Nome',
      label_2: 'Sobrenome',
      label_3: 'Valor computado'
    }
  }

  getElements() {
    this._input_1 = document.getElementById('input_1')
    this._input_2 = document.getElementById('input_2')
    this._computedValue = document.getElementById('computed-value')
  }

  subscribeObservable() {
    this._$computed.subscribe(value => this._computedValue.textContent = value)
  }

  addEventListenerInputs() {
    this._input_1.addEventListener('keyup', (event) => {
      const value = event.target.value
      this._$obs_1(value)
    })

    this._input_2.addEventListener('keyup', (event) => {
      const value = event.target.value
      this._$obs_2(value)
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