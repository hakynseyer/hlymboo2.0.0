import {tools} from '../../../../lang/client'

export const valHS = {
  checkEmpty (data) {
    let res = null

    if (data === null || data.length <= 0) res = tools('validator').validator.checkEmpty.res

    return res
  },
  checkMin (data, min) {
    let res = null

    if (data.length < min) res = tools('validator').validator.checkMin.res.replace('#####', min).replace('?????', min - data.length)

    return res
  },
  checkMax (data, max) {
    let res = null

    if (data.length > max) res = tools('validator').validator.checkMax.res.replace('#####', max).replace('?????', data.length - max)

    return res
  },
  checkEmail (data) {
    let res = null

    const valEMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!valEMail.test(data)) res = tools('validator').validator.checkEmail.res

    return res
  },
  checkEqual (data, compare) {
    let res = null

    if (data !== compare.data) res = tools('validator').validator.checkEqual.res.replace('#####', compare.name)

    return res
  },
  checkUnequal (data, compare) {
    let res = null

    if (data === compare.data) res = tools('validator').validator.checkUnequal.res.replace('#####', compare.name)

    return res
  },
  checkType (data, option) {
    let res = null

    switch (option) {
      case 'number':

        break
      case 'boolean':
        if (typeof (data.value) !== 'boolean') res = tools('validator').validator.checkType.boolean.resMain
        if (typeof (data.response) !== 'undefined') {
          if (data.response) {
            if (!data.value) res = tools('validator').validator.checkType.boolean.resTrue
          } else if (!data.response) {
            if (data.value) res = tools('validator').validator.checkType.boolean.resFalse
          }
        }
        break
    }

    return res
  }
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
