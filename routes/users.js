const express = require('express');

const routes = express.Router();

const profile_controller = require('../controllers/profile_controller');

routes.get('/',profile_controller.home);

module.exports = routes;