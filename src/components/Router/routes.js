import getEnvironment from '../../js/utils/getEnvironment'

export default [
  {
    path: getEnvironment() || '/',
    component: 'observable',
    options: {
      title: 'Observable'
    }
  },
  {
    path: `${getEnvironment()}/observable`,
    component: 'observable',
    options: {
      title: 'Observable'
    }
  },
  {
    path: `${getEnvironment()}/pipeableobservable`,
    component: 'pipeableObservable',
    options: {
      title: 'Pipeable Observable'
    }
  },
  {
    path: `${getEnvironment()}/middleware`,
    component: 'middleware',
    options: {
      title: 'Middleware'
    }
  },
  {
    path: `${getEnvironment()}/observableArray`,
    component: 'observableArray',
    options: {
      title: 'Observable Array'
    }
  },
  {
    path: `${getEnvironment()}/computedObservable`,
    component: 'computedObservable',
    options: {
      title: 'Computed Observable'
    }
  },
  {
    path: `${getEnvironment()}/loading`,
    component: 'loading',
    options: {
      title: 'Carregando'
    }
  },
  {
    path: '*',
    component: `${getEnvironment()}/notfound`,
    component: 'notfound',
    options: {
      title: 'Página não encontrada'
    }
  }
]