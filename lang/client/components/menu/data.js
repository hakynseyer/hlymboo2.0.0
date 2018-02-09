import {validateData} from '../../_fixData/validateData'

class hsMenuHyzher extends validateData {
  constructor (data) {
    super()
    this.var_hsMenuHyzher()

    let logout = typeof (data.logout) === 'string'
    let ranks = typeof(data.ranks) === 'object'

    if (logout && ranks) {
      let hsMH_logout = this.validateText(data.logout, true)
      if (hsMH_logout) this.hsMenuHyzher.logout = hsMH_logout

      let hsMH_ranks = this.validateObject(data.ranks, 'object-array-object')
      if (hsMH_ranks) this.hsMenuHyzher.ranks = hsMH_ranks
    }
  }

  var_hsMenuHyzher () {
    this.hsMenuHyzher = {
      logout: null,
      ranks: {}
    }
  }

  get_hsMenuHyzher () {
    return {
      hsMenuHyzher: this.hsMenuHyzher
    }
  }
}

export {
  hsMenuHyzher
}
