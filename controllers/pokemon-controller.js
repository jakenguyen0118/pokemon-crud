const router = require('express').Router();
const Pokemon = require('../models/pokemon');


/* View Routes */

//show all pokemon view
router.get('/',
    Pokemon.findAll,
    (req, res) => {
        res.render('pokemon/index', { pokemon: res.locals.allPokemonData });
    }
);

//show new pokemon view
router.get('/new', (req, res) => {
    res.render('pokemon/new');
})

//show edit pokemon view
router.get('/:pokemonId/edit',
    Pokemon.findById,
    (req, res) => {
        res.render('pokemon/edit', res.locals.pokemonData);
    }
);

//show single pokemon view
router.get('/:pokemonId',
    Pokemon.findById,
    (req, res) => {
        console.log('in pokemon .get with /:pokemonId');
        res.render('pokemon/show', res.locals.pokemonData);
    }
);

/* Api Routes */

// Add a pokemon to your database
router.post('/'

);

// edit a pokemon in your database
router.put('/:id'

);

// remove a pokemon
router.delete('/:pokemonId'

);


module.exports = router;