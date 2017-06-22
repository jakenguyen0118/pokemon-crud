const router = require('express').Router();
const Pokemon = require('../models/pokemon');


/* View Routes */

//show all pokemon view
router.get('/', (req, res) => {
  Pokemon
    .findAll()
    .then((data) => {
      res.render('pokemon/index', {pokemon: data});
    })
    .catch(err => console.log('ERROR:', err));
});

//show new pokemon view
router.get('/new', (req, res) => {
  res.render('pokemon/new');
})

//show edit pokemon view
router.get('/:id/edit',  (req, res) => {
  const id = req.params.id;
  Pokemon
    .findById(id)
    .then(data => {
      res.render('pokemon/edit', data);
    })
});

//show single pokemon view
router.get('/:id', (req, res) => {
  const id = req.params.id;
  Pokemon
    .findById(id)
    .then((data) => {
      res.render('pokemon/show', data);
    })
    .catch(err => console.log('ERROR:', err));
});



/* Api Routes */

// Add a pokemon to your database
router.post('/', (req, res) => {
  const name = req.body.name,
        description = req.body.description,
        image = req.body.image,
        type = req.body.type;

  Pokemon
    .create(name, description, image, type)
    .then(data => res.json(data))
    .catch(err => console.log('ERROR:', err));
});

// edit a pokemon in your database
router.put('/:id', (req, res) => {
  const id = req.body.id,
        name = req.body.name,
        description = req.body.description,
        image = req.body.image,
        type = req.body.type;

  Pokemon
    .update(id, name, description, image, type)
    .then(data => res.json(data))
    .catch(err => console.log('ERROR:', err));
});

// remove a pokemon
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Pokemon
    .destroy(id)
    .then(data => res.json(data))
    .catch(err => console.log('ERROR:', err));
});


module.exports = router;

 


