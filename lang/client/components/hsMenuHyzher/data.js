import {_treatment} from '../../_treatment'

const hsMenuHyzherData = {
  data () {
    return {
      lang: {
        hsMenuHyzher: {
          logout: null,
          ranks: [
            {
              'rank': 'Hyzher',
              'boards': [
                {'page': 'image', 'icon': 'picture-o', route: 'image'}
              ]
            }
          ]
        }
      }
    }
  },
  methods: {
    dataLink_hsMenuHyzher (dataLink) {
      this.lang.hsMenuHyzher.logout = _treatment.dataTreatmentSimple(dataLink.hsMH_logout)
    }
  }
}

export {hsMenuHyzherData}
