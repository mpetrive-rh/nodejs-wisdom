// Import our Controllers
const carController = require('../controllers/carController')

const routes = [
  {
    method: 'GET',
    url: '/api/cars',
    handler: carController.getCars,
    schema: {
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
    handler: carController.addCar
    //schema: documentation.addCarSchema
  },
  {
    method: 'PUT',
    url: '/api/cars/:id',
    handler: carController.updateCar
  },
  {
    method: 'DELETE',
    url: '/api/cars/:id',
    handler: carController.deleteCar
  }
]

module.exports = routes
