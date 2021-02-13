import getEnvironment from '../../js/utils/getEnvironment'

export default [
  {
    path: getEnvironment() || '/',
    component: 'observable'
  },
  {
    path: `${getEnvironment()}/observable`,
    component: 'observable'
  },
  {
    path: `${getEnvironment()}/observableArray`,
    component: 'observableArray'
  },
  {
    path: `${getEnvironment()}/computedObservable`,
    component: 'computedObservable'
  }
]