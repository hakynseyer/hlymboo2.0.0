import {validateData} from '../../_fixData/validateData'

class hsImage extends validateData {
  constructor (data) {
    super()
    this.var_hsImage()

    let details = typeof (data.details) === 'object'

    if (details) {
      let hsI_details_cellType = this.validateText(data.details.cellType, true)
      if (hsI_details_cellType) this.hsImage.details.cellType = hsI_details_cellType

      let hsI_details_cellWeight = this.validateText(data.details.cellWeight, true)
      if (hsI_details_cellWeight) this.hsImage.details.cellWeight = hsI_details_cellWeight
    }
  }

  var_hsImage () {
    this.hsImage = {
      details: {
        cellType: null,
        cellWeight: null
      }
    }
  }

  get_hsImage () {
    return {
      hsImage: this.hsImage
    }
  }
}

export {
  hsImage
}
