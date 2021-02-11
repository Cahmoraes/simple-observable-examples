import './css/style'
import so from './js/so'

import Menu from './components/Menu'
import Main from './components/Main'

const $module = so.observable()
new Menu(document.getElementById('menu'), $module).init()
new Main(document.getElementById(process.env.ROOT_ELEMENT), $module).init()