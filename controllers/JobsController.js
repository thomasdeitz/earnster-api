const { Client, Pool } = require('pg');
const config = require('../config/config')
const {job} = require('../models')
const {Op} = require('sequelize');
const connectionPool = new Pool({
  connectionString: config.connectionString,
  //ssl: true
});

module.exports = {
  //gets all work Items
  index: (req, res) => {
    // "SELECT * FROM work WHERE work_status NOT IN (1);";
    // "SELECT worker_name, worker_id FROM worker;";
    job
      .findAll({
        where: {
          work_id: {
            [Op.not]: 1
          }
        }
      })
      .then(job => {
        res.send(job[0]);
      });
  },
  /*index: (req, res) => {
    var getWork = "SELECT * FROM work WHERE work_status NOT IN (1);";
    var getWorkers = "SELECT worker_name, worker_id FROM worker;";

    connectionPool.query(getWork + getWorkers, (err, result) => {
      if (err) {
        console.log(err.stack)
        res.send({'error': err.stack});
      } else {
        res.send({'data': { work: result[0].rows, workers: result[1].rows } });
      }
    });
  },*/

  post: (req, res) => {
		var addWork = "INSERT INTO work (work_description, work_value, work_status) VALUES ($1, $2, $3)";
		var values = [req.body.name, req.body.value, 0];
		
		connectionPool.query(addWork, values, (err, result) => {
      if (err) {
        console.log(err.stack)
      } else {
        res.send(req.body);
      }
    });
	},

	remove: (req, res) => {
  	var sql = "DELETE FROM work WHERE work_id = $1";
	  var values = [req.params.work_id];
	  console.log(sql, values);
	  connectionPool.query(sql, values, (err, result) => {
	    if (err) {
        console.log(err.stack)
      } else {
        res.send(req.body);
      }
		});
  }
}