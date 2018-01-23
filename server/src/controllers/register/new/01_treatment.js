const {treat, treatMethods} = require('../../tools/treatment')

module.exports = {
  newUser ({body}, res, next) {
    body.name.value = treatMethods.treatTrimSizeCharacters(body.name.value, 'lowerCase')
    body.surnames.value = treatMethods.treatTrimSizeCharacters(body.surnames.value, 'lowerCase')
    body.alias.value = treatMethods.treatTrimSizeCharacters(body.alias.value, 'lowerCase')
    body.email.value = treat.treatTrim(body.email.value)
    body.password.value = treat.treatTrim(body.password.value)
    body.repeatPassword.value = treat.treatTrim(body.repeatPassword.value)
    body.question1.value = treat.treatTrim(body.question1.value)
    body.answer1.value = treatMethods.treatTrimSizeCharacters(body.answer1.value, 'lowerCase')
    body.question2.value = treat.treatTrim(body.question2.value)
    body.answer2.value = treatMethods.treatTrimSizeCharacters(body.answer2.value, 'lowerCase')
    next()
  }
}
