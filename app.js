const app = require('express')()
const http = require('http').Server(app)
const path = require('path')
const config = require('./config/config')
const cors = require('cors')

app.use(cors())

require('./routes')(app)

// listen to port
http.listen(config.port || 9000, function(){
  console.log('Server started on port', config.port);
});
