import {hsBoardMenuData} from '../data'

/*
  *[D] hsBoardMenu
*/
var hsBoardMenu = {
  config: {
    elements: {
      new: {
        text: {
          title: 'Subir Imagen',
          description: 'Sube una imagen por vez con un peso no mayor  a 2mb. Los formatos aceptados son jpg, jpeg y png.'
        }
      },
      search: {
        text: {
          title: 'Buscar Imagen',
          description: 'Realiza cambios a tus imagenes para una mejor organización o modifica sus atributos especiales para su comportamiento en Hlymboo.'
        },
        children: [
          {title: 'Editar Imagen'}
        ]
      }
    }
  }
}
const hsBoardMenuLang_es = {
  mixins: [hsBoardMenuData],
  created () {
    this.dataLink_hsBoardMenu({
      'hsBM_new_title': hsBoardMenu.config.elements.new.text.title,
      'hsBM_new_description': hsBoardMenu.config.elements.new.text.description,
      'hsBM_search_title': hsBoardMenu.config.elements.search.text.title,
      'hsBM_search_description': hsBoardMenu.config.elements.search.text.description,
      'hsBM_search_children_0_title': hsBoardMenu.config.elements.search.children[0].title
    })
  }
}

export {hsBoardMenuLang_es}
