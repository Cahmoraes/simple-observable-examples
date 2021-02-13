import template from './template.html'
import './styles'
import Component from '../../models/component'
import so from '../../js/so'
import { $curentPath } from '../Router/'

export default class Menu extends Component {

  constructor(element) {
    super(element)
    this._config = { title: 'Menu' }
    this.$_activeItem = so.observable()
    this._menuItems = []
    this._activeClass = 'active'
  }

  render() {
    this._element.insertAdjacentHTML('beforeend', template(this._config))
  }

  subscribe() {
    this.$_activeItem.subscribe(activeItem => {
      if (!activeItem) return
      this._menuItems.forEach(item => item.classList.remove(this._activeClass))
      activeItem.classList.add(this._activeClass)
    })
  }

  getElements() {
    this._menuItems = [...this._element.querySelectorAll('a')]
  }

  addEventLitenerMenu() {

    $curentPath.subscribe(path => {
      if (path !== '/') {
        const item = this._element.querySelector(`[href*="/${path}"]`)
        if (item) {
          this.$_activeItem(item)
        }
      }
    })
  }

  init() {
    this.render()
    this.getElements()
    this.addEventLitenerMenu()
    this.subscribe()
    return this
  }
}