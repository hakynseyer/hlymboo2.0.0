module.exports = {
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

  /*
  * [D] Defined Functions
  */
  treatTrimSizeCharacters (data, size) {
    const a = this.treatTrim(data)
    const b = this.treatSize(a, size)
    const c = this.treatCharacters(b)

    return c
  }

}
