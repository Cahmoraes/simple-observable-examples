import Component from '../../models/component';
import RouterService from '../Router/router.service';
import Routes from '../Router/routes'

export default class Main extends Component {

  constructor(element = document.getElementById(process.env.ROOT_ELEMENT)) {
    super(element)
    this._module = null
    this._routes = Routes
  }

  subscribeObservable() {
    RouterService.router.subscribe(path => {
      if (path) {
        const module = this.findModule(path)
        this.loadComponent(module.component)
      }
    })
  }

  setTitle() {
    document.title = `${process.env.DOCUMENT_TITLE} - ${this._module.options.title}`
      || process.env.DOCUMENT_TITLE
  }

  findModule(path) {
    const regEx = new RegExp(`${path}`, 'i')
    this._module = this._routes.find(route => {
      const match = route.path.match(regEx)
      if (Array.isArray(match)) {
        return true
      }
    })
    if (this._module) {
      return this._module
    }
    return null
  }

  async loadComponent(component) {
    try {
      this.setTitle()
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