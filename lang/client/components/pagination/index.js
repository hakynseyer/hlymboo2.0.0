import {storeLang} from '../../_fixData/storeLang'

// [i] Module "hsPagination"
import {hsPaginationLang_es} from './hsPagination/hsPaginationLang_es'
import {hsPaginationLang_en} from './hsPagination/hsPaginationLang_en'

const Pagination = (component) => {
  let langData = {}

  switch (component) {
    case 'hsPagination':
      langData = storeLang(
        {lang: 'es', module: hsPaginationLang_es},
        {lang: 'en', module: hsPaginationLang_en}
      )
      break
  }

  return langData
}

export {Pagination}
