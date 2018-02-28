const language = require('../tools/lang')
const authenticated = require('../tools/authenticated')

const _imageRequest = {
  get_server: require('./request/get_03_server'),
  post_server: require('./request/post_03_server')
}

const _uploadBasic = {
  treatment: require('./uploadBasic/01_treatment'),
  validation: require('./uploadBasic/02_validation'),
  server: require('./uploadBasic/03_server')
}

module.exports = (app) => {
  // [i] REQUEST
  app.get('/image/request/get/chest',
    authenticated,
    language,
    _imageRequest.get_server.R_chest)

  app.post('/image/request/post/limit',
    authenticated,
    language,
    _imageRequest.post_server.R_all)

  // [i] PAGES
  app.post('/image/upload_basic',
    authenticated,
    language,
    _uploadBasic.treatment.uploadBasicImage, _uploadBasic.validation.uploadBasicImage, _uploadBasic.server.uploadBasicImage)
}
