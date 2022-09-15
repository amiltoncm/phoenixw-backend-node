/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

  return knex.schema.
    createTable('status', function (table) {
      table.increments('id');
      table.string('name', 10).notNullable();
  });
  
};

exports.down = function(knex) {

  return;
  
};
