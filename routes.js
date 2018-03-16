const parser = require('body-parser');
const WorkController = require('./controllers/WorkController')
const WorkerController = require('./controllers/WorkerController')

module.exports = (app) => {

  app.get('/work',
    WorkController.index)
  app.post('/work', parser.json(),
    WorkController.post)
  app.delete('/work/:work_id',
    WorkController.remove)

  app.get('/worker',
    WorkerController.index)
}