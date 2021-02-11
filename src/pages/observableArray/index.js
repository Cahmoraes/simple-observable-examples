import so from '../../js/so'
import './styles'
import template from './template.html'

export default class ObservableArray {
  constructor(element = document.getElementById(process.env.ROOT_ELEMENT)) {
    this._root = element
    this._btnCadastrar = null
    this._input_1 = null
    this._input_2 = null
    this._lista = null
    this._$array = so.observableArray({ nome: 'caique', idade: 22 })
    this._config = {
      title: 'Observable Array',
      label_1: 'Nome',
      label_2: 'Idade'
    }
  }

  getElements() {
    this._btnCadastrar = document.getElementById('btn-cadastrar')
    this._input_1 = document.getElementById('input_1')
    this._input_2 = document.getElementById('input_2')
    this._listaPessoas = document.getElementById('lista')
  }

  render() {
    this._root.insertAdjacentHTML('beforeend', template(this._config))
  }

  remove() {
    console.log('remove')
  }

  subscribeArray() {
    this._$array.subscribe(pessoas => {
      this._listaPessoas.innerHTML = pessoas.map((pessoa, index) => (
        `<li>
          ${this._config.label_1}: ${pessoa().nome} - 
          ${this._config.label_2}: ${pessoa().idade} 
          ${this.createRemovePessoaBtn(index)}</li>`
      )).join('')
    })
  }

  createRemovePessoaBtn(index) {
    const btn = document.createElement('button')
    btn.textContent = 'X'
    btn.dataset.remove = `${index}`
    return btn.outerHTML
  }

  createPessoa(nome, idade) {
    return { nome, idade }
  }

  removePessoaFromList(index) {
    this._$array.remove(index)
  }

  addEventListenerCadastrar() {
    this._btnCadastrar.addEventListener('click', (event) => {
      if (!this._input_1.value || !this._input_2.value) {
        alert('preencha um valor')
        return
      }
      this._$array.add({ nome: this._input_1.value, idade: this._input_2.value })
    })
  }

  addEventListenerRemover() {
    this._listaPessoas.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') {
        const button = event.target
        const index = +button.dataset.remove
        this.removePessoaFromList(index)
      }
    })
  }

  init() {
    this.render()
    this.getElements()
    this.subscribeArray()
    this.addEventListenerRemover()
    this.addEventListenerCadastrar()
    return this
  }
}