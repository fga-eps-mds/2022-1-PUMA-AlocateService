const alocateRoutes = require('./AlocateRoutes');

module.exports = (app) => {
  app.use('/', [alocateRoutes]);
};

