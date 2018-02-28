import {tools} from '../../../../lang/client'

const _date = {
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

const _text = {
  cutText (value, size) {
    if (value.length > size && size > 5) return value.slice(0, (size - 3)) + '...'
    else return value
  }
}

const _image = {
  hyzherFolder (id, alias, image, location) {
    let fixUser = alias.split(' ')
    let route = null

    switch (location) {
      case 'myImages':
        fixUser = alias.split(' ')
        fixUser = fixUser.map(user => user.charAt(0).toUpperCase() + user.slice(1))

        let folder = id + '_' + fixUser.toString().replace(',', '')

        route = `client/hyzhers/${folder}/${image}`
        break
      default:
        fixUser = alias.split(' ')
        fixUser = fixUser.map(user => user.charAt(0).toUpperCase() + user.slice(1))
        route = id + '_' + fixUser.toString().replace(',', '')
    }

    return route
  }
}

export {_date, _text, _image}
