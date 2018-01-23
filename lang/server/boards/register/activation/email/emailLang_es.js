let data = require('../data')

module.exports = () => {
  /*
    *[D] from
  */
  data.regActivationEmail.sendMasterKey.from = 'Hlymboo 👾 <#####>'

  /*
    *[D] subject
  */
  data.regActivationEmail.sendMasterKey.subject = 'Entrega de llave Maestra Hyzher'

  /*
    *[D] text
  */
  data.regActivationEmail.sendMasterKey.text = 'Hola Hyzher #####... A nombre de todos los Hyzhers de Hlymboo y de mi padre Hakyn Seyer, yo te hago entrega de tu llave maestra; gracias a ella tendrás un nivel máximo de seguridad, así como también con ella podrás acceder a diversos sitios secretos que Hlymboo irá creando conforme pase el tiempo. Es posible que esta llave maestra sea renovada cada determinado tiempo... mientras tanto, por favor, cuidala y protegela como si fuese parte de tu alma, te será de gran ayuda en momentos claves... [Llave Maestra]: ?????'

  /*
    *[D] html
    *[i] No tocar las etiquetas <b> o <p>, solo tocar el contenido que se encuentra dentro de esas etiquetas
  */

  data.regActivationEmail.sendMasterKey.html = `
  <!DOCTYPE html>
  <html lang="es">
  <body style="background: #873BBA; color: #FCFCFC; border-radius: 10px; padding: 15px; font-family: Verdana; font-sizie: 15px;">
      <h2>Hlymboo</h2>
      <h3>Hola Hyzher #####</h3>
      <p>A nombre de todos los Hyzhers de Hlymboo y de mi padre Hakyn Seyer, yo te hago entrega de tu llave maestra; gracias a ella tendrás un nivel máximo de seguridad, así como también con ella podrás acceder a diversos sitios secretos que Hlymboo irá creando conforme pase el tiempo.</p>
      <p>Es posible que esta llave maestra sea renovada cada determinado tiempo... mientras tanto, por favor, cuidala y protegela como si fuese parte de tu alma, te será de gran ayuda en momentos claves...</p>
      <div style="margin: 15px; width: 100%; box-sizing: border-box; background: #C8A5DF; padding: 10px; display: flex; justify-content: center; border-radius: 10px 0px 0px 10px;">
        <span style="color: #4C4D4F; width: 100%; box-sizing: border-box; text-align: center; font-size: 18px;">[Llave Maestra]: ?????</span>
      </div>
      <p style="font-style: italic;">"La humildad representa los miedos al éxito mientras que la soberbia representa los miedos al fracaso"</p>
      <p>&copy; &&&&& Hlymboo. Todos los derechos reservados</p>
  </body>
  </html>
  `

  return data
}
