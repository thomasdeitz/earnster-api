const app = require('express')()
const bodyParser = require('body-parser');
const http = require('http').Server(app)
const path = require('path')
const config = require('./config/config')
const cors = require('cors')
const {sequelize} = require('./models')

app.use(cors())
app.use(bodyParser.json())

require('./routes')(app)

// listen to port
//sequelize
  //.sync()
  //.then(() => {
    app.listen(config.port)
    console.log('Server started on port', config.port)
  //})
