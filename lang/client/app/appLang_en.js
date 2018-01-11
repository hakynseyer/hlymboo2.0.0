/*
  Detalles: Contiene el nombre de los botones que aparecerán en la barra principal superior "Header" cuando el usuario no se encuentre logeado
*/
var logoutLinks = [
    {name: 'Thanks', page: 'home'},
    {name: 'Sign up', page: 'register'}
  ]
  
  /*
    Detalles: Funcion que permite cambiar el idioma de Hlymboo... forma dura
      this.$store.dispatch('saveLang', 'es')
  */
  export const appLangEn = {
    created () {
      this.Components.hsHeader.links.logoutLinks = logoutLinks
    }
  }
  