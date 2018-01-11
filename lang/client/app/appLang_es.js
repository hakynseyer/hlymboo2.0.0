/*
  Detalles: Contiene el nombre de los botones que aparecerán en la barra principal superior "Header" cuando el usuario no se encuentre logeado
*/
var logoutLinks = [
    {name: 'Gracias', page: 'home'},
    {name: 'Registrate', page: 'register'}
  ]

  /*
    Detalles: Funcion que permite cambiar el idioma de Hlymboo... forma dura
      this.$store.dispatch('saveLang', 'es')
  */
  export const appLangEs = {
    created () {
      this.Components.hsHeader.links.logoutLinks = logoutLinks
    }
  }
