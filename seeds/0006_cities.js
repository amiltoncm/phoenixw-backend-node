/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('cities').insert([
    {id: 0, code: 0,       name: 'NÃO DEFINIDA', stateId: 28, statusId: 1, created: new Date, updated: new Date},
    {id: 1, code: 4202404, name: 'BLUMENAU',     stateId: 22, statusId: 1, created: new Date, updated: new Date}
  ]);
};
