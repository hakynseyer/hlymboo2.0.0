import {formData, hsFormHeadboardData, hsInputData} from '../data'

/*
  *[D] Form
*/
var form = {
  head: {
    title: 'Hlymboo Hyzher',
    buttons: {
      cleaner: 'Limpiador',
      ready: 'Enviar'
    }
  }
}
const formLink = {
  mixins: [formData],
  created () {
    this.dataLink_form({
      'f_title': form.head.title,
      'f_cleaner': form.head.buttons.cleaner,
      'f_ready': form.head.buttons.ready,
    })
  }
}

/*
  *[D] Head Board
*/
var hsFormHeadboard = {
  hyzher: {
    title: 'Ingresar a Hlymboo Hyzher',
    message: [
      'Solo hyzhers registrados podrán acceder a Hlymboo Hyzher',
      'Los huespedes registrados deberán seguir las instrucciones enviados a su correo electronico, esto con el fin de activar su cuenta Hyzher',
      'Después de tres intentos fallidos, serás redirigido a la página principal'
    ]
  }
}
const hsFormHeadboardLink = {
  mixins: [hsFormHeadboardData],
  created () {
    this.dataLink_hsFormHeadboard({
      'hsFH_hyzher_title': hsFormHeadboard.hyzher.title,
      'hsFH_hyzher_message': hsFormHeadboard.hyzher.message
    })
  }
}

/*
  *[D] hsInput
*/
var hsInput = {
  email: {
    config: {
      titleInput: 'Email',
      headBoard: hsFormHeadboard.hyzher.title,
      hiddenMessage: 'Hace mucho frio hoy'
    }
  },
  password: {
    config: {
      titleInput: 'Contraseña',
      headBoard: hsFormHeadboard.hyzher.title,
      hiddenMessage: 'Mi hermana la olvidadiza'
    }
  }
}
const hsInputLink = {
  mixins: [hsInputData],
  created () {
    this.dataLink_hsInput({
      'hsFI_email_titleInput': hsInput.email.config.titleInput,
      'hsFI_email_headBoard': hsInput.email.config.headBoard,
      'hsFI_email_hiddenMessage':hsInput.email.config.hiddenMessage,

      'hsFI_password_titleInput': hsInput.password.config.titleInput,
      'hsFI_password_headBoard': hsInput.password.config.headBoard,
      'hsFI_password_hiddenMessage': hsInput.password.config.hiddenMessage
    })
  }
}

/*
 * [D] Export language
*/
export const loginLang_es = {
  mixins: [formLink, hsFormHeadboardLink, hsInputLink]
}