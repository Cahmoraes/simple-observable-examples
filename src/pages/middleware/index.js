import so from '../../js/so'
import template from './template.html'
import './styles'

export default class Middleware {
  constructor(element = document.getElementById(process.env.ROOT_ELEMENT)) {
    this._root = element
    this._input_1 = null
    this._label_1 = 'Dados de entrada'
    this._label_2 = 'Dados de saída'
    this._label_3 = 'prevValue:'
    this._label_4 = 'newValue:'
    this._output_1 = null
    this._output_2 = null
    this._$obs_1 = null

    this._config = {
      title: 'Middleware',
      input_1: 'input_1',
      label_1: this._label_1,
      label_2: this._label_2,
      label_3: this._label_3,
      label_4: this._label_4,
      output_1: 'output_1',
      output_2: 'output_2'
    }

  }

  createObservable() {
    this._$obs_1 = so.observable('', (prevValue, newValue, next) => {
      this._output_1.textContent = prevValue
      this._output_2.textContent = newValue
      next()
    })
  }

  getElements() {
    this._input_1 = this._root.querySelector(`#${this._config.input_1}`)
    this._output_1 = this._root.querySelector(`#${this._config.output_1}`)
    this._output_2 = this._root.querySelector(`#${this._config.output_2}`)
  }

  addEventListenerInputs() {
    this._input_1.addEventListener('input', (event) => {
      const { target: { value } } = event
      this._$obs_1(value)
    })
  }

  render() {
    this._root.insertAdjacentHTML('beforeend', template(this._config))
  }

  init() {
    this.render()
    this.getElements()
    this.createObservable()
    this.addEventListenerInputs()
    return this
  }
}