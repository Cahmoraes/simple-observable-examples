import Component from '../../models/component';
import { $curentPath } from '../Router/Link';
import Routes from '../Router/routes'

export default class Main extends Component {
  constructor(element = document.getElementById(process.env.ROOT_ELEMENT), $module = $curentPath) {
    super(element)
    this._$module = $module
    this._routes = Routes
  }

  subscribeObservable() {
    this._$module.subscribe(path => {
      if (path) {
        const module = this.findModule(path)
        console.log('aqui', module)
        this.loadModule(module.component)
      }
    })
  }

  findModule(path) {
    const module = this._routes.find(route => {
      const regEx = new RegExp(`${path}`, 'ig')
      const match = route.path.match(regEx)
      if (Array.isArray(match)) {
        return true
      }
    })
    if (module) {
      console.log({ module })
      return module
    }
    return null
  }

  async loadModule(module) {
    try {
      this._element.innerHTML = 'Carregando...'
      const fn = await import(`../../pages${module}/`)
      this._element.innerHTML = ''
      new fn.default(this._element).init()
    } catch (error) {
      this._element.textContent = error.message
    }
  }

  init() {
    this.subscribeObservable()
    return this
  }
}