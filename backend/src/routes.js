const { Router } = require('express');
const ProcessoController = require('./controllers/ProcessoController');
const ProcessoOrdenadoController = require('./controllers/ProcessoOrdenadoController');

const routes = Router();

// Cadastrar um processo
routes.get('/processos', ProcessoController.index);
routes.get('/processoFifo', ProcessoOrdenadoController.index);
routes.get('/processoSJF', ProcessoOrdenadoController.index);
routes.post('/processos', ProcessoController.store);
routes.delete('/processos/:_id', ProcessoController.destroy);

module.exports = routes;