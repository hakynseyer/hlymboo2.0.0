const {Image} = require('../../../models')

var errors = {
  'image': [],
  'title': [],
  'copyright': [],
  'chest': []
}

const funcErrors = {
  resetErrors () {
    let keys = Object.keys(errors)

    keys.forEach(key => {
      errors[key] = []
    })
  },

  checkErrors () {
    let res = false

    if (errors.image.length || errors.title.length || errors.copyright.length || errors.chest.length) res = true

    return res
  }
}

const valDefault = (lang) => {
  const val = require('../../tools/validator')(lang)

  return {
    image (data, route) {
      let err = null
      errors.image = []

      err = val.valEmpty(data.name)
      if (err !== null) errors.image.push(err)

      err = val.valEmpty(route)
      if (err !== null) errors.image.push(err)

      let sizeImage = data.size

      err = val.valNumbers('lower', sizeImage, 2097152, 'B')
      if (err !== null) errors.image.push(err)

      let extensionsAllowed = ['jpg', 'jpeg', 'png', 'gif']
      let extensionImage = route.split('.').pop()

      err = val.valExtensions('image', extensionsAllowed, extensionImage)
      if (err !== null) errors.image.push(err)
    },

    title (data) {
      let err = null
      errors.title = []

      err = val.valBasicMain(data, 'text', 5, 40)
      if (err !== null) errors.title.push(err)
    },

    copyright (data) {
      let err = null
      errors.copyright = []

      err = val.valBasicMain(data, 'text', 5, 255)
      if (err !== null) errors.copyright.push(err)
    },

    chest (data) {
      let err = null
      errors.chest = []

      err = val.valBasicMain(data, 'text', 3, 25)
      if (err !== null) errors.chest.push(err)
    }
  }
}

const valServer = (lang) => {
  const {boards} = require('../../../../../lang/server')
  const langData = boards(lang, 'Image', 'uploadBasic', 'validator')

  return {
    async uniqueRoute (route) {
      try {
        const imageID = await Image.findOne({
          where: {route: route},
          attributes: ['id']
        })
        if (imageID !== null) {
          if (imageID.id) errors.image.push(langData.imgUploadBasicValidator.uniqueRoute.res)
        }
      } catch (error) {
        console.error(error)
        errors.image.push(langData.imgUploadBasicValidator.uniqueRoute.resError)
      }
    }
  }
}

module.exports = {
  uploadBasicImage (req, res, next) {
    const {body} = req
    const valD = valDefault(req.serverLang)

    valD.image(body.image, body.imageRoute)
    valD.title(body.title)
    valD.copyright(body.copyright)
    valD.chest(body.chest)

    if (funcErrors.checkErrors()) res.status(422).send({'errors': errors})
    else {
      const vServer = new Promise(async resolve => {
        await funcErrors.resetErrors()

        const valS = valServer(req.serverLang)
        await valS.uniqueRoute(body.imageRoute)

        resolve()
      })
      vServer.then(() => {
        if (funcErrors.checkErrors()) res.status(422).send({'errors': errors})
        else next()
      })
    }
  }
}
