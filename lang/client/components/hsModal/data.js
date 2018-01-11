import {_treatment} from '../../_treatment'

const hsModalData = {
  data () {
    return {
      lang: {
        hsModal: {
          msgRedirectDefault: null,
          msgRedirectCustomized: null,
        }
      }
    }
  },
  methods: {
    dataLink_hsModal (dataLink) {
      this.lang.hsModal.msgRedirectDefault = _treatment.dataTreatmentSimple(dataLink.hsM_msgRedirectDefault)
      this.lang.hsModal.msgRedirectCustomized = _treatment.dataTreatmentSimple(dataLink.hsM_msgRedirectCustomized)
    }
  }
}

export {hsModalData}
