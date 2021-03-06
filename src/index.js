import './css/style'
import './js/customElements'
import Menu from './components/Menu'
import Main from './components/Main'
import Router from './components/Router'
// import soOld from './js/so-old'

const router = new Router().init()
new Menu(router).init()
new Main(router).init()
