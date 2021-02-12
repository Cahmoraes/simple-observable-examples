import './css/style'
import so from './js/so'

import Menu from './components/Menu'
import Main from './components/Main'
import Link from './components/Router/Link'
import Router from './components/Router'

const $module = so.observable()
customElements.define('app-link', Link, { extends: "a" })

new Menu(document.getElementById('menu'), $module).init()
const main = new Main(document.getElementById(process.env.ROOT_ELEMENT)).init()

const router = new Router().init()

router.route.subscribe(path => {
  main.loadComponent(path)
})