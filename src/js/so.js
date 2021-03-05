const so = (function () {
  // Utilitários de estados
  const state = {
    createObservableState(state, getSubscribers) {

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
        functions.createFnNotifyAll(getSubscribers, getObservableValue)()
      }

      return {
        getObservableValue,
        setObservableValues,
        getPrevObservableValue,
        getInitialObservableValue
      }
    },
    createObservableComputedState(state, getSubscribers) {

      function managerSate(newState) {
        return { ...Object.assign(state, newState) }
      }

      function getObservableValue() {
        return state.computedValue
      }

      function setObservableValue() {
        managerSate({ computedValue: state.computedFn() })
        functions.createFnNotifyAll(getSubscribers, getObservableValue)()
      }

      return {
        getObservableValue,
        setObservableValue
      }
    },
    createObservableArrayState(state = []) {

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
    },
    createSubscribersState(state = []) {

      function managerState(newState) {
        return state = [...newState]
      }

      function isDuplicate(subscriber) {
        return state.includes(subscriber)
      }

      function addSubscriber(subscriber) {
        !isDuplicate(subscriber) && managerState([...state, subscriber])
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
  }
  // Utilitários de propriedades
  const props = {
    createObservableProps({ subscribersState, observableState }) {
      return {
        'subscribe': {
          get() {
            return function subscribe(subscriber) {
              return functions.createFnSubscribe(
                subscribersState,
                subscriber,
                functions.createFnNotifyAll(
                  subscribersState.getSubscribers,
                  observableState.getObservableValue
                )
              )()
            }
          },
          enumerable: true
        },
        // Propriedade prevValue que retorna o valor inicial do observable
        'prevValue': {
          get() {
            return observableState.getPrevObservableValue()
          },
          enumerable: true
        },
        // Propriedade initialValue que retorna o valor inicial do observable
        'initialValue': {
          get() {
            return observableState.getInitialObservableValue()
          },
          enumerable: true
        }
      }
    },
    createPipeProp({ observableState }) {
      return {
        'pipe': {
          get() {
            return function (...fns) {
              const pipeableValue = functions.pipe(...fns)(observableState.getObservableValue())
              observableState.setObservableValues(pipeableValue)
              return this
            }
          },
          enumerable: true
        }
      }
    },
    createObservableArrayProps({ subscribersState, observableArrayState }) {

      const notifyObservableArray = functions.createFnNotifyAll(
        subscribersState.getSubscribers,
        observableArrayState.getElements
      )

      return {
        'subscribe': {
          get() {
            return function subscribe(subscriber) {
              return functions.createFnObservableArraySubscribe(
                subscribersState,
                subscriber,
                notifyObservableArray
              )()
            }
          },
          enumerable: true
        },
        'dispose': {
          get() {
            return subscribersState.clearSubscribers
          },
          enumerable: true
        },
        'add': {
          get() {
            return function add(...element) {
              observableArrayTools
                .createObservableArrayElement(
                  observableArrayState,
                  element,
                  notifyObservableArray
                )
            }
          },
          enumerable: true
        },
        'remove': {
          get() {
            return function remove(element) {
              observableArrayState.removeElement(element)
              notifyObservableArray()
            }
          },
          enumerable: true
        },
        'get': {
          get() {
            return function get(index) {
              if (typeof index !== 'number') {
                throw new Error('index must be a type number')
              }
              return observableArrayState.getElement(index)
            }
          },
          enumerable: true
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
          },
          enumerable: true
        },
        'flatMap': {
          get() {
            return function flatMap(callback) {
              if (typeof callback !== 'function') {
                throw new Error('flatMap should receive a function')
              }
              return this().map(function (item, index) {
                return callback(item(), index)
              }).reduce(function (flatArray, array) {
                return flatArray.concat(array)
              }, [])
            }
          },
          enumerable: true
        },
        'clear': {
          get() {
            return function clear() {
              observableArrayState.clearArray()
              notifyObservableArray()
              subscribersState.clearSubscribers()
            }
          },
          enumerable: true
        }
      }
    },
    createComputedObservableProps({
      subscribersState,
      observableState,
      subscriptionsDependencies
    }) {
      return {
        'subscribe': {
          get() {
            return function subscribe(subscriber) {
              return functions.createFnComputedSubscribe(
                subscribersState,
                subscriber,
                subscriptionsDependencies,
                functions.createFnNotifyAll(
                  subscribersState.getSubscribers,
                  observableState.getObservableValue
                )
              )()
            }
          },
          enumerable: true
        }
      }
    }
  }
  // Utilitários de funções
  const functions = {
    createFnSubscribe(subscribersState, subscriber, notify) {
      return function subscribe() {
        if (typeof subscriber !== 'function') {
          throw new Error('Subscribe should receive a callback function')
        }
        subscribersState.addSubscriber(subscriber)
        notify()
        return {
          dispose: functions.createFnDispose(subscribersState.removeSubscriber, subscriber)
        }
      }
    },
    createFnComputedSubscribe(
      subscribersState,
      subscriber,
      subscriptionsDependencies,
      notify
    ) {
      return function subscribe() {
        if (typeof subscriber !== 'function') {
          throw new Error('Subscribe must receive a callback function')
        }
        subscribersState.addSubscriber(subscriber)
        notify()
        return {
          dispose: functions.createFnComputedDispose(subscribersState.removeSubscriber, subscriber, subscriptionsDependencies)
        }
      }
    },
    createFnObservableArraySubscribe(subscribersState, subscriber, notify) {
      return function subscribe() {
        if (typeof subscriber !== 'function') {
          throw new Error('Subscribe must receive a callback function')
        }
        subscribersState.addSubscriber(subscriber)
        notify()
        return {
          dispose: functions.createFnDispose(subscribersState.removeSubscriber, subscriber)
        }
      }
    },
    createFnComputedDispose(
      removeSubscriber,
      subscriberToRemove,
      subscriptionsDependencies
    ) {
      return function dispose() {
        removeSubscriber(subscriberToRemove)
        computedObservableTools.removeComputedDependencies(subscriptionsDependencies)
      }
    },
    createFnNotifyAll(getSubscribers, getObservableValue) {
      return function notifyAll() {
        if (!getSubscribers().length) return null
        getSubscribers().map(function (subscriber) {
          subscriber(getObservableValue())
        })
      }
    },
    createFnDispose(removeSubscriber, subscriberToRemove) {
      return function dispose() {
        removeSubscriber(subscriberToRemove)
      }
    },
    pipe(...fns) {
      return function (value) {
        return fns.reduce(function (pipeableValue, fn) {
          return fn(pipeableValue)
        }, value)
      }
    },
    combineProperties(...properties) {
      return properties.reduce(function (combinedProperties, property) {
        return Object.assign(combinedProperties, property)
      }, {})
    }
  }
  // Utilitários de middleware
  const middlewareTools = {
    createMiddlewareFnNext(observableState, newParamValue) {
      return function (middlewareValue) {
        observableState.setObservableValues(middlewareValue || newParamValue)
        return observableState.getObservableValue()
      }
    },
    createMiddleware({ middleware, observableState, newParameterValue }) {
      if (typeof middleware !== 'function') return false
      return middleware.bind(
        this,
        observableState.getObservableValue(),
        newParameterValue,
        middlewareTools.createMiddlewareFnNext(observableState, newParameterValue)
      )
    }
  }
  // Utilitários de ComputedObservable
  const computedObservableTools = {
    validateComputedObervableParams(computedFn, dependencies) {
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
      } else {
        if (!dependencies[0].hasOwnProperty('subscribe')) {
          throw new Error('dependencie must be a observable')
        }
      }
    },
    removeComputedDependencies(subscriptionsDependencies) {
      subscriptionsDependencies.map(subscription => subscription.dispose())
    }
  }
  // Utilitários de Observable Array
  const observableArrayTools = {
    createElementArray(addElement, element, notifyAll) {
      addElement(element)
      element.subscribe(notifyAll)
    },
    createObservableArrayElement(observableArrayState, elements, notifyAll) {
      if (typeof elements === 'undefined' || elements.length === 0) {
        return []
      }
      elements.forEach(element =>
        observableArrayTools.createElementArray(
          observableArrayState.addElement,
          so.observable(element),
          notifyAll
        )
      )
    }
  }
  // Utilitários de inicialização
  const initialize = {
    observable({ observableState, newParameterValue, createdMiddleware }) {
      if (typeof newParameterValue === 'undefined') {
        return observableState.getObservableValue()
      }
      if (typeof createdMiddleware === 'function') {
        createdMiddleware()
      }
      if (typeof newParameterValue === 'function') {
        const callbackEvaluated = newParameterValue(observableState.getObservableValue())
        if (typeof callbackEvaluated === 'undefined') {
          observableState.setObservableValues(observableState.getObservableValue())
        } else {
          observableState.setObservableValues(callbackEvaluated)
        }
        return observableState.getObservableValue()
      }
      observableState.setObservableValues(newParameterValue)
      return observableState.getObservableValue()
    },
    computedObservable(dependencies, observableState) {

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
    },
    observableArray({ observableArrayState, subscribersState, newParamValue, notifyObservableArray }) {
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

      observableArrayTools
        .createObservableArrayElement(
          observableArrayState,
          newParamValue,
          notifyObservableArray
        )
      notifyObservableArray()
    }
  }
  // SO
  const so = {
    // Cria Observable
    observable(parameterValue, middleware = null) {
      // Inicializa o estado do Array de inscritos
      const subscribersState = state.createSubscribersState()
      // Estatos iniciais do Observable
      const initialState = {
        initialValue: parameterValue,
        prevValue: null,
        currentValue: parameterValue
      }
      // Gerencia os estados do Observable
      const observableState = state.createObservableState(initialState, subscribersState.getSubscribers)
      // Gerencia a chamada do Observable
      function observable(newParameterValue) {
        // Cria Middleware
        const createdMiddleware = middlewareTools.createMiddleware({
          middleware,
          observableState,
          newParameterValue
        })

        return initialize.observable({
          observableState,
          newParameterValue,
          createdMiddleware
        })
      }
      // Compõe o objeto Observables
      Object.defineProperties(
        observable,
        functions.combineProperties(
          props.createObservableProps({ subscribersState, observableState }),
          props.createPipeProp({ observableState })
        )
      )
      // Retorna o Observable
      return observable
    },
    // Cria Computed Observable
    computed(computedFn, dependencies = null) {
      // Verifica se os parâmetros são válidos
      computedObservableTools.validateComputedObervableParams(computedFn, dependencies)
      // Inicializa o estado do Array de inscritos
      const subscribersState = state.createSubscribersState()
      // Estatos iniciais do Observable
      const initialState = {
        computedValue: computedFn(),
        computedFn: computedFn
      }
      // Gerencia os estados do Observable
      const computedObservableState = state.createObservableComputedState(
        initialState,
        subscribersState.getSubscribers
      )
      // Inicializa a construção do Computed Observable
      const _dependencesSubscriptions = initialize.computedObservable(
        dependencies,
        computedObservableState
      ).createDependenciesState()
      // Gerencia a chamada do Computed Observable
      function computedObservable() {
        return computedObservableState.getObservableValue()
      }
      // Compõe o objeto Observables
      Object.defineProperties(
        computedObservable,
        functions.combineProperties(
          props.createObservableProps({ subscribersState, observableState: computedObservableState }),
          props.createComputedObservableProps({
            subscribersState,
            observableState: computedObservableState,
            subscriptionsDependencies: _dependencesSubscriptions
          })
        )
      )
      // Retorna o Computed Observable
      return computedObservable
    },
    // Cria Observable Array
    observableArray(...parameterData) {
      const observableArrayState = state.createObservableArrayState()
      const subscribersState = state.createSubscribersState()
      const notifyObservableArray = functions.createFnNotifyAll(
        subscribersState.getSubscribers,
        observableArrayState.getElements
      )
      // Cria observableArray a partir do parameterData
      observableArrayTools
        .createObservableArrayElement(observableArrayState, parameterData, notifyObservableArray)

      function observableArray(...newParameterValue) {
        return initialize
          .observableArray({
            observableArrayState,
            subscribersState,
            newParamValue: newParameterValue,
            notifyObservableArray
          })
      }

      Object.defineProperties(
        observableArray,
        props.createObservableArrayProps({
          subscribersState,
          observableArrayState
        })
      )

      return observableArray
    },
  }

  return so
})()

export default so