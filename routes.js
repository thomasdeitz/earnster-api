const JobsController = require('./controllers/JobsController')
const WorkersController = require('./controllers/WorkersController')

module.exports = (app) => {

  app.get('/jobs',
    JobsController.index)
  app.post('/job',
    JobsController.post)
  app.delete('/job/:job_id',
    JobsController.remove)

  app.get('/workers',
    WorkersController.index)
  app.post('/worker',
    WorkersController.post)
  app.delete('/worker/:worker_id',
    WorkersController.remove)
}