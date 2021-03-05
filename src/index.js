import './css/style'
import './js/customElements'
import Menu from './components/Menu'
import Main from './components/Main'
import Router from './components/Router'
// import soOld from './js/so-old'

const router = new Router().init()
new Menu(router).init()
new Main(router).init()

const $arr = so.observableArray([1, 2, 3], [4, 5, 6])
console.log($arr()) // [[1, 2, 3], [4, 5, 6]]
const flatArray = $arr.flatMap(item => item)
console.log(flatArray) // [1, 2, 3, 4, 5, 6]
