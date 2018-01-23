const language = require('../tools/lang')

const _new = {
  treatment: require('./new/01_treatment'),
  validation: require('./new/02_validation'),
  server: require('./new/03_server')
}

const _activation = {
  treatment: require('./activation/01_treatment'),
  validation: require('./activation/02_validation'),
  server: require('./activation/03_server')
}

module.exports = (app) => {
  app.post('/register/new',
    language,
    _new.treatment.newUser, _new.validation.newUser, _new.server.newUser)

  app.post('/register/activation',
    language,
    _activation.treatment.activationUser, _activation.validation.activationUser, _activation.server.activationUser)
}
