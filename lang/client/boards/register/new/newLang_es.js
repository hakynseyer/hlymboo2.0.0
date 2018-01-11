import {formData, hsFormHeadboardData, hsFormInputData, hsFormSelectData, hsFormCheckData, hsAlertModalData} from '../data'

/*
  *[D] Form
*/
var form = {
  head: {
    title: 'Nuevo Hyzher',
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
  personal: {
    title: 'Personal',
    message: [
      'No utilices datos engañosos o datos que afecten la sensibilidad del público',
      'Utiliza datos coherentes, claros... Lo más simple posible',
      'Caracteres especiales como: [ , á ñ * + ], entre otros será borrados en algunos campos']
  },
  passwords: {
    title: 'Contraseñas',
    message: ['No usar acentos ni letras como ñ o semejantes',
      'Crea contraseñas complejas pero que sean fáciles de recordar para ti... combina letras (mayusculas, minisculas) con números y caracteres especiales',
      'Tu contraseña será encriptada por lo que nadie (hyzhers, admins, creador) tendrá acceso a conocer tu contraseña, solo tú podrás saberlo']
  },
  security: {
    title: 'Seguridad',
    message: ['Utiliza respuestas cortas, claras y simples de recordar',
      'Escoge una pregunta que más te haga recordar la respuesta, recuerda que esto será una medida de seguridad en caso de perder tu contraseña o en su defecto en apartados específicos']
  },
  sign: {
    title: 'Firma',
    message: ['Aceptar nuestro términos y condiciones otorgará seguridad para ti, como para   nosotros en Hlymboo... Por favor leelas antes de continuar',
      'El cambio estará presente por lo que nuestros términos y condiciones se actualizaran cada determinado tiempo... No te preocupes, en Hlymboo nuestra primera regla es proteger a nuestros Hyzhers para garantizar su seguridad en nuestra plataforma']
  }
}
const hsFormHeadboardLink = {
  mixins: [hsFormHeadboardData],
  created () {
    this.dataLink_hsFormHeadboard({
      'hsFH_personal_title': hsFormHeadboard.personal.title,
      'hsFH_personal_message': hsFormHeadboard.personal.message,

      'hsFH_passwords_title': hsFormHeadboard.passwords.title,
      'hsFH_passwords_message': hsFormHeadboard.passwords.message,

      'hsFH_security_title': hsFormHeadboard.security.title,
      'hsFH_security_message': hsFormHeadboard.security.message,

      'hsFH_sign_title': hsFormHeadboard.sign.title,
      'hsFH_sign_message': hsFormHeadboard.sign.message,
    })
  }
}

/*
  *[D] hsFormInput
*/
var hsFormInput = {
  name: {
    config: {
      titleInput: 'Nombre',
      headBoard: hsFormHeadboard.personal.title,
      hiddenMessage: 'Son las 10:45 p.m'
    }
  },
  surnames: {
    config: {
      titleInput: 'Apellidos',
      headBoard: hsFormHeadboard.personal.title,
      hiddenMessage: 'No hay trabajo'
    }
  },
  alias: {
    config: {
      titleInput: 'Alias',
      headBoard: hsFormHeadboard.personal.title,
      hiddenMessage: 'La soledad de mi cuarto'
    }
  },
  email: {
    config: {
      titleInput: 'Email',
      headBoard: hsFormHeadboard.personal.title,
      hiddenMessage: 'Un Hakyn Seyer triste'
    }
  },
  password: {
    config: {
      titleInput: 'Contraseña',
      headBoard: hsFormHeadboard.passwords.title,
      hiddenMessage: '+12 horas programado'
    }
  },
  repeatPassword: {
    config: {
      titleInput: 'Repetir Contraseña',
      headBoard: hsFormHeadboard.passwords.title,
      hiddenMessage: 'Un gran maestro Youtu...'
    }
  },
  answer1: {
    config: {
      titleInput: 'Respuesta Seguridad 1',
      headBoard: hsFormHeadboard.security.title,
      hiddenMessage: 'Juego de cartas'
    }
  },
  answer2: {
    config: {
      titleInput: 'Respuesta Seguridad 2',
      headBoard: hsFormHeadboard.security.title,
      'hiddenMessage': 'Hambre de torta de jamón'
    }
  }
}
const hsFormInputLink = {
  mixins: [hsFormInputData],
  created () {
    this.dataLink_hsFormInput({
      'hsFI_name_titleInput': hsFormInput.name.config.titleInput,
      'hsFI_name_headBoard': hsFormInput.name.config.headBoard,
      'hsFI_name_hiddenMessage': hsFormInput.name.config.hiddenMessage,

      'hsFI_surnames_titleInput': hsFormInput.surnames.config.titleInput,
      'hsFI_surnames_headBoard': hsFormInput.surnames.config.headBoard,
      'hsFI_surnames_hiddenMessage': hsFormInput.surnames.config.hiddenMessage,

      'hsFI_alias_titleInput': hsFormInput.alias.config.titleInput,
      'hsFI_alias_headBoard': hsFormInput.alias.config.headBoard,
      'hsFI_alias_hiddenMessage': hsFormInput.alias.config.hiddenMessage,

      'hsFI_email_titleInput': hsFormInput.email.config.titleInput,
      'hsFI_email_headBoard': hsFormInput.email.config.headBoard,
      'hsFI_email_hiddenMessage': hsFormInput.email.config.hiddenMessage,

      'hsFI_password_titleInput': hsFormInput.password.config.titleInput,
      'hsFI_password_headBoard': hsFormInput.password.config.headBoard,
      'hsFI_password_hiddenMessage': hsFormInput.password.config.hiddenMessage,

      'hsFI_repeatPassword_titleInput': hsFormInput.repeatPassword.config.titleInput,
      'hsFI_repeatPassword_headBoard': hsFormInput.repeatPassword.config.headBoard,
      'hsFI_repeatPassword_hiddenMessage': hsFormInput.repeatPassword.config.hiddenMessage,

      'hsFI_answer1_titleInput': hsFormInput.answer1.config.titleInput,
      'hsFI_answer1_headBoard': hsFormInput.answer1.config.headBoard,
      'hsFI_answer1_hiddenMessage': hsFormInput.answer1.config.hiddenMessage,

      'hsFI_answer2_titleInput': hsFormInput.answer2.config.titleInput,
      'hsFI_answer2_headBoard': hsFormInput.answer2.config.headBoard,
      'hsFI_answer2_hiddenMessage': hsFormInput.answer2.config.hiddenMessage,
    })
  }
}

/*
  *[D] hsFormSelect
*/
var hsFormSelect = {
  question1: {
    config: {
      titleSelect: 'Pregunta Seguridad 1',
      headBoard: hsFormHeadboard.security.title,
      optionDataDefault: 'Mi mayor pasatiempo:',
      optionData: [
        'Mi mayor miedo de niño:',
        'El nombre de mi primer amigo:',
        'Mi mayor pasatiempo:',
        'Mi primera mascota se llamaba:',
        'Mi celebridad favorita:',
        'La comida que más amo:',
        'Mi entretenimiento favorito:',
        'El libro de mis recuerdos:'
      ],
      'hiddenMessage': 'Ya me quiero dormir'
    }
  },
  question2: {
    config: {
      titleSelect: 'Pregunta Seguridad 2',
      headBoard: hsFormHeadboard.security.title,
      optionDataDefault: 'Mi celebridad favorita:',
      optionData: [
        'Mi mayor miedo de niño:',
        'El nombre de mi primer amigo:',
        'Mi mayor pasatiempo:',
        'Mi primera mascota se llamaba:',
        'Mi celebridad favorita:',
        'La comida que más amo:',
        'Mi entretenimiento favorito:',
        'El libro de mis recuerdos:'
      ],
      'hiddenMessage': 'Del salmon al tomato'
    }
  }
}
const hsFormSelectLink = {
  mixins: [hsFormSelectData],
  created () {
    this.dataLink_hsFormSelect({
      'hsFS_question1_optionDataDefault': hsFormSelect.question1.config.optionDataDefault,
      'hsFS_question1_optionData': hsFormSelect.question1.config.optionData,
      'hsFS_question1_titleSelect': hsFormSelect.question1.config.titleSelect,
      'hsFS_question1_headBoard': hsFormSelect.question1.config.headBoard,
      'hsFS_question1_hiddenMessage': hsFormSelect.question1.config.hiddenMessage,

      'hsFS_question2_optionDataDefault': hsFormSelect.question2.config.optionDataDefault,
      'hsFS_question2_optionData': hsFormSelect.question2.config.optionData,
      'hsFS_question2_titleSelect': hsFormSelect.question2.config.titleSelect,
      'hsFS_question2_headBoard': hsFormSelect.question2.config.headBoard,
      'hsFS_question2_hiddenMessage': hsFormSelect.question2.config.hiddenMessage,
    })
  }
}

var hsFormCheck = {
  sign: {
    config: {
      titleCheck: 'Aceptar Términos y Condiciones',
      headBoard: hsFormHeadboard.sign.title,
      checkChosen: 'Aceptar los términos y condiciones de Hlymboo',
      checkList: [
        'Aceptar los términos y condiciones de Hlymboo',
        'Otro término'
      ],
      'hiddenMessage': 'Videojuegos de los 90\''
    }
  }
}
const hsFormCheckLink = {
  mixins: [hsFormCheckData],
  created () {
    this.dataLink_hsFormCheck({
      'hsFC_checkChosen': hsFormCheck.sign.config.checkChosen,
      'hsFC_checkList': hsFormCheck.sign.config.checkList,
      'hsFC_titleCheck': hsFormCheck.sign.config.titleCheck,
      'hsFC_headBoard': hsFormCheck.sign.config.headBoard,
      'hsFC_hiddenMessage': hsFormCheck.sign.config.hiddenMessage
    })
  }
}

// [I] Elemento html [body]
var hsAlertModal = {
  configModal: {
    head: {
      headAlign: 'center',
      title: 'Nuevo Huesped Registrado',
      subtitle: 'USUARIO: #####'
    },
    timer: {
      redirect: {
        name: 'Login de ingreso',
      }
    }
  },
  configAlertModal: {
    body: {
      head: 'Revisa tu Correo Electrónico',
      body: `<p>Muchas gracias <b>#####</b> por registrarte en Hlymboo, y sobre todo gracias por creer en este proyecto.</p><p>Para finalizar la creación de tu ingreso, deberás de seguir las instrucciones que se te enviaron a tu correo electrónico, esto con la finalidad de terminar el proceso de tu activacion de rango Hyzher... Muchas gracias.</p>`,
      footer: '##### registrado el día ?????'
    }
  }
}
const hsAlertModalLink = {
  mixins: [hsAlertModalData],
  created () {
    this.dataLink_hsAlertModal({
      'hsAM_headAlign': hsAlertModal.configModal.head.headAlign,
      'hsAM_title': hsAlertModal.configModal.head.title,
      'hsAM_subtitle': hsAlertModal.configModal.head.subtitle,
      'hsAM_name': hsAlertModal.configModal.timer.redirect.name,
      'hsAM_head': hsAlertModal.configAlertModal.body.head,
      'hsAM_body': hsAlertModal.configAlertModal.body.body,
      'hsAM_footer': hsAlertModal.configAlertModal.body.footer
    })
  }
}

/*
 * [D] Export language
*/
export const newLang_es = {
  mixins: [formLink, hsFormHeadboardLink, hsFormInputLink, hsFormSelectLink, hsFormCheckLink, hsAlertModalLink]
}
