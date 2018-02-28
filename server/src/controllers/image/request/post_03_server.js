const {boards} = require('../../../../../lang/server')
const {Image, User} = require('../../../models')

module.exports = {
  async R_all (req, res, next) {
    try {
      const _Total = await Image.count({
        where: {user: req.hyzher.id}
      })

      let currentPage = req.body.pagination.currentPage

      let starting = (currentPage - 1) * req.body.pagination.limitImages

      const _Images = await Image.findAll({
        where: {user: req.hyzher.id},
        include: [
          {model: User, as: 'User', attributes: ['id', 'alias'], require: true}
        ],
        limit: req.body.pagination.limitImages,
        offset: starting
      })

      let pages = Math.ceil(_Total / req.body.pagination.limitImages)

      res.send({images: _Images, total: _Total, pages: pages})
    } catch (error) {
      const langData = boards(req.serverLang, 'Image', 'requestPack', 'server')
      res.status(400).send({'errors': langData.imgRequestServer.errorRequest})
    }
  }
}
