// [i] Actualizar del validateData del cliente

const {treatmentData} = require('./treatmentData')

class validateData extends treatmentData{
  constructor () {
    super()
  }

  validateText (data, treat) {
    if (typeof (data) === 'string') {
      if (treat) return this.treatingText(data)
      else return data
    }
  }

  validateNumber (data) {
    if (typeof (data) === 'number') return data
  }

  validateBoolean (data) {
    if (typeof (data) === 'boolean') return data
  }

  validateArray (data, treat) {
    if (typeof (data) === 'object') {
      switch (treat) {
        case 'array-simple':
          return this.treatingArray(data)
          break
        case 'array-object':
          return this.treatingArray_object(data)
          break
        default:
          return data
      }
    }
  }

  validateObject (data, treat) {
    if (typeof (data) === 'object') {
      switch (treat) {
        case 'object-simple':
          return this.treatingObject(data)
          break
        case 'object-array':
          return this.treatingObject_array(data)
          break
        case 'object-array-object':
          return this.treatingObject_array_object(data)
          break
        default:
          return data
      }
    }
  }
}

module.exports = {validateData}
