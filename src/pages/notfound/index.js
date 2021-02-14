import template from './template.html'

export default class NotFound {
  constructor(element = document.getElementById(process.env.ROOT_ELEMENT)) {
    this._root = element
    this._config = {
      title: 'Página não encontrada'
    }
  }

  render() {
    this._root.insertAdjacentHTML('beforeend', template(this._config))
  }

  init() {
    this.render()
    return this
  }
}