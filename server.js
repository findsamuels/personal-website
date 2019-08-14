const express = require('express')
const bodyParser = require('body-parser')
const history = require('connect-history-api-fallback')
const path = require('path')
const app = express()

const staticFileMiddleware = express.static(path.join(__dirname))

app.use(bodyParser.json(), history(), staticFileMiddleware)

app.get('/', function (req, res) {
  // eslint-disable-next-line no-path-concat
  res.render(path.join(__dirname + '/index.html'))
})

app.listen(5000, function () {
  console.log('Express serving on 5000!')
})
