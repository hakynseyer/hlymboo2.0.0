module.exports = (req, res, next) => {
  if (typeof (req.body.clientLang) !== 'undefined') {
    console.log('LENGUAJE PROVENIENTE DEL CLIENTE')
  } else {
    let serverLang = 'es'
    const acceptsLanguages = req.acceptsLanguages('es', 'en')

    if (acceptsLanguages) serverLang = acceptsLanguages

    req.serverLang = serverLang
    next()
  }
}
