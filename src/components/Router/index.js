import so from '../../js/so'

const initialPath = window.location.pathname.slice(1) || '/'

export const $curentPath = so.observable(initialPath, function (prevValue, newValue, next) {
  next(newValue.replace('/', ''))
})

export default class Router {

  constructor() {
    this._currentRoute = so.observable(window.location.pathname)
  }

  addEventListener() {
    window.addEventListener('popstate', () => {
      if (this._currentRoute() !== this.getWindowRoute()) {
        $curentPath(this.getWindowRoute())
      }
    })
  }

  get route() {
    return $curentPath
  }

  getWindowRoute() {
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