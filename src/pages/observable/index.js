import template from './template.html'

export default class Observable {
  constructor(element = document.getElementById(process.env.ROOT_ELEMENT)) {
    this._root = element
    this._config = {
      title: 'Observable'
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