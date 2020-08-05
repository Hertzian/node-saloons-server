const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = function (passport) {
  passport.use(
    new localStrategy(
      {usernameField: 'email', passwordField: 'password'},
      async (email, password, done) => {
        const user = await User.findOne({email})

        // if no user
        if(!user) return done(null, false, {message: 'No existe este email'})

        // match password
        await bcrypt.compare(password, user.password, (err, isMatch) => {
          if(err) throw err

          if(isMatch) {
            return done(null, user)
          }else{
            return done(null, false, {message: 'Password incorrecto'})
          }
        })
      }
    )
  )

  passport.serializeUser((user, done) => done(null, user.id))

  passport.deserializeUser((id, done) => User.findById(id, (err, user) => done(err, user)))
}