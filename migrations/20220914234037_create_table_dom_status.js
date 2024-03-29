/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('status', function (table) {
    table.integer('id').primary();
    table.string('name', 10).notNullable().unique();
  })
};

exports.down = function (knex) {
  return;
};
