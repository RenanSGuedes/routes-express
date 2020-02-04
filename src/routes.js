const express = require('express')
const routes = express.Router()

const RegisterController = require('./controllers/RegisterController')
const SearchController = require('./controllers/SearchController')
const DeleteController = require('./controllers/DeleteController')

routes.post('/users', RegisterController.store)
routes.get('/search', SearchController.index)
routes.delete('/users/:username', DeleteController.destroy)

module.exports = routes;