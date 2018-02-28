const {text} = require('./customizedTools')

const treat = {
  treatTrim (data) {
    if (data !== null) return data.trim()
    return data
  },

  treatSize (data, option) {
    let res = data

    if (res !== null) {
      if (option === 'lowerCase') return res.toLowerCase()
      else if (option === 'capitalize') return res.charAt(0).toUpperCase() + res.slice(1).toLowerCase()
    }

    return res
  },

  treatCharacters (data) {
    if (data !== null) return data.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  },

  treatReplace (data, search, change) {
    if (data !== null) return data.replace(search, change)
    return data
  },

  treatReplaceSpaces (data, mode) {
    switch (mode) {
      case 'underscore_space':
        if (data !== null) return data.replace(/_/g, ' ')
        break
      case 'space_underscore':
        if (data !== null) return data.replace(/ /g, '_')
        break
      case 'space_camelCase':
        let dataArray = data.split(' ').map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
        if (dataArray.length) return dataArray.toString().replace(',', '')
        break
      case 'space_void':
        if (data !== null) return data.replace(/ /g, '')
        break
    }
  }
}

const treatMethods = {
  treatTrimSizeCharacters (data, size) {
    const a = treat.treatTrim(data)
    const b = treat.treatSize(a, size)
    const c = treat.treatCharacters(b)

    return c
  },
  treatTrimReplaceSpaces (data, mode) {
    const a = treat.treatTrim(data)
    const b = treat.treatReplaceSpaces(a, 'underscore_space')

    return b
  },

  treatRouteFile (data, file) {
    let extension = file.split('.').pop()

    const a = treat.treatTrim(data)
    const b = treat.treatReplaceSpaces(a, 'space_underscore')
    const c = treat.treatSize(b, 'lowerCase')
    const d = treat.treatCharacters(c)

    const res = d + text.masterKey(10) + '.' + extension

    return res
  }
}

module.exports = {treat, treatMethods}
