const {treat, treatMethods} = require('../../tools/treatment')

module.exports = {
  activationUser ({body}, res, next) {
    body.code.value = treat.treatTrim(body.code.value)
    body.alias.value = treatMethods.treatTrimReplaceSpaces(body.alias.value)
    next()
  }
}
