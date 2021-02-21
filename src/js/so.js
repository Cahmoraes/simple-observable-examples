const so = {
  /**
   * Cria um Observable e inicializa com um valor
   * @param {any | Function} paramValue Valor inicial do Observable
   * @param {Function} middleware Função Middleware que intercepta o Observable 
   */
  observable: function Observable(paramValue, middleware) {
    // Valor do Observable
    let _observableValue
    // Valor anterior do observable
    let _prevValue
    // Inicia o Array de inscritos
    const _subscribers = []
    // Obtém o valor inicial do Observable
    function getInitialObservableValue() {
      return paramValue
    }
    // Obtém o valor anterior do Observable
    function getPrevObservableValue() {
      return _prevValue
    }
    // Atualiza o valor anterior do Observable
    function setPrevObservableValue(prevValue) {
      _prevValue = prevValue
    }
    // Obtém o valor atual do Observable
    function getObservableValue() {
      return _observableValue
    }
    // Atualiza o valor atual do Obervable
    function setObservableValue(newObservableValue) {
      _observableValue = newObservableValue
    }
    // Atualiza o valor atual e anterior do Observable
    function setObservablesValues(newObservableValue) {
      // Atualiza o valor anterior do observable
      setPrevObservableValue(getObservableValue())
      // Verifica se middleware é uma função
      if (verifyMiddlewareIsFunction()) {
        return createMiddlewareFunction(newObservableValue)
      }
      setObservableValue(newObservableValue)
    }
    // Verifica se o parâmetro middleware é uma função
    function verifyMiddlewareIsFunction() {
      return (typeof middleware === 'function')
    }
    /** 
      Retorna a função middleware que contém:
      @param {Function} getPrevObservableValue: valor anterior do observable
      @param {any} newObservableValue: novo valor do Observable recebido por parâmetro
      @param {Function} middlewareNext: retorna uma função que atualiza o observable e retorna seu valor atual
      @return {Function}
    **/
    function createMiddlewareFunction(newObservableValue) {
      return middleware(
        getPrevObservableValue(),
        newObservableValue,
        middlewareNext(newObservableValue)
      )
    }
    // Atualiza o valor do Observable e retorna o valor atual do observable
    function middlewareNext(newObservableValue) {
      return function (middlewareValue) {
        setObservableValue(middlewareValue || newObservableValue)
        return getObservableValue()
      }
    }
    // Inicia o valor do Observable
    setObservablesValues(paramValue)
    /* 
    Função que será retornada ao executar a função Observable()
    e executada toda vez que alterar um Observable 
    */
    function observable(newParamValue) {
      // Verifica se não há parâmetros
      if (typeof newParamValue === 'undefined') {
        // retorna o valor atual do observable
        return getObservableValue()
      }
      // Verifica se o parâmetro é uma função de callback
      if (typeof newParamValue === 'function') {
        // retorna o callback passando o valor atual do observable
        const fnCallback = newParamValue
        const evaluation = fnCallback(getObservableValue())
        // Se a função de callback tiver um return atualiza o Observable
        if (typeof evaluation !== 'undefined') {
          setObservablesValues(evaluation)
          // Notifica os inscritos
          notifyAll()
          // Retorna o valor atual do Observable
          return getObservableValue()
        }
        // Se não houver return, retorna o valor atual do Observable
        return getObservableValue()
      }
      // Se existe parâmetro
      else {
        // Verifica se este observable é um Pipeable Observable
        if (verifyIsPipeableObserver(observable)) {
          return notifyPipeableObservable(observable, newParamValue)
        }
        // Atualiza o valor do Observable
        setObservablesValues(newParamValue)
        // Verifica se este observable, é parte de um array
        if (verifyObservableArray(observable)) {
          // Notifica o Array sobre a mudança deste observable
          notifyArray(observable)
        }
        // Notifica todos os inscritos sobre a mudança do observable
        notifyAll()
        // Retorna o novo valor do Observable
        return getObservableValue()
      }
    }
    // Percorre o array de inscritos e dispara todos os callbacks
    function notifyAll() {
      _subscribers.forEach(function (observer) {
        observer(getObservableValue())
      })
    }
    /* 
      Recebe um callback como argumento e retira todas 
      as ocorrêcias dele do array de inscritos 
    */
    function unregister(cb) {
      // Array que receberá o index de todas as ocorrências
      // de callbacks encontradas
      const cbsIndex = []
      // Preenche o array com todas as ocorrências encontradas
      _subscribers.forEach(function (observer, index) {
        if (observer === cb) {
          cbsIndex.push(index)
        }
      })
      // Para cada ocorrência encontrada, remove do array de inscritos
      cbsIndex.forEach(function (cb) {
        _subscribers.splice(cb, 1)
      })
    }
    // Verifica se o observable faz parte de um Array
    function verifyObservableArray(obervable) {
      return obervable.hasOwnProperty('observableArray')
    }
    // Verifica se o observable é um Pipeable Observable
    function verifyIsPipeableObserver(observable) {
      return observable.hasOwnProperty('pipeableFns') && Array.isArray(observable.pipeableFns)
    }
    // Atualiza o PipleableOberver quando houver mudanças
    function notifyPipeableObservable(obervable, newParamValue) {
      const pipeableValue = obervable.pipeableFns.reduce(function (pipeableValue, fnPipeable) {
        return fnPipeable(pipeableValue)
      }, newParamValue)
      setObservableValue(pipeableValue)
      notifyAll()
      return getObservableValue()
    }
    /**
      Recebe um Observable que está em um array
      @param {Obervable} observable
      Obtém todas as inscrições do ObservableArray e uma cópia ObservableArray
      Dispara todas as inscrições do ObservableArray em cima do ObservableArray
    **/
    function notifyArray(observable) {
      // Para cada inscrito do ObservableArray, notifique passando a cópia do ObservableArray
      observable['subscribers']().forEach(function (observer) {
        Reflect.apply(observer, null, [observable['observableArray']()])
      })
    }
    // Cria PipeableObservable
    function createPipeableObservable(pipeableValue, pipeableFns) {
      // Retorna um Observable customizado com nova propriedade
      /**
        @param {any} pipeableValue: valor transformado pelas Pipeable Functions
        @param {Function }pipeableFns: Array contendo todas as Pipeable Functions que
        serão armanezadas via closure
      **/
      return Object.defineProperty(Observable(pipeableValue), 'pipeableFns', {
        get() {
          return this._pipeableFns || pipeableFns
        },
        set(pipeableFns) {
          this._pipeableFns = pipeableFns
        }
      })
    }
    // Define as propriedades do obeserver
    Object.defineProperties(observable, {
      'subscribe': {
        get() {
          /* 
            Adiciona o método subscribe que recebe como parâmetro um callback (observer)
            e retorna uma função "dispose" (subscription), responsável por remover este callback
          */
          return function subscribe(observer) {
            if (typeof observer !== 'function') throw new Error('Callback is not defined')
            const repeatedFunction = _subscribers.find(sub => sub === observer)
            if (!repeatedFunction) {
              _subscribers.push(observer)
              notifyAll()
            }
            return {
              dispose() {
                unregister(observer)
              }
            }
          }
        }
      },
      // Adiciona o método pipe que recebe como parâmetro 1 ou mais callbacks
      // Retorna um PipeableObserver sem alterar o Observer original
      'pipe': {
        get() {
          // Inicializa o array que receberá todas as Pipeable Functions
          const pipeableFns = []
          // Retorna uma função que recebe Pipeable Functions
          return function pipe(...pipeableParamsFns) {
            // Espalha os parâmetros dentro do array
            pipeableParamsFns.forEach(function (fn) {
              // Verifica
              if (typeof fn !== 'function') {
                throw new Error('Pipe should receive function as arguments')
              } else {
                pipeableFns.push(fn)
              }
            })
            // Transforma o valor do Observable para cada Pipeable Function
            const pipeableValue = pipeableFns.reduce((accumulator, fnPipeable) => {
              return fnPipeable(accumulator)
            }, getObservableValue())
            // Retorna um PipeableOberver
            return createPipeableObservable(pipeableValue, pipeableFns)
          }
        }
      },
      // Adicioa método prevValue que retorna o valor anterior do Observable
      'prevValue': {
        get() {
          return function prevValue() {
            return getPrevObservableValue()
          }
        }
      },
      // Adiciona método getInitialValue que retorna o valor inicial do observable
      'getInitialValue': {
        get() {
          return function getInitialValue() {
            return getInitialObservableValue()
          }
        }
      }
    })
    // Função/Objeto retornado ao executar Obervable()
    return observable
  },

  computed: function Computed(computedFn, dependencies) {
    // Verifica se computedFn não é uma função
    if (typeof computedFn !== 'function') {
      throw new Error('computedFn must be a function')
    }
    // Verifica se dependencie não é um array
    if (!Array.isArray(dependencies)) {
      throw new Error('dependencies must be a Array')
    }
    // Inicializa as variáveis
    const _subscribers = []
    let _computedValue = computedFn()
    const _dependencesSubscriptions = dependencies.map(dep => {
      dep.hasOwnProperty('subscribe')
        && typeof dep.subscribe === 'function'
        && dep.subscribe(setComputedValue)
    })
    // Atualiza valor computado
    function setComputedValue() {
      _computedValue = computedFn()
      notifyAll()
    }
    // Retorna valor computado
    function getComputedValue() {
      return _computedValue
    }
    // Percorre o array de inscritos e dispara todos os callbacks
    function notifyAll() {
      _subscribers.forEach(function (observer) {
        observer(getComputedValue())
      })
    }
    /* 
      Recebe um callback como argumento e retira todas 
      as ocorrêcias dele do array de inscritos 
    */
    function unregister(cb) {
      // Array que receberá o index de todas as ocorrências
      // de callbacks encontradas
      const cbsIndex = []
      // Preenche o array com todas as ocorrências encontradas
      _subscribers.forEach(function (observer, index) {
        if (observer === cb) {
          cbsIndex.push(index)
        }
      })
      // Para cada ocorrência encontrada, remove do array de inscritos
      cbsIndex.forEach(function (cb) {
        _subscribers.splice(cb, 1)
      })
    }
    // Apaga as inscrições das dependências
    function unregisterDependences() {
      _dependencesSubscriptions.map(function (subscription) {
        subscription.dispose()
      })
    }
    // Returna o valor do computed
    function computed() {
      return getComputedValue()
    }

    Object.defineProperties(computed, {
      'subscribe': {
        get() {
          /* 
            Adiciona o método subscribe que recebe como parâmetro um callback (observer)
            e retorna uma função "dispose" (subscription), responsável por remover este callback
          */
          return function subscribe(observer) {
            if (typeof observer !== 'function') throw new Error('Callback is not defined')
            _subscribers.push(observer)
            notifyAll()
            return {
              dispose() {
                unregister(observer)
                unregisterDependences()
              }
            }
          }
        }
      }
    })
    // Retorna o Computed Observable
    return computed
  },
  // Observable Array
  observableArray: function ObservableArray(...paramData) {
    // Inicializa o array de observables
    let _observableArray = []
    // Inicia o array dos inscritos
    const _subscribers = []
    // Verifica se data é um array
    if (Array.isArray(paramData[0])) {
      // Para cada elemento de data,
      // crie um observable customizado e adicione no array
      paramData[0].forEach(function (d) {
        _observableArray.push(createElementArray(d))
      })
    } else {
      _observableArray.push(...paramData.map(param => createElementArray(param)))
    }
    // Altera o valor do ObservableArray criado
    function createObservableArray(newParamData) {
      // Se não receber parâmetro, retorna o atual observableArray
      if (typeof newParamData === 'undefined') return _observableArray
      // Se o parâmetro for um callback, executa o callback em cima do observableArray
      if (typeof newParamData === 'function') {
        return newParamData(_observableArray)
      }
      // Limpa o observableArray para receber novos valores
      _observableArray = []
      /* 
        Se o parâmetro newParamData for um array, crie um Observable Customizado
        para cada item e adiciona no observableArray 
       */
      // Verifica se o novo parâmetro é um Array
      if (Array.isArray(newParamData)) {
        // Para cada elemento do parâmetro,
        // crie um observable customizado e adicione no array
        newParamData.forEach(function (element) {
          _observableArray.push(createElementArray(element))
        })
      }
      else {
        // Se não for um array, adiciona o elemento no ObservableArray
        _observableArray.push(createElementArray(newParamData))
      }
      // Notifique todos os ouvintes da mudança no ObservableArray
      notifyAll()
    }
    // Retorna uma cópia do observableArray
    function getObsevableArray() {
      return Array.prototype.slice.call(_observableArray)
    }
    // Retorna uma cópia do array de inscritos no Observable Array
    function getSubscribers() {
      return Array.prototype.slice.call(_subscribers)
    }
    // Recebe um dado e cria um observable array customizado
    function createElementArray(d) {
      /*
        Adiciona duas propriedades no Observable
        observableArray: função que retorna uma cópia da referência do ObservableArray original
        subscribers: função que retorna uma cópia da referência de inscritos do ObservableArray
      */
      return Object.assign(
        so.observable(d),
        {
          observableArray: getObsevableArray,
          subscribers: getSubscribers
        }
      )
    }
    /* 
    Percorre o array de inscritos e dispara todos os callbacks, passando a referência do observableArray
    */
    function notifyAll() {
      _subscribers.forEach(function (observer) {
        observer(getObsevableArray())
      })
    }
    /* 
      Recebe um callback como argumento e retira todas 
      as ocorrêcias dele do array de inscritos 
    */
    function unregister(cb) {
      const cbsIndex = []
      _subscribers.forEach(function (observer, index) {
        if (observer === cb) {
          cbsIndex.push(index)
        }
      })
      cbsIndex.forEach(function (observer) {
        _subscribers.splice(observer, 1)
      })
    }
    // Define as propriedades do ObservableArray
    Object.defineProperties(createObservableArray, {
      'add': {
        get() {
          // Adiciona um novo elemento no observableArray
          return function add(item) {
            // Verifica se há um parâmetro válido
            if (typeof item === 'undefined') throw new Error('Add must receive a parameter')
            // Verifica se o parâmetro é um array e se o observableArray está vazio
            if (Array.isArray(item) && _observableArray.length === 0) {
              // Para cada item do array do parâmetro, adicione um observable customizado
              // no observableArray
              item.forEach(function (i) {
                _observableArray.push(createElementArray(i))
              })
            } else {
              // copie todos os dados do observableArray e adicione o novo elemento no ObservableArray
              _observableArray = [...getObsevableArray(), createElementArray(item)]
            }
            // Notifique todos os ouvintes da mudança no observableArray
            notifyAll()
          }
        }
      },
      'remove': {
        get() {
          // Remove um elemento do ObservableArray
          return function remove(item) {
            // Verifica se o parâmetro é válido
            if (typeof item === 'undefined' || typeof item === 'string') {
              throw new Error('Remove must receive a parameter (function|number|object)')
            }
            // Verifica se o parâmetro é uma função e remove do observableArray
            if (typeof item === 'function') {
              _observableArray = getObsevableArray().filter(function (observable) {
                return observable !== item
              })
            }
            // Verifica se o parâmetro é um objeto e remove do observableArray
            else if (typeof item === 'object') {
              _observableArray = getObsevableArray().filter(function (observable) {
                return observable() !== item
              })
            }
            // Verifica se o parâmetro é um number e remove o index deste array
            else if (typeof item === 'number') {
              if (getObsevableArray().length > item) {
                _observableArray.splice(item, 1)
              }
            }
            // Notifica todos os ouvintes sobre a mudança no array
            notifyAll()
          }
        }
      },
      'get': {
        get() {
          return function get(index) {
            if (typeof index !== 'number') throw new Error('index must be a number')
            if (index >= 0 && index < getObsevableArray().length) return getObsevableArray()[index]
            return null
          }
        }
      },
      'getValue': {
        get() {
          return function getValue(index) {
            if (typeof index !== 'number') throw new Error('index must be a number')
            if (index >= 0 && index < getObsevableArray().length) return getObsevableArray()[index]()
            return null
          }
        }
      },
      'subscribe': {
        get() {
          // Recebe uma função de callback e regitra no array de inscritos (subscribers)
          return function subscribe(observer) {
            if (typeof observer !== 'function') throw new Error('Callback is not defined')
            _subscribers.push(observer)
            notifyAll()
            return {
              // Retorna o método dispose, que retira o callback do array de inscritos
              dispose() {
                unregister(observer)
              }
            }
          }
        }
      },
      'dispose': {
        get() {
          // Nível do observableArray, limpa o array de inscritos
          return function dispose() {
            _subscribers.splice(0, _subscribers.length)
          }
        }
      }
    })
    // Retorna o Objeto createObservableArray
    return createObservableArray
  },
  operators: {
    composition: function composition(...fns) {
      return function (value) {
        return fns.reduce(async function (acc, fn) {
          if (Promise.resolve(acc) === acc) {
            return fn(await acc)
          } else {
            return fn(acc)
          }
        }, value)
      }
    },
    debounce: function debounce(fn, delay = 500) {
      let timer
      if (Promise.resolve(fn) === fn) {
        return function (...args) {
          if (timer) clearTimeout(timer)
          timer = setTimeout(async function () {
            await fn(...args)
            timer = null
          }, delay)
        }
      } else {
        return function (...args) {
          if (timer) clearTimeout(timer)
          timer = setTimeout(function () {
            fn(...args)
            timer = null
          }, delay)
        }
      }
    }
  }
}

export default so