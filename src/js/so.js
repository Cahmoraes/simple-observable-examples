const so = (function () {

  function createObservableState(state, getSubscribers) {

    function managerSate(newState) {
      return { ...Object.assign(state, newState) }
    }

    function getObservableValue() {
      return state.currentValue
    }

    function getPrevObservableValue() {
      return state.prevValue
    }

    function getInitialObservableValue() {
      return state.initialValue
    }

    function setObservableValue(newValue) {
      managerSate({ currentValue: newValue })
    }

    function setPrevObservableValue(currentValue) {
      managerSate({ prevValue: currentValue })
    }

    function setObservableValues(newValue) {
      setPrevObservableValue(getObservableValue())
      setObservableValue(newValue)
      createFnNotifyAll(getSubscribers(), getObservableValue)()
    }

    return {
      getObservableValue,
      setObservableValues,
      getPrevObservableValue,
      getInitialObservableValue
    }
  }

  function createObservableComputedState(state, getSubscribers) {
    function managerSate(newState) {
      return { ...Object.assign(state, newState) }
    }

    function getObservableValue() {
      return state.computedValue
    }

    function setObservableValue() {
      managerSate({ computedValue: state.computedFn() })
      createFnNotifyAll(getSubscribers(), getObservableValue)()
    }

    return {
      getObservableValue,
      setObservableValue
    }
  }

  function createSubscribersState(state = []) {
    function managerState(newState) {
      return state = [...newState]
    }

    function addSubscriber(subscriber) {
      managerState([...state, subscriber])
    }

    function getSubscribers() {
      return state
    }

    function removeSubscriber(subscriber) {
      const newState = state.filter(function (subs) {
        return subs != subscriber
      })
      managerState(newState)
    }

    function clearSubscribers() {
      managerState([])
    }

    return {
      addSubscriber,
      getSubscribers,
      removeSubscriber,
      clearSubscribers
    }
  }

  function initializeComputedObservable(dependencies, observableState) {

    function setObservableComputedValue() {
      observableState.setObservableValue()
    }

    return {
      createDependenciesState() {
        // Cria array com todas as dependências recebidas por parâmetro.
        // Verifica se as dependências possuem a propriedade subscribe e se são funções.
        const _dependencesSubscriptions = dependencies.map(dep => {
          return dep.hasOwnProperty('subscribe')
            && typeof dep.subscribe === 'function'
            && dep.subscribe(setObservableComputedValue)
        })
        return _dependencesSubscriptions
      }
    }
  }

  function createObservableProps({ subscribersState, observableState }) {
    return {
      'subscribe': {
        get() {
          return function subscribe(subscriber) {
            return createFnSubscribe(
              subscribersState,
              subscriber,
              createFnNotifyAll(
                subscribersState.getSubscribers(),
                observableState.getObservableValue
              )
            )()
          }
        }
      },
      // Propriedade prevValue que retorna o valor inicial do observable
      'prevValue': {
        get() {
          return observableState.getPrevObservableValue()
        }
      },
      // Propriedade initialValue que retorna o valor inicial do observable
      'initialValue': {
        get() {
          return observableState.getInitialObservableValue()
        }
      }
    }
  }

  function createPipeableObservableProps({ subscribersState, observableState }) {
    return {
      'pipe': {

      }
    }
  }

  function createObservableArrayProps({
    subscribersState,
    observableArrayState
  }) {

    const notifyObservableArray = createFnNotifyAll(
      subscribersState.getSubscribers(),
      observableArrayState.getElements
    )

    return {
      'subscribe': {
        get() {
          return function subscribe(subscriber) {
            return createFnObservableArraySubscribe(
              subscribersState,
              subscriber,
              notifyObservableArray
            )()
          }
        }
      },
      'dispose': {
        get() {
          return subscribersState.clearSubscribers
        }
      },
      'add': {
        get() {
          return function add(...element) {
            createObservableArrayElement(
              observableArrayState,
              element,
              notifyObservableArray
            )
          }
        }
      },
      'remove': {
        get() {
          return function remove(element) {
            observableArrayState.removeElement(element)
            notifyObservableArray()
          }
        }
      },
      'get': {
        get() {
          return function get(index) {
            if (typeof index !== 'number') {
              throw new Error('index must be a type number')
            }
            return observableArrayState.getElement(index)
          }
        }
      },
      'getValue': {
        get() {
          return function getValue(index) {
            if (typeof index !== 'number') {
              throw new Error('index must be a type number')
            }
            const element = observableArrayState.getElement(index)
            if (element) {
              return element()
            }
            return
          }
        }
      }
    }
  }

  function createComputedObservableProps({
    subscribersState,
    observableState,
    subscriptionsDependencies
  }) {

    return {
      'subscribe': {
        get() {
          return function subscribe(subscriber) {
            return createFnComputedSubscribe(
              subscribersState,
              subscriber,
              subscriptionsDependencies,
              createFnNotifyAll(
                subscribersState.getSubscribers(),
                observableState.getObservableValue
              )
            )()
          }
        }
      }
    }
  }

  function createFnSubscribe(subscribersState, subscriber, notify) {
    return function subscribe() {
      if (typeof subscriber !== 'function') {
        throw new Error('Subscribe must receive a callback function')
      }
      subscribersState.getSubscribers().push(subscriber)
      notify()
      return {
        dispose: createFnDispose(subscribersState.removeSubscriber, subscriber)
      }
    }
  }

  function createFnComputedSubscribe(
    subscribersState,
    subscriber,
    subscriptionsDependencies,
    notify
  ) {
    return function subscribe() {
      if (typeof subscriber !== 'function') {
        throw new Error('Subscribe must receive a callback function')
      }
      subscribersState.getSubscribers().push(subscriber)
      notify()
      return {
        dispose: createFnComputedDispose(subscribersState.removeSubscriber, subscriber, subscriptionsDependencies)
      }
    }
  }

  function createFnObservableArraySubscribe(subscribersState, subscriber, notify) {
    return function subscribe() {
      if (typeof subscriber !== 'function') {
        throw new Error('Subscribe must receive a callback function')
      }
      subscribersState.getSubscribers().push(subscriber)
      notify()
      return {
        dispose: createFnDispose(subscribersState.removeSubscriber, subscriber)
      }
    }
  }

  function createFnComputedDispose(
    removeSubscriber,
    subscriberToRemove,
    subscriptionsDependencies
  ) {
    return function dispose() {
      removeSubscriber(subscriberToRemove)
      removeComputedDependencies(subscriptionsDependencies)
    }
  }

  function createFnNotifyAll(subscribers, getObservableValue) {
    return function notifyAll() {
      if (!subscribers.length) return null
      subscribers.map(function (subscriber) {
        subscriber(getObservableValue())
      })
    }
  }

  function createFnDispose(removeSubscriber, subscriberToRemove) {
    return function dispose() {
      removeSubscriber(subscriberToRemove)
    }
  }

  function initializeObservable({ observableState, newParamValue, createdMiddleware }) {
    if (typeof newParamValue === 'undefined') {
      return observableState.getObservableValue()
    }
    if (typeof createdMiddleware === 'function') {
      createdMiddleware()
    }
    if (typeof newParamValue === 'function') {
      const callbackEvaluated = newParamValue()
      if (typeof newParamValue !== 'undefined') {
        observableState.setObservableValues(callbackEvaluated)
        return observableState.getObservableValue()
      }
    }
    observableState.setObservableValues(newParamValue)
    return observableState.getObservableValue()
  }

  function createMiddlewareFnNext(observableState, newParamValue) {
    return function (middlewareValue) {
      observableState.setObservableValues(middlewareValue || newParamValue)
      return observableState.getObservableValue()
    }
  }

  function createMiddleware({ middleware, observableState, newParamValue }) {
    if (typeof middleware !== 'function') return false
    return middleware.bind(
      this,
      observableState.getObservableValue(),
      newParamValue,
      createMiddlewareFnNext(observableState, newParamValue)
    )
  }

  function validateComputedObervableParams(computedFn, dependencies) {
    // Verifica se computedFn não é uma função
    if (typeof computedFn !== 'function') {
      throw new Error('computedFn must be a function')
    }
    // Verifica se dependencies não é um array
    if (!Array.isArray(dependencies)) {
      throw new Error('dependencies must be a Array')
    }
    // Verifica se as dependências estão vazias
    if (dependencies.length === 0) {
      throw new Error('dependencies is empty')
    }
  }

  function removeComputedDependencies(subscriptionsDependencies) {
    subscriptionsDependencies.map(subscription => subscription.dispose())
  }

  function createObservableArrayState(state = []) {

    function managerState(newState) {
      return state = [...newState]
    }

    function clearArray() {
      managerState([])
    }

    function addElement(...element) {
      managerState([...state, ...element])
    }

    function getElements() {
      return state
    }

    function getElement(index) {
      return state[index]
    }

    function removeElement(element) {
      let newState = state
      if (typeof element === 'number') {
        newState = state.filter((_, index) => index !== element)
      }
      if (typeof element === 'function') {
        newState = state.filter(el => el !== element)
      }
      if (typeof element === 'object') {
        newState = state.filter(el => el() !== element)
      }
      managerState(newState)
    }

    return {
      getElement,
      getElements,
      addElement,
      removeElement,
      clearArray
    }
  }

  function createElementArray(addElement, element, notifyAll) {
    addElement(element)
    element.subscribe(notifyAll)
  }

  function createObservableArrayElement(observableArrayState, elements, notifyAll) {
    if (Array.isArray(elements[0])) {
      elements[0].forEach(element =>
        createElementArray(
          observableArrayState.addElement,
          so.observable(element),
          notifyAll
        )
      )
    } else {
      if (typeof elements === 'undefined' || elements.length === 0) {
        return []
      }
      elements.forEach(element =>
        createElementArray(
          observableArrayState.addElement,
          so.observable(element),
          notifyAll
        )
      )
    }
  }

  const so = {
    observable(paramValue, middleware = null) {
      // Inicializa o estado do Array de inscritos
      const subscribersState = createSubscribersState()
      // Estatos iniciais do Observable
      const inicialState = {
        initialValue: paramValue,
        prevValue: null,
        currentValue: paramValue
      }
      // Gerencia os estados do Observable
      const observableState = createObservableState(inicialState, subscribersState.getSubscribers)
      // Gerencia a chamada do Observable
      function observable(newParamValue) {
        // Cria Middleware
        const createdMiddleware = createMiddleware({
          middleware,
          observableState,
          newParamValue
        })

        return initializeObservable({
          observableState,
          newParamValue,
          createdMiddleware
        })
      }
      // Compõe o objeto Observables
      Object.defineProperties(
        observable,
        createObservableProps({ subscribersState, observableState })
      )
      // Retorna o Observable
      return observable
    },
    computed(computedFn, dependencies = null) {
      // Verifica se os parâmetros são válidos
      validateComputedObervableParams(computedFn, dependencies)
      // Inicializa o estado do Array de inscritos
      const subscribersState = createSubscribersState()
      // Estatos iniciais do Observable
      const inicialState = {
        computedValue: computedFn(),
        computedFn: computedFn
      }
      // Gerencia os estados do Observable
      const computedObservableState = createObservableComputedState(
        inicialState,
        subscribersState.getSubscribers
      )
      // Inicializa a construção do Computed Observable
      const _dependencesSubscriptions = initializeComputedObservable(
        dependencies,
        computedObservableState
      ).createDependenciesState()
      // Gerencia a chamada do Observable
      function computedObservable() {
        return computedObservableState.getObservableValue()
      }
      // Compõe o objeto Observables
      Object.defineProperties(
        computedObservable,
        createComputedObservableProps({
          subscribersState,
          observableState: computedObservableState,
          subscriptionsDependencies: _dependencesSubscriptions
        }),
        createObservableProps({ subscribersState, observableState: computedObservableState }),
      )
      // Retorna o Computed Observable
      return computedObservable
    },
    observableArray(...paramData) {
      const observableArrayState = createObservableArrayState()
      const subscribersState = createSubscribersState()

      function notifyObservableArray() {
        createFnNotifyAll(
          subscribersState.getSubscribers(),
          observableArrayState.getElements
        )()
      }

      createObservableArrayElement(observableArrayState, paramData, notifyObservableArray)

      function createObservableArray(...newParamValue) {
        if (typeof newParamValue === 'undefined') {
          return observableArrayState.getElements()
        }
        if (newParamValue.length === 0) {
          return observableArrayState.getElements()
        }
        if (typeof newParamValue === 'function') {
          return newParamValue(observableArrayState.getElements())
        }

        observableArrayState.clearArray()
        subscribersState.clearSubscribers()

        createObservableArrayElement(observableArrayState, newParamValue, notifyObservableArray)
        notifyObservableArray()
      }

      Object.defineProperties(
        createObservableArray,
        createObservableArrayProps({
          subscribersState,
          observableArrayState
        })
      )

      return createObservableArray
    },
    pipeable(paramValue, ...pipeableParamsFns) {
      const pipeableFns = []
      pipeableParamsFns.forEach(function (fn) {
        if (typeof fn !== 'function') {
          throw new Error('Pipe should receive function or functions as arguments')
        } else {
          pipeableFns.push(fn)
        }
      })

      // Transforma o valor do Observable para cada Pipeable Function
      const pipeableValue = pipeableFns.reduce((accumulator, fnPipeable) => {
        return fnPipeable(accumulator)
      }, paramValue)
      // Retorna um PipeableOberver
      return createPipeableObservable(pipeableValue, pipeableFns)
    }
  }

  return so
})()

export default so