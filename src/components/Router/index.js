import so from '../../js/so';
import Routes from './routes'

import { $curentPath } from './Link'

export default class Router {
  constructor(routes = Routes) {
    this._currentRoute = so.observable(window.location.pathname)
    this._routes = routes
  }

  addEventListener() {
    window.addEventListener('popstate', () => {
      if (this._currentRoute() !== this.getRoute()) {
        this.setRoute(this.getRoute())
      }
    })
  }

  get route() {
    return this._currentRoute
  }

  getRoute() {
    return window.location.pathname
  }

  setRoute(path) {
    if (typeof path !== 'undefined') {
      this._currentRoute(path)
    }
  }

  subscribeObservable() {
    $curentPath.subscribe(value => {
      this.setRoute(value)
    })
  }

  init() {
    this.addEventListener()
    this.subscribeObservable()
    return this
  }
}