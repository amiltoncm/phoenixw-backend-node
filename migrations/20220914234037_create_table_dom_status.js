/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

  return knex.schema.
    createTable('dom_status', function (table) {
      table.increments('dst_id');
      table.string('dst_name', 10).notNullable();
  });
  
};

exports.down = function(knex) {

  return;
  
};
