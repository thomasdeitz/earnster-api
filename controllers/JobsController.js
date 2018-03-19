const config = require('../config/config')
const { Job } = require('../models')
const { Op } = require('sequelize');

module.exports = {
  index: (req, res) => { // Gets all available jobs
    Job
      .findAll({
        where: {
          job_status: {
            [Op.not]: 1
          }
        }
      })
      .then(jobs => {
        if(jobs){
          res.send(jobs)
        }
        else
        {
          res.send({message:"Record not found"})
        }
      })
      .catch(function (error){
        res.send(error);
      });
    // SELECT * FROM work WHERE work_status NOT IN (1)
    // SELECT worker_name, worker_id FROM worker
  },

  post: (req, res) => { // Gets all available jobs
		req.body.work_status = 0;
		Job
		  .create(req.body)
		  .then(job => {
  		  	res.send(job)
		  });
		// INSERT INTO work (work_description, work_value, work_status) VALUES ($1, $2, $3)
	},

	remove: (req, res) => {
  	Job
      .destroy({
        where: {
          work_id: req.params.work_id
        }
      })
      .then(job => {
        res.send("Job " + req.params.work_id + " has been removed.")
      })
	  
    // DELETE FROM work WHERE work_id = $1
  }
}
