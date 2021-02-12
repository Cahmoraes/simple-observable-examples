import template from './template.html'
import './styles'
import Component from '../../models/component'
import so from '../../js/so'

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
    this._element.addEventListener('click', (event) => {
      event.preventDefault()
      const { target } = event
      if (target.tagName === 'A') {
        const item = target
        this.$_activeItem(item)
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