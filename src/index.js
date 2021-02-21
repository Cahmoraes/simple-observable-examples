import './css/style'
import './js/customElements'
import Menu from './components/Menu'
import Main from './components/Main'
import Router from './components/Router'
import so from './js/so'

const router = new Router().init()
new Menu(router).init()
new Main(router).init()

const $array = so.observableArray([1, 2, 3, 4])

$array.subscribe(array => {
  console.log('---------')
  array.forEach(el => console.log(el()))
  console.log('---------')
})
$array.remove($array.get(3))