const { Client, Pool } = require('pg');
const config = require('../config/config')
const {job} = require('../models')
const {Op} = require('sequelize');

module.exports = {
  index: (req, res) => { // Gets all available jobs
    job
      .findAll({
        where: {
          work_status: {
            [Op.not]: 1
          }
        }
      })
      .then(jobs => {
        res.send(jobs);
      });
    // "SELECT * FROM work WHERE work_status NOT IN (1);";
    // "SELECT worker_name, worker_id FROM worker;";
  },

  post: (req, res) => { // Gets all available jobs
		req.body.work_status = 0;
		job
		  .create(req.body)
		  .then(job => {
  		  	res.send(job)
		  });
		// "INSERT INTO work (work_description, work_value, work_status) VALUES ($1, $2, $3)";
	},

	remove: (req, res) => {
  	job
      .destroy({
        where: {
          work_id: req.params.work_id
        }
      })
      .then(job => {
        res.send("Job ", req.params.work_id, "has been removed.")
      })
	  
    // "DELETE FROM work WHERE work_id = $1";
  }
}
