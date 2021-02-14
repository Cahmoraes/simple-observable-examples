import so from '../../js/so'
import pushState from '../../js/utils/pushState'

function routerServiceMiddleware(_, newValue, next) {
  const path = newValue.replace('/', '')
  next(path)
}

const initialPath = window.location.pathname.slice(1) || '/'
const router = so.observable(initialPath, routerServiceMiddleware)

export default class RouterService {

  static get router() {
    return router
  }

  static setRoute(path) {
    router(path)
  }

  static navigate(path) {
    pushState(path)
    this.setRoute(path)
  }

}