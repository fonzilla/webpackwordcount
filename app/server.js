var express = require('express')
var cors = require('cors')
var app = express()
var axios = require('axios')
app.use(cors())

app.get('/api/search', function (req, res, next) {
  axios.get(req.query.url)
    .then(result => {
      res.send(result.data)
    })
})
 
app.listen(1234, function () {
  console.log('CORS-enabled web server listening on port 1234')
})