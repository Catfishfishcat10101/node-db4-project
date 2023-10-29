/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  exports.up = function(knex) {
    return knex.schema.createTable('step_ingredients', tbl => {
      tbl.increments();
      tbl.integer('step_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('steps')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');
      tbl.integer('ingredient_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('ingredients')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');
      tbl.float('quantity').notNullable();
    });
}};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('step_ingredients');
  
};
