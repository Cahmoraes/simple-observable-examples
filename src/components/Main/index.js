import Component from '../../models/component';
import { $curentPath } from '../Router/';
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
        this.loadComponent(module.component)
      }
    })
  }

  findModule(path) {
    const regEx = new RegExp(`${path}`, 'i')
    const module = this._routes.find(route => {
      const match = route.path.match(regEx)
      if (Array.isArray(match)) {
        return true
      }
    })
    if (module) {
      return module
    }
    return null
  }

  async loadComponent(component) {
    try {
      this._element.innerHTML = 'Carregando...'
      const fn = await import(`./../../pages/${component}/`)
      this.cleanTemplate()
      new fn.default(this._element).init()
    } catch (error) {
      this._element.textContent = error.message
    }
  }

  cleanTemplate() {
    this._element.innerHTML = ''
  }

  init() {
    this.subscribeObservable()
    return this
  }
}