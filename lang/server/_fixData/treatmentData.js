// [i] Actualizar del treatmentData del cliente
// [i] Buscar una mejor forma de validar strings con tags html
const isHTML = RegExp.prototype.test.bind(/(<([^>]+)>)/i);

class treatmentData {
  treatingText (data) {
    if (!isHTML(data)) {
      return data.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    } return data
  }

  treatingArray (data) {
    return data.map(value => {
      if (!isHTML(value)) {
        return value.replace(/</g, "&lt;").replace(/>/g, "&gt;")
      } else return value
    })
  }

  treatingArray_object (data) {
    // children: [{title: null, icon: null, key: null}]
    if (data.length) {
      let newData = []

      data.forEach ((keyMain, index) => {
        let keysChild = Object.keys(keyMain)

        newData[index] = {}

        for (let keyChild of keysChild) {
          if (!isHTML(data[index][keyChild]) && data[index][keyChild] !== null) {
            newData[index][keyChild] = data[index][keyChild].replace(/</g, "&lt;").replace(/>/g, "&gt;")
          } else newData[index][keyChild] = data[index][keyChild]
        }
      })

      return newData
    } else return data
  }

  treatingObject (data) {
    //[i] POR PROBAR
    /* checkEmpty: {
      res: null
    } */
    let keys = Object.keys(data)
    let newData = {}

    keys.forEach(key => {
      if (!isHTML(data[key]) && data[key] !== null) {
        newData[key] = data[key].replace(/</g, "&lt;").replace(/>/g, "&gt;")
      } else newData[key] = data[key]
    })

    return newData
  }

  treatingObject_array (data) {
    /* showReady: {
      'personal': ['name', 'surnames', 'alias', 'email'],
      'passwords': ['password', 'repeatPassword'],
      'security': ['question1', 'answer1', 'question2', 'answer2'],
      'sign': ['sign']
    } */
    let keys = Object.keys(data)
    let newData = {}

    keys.forEach(key => {
      newData[key] = data[key].map(value => {
        if (!isHTML(value)) {
          return value.replace(/</g, "&lt;").replace(/>/g, "&gt;")
        } else return value
      })
    })

    return newData
  }

  treatingObject_array_object (data) {
    /* "ranks": {
      "Hyzher": [
        {"page": "image", "icon": "picture-o", "route": "image"}
      ]
    } */
    let keys = Object.keys(data)
    let newData = {}

    keys.forEach(key => {
      newData[key] = data[key].map(value => {
        let childrenKeys = Object.keys(value)
        let newValue = {}

        for (let childKey of childrenKeys) {
          if (!isHTML(value[childKey]) && value[childKey] !== null) {
            newValue[childKey] = value[childKey].replace(/</g, "&lt;").replace(/>/g, "&gt;")
          } else newValue[childKey] = value[childKey]
        }

        return newValue
      })
    })

    return newData
  }
}

module.exports = {treatmentData}
