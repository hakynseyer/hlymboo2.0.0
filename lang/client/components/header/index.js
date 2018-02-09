import {storeLang} from '../../_fixData/storeLang'

// [i] Module "hsHeaderLeft"
import {hsHeaderLeftLang_es} from './hsHeaderLeft/hsHeaderLeftLang_es'
import {hsHeaderLeftLang_en} from './hsHeaderLeft/hsHeaderLeftLang_en'

// [i] Module "hsHeaderRight"
import {hsHeaderRightLang_es} from './hsHeaderRight/hsHeaderRightLang_es'
import {hsHeaderRightLang_en} from './hsHeaderRight/hsHeaderRightLang_en'

const Header = (component) => {
  let langData = {}

  switch (component) {
    case 'hsHeaderLeft':
      langData = storeLang(
        {lang: 'es', module: hsHeaderLeftLang_es},
        {lang: 'en', module: hsHeaderLeftLang_en}
      )
      break
    case 'hsHeaderRight':
      langData = storeLang(
        {lang: 'es', module: hsHeaderRightLang_es},
        {lang: 'en', module: hsHeaderRightLang_en}
      )
      break
  }

  return langData
}

export {Header}
