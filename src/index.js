import './css/style'
import './js/customElements'
import Menu from './components/Menu'
import Main from './components/Main'
import Router from './components/Router'

new Menu().init()
const main = new Main().init()

new Router()
  .init()
  .route
  .subscribe(path => {
    const module = main.findModule(path)
    if (module) {
      main.loadModule(module)
    } else {
      console.log('Módulo não encontrado')
    }
  })