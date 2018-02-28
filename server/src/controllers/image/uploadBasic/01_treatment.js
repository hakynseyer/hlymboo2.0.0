const {treat, treatMethods} = require('../../tools/treatment')

module.exports = {
  uploadBasicImage (req, res, next) {
    let {body, hyzher} = req

    body.title = treatMethods.treatTrimSizeCharacters(body.title, 'lowerCase')
    body.copyright = treat.treatTrim(body.copyright)
    body.chest = treatMethods.treatTrimSizeCharacters(body.chest, 'lowerCase')
    body.imageRoute = treatMethods.treatRouteFile(body.title, body.image.name)
    body.folder = hyzher.id + '_' + treat.treatReplaceSpaces(hyzher.alias, 'space_camelCase')
    next()
  }
}
