/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id');
    table.string('name', 20).notNullable().unique();
    table.string('password', 128).notNullable();
    table
    .integer('profile_id')
    .notNullable()
    .unsigned()
    .index()
    .references('id')
    .inTable('profiles');
    table
      .integer('status_id')
      .notNullable()
      .unsigned()
      .index()
      .references('id')
      .inTable('status');
    table.dateTime('created').notNullable();
    table.dateTime('updated').notNullable();
    table.dateTime('deleted');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return;
};
