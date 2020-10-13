const express = require('express')
const router = express.Router()
const pokemon = require('../models/pokemon')

// display pokemon array
router.get('/', (req, res) => {
    res.json({
        status: 200,
        pokemon: pokemon
    })
})

// display single pokemon
router.get('/:index', (req, res) => {
    res.json({
        status: 200,
        pokemon: pokemon[req.params.index]
    })
})

// delete single pokemon
router.delete('/:index', (req, res) => {
    pokemon.splice(req.params.index, 1)
    res.json({
        status: 200,
        msg: 'pokemon deleted'
    })
})

// adding a pokemon to array
router.post('/', (req, res) => {
    const pokemonCreated = req.body
    pokemon.push(pokemonCreated)
    res.json({
        status: 200,
        pokemon: 'your pokemon has been added'
    })
})

// update a single pokemon
router.put('/:index', (req, res) => {
    pokemon[req.params.index] = req.body
    res.json({
        status: 200,
        pokemon: pokemon[req.params.index]
    })
})

module.exports = router