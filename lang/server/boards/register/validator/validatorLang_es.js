let data = require('../data')

/*
  *[D] uniqueAlias
  *[*] response: res
  *[i] No tocar las etiquetas <b> o <p>, solo tocar el contenido que se encuentra dentro de esas etiquetas
*/
data.registerValidator.uniqueAlias.res = '<b> Unico </b> <p> Existe otro usuario con el mismo alias </p>'
data.registerValidator.uniqueAlias.resError = '<b> Unico </b> <p> Se ha presentado un error al intentar validar este usuario </p>'

/*
  *[D] uniqueEmail
  *[*] response: res
  *[i] No tocar las etiquetas <b> o <p>, solo tocar el contenido que se encuentra dentro de esas etiquetas
*/
data.registerValidator.uniqueEmail.res = '<b> Unico </b> <p> Existe otro usuario con el mismo email </p>'
data.registerValidator.uniqueEmail.resError = '<b> Unico </b> <p> Se ha presentado un error al intentar validar este usuario </p>'

module.exports = data
