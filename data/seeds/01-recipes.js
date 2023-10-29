/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes').del()
  await knex('recipes').insert([
    {id: 1, name: 'Spaghetti Bolognese'},
    {id: 2, name: 'Chicken Curry'},
    {id: 3, name: 'Beef Stew'}
  ]);
};