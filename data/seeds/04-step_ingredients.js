exports.seed = function(knex) {
  return knex('step_ingredients').del()
    .then(function() {
      return knex('step_ingredients').insert([
        {step_id: 1, ingredient_id: 1, quantity: 2},
        {step_id: 1, ingredient_id: 2, quantity: 0.5},
        {step_id: 2, ingredient_id: 2, quantity: 3},
        // etc
      ]);
    });
};