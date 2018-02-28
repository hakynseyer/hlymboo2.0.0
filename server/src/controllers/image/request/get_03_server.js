const {boards} = require('../../../../../lang/server')
const {Image} = require('../../../models')

module.exports = {
  async R_chest (req, res, next) {
    try {
      const _Chest = await Image.findAll({
        where: {user: req.hyzher.id},
        attributes: ['chest'],
        group: ['chest']
      })
      res.send(_Chest)
    } catch (error) {
      const langData = boards(req.serverLang, 'Image', 'requestPack', 'server')
      res.status(400).send({'errors': langData.imgRequestServer.errorRequest})
    }
  }
}
