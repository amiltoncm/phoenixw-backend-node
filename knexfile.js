const db = require('./.env');

module.exports = {

  client: 'postgresql',
  connection: db.connection,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: '_migrations'
  }
  
};
