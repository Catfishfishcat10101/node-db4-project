exports.seed = function(knex) {
  return knex('ingredients').del() 
    .then(function () {
      return knex('ingredients').insert([
        {id: 1, name: 'ingredient 1'},
        {id: 2, name: 'ingredient 2'},
        {id: 3, name: 'ingredient 3'} 
      ]);
    });  
};