const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const hbs = require('express-handlebars')
dotenv.config({path: './config/config.env'})
const connectDB = require('./config/db')

const app = express()

//mongoDB
connectDB()

//handlebars
app.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
app.set('view engine', 'hbs')

//to parse & enconde req
app.use(express.urlencoded(
  {extended: false}
))

// init routes
const authRoutes = require('./routes/auth')
const eventsRoutes = require('./routes/events')
const saloonsRoutes = require('./routes/saloons')
const usersRoutes = require('./routes/users')

// static folder
app.use(express.static(path.join(__dirname, 'public')))

// use routes
app.use('/auth', authRoutes)
app.use('/events', eventsRoutes)
app.use('/saloons', saloonsRoutes)
app.use('/users', usersRoutes)
app.use('/', (req, res, next) => res.render('pages/welcome', {layout: 'clear'}))

app.listen(
  process.env.PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`)
)
