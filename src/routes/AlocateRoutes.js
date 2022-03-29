// eslint-disable-next-line import/no-unresolved
const express = require('express');

const routes = express.Router();
const alocateController = require('../controller/AlocateController');

routes.get('/', (req, res) => {
  res.json({
    Project: 'Puma',
    Service: 'Alocate Service',
  });
});

routes.get('/alocate/palavras-chave', (req, res) => {
  alocateController.getKeywords().then((response) => {
    res.status(200).json(response);
  }).catch((response) => {
    res.status(400).json({ response });
  });
});

routes.post('/alocate', (req, res) => {
  const { body } = req;
  alocateController.getSubject(body).then((response) => {
    console.log('sucesso');
    console.log(response);
    res.status(200).json(response);
  }).catch((error) => {
    console.log(error);
    res.status(400).json({ error });
  });
});

module.exports = routes;
