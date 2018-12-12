// Import our Controllers
const carController = require('../controllers/carController')
const Car = require('../models/MCar')

const routes = [
  {
    method: 'GET',
    url: '/api/cars',
    handler: carController.getCars,
    schema:
    {
      description: "Get cars endpoint"
    }
  },
  {
    method: 'GET',
    url: '/api/cars/:id',
    handler: carController.getSingleCar,
    schema: {
      description: "Get cars by id endpoint"
    }
  },
  {
    method: 'POST',
    url: '/api/cars',
    handler: carController.addCar,
    schema: {
      body: {
          type: 'object',
          properties: {
            title: { type: 'string' },
            brand: { type: 'string' },
            price: { type: 'integer' },
            age: { type: 'integer'},
            services: { type: 'object'},
          },
          required: [ 'title' ]
      }
    }
  },
  {
    method: 'PUT',
    url: '/api/cars/:id',
    handler: carController.updateCar
  },
  {
    method: 'DELETE',
    url: '/api/cars/:id',
    handler: carController.deleteCar,
    schema: {
      params: {
          type: 'object',
          properties: {
            id: { type: 'string' }
          },
      }
    }
  }
]

module.exports = routes
