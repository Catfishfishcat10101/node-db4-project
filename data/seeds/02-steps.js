exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, step_number: 1, instructions: 'Step 1 instructions', recipe_id: 1},
        {id: 2, step_number: 2, instructions: 'Step 2 instructions', recipe_id: 1},
        {id: 3, step_number: 3, instructions: 'Step 3 instructions', recipe_id: 1},
        // Add as many objects as you need
      ]);
    });
};