import {tools} from '../../../../lang/client'

const date = {
  fixDate () {
    var dateFormat = require('dateformat')
    dateFormat.i18n = {
      dayNames: tools('fixDate').fixDate.dayNames,
      monthNames: tools('fixDate').fixDate.monthNames,
      timeNames: [
        'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
      ]
    }

    return dateFormat
  }
}

export {date}
