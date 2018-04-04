/* eslint import/unambiguous: 0 */

export class HelloWorld {
  sayHello(event) {
    return {
      message: 'Hello world.',
      input: event,
    }
  }
}

