import {validateData} from '../../_fixData/validateData'

class fixDate extends validateData {
  constructor (data) {
    super()
    this.var_fixDate()

    let dayNames = Array.isArray(data.dayNames)
    let monthNames = Array.isArray(data.monthNames)

    if (dayNames && monthNames) {
      let fD_dayNames = this.validateArray(data.dayNames, 'array-simple')
      if (fD_dayNames) this.fixDate.dayNames = fD_dayNames

      let fD_monthNames = this.validateArray(data.monthNames, 'array-simple')
      if (fD_monthNames) this.fixDate.monthNames = fD_monthNames
    }
  }

  var_fixDate () {
    this.fixDate = {
      dayNames: [],
      monthNames: []
    }
  }

  get_fixDate () {
    return {
      fixDate: this.fixDate
    }
  }
}

export {
  fixDate
}
