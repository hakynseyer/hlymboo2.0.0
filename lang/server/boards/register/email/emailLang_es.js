let data = require('../data')

/*
  *[D] from
*/
data.registerEmail.confirmRegister.from = 'Hlymboo 👾 <#####>'

/*
  *[D] subject
*/
data.registerEmail.confirmRegister.subject = 'Activación de cuenta Hlymboo.com'

/*
  *[D] text
*/
data.registerEmail.confirmRegister.text = 'Hola #####, muchas gracias por creer en este proyecto, a nombre del primer Hyzher, Joaquín Reyes Sánchez [Hakyn Seyer] CEO de Hlymboo.com te damos las gracias por querer formar parte de esta singular y acogedora familia... ... Tu registro está casi por finalizar, tan solo es necesario activar tu cuenta, para ello tendrás que acceder al siguiente link y esperar a que se active tu cuenta, por mi parte estoy ansioso de poder verte en acción en Hlymboo... Estaremos esperando con ansias la llegada de nuestro nuevo Hyzher. Link: ?????/register/activation/&&&&&/@@@@@'

/*
  *[D] html
  *[i] No tocar las etiquetas <b> o <p>, solo tocar el contenido que se encuentra dentro de esas etiquetas
*/

data.registerEmail.confirmRegister.html = `
<!DOCTYPE html>
<html lang="es">
<body style="background: #873BBA; color: #FCFCFC; border-radius: 10px; padding: 15px; font-family: Verdana; font-sizie: 15px;">
    <h2>Hlymboo</h2>
    <h3>Hola #####</h3>
    <p>Muchas gracias por creer en este proyecto, a nombre del primer Hyzher, Joaquín Reyes Sánchez [Hakyn Seyer] CEO de Hlymboo.com te damos las gracias por querer formar parte de esta singular y acogedora familia... ... Tu registro está casi por finalizar, tan solo es necesario activar tu cuenta, para ello tendrás que acceder al siguiente link y esperar a que se active tu cuenta, por mi parte estoy ansioso de poder verte en acción en Hlymboo... Estaremos esperando con ansias la llegada de nuestro nuevo Hyzher.</p>
    <div style="margin: 15px; width: 100%; box-sizing: border-box; background: #C8A5DF; padding: 10px; display: flex; justify-content: center; border-radius: 10px 0px 0px 10px;">
      <a style="color: #4C4D4F; width: 100%; box-sizing: border-box; text-align: center; text-decoration: none; font-size: 18px;" href="?????">Link para convertirme en Hyzher #####</a>
    </div>
    <p style="font-style: italic;">"Los errores representan la base universal de tu ser, nunca los apartes de ti, al final, ellos son los unicos en los que puedes sentirte en familia"</p>
    <p>&copy; &&&&& Hlymboo. Todos los derechos reservados</p>
</body>
</html>
`

module.exports = data