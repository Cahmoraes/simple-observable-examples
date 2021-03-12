import so from '../../js/so'
import template from './template.html'
import './styles'
import sd from '../../js/sd'
import { domInject } from '../../js/utils/decorators/decoratos'

export default class computedObservable {
  constructor (element = document.getElementById(process.env.ROOT_ELEMENT)) {
    this._root = element
    sd.property(
      this,
      {
        _input_1: domInject('#input_1'),
        _input_2: domInject('#input_2'),
        _computedValue: domInject('#computed_value')
      }
    )

    this._$obs_1 = so.observable('')
    this._$obs_2 = so.observable('')
    this._$computed = so.computed(() => {
      return `${this._$obs_1()} ${this._$obs_2()}`
    }, [this._$obs_1, this._$obs_2, {}])

    this._config = {
      title: 'Computed Observable',
      label_1: 'Nome',
      label_2: 'Sobrenome',
      label_3: 'Valor computado'
    }
  }

  subscribeObservable () {
    this._$computed.subscribe(value => {
      this._computedValue.textContent = value
    })
  }

  addEventListenerInputs () {
    this._input_1.addEventListener('input', (event) => {
      const value = event.target.value
      this._$obs_1(value)
    })

    this._input_2.addEventListener('input', (event) => {
      const value = event.target.value
      this._$obs_2(value)
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
