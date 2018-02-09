const {hsServer} = require('../data')

const hsS = require('./es/hsS.json')

module.exports = new hsServer(hsS).get_hsServer()
