const express = require('express');

const routes = express.Router();

const home_controller = require('../controllers/home_controller');

routes.use('/profile',require('./users'));

routes.get('/dashboard',home_controller.home);

routes.get('/form',home_controller.form)

routes.get('/table',home_controller.table)

routes.get('/login',home_controller.login)

routes.get('/register',home_controller.register)
module.exports = routes;