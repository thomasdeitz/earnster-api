const JobsController = require('./controllers/JobsController')
const WorkersController = require('./controllers/WorkersController')

module.exports = (app) => {

  app.get('/work',
    JobsController.index)
  app.post('/work',
    JobsController.post)
  app.delete('/work/:work_id',
    JobsController.remove)

  app.get('/worker',
    WorkersController.index)
}