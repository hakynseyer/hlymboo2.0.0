import {hsMenuHyzherData} from '../data'

var hsMenuHyzher = {
  logout: 'Cerrar Sesión'
}
const hsMenuHyzherLink = {
  mixins: [hsMenuHyzherData],
  created () {
    this.dataLink_hsMenuHyzher({
      'hsMH_logout': hsMenuHyzher.logout
    })
  }
}

/*
 * [D] Export language
*/
export const hsMenuHyzherLang_es = {
  mixins: [hsMenuHyzherLink]
}
