const language = require('../tools/lang')

const _login = {
  treatment: require('./login/01_treatment'),
  validation: require('./login/02_validation'),
  server: require('./login/03_server')
}

module.exports = (app) => {
  app.post('/login',
    language,
    _login.treatment.loginUser, _login.validation.loginUser, _login.server.loginUser)
}
