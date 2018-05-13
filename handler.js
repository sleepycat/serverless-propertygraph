import { Greeter } from './lib/Greeter'

export const helloWorld = (event, context, callback) => {
  var greeter = new Greeter()

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(greeter.sayHello(event)),
  }

  callback(null, response)
}
