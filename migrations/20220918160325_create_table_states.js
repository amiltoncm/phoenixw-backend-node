/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.  
    createTable('states', function (table) {
      table.increments('id').primary();
      table.integer('code').notNullable();
      table.string('abbreviation', 2).notNullable();
      table.string('name', 30).notNullable();
      table.integer('countryId').notNullable()
        .unsigned()
        .index()
        .references('id')
        .inTable('countries');
        table.integer('statusId').notNullable()
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
