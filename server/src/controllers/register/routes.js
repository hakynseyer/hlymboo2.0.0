const language = require('../tools/lang')
const treatment = require('./01_treatment')
const validation = require('./02_validation')
const server = require('./03_server')

module.exports = (app) => {
  app.post('/register/new',
    language,
    treatment.newUser, validation.newUser, server.newUser)
}
