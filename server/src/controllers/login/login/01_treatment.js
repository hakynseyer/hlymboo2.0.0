const {treat} = require('../../tools/treatment')

module.exports = {
  loginUser ({body}, res, next) {
    body.email.value = treat.treatTrim(body.email.value)
    body.password.value = treat.treatTrim(body.password.value)
    next()
  }
}
