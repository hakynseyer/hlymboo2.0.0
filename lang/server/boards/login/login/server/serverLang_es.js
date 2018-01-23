let data = require('../data')

module.exports = () => {
  /*
    *[D] logLoginServer
    *[i] Elemento Html
  */
  data.logLoginServer.defaultErrorUser = '<b> Servidor </b> <p> Algunos fragmentos de datos han fallado en nuestros servidores </p>'

  /*
    *[D] noPassword
    *[i] Elemento Html
  */
  data.logLoginServer.noPassword = '<b> Servidor </b> <p> Se te ha negado el acceso debido a que alguno de tus datos ingresados no concuerda con los de nuestro núcleo informatico </p>'

  return data
}
