/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('countries').insert([
    {id: 1058, name: 'BRASIL', iso2: 'BR', iso3: 'BRA', status_id: 1, created: new Date, updated: new Date},
    {id: 9999, name: 'OUTROS', iso2: 'OT', iso3: 'OUT', status_id: 1, created: new Date, updated: new Date}
  ]);
};
