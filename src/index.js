import './css/style'
import './js/customElements'
import Menu from './components/Menu'
import Main from './components/Main'
import Router from './components/Router'

const router = new Router().init()
new Menu(router).init()
new Main(router).init()

const $observable = so.observable(1)
$observable(3)
$observable(5)
console.log($observable.prevValue()) // 3
console.log($observable.getInitialValue()) // 1