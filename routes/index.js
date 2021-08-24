const express = require('express');

const routes = express.Router();

const home_controller = require('../controllers/home_controller');

routes.use('/profile',require('./users'));

routes.get('/',home_controller.home);

module.exports = routes;