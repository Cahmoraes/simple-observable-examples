import './css/style'
import './js/customElements'
import Menu from './components/Menu'
import Main from './components/Main'
import Router, { $curentPath } from './components/Router'


new Menu(document.getElementById('menu')).init()
const main = new Main(document.getElementById(process.env.ROOT_ELEMENT)).init()
const router = new Router().init()

const storagedPath = localStorage.getItem('@SOExamplesPath');
if (storagedPath) {
  localStorage.removeItem('@SOExamplesPath');
  window.history.pushState({}, '', window.location.origin + '/' + storagedPath)
  const path = storagedPath.split('/')[1] || '/'
  $curentPath(path)
} else {
  router.route.subscribe(path => {
    main.loadComponent(main.findModule(path).component)
  })
}