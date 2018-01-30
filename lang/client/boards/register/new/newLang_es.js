import {hsFormHeadData, hsFormHeadboardData, hsInputData, hsSelectData, hsCheckboxData, hsAlertModalData} from '../data'

/*
  *[D] hsFormHead
*/
var hsFormHead = {
  title: 'Nuevo Hyzher',
  buttons: {
    cleaner: 'Limpiador',
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
  *[D] hsInput
*/
var hsInput = {
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
const hsInputLink = {
  mixins: [hsInputData],
  created () {
    this.dataLink_hsInput({
      'hsFI_name_titleInput': hsInput.name.config.titleInput,
      'hsFI_name_headBoard': hsInput.name.config.headBoard,
      'hsFI_name_hiddenMessage': hsInput.name.config.hiddenMessage,

      'hsFI_surnames_titleInput': hsInput.surnames.config.titleInput,
      'hsFI_surnames_headBoard': hsInput.surnames.config.headBoard,
      'hsFI_surnames_hiddenMessage': hsInput.surnames.config.hiddenMessage,

      'hsFI_alias_titleInput': hsInput.alias.config.titleInput,
      'hsFI_alias_headBoard': hsInput.alias.config.headBoard,
      'hsFI_alias_hiddenMessage': hsInput.alias.config.hiddenMessage,

      'hsFI_email_titleInput': hsInput.email.config.titleInput,
      'hsFI_email_headBoard': hsInput.email.config.headBoard,
      'hsFI_email_hiddenMessage': hsInput.email.config.hiddenMessage,

      'hsFI_password_titleInput': hsInput.password.config.titleInput,
      'hsFI_password_headBoard': hsInput.password.config.headBoard,
      'hsFI_password_hiddenMessage': hsInput.password.config.hiddenMessage,

      'hsFI_repeatPassword_titleInput': hsInput.repeatPassword.config.titleInput,
      'hsFI_repeatPassword_headBoard': hsInput.repeatPassword.config.headBoard,
      'hsFI_repeatPassword_hiddenMessage': hsInput.repeatPassword.config.hiddenMessage,

      'hsFI_answer1_titleInput': hsInput.answer1.config.titleInput,
      'hsFI_answer1_headBoard': hsInput.answer1.config.headBoard,
      'hsFI_answer1_hiddenMessage': hsInput.answer1.config.hiddenMessage,

      'hsFI_answer2_titleInput': hsInput.answer2.config.titleInput,
      'hsFI_answer2_headBoard': hsInput.answer2.config.headBoard,
      'hsFI_answer2_hiddenMessage': hsInput.answer2.config.hiddenMessage,
    })
  }
}

/*
  *[D] hsSelect
*/
var hsSelect = {
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
const hsSelectLink = {
  mixins: [hsSelectData],
  created () {
    this.dataLink_hsSelect({
      'hsFS_question1_optionDataDefault': hsSelect.question1.config.optionDataDefault,
      'hsFS_question1_optionData': hsSelect.question1.config.optionData,
      'hsFS_question1_titleSelect': hsSelect.question1.config.titleSelect,
      'hsFS_question1_headBoard': hsSelect.question1.config.headBoard,
      'hsFS_question1_hiddenMessage': hsSelect.question1.config.hiddenMessage,

      'hsFS_question2_optionDataDefault': hsSelect.question2.config.optionDataDefault,
      'hsFS_question2_optionData': hsSelect.question2.config.optionData,
      'hsFS_question2_titleSelect': hsSelect.question2.config.titleSelect,
      'hsFS_question2_headBoard': hsSelect.question2.config.headBoard,
      'hsFS_question2_hiddenMessage': hsSelect.question2.config.hiddenMessage,
    })
  }
}

/*
  *[D] hsCheckbox
*/
var hsCheckbox = {
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
const hsCheckboxLink = {
  mixins: [hsCheckboxData],
  created () {
    this.dataLink_hsCheckbox({
      'hsFC_checkChosen': hsCheckbox.sign.config.checkChosen,
      'hsFC_checkList': hsCheckbox.sign.config.checkList,
      'hsFC_titleCheck': hsCheckbox.sign.config.titleCheck,
      'hsFC_headBoard': hsCheckbox.sign.config.headBoard,
      'hsFC_hiddenMessage': hsCheckbox.sign.config.hiddenMessage
    })
  }
}

/*
  *[D] hsAlertModal
*/
// [I] Elemento html [body]
var hsAlertModal = {
  configModal: {
    head: {
      headAlign: 'center',
      title: 'Nuevo Huesped Registrado',
      subtitle: 'USUARIO: #####'
    },
    timer: {
      time: 30,
      redirect: {
        name: 'Login Hlymboo Hyzher',
        route: 'login'
      }
    }
  },
  configAlertModal: {
    type: 'normal',
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
      'hsAM_time': hsAlertModal.configModal.timer.time,
      'hsAM_name': hsAlertModal.configModal.timer.redirect.name,
      'hsAM_route': hsAlertModal.configModal.timer.redirect.route,
      'hsAM_type': hsAlertModal.configAlertModal.type,
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
  mixins: [hsFormHeadLink, hsFormHeadboardLink, hsInputLink, hsSelectLink, hsCheckboxLink, hsAlertModalLink]
}
