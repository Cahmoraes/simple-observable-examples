const sd = (function () {
  const simpleDecorator = {
    property(thisArg, handler) {
      try {
        if (typeof thisArg !== 'object')
          throw new Error('ThisArgs should be an Object Instance')
        if (typeof handler !== 'object')
          throw new Error('handler should be an Object')

        Object.keys(handler).forEach(property => {
          if (Array.isArray(handler[property])) {
            handler[property].forEach(decorator => {
              decorator(thisArg, property)
            })
          } else {
            const decorator = handler[property]
            if (typeof decorator !== 'function') {
              throw new Error('decorator should be a function')
            }
            decorator(thisArg, property)
          }
        })

      } catch (error) {
        console.error(error.message)
      }
    },
    method(clazz, handler) {
      try {
        if (typeof clazz !== 'function')
          throw new Error('Clazz should be a Constructor Function')
        if (typeof handler !== 'object')
          throw new Error('handler should be an Object')

        Object.keys(handler).forEach(property => {

          if (!Array.isArray(handler[property]))
            throw new Error('decorators should be an Array')

          handler[property].reverse().forEach(decorator => {
            const method = clazz.prototype[property]
            if (method) {
              clazz.prototype[property] = function (...args) {
                return decorator(method.bind(this), property, args)
              }
            } else {
              throw new Error(`${property} isn't at prototype of ${clazz.name}`)
            }
          })
        })
      } catch (error) {
        console.error(error.message)
      }
    }
  }
  return simpleDecorator
})()

export default sd