import express from 'express'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = express.Router()

const pointsController = new PointsController()
const itemsController = new ItemsController()

// status
routes.get('/', (request, response) => {
  return response.json({ status: true })
})

routes.get('/items', itemsController.index)
routes.post('/points', pointsController.store)

export default routes
