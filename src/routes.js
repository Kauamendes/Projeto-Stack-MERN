const express = require('express');

const routes = express.Router();

const Usuario = require('./controllers/usuarios.controllers'); 

routes.get('/', Usuario.index);

//Rotas de usuarios
routes.get('/api/usuarios', Usuario.index);
routes.use('/api/usuarios.details/:id', Usuario.details);
routes.post('/api/usuarios',Usuario.create);

module.exports = routes;
