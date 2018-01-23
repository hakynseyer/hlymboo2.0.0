let data = require('../data')

module.exports = () => {
  /*
    *[D] thereisAlias
    *[i] Elemento Html
  */
  data.regActivationValidator.thereisAlias.res = '<b> Busqueda </b> <p> No se logró encontrar el alias ##### en nuestro núcleo de información </p>'
  data.regActivationValidator.thereisAlias.resError = '<b> Busqueda </b> <p> Se ha presentado un error al intentar buscar el alias ##### </p>'

  return data
}
