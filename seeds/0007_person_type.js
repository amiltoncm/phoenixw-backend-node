/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('person_type').insert([
    {id: 1, name: 'PESSOA FÍSICA'},
    {id: 2, name: 'PESSOA JURÍDICA'}
  ]);
};
