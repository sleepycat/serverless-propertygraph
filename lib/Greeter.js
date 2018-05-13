/* eslint import/unambiguous: 0 */

export class Greeter {
  sayHello(event) {
    return {
      message: 'Hello world.',
      input: event,
    }
  }
}
