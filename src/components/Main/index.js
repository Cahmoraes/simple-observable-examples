import Component from '../../models/component';
import { $curentPath } from '../Router/Link';
const environment = (process.env.NODE_ENV || 'development').trim()
const path = environment === 'development' ? '' : '/' + process.env.PRODUCTION_PATH

export default class Main extends Component {
  constructor(element = document.getElementById(process.env.ROOT_ELEMENT), $module = $curentPath) {
    super(element)
    this._$module = $module
  }

  subscribeObservable() {
    this._$module.subscribe(module => {
      module && this.loadModule(module)
    })
  }

  async loadModule(module) {
    try {
      this._element.innerHTML = 'Carregando...'
      const fn = await import(`../../pages${path}${module}/`)
      this._element.innerHTML = ''
      new fn.default(this._element).init()
    } catch (error) {
      this._element.textContent = error.message
    }
  }

  init() {
    this.subscribeObservable()
    this.loadModule('/observableArray')
    return this
  }
}