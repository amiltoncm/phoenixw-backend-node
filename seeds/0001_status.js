/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('status').insert([
    {id: 0, name: 'Inativo'},
    {id: 1, name: 'Ativo'},
  ]);
};
