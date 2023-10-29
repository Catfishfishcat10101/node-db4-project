// recipes-router.js

const express = require('express');
const Recipes = require('../recipes/recipes-model');

const router = express.Router();

// Get all recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipes.find();
    res.json(recipes);
  } catch(err) {
    res.status(500).json({ message: 'Error getting recipes' });
  }
});

// Get recipe by id
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipes.findById(req.params.id);

    if(!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.json(recipe);
  } catch(err) {
    res.status(500).json({ message: 'Error getting recipe' });
  }
});

// Create a new recipe
router.post('/', async (req, res) => {
  try {
    const recipeData = req.body;
    const newRecipe = await Recipes.create(recipeData);
    res.status(201).json(newRecipe);
  } catch(err) {
    res.status(500).json({ message: 'Error creating recipe' });
  }
});

// Update existing recipe
router.put('/:id', async (req, res) => {
  // TODO: implement route logic
});

// Delete recipe by id 
router.delete('/:id', async (req, res) => {
  // TODO: implement route logic 
});

module.exports = router;