import express from 'express'

const routes = express.Router()

routes.get('/', (request, response) => {
  return response.json({ status: true })
})

export default routes
