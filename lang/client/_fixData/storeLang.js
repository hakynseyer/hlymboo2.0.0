import store from '../../../client/src/store/store'

export const storeLang = (...modules) => {
  switch (store.state.lang) {
    case 'es':
      for (let module of modules) {
        if (module.lang === 'es') return module.module
      }
      break
    case 'en':
      for (let module of modules) {
        if (module.lang === 'en') return module.module
      }
      break
    default:
      return {}
  }
}
