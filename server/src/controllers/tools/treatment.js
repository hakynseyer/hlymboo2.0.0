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

  treatReplaceSpaces (data) {
    if (data !== null) return data.replace(/_/g, ' ')
  }
}

const treatMethods = {
  treatTrimSizeCharacters (data, size) {
    const a = treat.treatTrim(data)
    const b = treat.treatSize(a, size)
    const c = treat.treatCharacters(b)

    return c
  },
  treatTrimReplaceSpaces (data) {
    const a = treat.treatTrim(data)
    const b = treat.treatReplaceSpaces(a)

    return b
  }
}

module.exports = {treat, treatMethods}
