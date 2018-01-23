import {_treatment} from '../../_treatment'

const hsHeaderLeftData = {
  data () {
    return {
      lang: {
        hsHeaderLeft: {
          links: {
            logoutLinks: [],
            loginLinks: [],
            allwaysLinks: []
          }
        }
      }
    }
  },
  methods: {
    dataLink_hsHeaderLeft (dataLink) {
      this.lang.hsHeaderLeft.links.logoutLinks = _treatment.dataTreatmentArray(dataLink.hsHL_logoutLinks)
      this.lang.hsHeaderLeft.links.loginLinks = _treatment.dataTreatmentArray(dataLink.hsHL_loginLinks)
      this.lang.hsHeaderLeft.links.allwaysLinks = _treatment.dataTreatmentArray(dataLink.hsHL_allwaysLinks)
    }
  }
}

export {hsHeaderLeftData}
