import so from '../../js/so'
import template from './template.html'

export default class Observable {
  constructor(element = document.getElementById(process.env.ROOT_ELEMENT)) {
    this._root = element
    this._$obs_1 = so.observable(0)
    this._$computedInicial = so.computed(() => this._$obs_1.initialValue, [this._$obs_1])
    this._$computedPrev = so.computed(() => this._$obs_1.prevValue, [this._$obs_1])
    this._button_1 = null
    this._inicialValue = null
    this._prevValue = null
    this._config = {
      title: 'Observable',
      button_1: 'button_1'
    }
  }

  render() {
    this._root.insertAdjacentHTML('beforeend', template(this._config))
  }

  getElements() {
    this._button_1 = document.getElementById('button_1')
    this._prevValue = document.getElementById('prevValue')
    this._inicialValue = document.getElementById('inicialValue')
  }

  addEventListener() {
    this._button_1.addEventListener('click', () => {
      this._$obs_1(this._$obs_1() + 1)
    })
  }

  subscribeObservable() {
    this._$obs_1.subscribe(value => {
      this._button_1.textContent = `Valor atual: (${value})`
    })

    this._$computedInicial.subscribe(computedValue => {
      this._inicialValue.textContent = `Valor inicial: (${computedValue})`
    })

    this._$computedPrev.subscribe(computedValue => {
      this._prevValue.textContent = `Valor anterior: (${computedValue})`
    })
  }

  init() {
    this.render()
    this.getElements()
    this.addEventListener()
    this.subscribeObservable()
    return this
  }
}