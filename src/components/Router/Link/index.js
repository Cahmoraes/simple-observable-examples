import getEnvironment from '../../../js/utils/getEnvironment'
import pushState from '../../../js/utils/pushState'
import RouterService from '../router.service'

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
      RouterService.setRoute(this._path)
      pushState(this._path.replace('/', ''))
    })
  }
}