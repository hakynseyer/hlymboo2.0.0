module.exports = (lang) => {
  const {tools} = require('../../../../lang/server')
  const langData = tools(lang, 'Validator').hsValidator

  return {
    valEmpty (data) {
      let res = null

      if ((data === null || data === 'null') || data.length <= 0) res = langData.valEmpty.res

      return res
    },

    valType (data, option) {
      let res = null

      switch (option) {
        case 'text':
          if (typeof (data) !== 'string' || !isNaN(data)) res = langData.valType.text.res
          break
        case 'number':
          if (isNaN(data)) res = langData.valType.number.res
          break
        case 'email':
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          if (!re.test(data)) res = langData.valType.email.res
          break
        case 'password':
          if (data.search(/[!@#$%^&*_+].*[!@#$%^&*_+].*[!@#$%^&*_+]/) < 0) res = langData.valType.password.resSpecial.replace('#####', 3)
          if (data.search(/[a-z].*[a-z].*[a-z]/i) < 0) res = langData.valType.password.resLetter.replace('#####', 3)
          if (data.search(/[0-9].*[0-9].*[0-9]/) < 0) res = langData.valType.password.resNumber.replace('#####', 3)
          break
        case 'boolean':
          if (typeof (data.value) !== 'boolean') res = langData.valType.boolean.resMain
          if (typeof (data.response) !== 'undefined') {
            if (data.response) {
              if (!data.value) res = langData.valType.boolean.resTrue
            } else if (!data.response) {
              if (data.value) res = langData.valType.boolean.resFalse
            }
          }
          break
      }

      return res
    },

    valMin (data, min) {
      let res = null

      if (data.length < min) res = langData.valMin.res.replace('#####', min).replace('?????', min - data.length)

      return res
    },

    valMax (data, max) {
      let res = null

      if (data.length > max) res = langData.valMax.res.replace('#####', max).replace('?????', data.length - max)

      return res
    },

    valEqual (data, compare) {
      let res = null

      if (data !== compare.data) res = langData.valEqual.res.replace('#####', compare.name)

      return res
    },

    valUnequal (data, compare, option) {
      let res = null

      switch (option) {
        case 'simple':
          if (data === compare.data) res = langData.valUnequal.res.replace('#####', compare.name)
          break
        case 'array':
          if (compare.indexOf(data) >= 0) res = langData.valUnequal.resArray
          break
      }

      return res
    },

    valNumbers (mode, number, limit, msgMergeError) {
      let res = null

      switch (mode) {
        case 'bigger':
          const missing = limit - number
          if (typeof (msgMergeError) === 'string') {
            if (number < limit) res = langData.valNumbers.resBigger.replace('#####', limit + msgMergeError).replace('?????', missing + msgMergeError)
          } else {
            if (number < limit) res = langData.valNumbers.resBigger.replace('#####', limit).replace('?????', missing)
          }
          break
        case 'lower':
          const exceeded = number - limit
          if (typeof (msgMergeError) === 'string') {
            if (number > limit) res = langData.valNumbers.resLower.replace('#####', limit + msgMergeError).replace('?????', exceeded + msgMergeError)
          } else {
            if (number > limit) res = langData.valNumbers.resLower.replace('#####', limit).replace('?????', exceeded)
          }
          break
      }

      return res
    },

    valExtensions (file, listExtensions, data) {
      let res = null

      switch (file) {
        case 'image':
          if (!listExtensions.includes(data)) res = langData.valExtensions.resImage.replace('#####', listExtensions.toString())
          break
      }

      return res
    },

    /*
    * [D] Defined Functions
    */
    valBasicMain (data, type, min, max) {
      let res = null

      res = this.valEmpty(data)
      if (res === null) {
        res = this.valType(data, type)
        if (res === null) {
          res = this.valMin(data, min)
          if (res === null) {
            res = this.valMax(data, max)
            if (res === null) return null
          }
        }
      }

      return res
    }
  }
}
