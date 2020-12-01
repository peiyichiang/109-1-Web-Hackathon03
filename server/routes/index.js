import questionRoute from './question'

const wrap = fn => (...args) => fn(...args).catch(args[2])

function main(app) {
  // app is an instance of express (in server.js)
  // get is an HTTP request method
  // /api/getContents is a path on the server.
  // wrap(questionRoute.GetContents): the function executed when the route is matched
  app.get('/api/getContents', wrap(questionRoute.GetContents))
  app.post('/api/checkAns', wrap(questionRoute.CheckAns))
}

export default main
