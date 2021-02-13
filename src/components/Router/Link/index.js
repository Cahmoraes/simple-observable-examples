import { $curentPath } from '..'
import getEnvironment from '../../../js/utils/getEnvironment'

export default class Link extends HTMLAnchorElement {
  constructor() {
    super()

    const currentPath = this.getAttribute('href')
    this.setAttribute('href', `${getEnvironment()}${currentPath}`)

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