const _treatment = {
  // [I] buscar una mejor manera para eliminar la infección de data
  // [I] Solo activar cuando no se requiera html
  dataTreatmentSimple (data) {
    if (typeof (data) === 'string') return data.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  },
  dataTreatmentArray (data) {
    if (data.length) {
      return data.map(value => {
        if (typeof (value) === 'string') return value.replace(/</g, "&lt;").replace(/>/g, "&gt;")

        if (typeof (value) === 'object') {
          let keys = Object.keys(value)
          let newObject = keys.forEach(key => {
            value[key] = value[key].replace(/</g, "&lt;").replace(/>/g, "&gt;")
          })
          return value
        }
      })
    }
  }
}

export {_treatment}
