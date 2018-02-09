const {hsEmail} = require('../data')

const hsE = require('./es/hsE.json')

module.exports = new hsEmail(hsE).get_hsEmail()
