const app = require('express')();
const consign = require('consign');
const db = require('./config/db');

app.db = db;

const versao = '1.0.0';
const port = 3001;

consign()
  .include('./config/passport.js')
  .then('./config/middlewares.js')
  .then('./api/validations/validations.js')  
  .then('./api')    
  .then('./config/routes.js')
  .then('./routes')
  .into(app);

app.listen(port, () => {
  console.log(`Running: Phoenix ERP (AMX Sistemas) - API - Versão: ${versao} (Port: ${port})`);
});
