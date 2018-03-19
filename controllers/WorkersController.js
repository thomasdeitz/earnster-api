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
          console.log(workers)
        }
        else
        {
          res.send({message:"Record not found"})
        }
      })
      .catch(function (error){
        res.send(error);
      });
  },
  
  post: (res, req) => { // Create a new worker
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
        res.send(error);
      });
  }
}