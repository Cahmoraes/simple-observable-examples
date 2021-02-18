import so from '../../js/so'
import template from './template.html'
import './styles'
import Component from '../../models/component'
import Atom from './atom.html'

export default class Menu extends Component {

  constructor(router, element = document.getElementById('menu')) {
    super(element)
    this._router = router
    this._config = { title: this.titleSpinner() }
    this.$_activeItem = so.observable()
    this._menuItems = []
    this._activeClass = 'active'
  }

  render() {
    this._element.insertAdjacentHTML('beforeend', template(this._config))
  }

  subscribeObservable() {
    this.$_activeItem.subscribe(activeItem => {
      if (!activeItem) return
      this._menuItems.forEach(item => item.classList.remove(this._activeClass))
      activeItem.classList.add(this._activeClass)
    })
  }

  getElements() {
    this._menuItems = [...this._element.querySelectorAll('li')]
  }

  addEventLitenerMenu() {
    this._router.route.subscribe(path => {
      if (path !== '/') {
        const item = this._element.querySelector(`[href*="/${path}"]`)
        if (item) {
          this.$_activeItem(item.parentElement)
        }
      } else {
        this.$_activeItem(this._element.querySelector(`[href]`))
      }
    })
  }

  titleSpinner() {
    return `
    Simple${Atom({
      width: 35,
      height: 35,
      color_1: '#913BF3',
      color_2: '#84e',
      color_3: '#9B30F9',
      background: '#ccc'
    })}bservable
    `
  }

  init() {
    this.render()
    this.getElements()
    this.addEventLitenerMenu()
    this.subscribeObservable()
    return this
  }
}