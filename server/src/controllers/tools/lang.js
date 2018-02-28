module.exports = (req, res, next) => {
  if (typeof (req.headers.langapp) !== 'undefined' && req.headers.langapp !== null) {
    req.serverLang = req.headers.langapp
    next()
  } else {
    let serverLang = 'es'
    const acceptsLanguages = req.acceptsLanguages('es', 'en')

    if (acceptsLanguages) serverLang = acceptsLanguages

    req.serverLang = serverLang
    next()
  }
}
