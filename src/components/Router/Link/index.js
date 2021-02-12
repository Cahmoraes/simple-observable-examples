import so from '../../../js/so'
const environment = (process.env.NODE_ENV || 'development').trim()

export const $curentPath = so.observable()

export default class Link extends HTMLAnchorElement {
  constructor() {
    super()
    if (environment !== 'development') {
      const path = this.getAttribute('href')
      this.setAttribute('href', `/${process.env.PRODUCTION_PATH}${path}`)
    }
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