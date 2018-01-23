import {h2ActivationMessageData, hsAlertModalData} from '../data'

/*
  *[D] h2ActivationMessage
*/
var h2ActivationMessage = {
  h2Message: 'Activación cuenta Hyzher'
}
const h2ActivationMessageLink = {
  mixins: [h2ActivationMessageData],
  created () {
    this.dataLink_h2ActivationMessage({
      'h2AM_h2Message': h2ActivationMessage.h2Message
    })
  }
}

/*
  *[D] hsAlertModal
*/
// [I] Elemento html [body]
var hsAlertModal = {
  error: {
    configModal: {
      head: {
        headAlign: 'center',
        title: 'Violación de sistema !!!',
        subtitle: 'Información Corrupta'
      },
      timer: {
        time: 17,
        redirect: {
          name: 'Pagina de inicio',
          route: 'home'
        }
      }
    },
    configAlertModal: {
      type: 'error',
      body: {
        head: 'Negación sobre activación de cuenta Hyzher',
        body: '<p>Se te ha negado el acceso a usted... por la seguridad de este universo y la de su comunidad, se ha registrado su entrada en nuestro núcleo informático.</p>',
        footer: '&copy; ##### Hlymboo. Todos los derechos reservados'
      }
    }
  },
  success: {
    configModal: {
      head: {
        headAlign: 'center',
        title: 'Cuenta de Hyzher Activada',
        subtitle: 'HYZHER: #####'
      },
      timer: {
        time: 20,
        redirect: {
          name: 'Login Hlymboo Hyzher',
          route: 'login'
        }
      }
    },
    configAlertModal: {
      type: 'success',
      body: {
        head: 'Aprobación de cuenta Hyzher',
        body: '<p>Felicidades <b>#####</b>, tu activación ha sido un éxito, ahora ya podrás iniciar sesión y tener las herramientas de un verdadero Hyzher... Por cierto, Hlymboo te ha enviado un nuevo correo electronico sobre algo importante, revisalo por favor',
        footer: '&copy; ##### Hlymboo. Todos los derechos reservados'
      }
    }
  },
  hyzher: {
    configModal: {
      head: {
        headAlign: 'center',
        title: 'Cuenta de Hyzher Activada',
        subtitle: 'HYZHER: #####'
      },
      timer: {
        time: 17,
        redirect: {
          name: 'Login Hlymboo Hyzher',
          route: 'login'
        }
      }
    },
    configAlertModal: {
      type: 'success',
      body: {
        head: 'Hyzher #####',
        body: 'Tu cuenta Hyzher ya había sido activada con anterioridad, por lo que ya no es necesario ingresar a este link. Si necesitas ayuda extra sobre algún problema, busca la ayuda de un rango administravo o del mismo creador de Hlymboo en el pérfil de su cuenta',
        footer: '&copy; ##### Hlymboo. Todos los derechos reservados'
      }
    }
  }
}
const hsAlertModalLink = {
  mixins: [hsAlertModalData],
  methods: {
    errorAlertModal () {
      this.dataLink_hsAlertModal({
        'hsAM_headAlign': hsAlertModal.error.configModal.head.headAlign,
        'hsAM_title': hsAlertModal.error.configModal.head.title,
        'hsAM_subtitle': hsAlertModal.error.configModal.head.subtitle,
        'hsAM_time': hsAlertModal.error.configModal.timer.time,
        'hsAM_name': hsAlertModal.error.configModal.timer.redirect.name,
        'hsAM_route': hsAlertModal.error.configModal.timer.redirect.route,
        'hsAM_type': hsAlertModal.error.configAlertModal.type,
        'hsAM_head': hsAlertModal.error.configAlertModal.body.head,
        'hsAM_body': hsAlertModal.error.configAlertModal.body.body,
        'hsAM_footer': hsAlertModal.error.configAlertModal.body.footer
      })
    },
    successAlertModal () {
      this.dataLink_hsAlertModal({
        'hsAM_headAlign': hsAlertModal.success.configModal.head.headAlign,
        'hsAM_title': hsAlertModal.success.configModal.head.title,
        'hsAM_subtitle': hsAlertModal.success.configModal.head.subtitle,
        'hsAM_time': hsAlertModal.success.configModal.timer.time,
        'hsAM_name': hsAlertModal.success.configModal.timer.redirect.name,
        'hsAM_route': hsAlertModal.success.configModal.timer.redirect.route,
        'hsAM_type': hsAlertModal.success.configAlertModal.type,
        'hsAM_head': hsAlertModal.success.configAlertModal.body.head,
        'hsAM_body': hsAlertModal.success.configAlertModal.body.body,
        'hsAM_footer': hsAlertModal.success.configAlertModal.body.footer
      })
    },
    hyzherAlertModal () {
      this.dataLink_hsAlertModal({
        'hsAM_headAlign': hsAlertModal.hyzher.configModal.head.headAlign,
        'hsAM_title': hsAlertModal.hyzher.configModal.head.title,
        'hsAM_subtitle': hsAlertModal.hyzher.configModal.head.subtitle,
        'hsAM_time': hsAlertModal.hyzher.configModal.timer.time,
        'hsAM_name': hsAlertModal.hyzher.configModal.timer.redirect.name,
        'hsAM_route': hsAlertModal.hyzher.configModal.timer.redirect.route,
        'hsAM_type': hsAlertModal.hyzher.configAlertModal.type,
        'hsAM_head': hsAlertModal.hyzher.configAlertModal.body.head,
        'hsAM_body': hsAlertModal.hyzher.configAlertModal.body.body,
        'hsAM_footer': hsAlertModal.hyzher.configAlertModal.body.footer
      })
    }
  }
}

/*
 * [D] Export language
*/
export const activationLang_es = {
  mixins: [h2ActivationMessageLink, hsAlertModalLink]
}
