import {_treatment} from '../../_treatment'

const hsHeaderRightData = {
  data () {
    return {
      lang: {
        hsHeaderRight: {
          mainLink: {
            name: null,
            page: null
          }
        }
      }
    }
  },
  methods: {
    dataLink_hsHeaderRight (dataLink) {
      this.lang.hsHeaderRight.mainLink.name = _treatment.dataTreatmentSimple(dataLink.hsHR_name)
      this.lang.hsHeaderRight.mainLink.page = _treatment.dataTreatmentSimple(dataLink.hsHR_page)
    }
  }
}

export {hsHeaderRightData}
