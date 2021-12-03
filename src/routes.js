const express = require('express');

const routes = express.Router();

const Usuario = require('./controllers/usuarios.controllers'); 
const Produto = require('./controllers/produtos.controllers');

routes.get('/', Usuario.index);

//Rotas de usuarios
routes.get('/api/usuarios', Usuario.index);
routes.get('/api/usuarios.details/:id', Usuario.details);
routes.post('/api/usuarios',Usuario.create);
routes.delete('/api/usuarios/:id', Usuario.delete);
routes.put('/api/usuarios',Usuario.update);

//Rotas de produtos
routes.get('/api/produtos', Produto.index);
routes.get('/api/produtos.details/:id', Produto.details);
routes.post('/api/produtos',Produto.create);
routes.delete('/api/produtos/:id', Produto.delete);
routes.put('/api/produtos',Produto.update);

module.exports = routes;
