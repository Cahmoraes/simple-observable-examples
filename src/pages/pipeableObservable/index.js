import so from '../../js/so'
import template from './template.html'
import './styles'

export default class PipeableObservable {
  constructor(element = document.getElementById(process.env.ROOT_ELEMENT)) {
    this._root = element
    this._$obs_1 = so.observable('').pipe(
      value => value.toString().toUpperCase()
    )
    this._$computedPipeable_1 = so.computed(() => this._$obs_1(), [this._$obs_1])
    this._input_1 = null
    this._value_1 = null

    this._config = {
      title: 'Pipeable Observable',
      input_1: 'input_1',
      placeholder_1: 'Digite algum texto...',
      value_1: 'value_1'
    }
  }

  render() {
    this._root.insertAdjacentHTML('beforeend', template(this._config))
  }

  getElements() {
    this._input_1 = document.getElementById('input_1')
    this._value_1 = document.getElementById('value_1')
  }

  addEventListener() {
    this._input_1.addEventListener('keyup', ({ target }) => {
      this._$obs_1(target.value)
    })
  }

  subscribeObservable() {
    this._$computedPipeable_1.subscribe(computedValue => {
      this._value_1.textContent = `Pipeable Value: ${computedValue}`
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