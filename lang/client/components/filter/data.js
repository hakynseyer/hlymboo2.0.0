import {validateData} from '../../_fixData/validateData'

class hsFilter extends validateData {
  constructor (data) {
    super()
    this.var_hsFilter()

    let filter = typeof (data.filter) === 'object'
    let text = typeof (data.text) === 'object'
    let order = typeof (data.order) === 'object'

    if (filter && text && order) {
      let hsF_filter_title = this.validateText(data.filter.title, true)
      if (hsF_filter_title) this.hsFilter.filter.title = hsF_filter_title
      let hsF_filter_button = this.validateText(data.filter.button, true)
      if (hsF_filter_button) this.hsFilter.filter.button = hsF_filter_button

      let hsF_text_title = this.validateText(data.text.title, true)
      if (hsF_text_title) this.hsFilter.text.title = hsF_text_title

      let hsF_order_title = this.validateText(data.order.title, true)
      if (hsF_order_title) this.hsFilter.order.title = hsF_order_title
    }

  }

  var_hsFilter () {
    this.hsFilter = {
      filter: {
        title: null,
        button: null
      },
      text: {
        title: null
      },
      order: {
        title: null
      }
    }
  }

  get_hsFilter () {
    return {
      hsFilter: this.hsFilter
    }
  }
}

export {
  hsFilter
}
