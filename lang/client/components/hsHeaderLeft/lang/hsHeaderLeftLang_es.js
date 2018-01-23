import {hsHeaderLeftData} from '../data'

var hsHeaderLeft = {
  logoutLinks: [
    {name: 'Ingresar', page: 'login'},
    {name: 'Registrate', page: 'register'}
  ],
  loginLinks: [],
  allwaysLinks: [
    {name: 'Gracias', page: 'home'}
  ]
}
const hsHeaderLeftLink = {
  mixins: [hsHeaderLeftData],
  created () {
    this.dataLink_hsHeaderLeft({
      'hsHL_logoutLinks': hsHeaderLeft.logoutLinks,
      'hsHL_loginLinks': hsHeaderLeft.loginLinks,
      'hsHL_allwaysLinks': hsHeaderLeft.allwaysLinks
    })
  }
}

/*
 * [D] Export language
*/
export const hsHeaderLeftLang_es = {
  mixins: [hsHeaderLeftLink]
}
