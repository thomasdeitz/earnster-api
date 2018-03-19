const config = require('../config/config')
const { Worker } = require('../models')
const { Op } = require('sequelize');

var getWorkers = "SELECT * FROM worker;";

module.exports = {
  index: (req, res) => { // Gets all workers
    Worker
      .findAll()
      .then(workers => {
        if(workers){
          res.status(200).json(workers)
        }
        else
        {
          res.status(404).json({message:"Record not found"})
        }
      })
      .catch(function (error){
        res.status(500).json(error);
      });
  },
  
  post: (res, req) => { // Create a new worker
    Worker
		  .create(req.body)
		  .then(worker => {
  		  if(worker){
          res.status(200).json(worker)
        }
        else
        {
          res.status(404).json({message:"Record not found"})
        }
      })
      .catch(function (error){
        res.status(500).json(error);
      });
  }
}