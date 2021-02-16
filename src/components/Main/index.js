import Component from '../../models/component';
import Routes from '../Router/routes'
import Spinner from '../Spinner/template.html'

export default class Main extends Component {

  constructor(router, element = document.getElementById(process.env.ROOT_ELEMENT)) {
    super(element)
    this._currentModule = null
    this._routes = Routes
    this._router = router
  }

  subscribeObservable() {
    this._router.route.subscribe(path => {
      this.loadModule(this.findModule(path))
    })
  }

  setTitle() {
    document.title = `${process.env.DOCUMENT_TITLE} - ${this._currentModule?.options.title}`
      || process.env.DOCUMENT_TITLE
  }

  findModule(path) {
    const regExp = new RegExp(`${path}$`, 'i')
    this._currentModule = this._routes
      .find(({ path }) => {
        if (path.match(regExp)) return true
      }) || this._routes.find(({ path }) => path === '*')
    return this._currentModule
  }

  async loadModule(module) {
    try {
      const { component } = module
      this.setTitle()
      this.fallback()
      const fn = await import(process.env.MODULES_PATH + component)
      this.cleanTemplate()
      new fn.default(this._element).init()
    } catch (error) {
      this._element.textContent = error.message
    }
  }

  fallback() {
    this._element.innerHTML = this.spinner()
  }

  cleanTemplate() {
    this._element.textContent = ''
  }

  spinner() {
    return `
    ${Spinner({ width: 90, height: 90 })}
      <div class="container center roxo">
        <p>Carregando...</p>
      </div>
    `
  }

  init() {
    this.subscribeObservable()
    return this
  }
}