module.exports = (app) => {
  require('./controllers/register/routes')(app)
  require('./controllers/login/routes')(app)
}
