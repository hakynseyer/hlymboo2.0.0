const {boards} = require('../../../../../lang/server')
const {Image} = require('../../../models')
const fs = require('fs')

module.exports = {
  async uploadBasicImage (req, res, next) {
    const langData = boards(req.serverLang, 'Image', 'uploadBasic', 'server')
    const {body, hyzher} = req
    try {
      const _Image = await Image.create({
        title: body.title,
        chest: body.chest,
        route: body.imageRoute,
        copyright: body.copyright,
        user: hyzher.id
      })

      if (typeof (_Image) === 'object') {
        const directory = `../client/src/assets/img/client/hyzhers/${body.folder}`

        fs.mkdir(directory, () => {
          fs.rename(body.image.path, directory + '/' + body.imageRoute, (err) => {
            if (err) {
              // TODO: Eliminar la imagen de la base de datos
              console.error(err)
            } else res.send(_Image.toJSON())
          })
        })
      } else res.status(400).send({'errors': langData.imgUploadBasicServer.uploadImage})
    } catch (error) {
      res.status(400).send({'errors': langData.imgUploadBasicServer.uploadImage})
    }
  }
}
