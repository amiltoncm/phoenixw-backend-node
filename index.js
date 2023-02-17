const app = require('express')();
const consign = require('consign');
const db = require('./config/db');
const { version, servicePort } = require('../backend/.env');

app.db = db;

const port = servicePort || 3000;
const versao = version || '1.0.0';

consign()
  .include('./config/passport.js')
  .then('./config/middlewares.js')
  .then('./api/validations/validations.js')
  .then('./api')
  .then('./config/routes.js')
  .then('./routes')
  .then('./routes/domains')
  .into(app);

app.listen(port, () => {
  console.log(
    `Running: Phoenix ERP (AMX Sistemas) - API - Versão: ${versao} (Port: ${port})`
  );
});
