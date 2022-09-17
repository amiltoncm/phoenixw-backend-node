/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.  
    createTable('countries', function (table) {
      table.integer('id').primary();
      table.string('name', 50).notNullable().unique();
      table.string('iso2', 2).notNullable().unique();
      table.string('iso3', 3).notNullable().unique();
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
