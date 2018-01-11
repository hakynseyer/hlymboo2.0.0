import {data} from '../data'

export const validatorLang_es = () => {
    /*
    *[D] CheckEmpty
    *[i] Elemento Html
  */
  data.validator.checkEmpty.res = '<b> Vacio </b> <p> Este campo no puede estar vacio </p>'

  /*
    *[D] CheckMin
    *[i] Elemento Html
  */
  data.validator.checkMin.res = '<b> Longitud mínima </b> <p> Solo se permiten ##### caracteres como mínimo, a ti te faltan ????? caracteres </p>'

  /*
    *[D] CheckMax
    *[i] Elemento Html
  */
  data.validator.checkMax.res = '<b> Longitud máxima </b> <p> Solo se permiten ##### caracteres como máximo, a ti te sobran ????? caracteres </p>'

  /*
    *[D] CheckEmail
    *[i] Elemento Html
  */
  data.validator.checkEmail.res = '<b> Email invalido </b> <p> Solo se permiten emails correctamente escritas </p>'

  /*
    *[D] CheckEqual
    *[i] Elemento Html
  */
  data.validator.checkEqual.res = '<b> Datos desiguales </b> <p> No coincide con el campo ##### </p>'

  /*
    *[D] CheckUnequal
    *[i] Elemento Html
  */
  data.validator.checkUnequal.res = '<b> Datos iguales </b> <p> No puede coincidir con el campo ##### </p>'

  /*
    *[D] CheckType
    *[i] Elemento Html
  */
  data.validator.checkType.boolean.resMain = '<b> Tipo de dato </b> <p> El valor ingresado es invalido para nuestro sistema... asegurate de ingresar lo que se te pide </p>'
  data.validator.checkType.boolean.resTrue = '<b> Tipo de dato </b> <p> El valor ingresado ha sido negado por nuestro sistema </p>'
  data.validator.checkType.boolean.resFalse = '<b> Tipo de dato </b> <p> El valor ingresado ha sido negado por nuestro sistema </p>'

  return data
}
