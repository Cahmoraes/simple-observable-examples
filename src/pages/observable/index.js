import so from '../../js/so'
import template from './template.html'

export default class Observable {
  constructor(element = document.getElementById(process.env.ROOT_ELEMENT)) {
    this._root = element
    this._$obs_1 = so.observable(0)
    this._button_1 = null
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
  }

  addEventListener() {
    this._button_1.addEventListener('click', () => {
      this._$obs_1(this._$obs_1() + 1)
    })
  }

  subscribeObservable() {
    this._$obs_1.subscribe(value => {
      this._button_1.textContent = `(${value})`
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