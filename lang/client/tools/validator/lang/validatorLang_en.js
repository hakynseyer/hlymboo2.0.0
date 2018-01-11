import {data} from '../data'

export const validatorLang_en = () => {
    /*
    *[D] CheckEmpty
    *[i] Elemento Html
  */
  data.validator.checkEmpty.res = '<b> Empty </b> <p> This field can\'t be empty </p>'

  /*
    *[D] CheckMin
    *[i] Elemento Html
  */
  data.validator.checkMin.res = '<b> Minimum length </b> <p> Only ##### characters are allowed as a minimun, ????? characters are missing</p>'

  /*
    *[D] CheckMax
    *[i] Elemento Html
  */
  data.validator.checkMax.res = '<b> Maximum length </b> <p> Only ##### characters are allowed as a maximum, you have ????? characters left</p>'

  /*
    *[D] CheckEmail
    *[i] Elemento Html
  */
  data.validator.checkEmail.res = '<b> Invalid email </b> <p> Only properly written emails are allowed </p>'




  /*
    *[i] AQUI VOY YO
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
