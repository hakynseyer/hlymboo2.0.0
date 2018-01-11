let data = require('./data')

/*
  *[D] CheckEmpty
  *[*] response: res
  *[i] No tocar las etiquetas <b> o <p>, solo tocar el contenido que se encuentra dentro de esas etiquetas
*/
data.validator.valEmpty.res = '<b> Vacio </b> <p> Este campo no puede estar vacio </p>'

/*
  *[D] CheckMin
  *[*] response: res
  *[i] No tocar las etiquetas <b> o <p>, solo tocar el contenido que se encuentra dentro de esas etiquetas
*/
data.validator.valMin.res = '<b> Longitud mínima </b> <p> Solo se permiten ##### caracteres como mínimo, a ti te faltan ????? caracteres </p>'

/*
  *[D] CheckMax
  *[*] response: res
  *[i] No tocar las etiquetas <b> o <p>, solo tocar el contenido que se encuentra dentro de esas etiquetas
*/
data.validator.valMax.res = '<b> Longitud máxima </b> <p> Solo se permiten ##### caracteres como máximo, a ti te sobran ????? caracteres </p>'

/*
  *[D] CheckEqual
  *[*] response: res
  *[i] No tocar las etiquetas <b> o <p>, solo tocar el contenido que se encuentra dentro de esas etiquetas
*/
data.validator.valEqual.res = '<b> Datos desiguales </b> <p> No coincide con el campo ##### </p>'

/*
  *[D] CheckUnequal
  *[*] response: res, resArray
  *[i] No tocar las etiquetas <b> o <p>, solo tocar el contenido que se encuentra dentro de esas etiquetas
*/
data.validator.valUnequal.res = '<b> Datos iguales </b> <p> No puede coincidir con el campo ##### </p>'

data.validator.valUnequal.resArray = '<b> Datos iguales </b> <p> No se pueden tener datos duplicados entre tus campos </p>'

/*
  *[D] CheckType
  *[*] response: text [res], number [res], email [res], password [resLetter, resNumber], boolean [resMain, resTrue, resFalse]
  *[i] No tocar las etiquetas <b> o <p>, solo tocar el contenido que se encuentra dentro de esas etiquetas
*/
data.validator.valType.text.res = '<b> Tipo de dato </b> <p> El valor ingresado debe de contener valores de tipo texto</p>'

data.validator.valType.number.res = '<b> Tipo de dato </b> <p> El valor ingresado debe de contener valores numéricos</p>'

data.validator.valType.email.res = '<b> Tipo de dato </b> <p> El valor ingresado debe de contener un email correctamente escrita</p>'

data.validator.valType.password.resSpecial = '<b> Tipo de dato </b> <p> El valor ingresado debe de contener al menos ##### caracteres especiales</p>'
data.validator.valType.password.resLetter = '<b> Tipo de dato </b> <p> El valor ingresado debe de contener al menos ##### letras</p>'
data.validator.valType.password.resNumber = '<b> Tipo de dato </b> <p> El valor ingresado debe de contener al menos ##### números</p>'

data.validator.valType.boolean.resMain = '<b> Tipo de dato </b> <p> El valor ingresado es invalido para nuestro sistema... asegurate de ingresar lo que se te pide </p>'
data.validator.valType.boolean.resTrue = '<b> Tipo de dato </b> <p> El valor ingresado ha sido negado por nuestro sistema </p>'
data.validator.valType.boolean.resFalse = '<b> Tipo de dato </b> <p> El valor ingresado ha sido negado por nuestro sistema </p>'

/*
  *[D] CheckBigger
  *[*] response: res
  *[i] No tocar las etiquetas <b> o <p>, solo tocar el contenido que se encuentra dentro de esas etiquetas
*/
data.validator.valBigger.res = '<b> Valor invalido </b> <p> El dato ingresado es invalido para nuestro sistema </p>'

module.exports = data
