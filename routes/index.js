const express = require('express');

const routes = express.Router();

const home_controller = require('../controllers/home_controller');

routes.use('/profile',require('./users'));

routes.get('/',home_controller.home);

routes.get('/form',home_controller.form)

routes.get('/table',home_controller.table)

routes.get('/login',home_controller.login)
module.exports = routes;