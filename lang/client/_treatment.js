const _treatment = {
  // [I] buscar una mejor manera para eliminar la infección de data
  // [I] Solo activar cuando no se requiera html
  dataTreatmentSimple (data) {
    return data.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  },
  dataTreatmentArray (data) {
    return data.map(value => value.replace(/</g, "&lt;").replace(/>/g, "&gt;"))
  }
}

export {_treatment}
