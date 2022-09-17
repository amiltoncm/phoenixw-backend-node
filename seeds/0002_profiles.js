/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('profiles').insert([
    {id: 1, name: 'ACESSO NORMAL', statusId: 1, created: new Date, updated: new Date},
    {id: 2, name: 'ACESSO AVANÇADO', statusId: 1, created: new Date, updated: new Date},
    {id: 3, name: 'ACESSO TOTAL', statusId: 1, created: new Date, updated: new Date}
  ]);
};
