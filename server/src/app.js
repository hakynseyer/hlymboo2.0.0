const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const formidable = require('express-formidable')

const config = require('./config/config')
const {sequelize} = require('./models')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use(formidable.parse({keepExtensions: true}))

// require('./passport')
require('./routes')(app)

sequelize.sync().then(() => {
  app.listen(config.ports.server)
  console.log(`Server run on port ${config.ports.server}`)
})
