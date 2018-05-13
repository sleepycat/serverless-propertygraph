/* eslint import/unambiguous: 0 */
import { helloWorld } from '../handler'

describe('helloWorld', () => {
  let event = {}
  let context = {}
  let resp = {}

  it('should call helloWorld function with success', done => {
    let callback = (ctx, data) => {
      resp = data
      done()
    }
    helloWorld(event, context, callback)
    expect(resp.statusCode).toBe(200)
  })
})

import { Greeter } from '../lib/Greeter'

describe('sayHello', () => {
  let event = {}
  let greeter = new Greeter()

  it('should call sayHello and return message', () => {
    expect(greeter.sayHello(event).message).toBe('Hello world.')
  })
})
