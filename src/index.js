import './css/style'
import './js/customElements'
import Menu from './components/Menu'
import Main from './components/Main'
import Router from './components/Router'

const router = new Router().init()
new Menu(router).init()
new Main(router).init()

const $observable = so.observable(1)
const $pipe = $observable.pipe(v => v.toString())
$observable(3)
// const sub = $pipe.subscribe(console.log)
// sub.dispose()
$pipe(4)
$pipe(6)

console.log($observable())
console.log($pipe())