import {hsFormHeadData, hsFormHeadboardData, hsInputData, hsImageData} from '../data'

/*
  *[D] hsFormHead
*/
var hsFormHead = {
  title: 'Subir Imagen',
  buttons: {
    cleaner: 'Limpiar',
    ready: 'Enviar'
  },
  showReady: {
    'personal': ['name', 'surnames', 'alias', 'email'],
    'passwords': ['password', 'repeatPassword'],
    'security': ['question1', 'answer1', 'question2', 'answer2'],
    'sign': ['sign']
  }
}
const hsFormHeadLink = {
  mixins: [hsFormHeadData],
  created () {
    this.dataLink_hsFormHead({
      'hsFH_title': hsFormHead.title,
      'hsFH_buttons_cleaner': hsFormHead.buttons.cleaner,
      'hsFH_buttons_ready': hsFormHead.buttons.ready,
      'hsFH_showReady': hsFormHead.showReady
    })
  }
}

/*
  *[D] hsFormHeadboard
*/
var hsFormHeadboard = {
  picture: {
    title: 'Imagen',
    message: [
      'Solo imagenes con formato jpg, jpeg o png',
      'El peso máximo por imagen es de 2mb',
      'Si se descubre duplicidad de imagenes en tu perfil, tú serás sancionado'
    ]
  },
  basic: {
    title: 'Basicos',
    message: [
      'Titulos ofensivos, serán encapsuladas y entrarán a juicio por parte del tribunal',
      'Hlymboo solo podrá ayudar (Hasta donde este nuestro alcance) a hyzhers en disputas de derechos de autor, siempre y cuando el material sea del 100% del creador y siendo publicado en Hlymboo con más de 1 mes de anticipación con respecto a otras plataformas o instituciones... Para más detalles revisa la sección de derechos de autor en tu menu Hyzher'
      // TODO: Realizar un boton Hyzher para tratar temas de protección de derechos de autor. Ayuda sobre usurpación de contenido
      // AGREGAR ESTO DE ABAJO EN LA PAGINA QUE SE DEBERÁ CREAR
      // Hlymboo no es una plataforma de registro de obras, por lo que si te importa mucho la protección de tu obra te recomiendo registrarla en plataformas o instituciones dedicadas a este tema... Para material 100% originario en Hlymboo, se te ayudará en todo lo que este a nuestro alcance para demostrar con pruebas, la autenticidad de tu obra ante la usurpación de contenido (Importante: La prioridad será mayor para Hyzhers con antigüedad y participación en Hlymboo; además, solo se tomarán casos debidamente autorizados por el tribunal. Para más información sobre este tema, revisa la sección dedicada a este tema en tu panel de herramientas Hyzher)
    ]
  },
  organization: {
    title: 'organización',
    message: [
      'Organiza tus imagenes en paquetes llamados Baules. Imagina varios chocolates, libros y refrescos guardados en una caja de herramientas, ¿verdad que no tiene sentido?... Cada cosa debe de ir en su lugar'
    ]
  }
}
const hsFormHeadboardLink = {
  mixins: [hsFormHeadboardData],
  created () {
    this.dataLink_hsFormHeadboard({
      'hsFH_picture_title': hsFormHeadboard.picture.title,
      'hsFH_picture_message': hsFormHeadboard.picture.message,
      'hsFH_basic_title': hsFormHeadboard.basic.title,
      'hsFH_basic_message': hsFormHeadboard.basic.message,
      'hsFH_organization_title': hsFormHeadboard.organization.title,
      'hsFH_organization_message': hsFormHeadboard.organization.message
    })
  }
}

/*
  *[D] hsInput
*/
var hsInput = {
  title: {
    config: {
      titleInput: 'Titulo',
      headBoard: hsFormHeadboard.basic.title,
      hiddenMessage: 'Viendo la tv SP'
    }
  }
}
const hsInputLink = {
  mixins: [hsInputData],
  created () {
    this.dataLink_hsInput({
      'hsI_title_titleInput': hsInput.title.config.titleInput,
      'hsI_title_headBoard': hsInput.title.config.headBoard,
      'hsI_title_hiddenMessage': hsInput.title.config.hiddenMessage
    })
  }
}

/*
  *[D] hsImage
*/
var hsImage = {
  image: {
    config: {
      defaultImage: 'HakynSeyer_Hpan503',
      titleImage: 'Subir Imagen',
      headBoard: hsFormHeadboard.picture.title,
      hiddenMessage: 'Haciendo componente'
    }
  }
}
const hsImageLink = {
  mixins: [hsImageData],
  created () {
    this.dataLink_hsImage({
      'hsI_image_defaultImage': hsImage.image.config.defaultImage,
      'hsI_image_titleImage': hsImage.image.config.titleImage,
      'hsI_image_headBoard': hsImage.image.config.headBoard,
      'hsI_image_hiddenMessage': hsImage.image.config.hiddenMessage
    })
  }
}

/*
 * [D] Export language
*/
export const uploadBasicLang_es = {
  mixins: [hsFormHeadLink, hsFormHeadboardLink, hsInputLink, hsImageLink]
}
