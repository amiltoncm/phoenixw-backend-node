/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('users').insert([
    {
      id: 0, name: 'MASTER', password: '$2a$10$NJfEeT/WWxsfo5OxjkcmIeloHHNNyja4swr.xOdQly2hSX4bg0Kle',
      status_id: 1, profile_id: 3, created: new Date, updated: new Date
    },
    {
      id: 1, name: 'ADMIN', password: '$2a$10$NJfEeT/WWxsfo5OxjkcmIeloHHNNyja4swr.xOdQly2hSX4bg0Kle',
      status_id: 1, profile_id: 3, created: new Date, updated: new Date
    },
  ]);
};
