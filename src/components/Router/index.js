import so from '../../js/so'
import getEnvironment from '../../js/utils/getEnvironment';
import pushState from '../../js/utils/pushState';
import RouterService from './router.service'

export default class Router {

  constructor() {
    this._currentRoute = so.observable(window.location.pathname)
  }

  addEventListener() {
    window.addEventListener('popstate', () => {
      console.log(this._currentRoute(), this.getWindowRoute().replace('/', ''))
      if (this._currentRoute() !== this.getWindowRoute()) {
        this.setRoute(this.getWindowRoute())
      }
    })
  }

  navigate(path) {
    RouterService.navigate(path)
  }

  get route() {
    return RouterService.router
  }

  getWindowRoute() {
    return window.location.pathname
  }

  setRoute(path) {
    RouterService.setRoute(path)
  }

  setCurrentRoute(path) {
    if (typeof path !== 'undefined') {
      this._currentRoute(path)
    }
  }

  subscribeObservable() {
    RouterService.router.subscribe(value => {
      this.setCurrentRoute(value)
    })
  }

  verifyLocastorage() {
    const key = '@SOExamplesPath'
    const storagedPath = localStorage.getItem(key);
    if (storagedPath) {
      localStorage.removeItem(key);
      const path = storagedPath.split('/')[1] || '/'
      const totalPath = `${getEnvironment()}/${path}`
      pushState(totalPath.replace('/', ''))
      this.setRoute(totalPath)
    }
  }

  init() {
    this.verifyLocastorage()
    this.addEventListener()
    this.subscribeObservable()
    return this
  }
}