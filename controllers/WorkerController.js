const { Client, Pool } = require('pg');
const config = require('../config/config')

const connectionPool = new Pool({
  connectionString: config.connectionString,
  //ssl: true
});

var getWorkers = "SELECT * FROM worker;";

module.exports = {
  //gets all workers
  index: (req, res) => {
    connectionPool.query(getWorkers, (err, result) => {
      if (err) {
        console.log(err.stack)
        res.send({'error': err.stack});
      } else {
        res.send({'data': result.rows });
      }
    });
  }
}