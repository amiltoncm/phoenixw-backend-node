const config = require('../knexfile.js');
const knex = require('knex')(config);

// Atualização das tabelas automaticamente
knex.migrate.latest([config]);

module.exports = knex;
