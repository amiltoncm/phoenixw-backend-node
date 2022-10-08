/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.  
    createTable('cities', function (table) {
      table.increments('id').primary();
      table.integer('code').notNullable();
      table.string('name', 50).notNullable();
      table.integer('state_id').notNullable()
        .unsigned()
        .index()
        .references('id')
        .inTable('states');
        table.integer('status_id').notNullable()
        .unsigned()
        .index()
        .references('id')
        .inTable('status');
      table.dateTime('created').notNullable();
      table.dateTime('updated').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return;
};
