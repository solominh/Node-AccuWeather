const path = require('path')
const express = require('express')
const pug = require('pug')
const rp = require('request-promise')

const app = express()


app.get('/:city', (req, res) => {
  rp({
    uri: 'http://api.openweathermap.org/data/2.5/weather',
    qs: {
      q: req.params.city,
      apiKey: 'b0af864f42f2fd049c98dacddd480a57'
      // Use your openweathermap API key here
    },
    json: true
  })
    .then((data) => {
      console.log(data)
      html = pug.renderFile('./views/index.pug', data)
      res.end(html)
    })
    .catch((err) => {
      console.log(err)
    })
})


app.listen(3000)  
