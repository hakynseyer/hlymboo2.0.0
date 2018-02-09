import {validateData} from '../../_fixData/validateData'

class hsHeaderLeft extends validateData {
  constructor (data) {
    super()
    this.var_hsHeaderLeft()

    let links = typeof (data.links) === 'object'

    if (links) {
      let hsHL_links_logout = this.validateArray(data.links.logout, 'array-object')
      if (hsHL_links_logout) this.hsHeaderLeft.links.logout = hsHL_links_logout

      let hsHL_links_login = this.validateArray(data.links.login, 'array-object')
      if (hsHL_links_login) this.hsHeaderLeft.links.login = hsHL_links_login

      let hsHL_links_allways = this.validateArray(data.links.allways, 'array-object')
      if (hsHL_links_allways) this.hsHeaderLeft.links.allways = hsHL_links_allways
    }
  }

  var_hsHeaderLeft () {
    this.hsHeaderLeft = {
      links: {
        logout: [],
        login: [],
        allways: []
      }
    }
  }

  get_hsHeaderLeft () {
    return {
      hsHeaderLeft: this.hsHeaderLeft
    }
  }
}

class hsHeaderRight extends validateData {
  constructor (data) {
    super()
    this.var_hsHeaderRight()

    let main = typeof (data.main) === 'object'

    if (main) {
      let hsHR_main_name = this.validateText(data.main.name, true)
      if (hsHR_main_name) this.hsHeaderRight.main.name = hsHR_main_name

      let hsHR_main_page = this.validateText(data.main.page, true)
      if (hsHR_main_page) this.hsHeaderRight.main.page = hsHR_main_page
    }
  }

  var_hsHeaderRight () {
    this.hsHeaderRight = {
      main: {
        name: null,
        page: null
      }
    }
  }

  get_hsHeaderRight () {
    return {
      hsHeaderRight: this.hsHeaderRight
    }
  }
}

export {
  hsHeaderLeft,
  hsHeaderRight
}
