const passport = require('passport')

module.exports = (req, res, next) => {
  passport.authenticate('jwt', function (error, hyzher) {
    if (error || !hyzher) {
      res.status(403).send()
    } else {
      req.hyzher = hyzher
      next()
    }
  })(req, res, next)
}
