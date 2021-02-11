import so from '../../../js/so'

export const $curentPath = so.observable()

export default class Link extends HTMLAnchorElement {
  constructor() {
    super()
    this._path = this.getAttribute('href')
  }

  connectedCallback() {
    this.addEventListener('click', (event) => {
      event.preventDefault()
      window.history.pushState({}, '', window.location.origin + this._path)
      $curentPath(this._path)
    })
  }
}