const passport = require('passport')
const {User} = require('../models')

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const {authentication} = require('./config')

let options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: authentication.jwtSecret
}

passport.use(new JwtStrategy(options, async function (jwtPayload, done) {
  try {
    const Hyzher = await User.findOne({
      where: {
        id: jwtPayload.id,
        alias: jwtPayload.alias
      },
      attributes: ['id', 'alias', 'name', 'surnames', 'UserRank']
    })
    if (Hyzher === null) return done(new Error(), false)
    return done(null, Hyzher)
  } catch (error) {
    return done(new Error(), false)
  }
}))
