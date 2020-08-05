const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const hbs = require('express-handlebars')
dotenv.config({path: './config/config.env'})
const passport = require('passport')
const session = require('express-session')
const flash = require('express-flash')
const connectDB = require('./config/db')

const app = express()

//mongoDB
connectDB()

// passport config
require('./config/passportConfig')(passport)

//handlebars
app.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
app.set('view engine', 'hbs')

// session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}))

// flash
app.use(flash())

//global vars for flash
app.use((req, res, next) => {
  res.locals.success = req.flash('success')
  res.locals.warning = req.flash('warning')
  res.locals.danger = req.flash('danger')
  res.locals.error = req.flash('error')
  next()
})

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

// passport implementation
app.use(passport.initialize())
app.use(passport.session())

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
