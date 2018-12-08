#!/usr/bin/env node

const homedir = require('os').homedir()
console.log(homedir)

var appConfig;
try {
  appConfig = require(homedir+'/nodejs-config/appConfig')
} catch(err) {
  appConfig = require('./config/app')
}

console.log(appConfig)

// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

// Import Swagger Options
const swagger = require('./config/swagger')
// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

const routes = require('./routes')

routes.forEach((route, index) => {
 fastify.route(route)
})

// Require external modules
const mongoose = require('mongoose')
// Connect to DB
mongoose.connect('mongodb://'+appConfig.options.dbHost+'/mycargarage')
 .then(() => console.log('MongoDB connected…'))
 .catch(err => console.log(err))

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000, appConfig.options.nodeListenAddr)
    fastify.swagger()
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
