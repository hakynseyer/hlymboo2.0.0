import {tools} from '../../../../lang/client'

const hsValidatorLang = tools('Validator').hsValidator

const valHS = {
  checkEmpty (data) {
    let res = null

    if (data === null || data.length <= 0) res = hsValidatorLang.checkEmpty.res

    return res
  },

  checkMin (data, min) {
    let res = null

    if (data.length < min) res = hsValidatorLang.checkMin.res.replace('#####', min).replace('?????', min - data.length)

    return res
  },

  checkMax (data, max) {
    let res = null

    if (data.length > max) res = hsValidatorLang.checkMax.res.replace('#####', max).replace('?????', data.length - max)

    return res
  },

  checkEmail (data) {
    let res = null

    const valEMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!valEMail.test(data)) res = hsValidatorLang.checkEmail.res

    return res
  },

  checkEqual (data, compare) {
    let res = null

    if (data !== compare.data) res = hsValidatorLang.checkEqual.res.replace('#####', compare.name)

    return res
  },

  checkUnequal (data, compare) {
    let res = null

    if (data === compare.data) res = hsValidatorLang.checkUnequal.res.replace('#####', compare.name)

    return res
  },

  checkType (data, option) {
    let res = null

    switch (option) {
      case 'number':

        break
      case 'boolean':
        if (typeof (data.value) !== 'boolean') res = hsValidatorLang.checkType.boolean.resMain
        if (typeof (data.response) !== 'undefined') {
          if (data.response) {
            if (!data.value) res = hsValidatorLang.checkType.boolean.resTrue
          } else if (!data.response) {
            if (data.value) res = hsValidatorLang.checkType.boolean.resFalse
          }
        }
        break
    }

    return res
  },

  checkNumbers (mode, number, limit, msgMergeError) {
    let res = null

    switch (mode) {
      case 'bigger':
        const missing = limit - number
        if (typeof (msgMergeError) === 'string') {
          if (number < limit) res = hsValidatorLang.checkNumbers.resBigger.replace('#####', limit + msgMergeError).replace('?????', missing + msgMergeError)
        } else {
          if (number < limit) res = hsValidatorLang.checkNumbers.resBigger.replace('#####', limit).replace('?????', missing)
        }
        break
      case 'lower':
        const exceeded = number - limit
        if (typeof (msgMergeError) === 'string') {
          if (number > limit) res = hsValidatorLang.checkNumbers.resLower.replace('#####', limit + msgMergeError).replace('?????', exceeded + msgMergeError)
        } else {
          if (number > limit) res = hsValidatorLang.checkNumbers.resLower.replace('#####', limit).replace('?????', exceeded)
        }
        break
    }

    return res
  },

  checkExtensions (file, listExtensions, data) {
    let res = null

    switch (file) {
      case 'image':
        if (!listExtensions.includes(data)) res = hsValidatorLang.checkExtensions.resImage.replace('#####', listExtensions.toString())
        break
    }

    return res
  }
}

export {
  valHS,
  hsValidatorLang
}

//   revisarTipo (dato, opcion) {
//     let respuesta = null

//     if (opcion === 'numero') {
//       if (isNaN(dato)) respuesta = 'Solo se permiten números en este campo'
//     } else if (opcion === 'texto') {
//       if (typeof dato !== 'string') respuesta = 'Solo se permite texto en este campo'
//       if (!isNaN(dato)) respuesta = 'Solo se permite texto en este campo'
//     }

//     return respuesta
//   }
// }
