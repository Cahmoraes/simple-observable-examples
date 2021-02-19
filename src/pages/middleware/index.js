import so from '../../js/so'
import template from './template.html'
import './styles'

export default class Middleware {
  constructor(element = document.getElementById(process.env.ROOT_ELEMENT)) {
    this._root = element


    this._config = {
      title: 'Middleware'
    }
  }

  getElements() {

  }



  addEventListenerInputs() {

  }

  render() {
    this._root.insertAdjacentHTML('beforeend', template(this._config))
  }

  init() {
    this.render()
    this.getElements()
    return this
  }
}