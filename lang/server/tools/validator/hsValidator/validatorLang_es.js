const {hsValidator} = require('../data')

const hsV = require('./es/hsV.json')

module.exports = new hsValidator(hsV).get_hsValidator()
