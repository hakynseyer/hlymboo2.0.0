import {hsHeaderRightData} from '../data'

var hsHeaderRight = {
  name: 'Hlymboo',
  page: 'home'
}
const hsHeaderRightLink = {
  mixins: [hsHeaderRightData],
  created () {
    this.dataLink_hsHeaderRight({
      'hsHR_name': hsHeaderRight.name,
      'hsHR_page': hsHeaderRight.page
    })
  }
}

/*
 * [D] Export language
*/
export const hsHeaderRightLang_es = {
  mixins: [hsHeaderRightLink]
}
