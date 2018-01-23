let data = require('../data')

module.exports = () => {
  /*
    *[D] thereisEmail
    *[i] Elemento Html
  */
  data.logLoginValidator.thereisEmail.res = '<b> Busqueda </b> <p> No se logró encontrar el email ##### en nuestro núcleo de información </p>'
  data.logLoginValidator.thereisEmail.resError = '<b> Busqueda </b> <p> Se ha presentado un error al intentar buscar el email ##### </p>'

  /*
    *[D] isActivated
    *[i] Elemento Html
  */
  data.logLoginValidator.isActivated = '<b> Activación </b> <p> Tu cuenta ya existe pero se requiere de su activación para así poder proceder con el ingreso a Hlymboo Hyzher... Revisa tu correo electrónico (busca en todas tus carpetas), ahí te hemos enviado las instrucciones para tu activación</p>'

  return data
}
