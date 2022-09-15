/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.
    createTable('profiles', function (table) {
      table.increments('id');
      table.string('name', 50).notNullable();
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
