const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const rp = require('request-promise')

const app = express()

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

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
      res.render('index', undefined)
    })
    .catch((err) => {
      console.log(err)
      res.render('error')
    })
})

app.get('/', (req, res) => {
  res.render('home', {
    name:'name',
  })
})

app.listen(3000)  
