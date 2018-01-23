let data = require('../data')

module.exports = () => {
  /*
    *[D] uniqueAlias
    *[i] Elemento Html
  */
  data.regNewValidator.uniqueAlias.res = '<b> Unico </b> <p> Existe otro usuario con el mismo alias </p>'
  data.regNewValidator.uniqueAlias.resError = '<b> Unico </b> <p> Se ha presentado un error al intentar validar este usuario </p>'

  /*
    *[D] uniqueEmail
    *[i] Elemento Html
  */
  data.regNewValidator.uniqueEmail.res = '<b> Unico </b> <p> Existe otro usuario con el mismo email </p>'
  data.regNewValidator.uniqueEmail.resError = '<b> Unico </b> <p> Se ha presentado un error al intentar validar este usuario </p>'

  return data
}
