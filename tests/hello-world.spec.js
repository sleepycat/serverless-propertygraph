/* eslint import/unambiguous: 0 */
const { helloWorld } = require('../handler')

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

const { HelloWorld } = require('../lib/hello-world')

describe('sayHello', () => {
  let event = {}
  let hWorld = new HelloWorld()

  it('should call sayHello and return message', () => {
    expect(hWorld.sayHello(event).message).toBe('Hello world.')
  })
})
