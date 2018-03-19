const JobsController = require('./controllers/JobsController')
const WorkersController = require('./controllers/WorkersController')

module.exports = (app) => {

  app.get('/jobs',
    JobsController.index)
  app.post('/job',
    JobsController.post)
  app.delete('/job/:work_id',
    JobsController.remove)

  app.get('/workers',
    WorkersController.index)
  app.post('/worker',
    WorkersController.post)
}