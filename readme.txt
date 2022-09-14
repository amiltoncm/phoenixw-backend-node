Comandos para rodar:

Dev (nodemon):

npm start

Produtction (pm2):

npm run production

Comandos pm2:

pm2 list
pm2 monit
pm2 restart 0 / pm2 restart all
pm2 stop 0 / pm2 stop all
pm2 kill

Migrations:

Criar arquivo:
knex migrate:make create_table_users

Para rodar script (pode rodar um ou vários scripts):
knex migrate:latest

Rollback:

knex migrate:rollback

Token de autenticação utilizado - JWT
