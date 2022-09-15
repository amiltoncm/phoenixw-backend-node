/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.
    createTable('profiles', function (table) {
      table.increments('prf_id');
      table.string('prf_name', 50).notNullable();
      table.integer('dst_id').notNullable()
      .unsigned()
      .index()
      .references('dst_id')
      .inTable('dom_status');      
      table.dateTime('prf_created').notNullable();
      table.dateTime('prf_updated').notNullable();
  });  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return;
};
