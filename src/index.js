const express = require('express')
const path = require('path')
const morgan = require('morgan')
const hbs  = require('express-handlebars')
const app = express()
const port = 3000
var methodOverride = require('method-override')

const route = require('./routes')
const db = require('./config/db')

// Connect to DB
db.connect();

// Use static file
app.use(express.static(path.join(__dirname, 'public')))

app.use(methodOverride('_method'))

// Return body obj for Post method
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// HTTP Logger
// app.use(morgan('combined'))

//template engine
app.engine('handlebars', hbs.engine())
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'))



app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
route(app)