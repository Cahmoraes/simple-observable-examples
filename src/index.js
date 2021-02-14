import './css/style'
import './js/customElements'
import Menu from './components/Menu'
import Main from './components/Main'
import Router from './components/Router'


const router = new Router().init()
new Menu(document.getElementById('menu')).init()
const main = new Main(document.getElementById(process.env.ROOT_ELEMENT)).init()

router.route.subscribe(path => {
  main.loadComponent(main.findModule(path).component)
})