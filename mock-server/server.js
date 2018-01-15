const DELAY = 750;
const PORT = 3001;

const jsonServer = require('json-server')
const server = jsonServer.create()

const middlewares = jsonServer.defaults()
server.use(middlewares)

const paramsOverride = require('./params-override')
server.use(paramsOverride)

const routes = require('./routes.json')
const rewriter = jsonServer.rewriter(routes)
server.use(rewriter)

server.get('/profiles', (req, res) => {
  const db = require('./db.json');
  res.jsonp({
    records: db.profiles.slice(0, req.query._limit),
    nextPageToken: "fake-next-page-token"
  })
})

server.post('/profiles/import', (req, res) => {
  const ADImportExample = require('./contract/profiles/import.example.json')
  res.jsonp(ADImportExample)
})

const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
server.use(router)

const pause = require('connect-pause')
server.use(pause(DELAY))

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`)
})
