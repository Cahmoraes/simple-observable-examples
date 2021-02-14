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
  }
]