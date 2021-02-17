import template from './template.html'
import notfoundImg from '../../assets/img/404.png'

export default class NotFound {
  constructor(element = document.getElementById(process.env.ROOT_ELEMENT)) {
    this._root = element
    this._config = {
      title: 'Página não encontrada',
      notfoundImg
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