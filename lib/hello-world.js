/* eslint import/unambiguous: 0 */

class HelloWorld {
  sayHello(event) {
    return {
      message: 'Hello world.',
      input: event,
    }
  }
}

module.exports = HelloWorld
