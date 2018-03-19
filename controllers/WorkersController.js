const config = require('../config/config')
const { Worker } = require('../models')
const { Op } = require('sequelize')

module.exports = {
  index: (req, res) => { // Gets all workers
    Worker
      .findAll()
      .then(workers => {
        if(workers){
          res.send(workers)
        }
        else
        {
          res.send({message:"Record not found"})
        }
      })
      .catch(function (error){
        res.send(error)
      });
  },

  post: (req, res) => { // Create a new worker
    console.log(req.body);
    Worker
      .create(req.body)
      .then(worker => {
        if(worker){
          res.send(worker)
        }
        else
        {
          res.send({message:"Record not found"})
        }
      })
      .catch(function (error){
        res.send(error)
      });
  },

	remove: (req, res) => {
  	Worker
      .destroy({
        where: {
          worker_id: req.params.worker_id
        }
      })
      .then(job => {
        if(workers){
          res.send("Worker " + req.params.worker_id + " has been removed.")
        }
        else
        {
          res.send({message:"Record not found"})
        }
      })
      .catch(function (error){
        res.send(error)
      });
  }
}