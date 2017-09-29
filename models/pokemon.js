const db = require('../db');

const Pokemon = {};

// ==============================================
// Helper functions!
// Do you see what they're doing?

// Arguments: req.params, and the string name of some parameter
// Returns: the parameter value (extracted from req.params) as a number
// If the parameter isn't there, or isn't a number, throws an error
function numericParam(reqParams, parameterName) {
    if (typeof parameterName !== 'string') {
        throw new Error('parameterName must be a string!')
    }
    const paramString = reqParams[parameterName];
    if (paramString === undefined) {
        throw new Error(parameterName + ' is undefined!');
    }
    const param = Number(paramString);
    if (isNaN(param)) {
        throw new Error('param is not a number! paramString: ' + paramString);
    }
    return param;
}

// ==============================================
// Middleware!

Pokemon.findAll = (req, res, next) => {
    db.manyOrNone(
        'SELECT * FROM pokemon'
    ).then(data => {
        res.locals.allPokemonData = data;
        next();
    });
};

Pokemon.findById = (req, res, next) => {
    // numericParam is a helper function _we_ defined at the top of the file!
    const id = numericParam(req.params, "pokemonId");
    db.one(
        'SELECT * FROM pokemon WHERE id=$1', [id] // use the id here
    ).then((pokemonData) => {
        res.locals.pokemonData = pokemonData;
        next();
    });
};

Pokemon.create = (req, res, next) => {
    const name = req.body.name,
        description = req.body.description,
        image = req.body.image,
        type = req.body.type;

    db.one(
        'INSERT INTO pokemon (name, description, image, type) VALUES ($1, $2, $3, $4) returning id', [name, description, image, type]
    ).then((newPokemonData) => {
        console.log('returned newPokemonData: ', newPokemonData);
        res.locals.newPokemonData = newPokemonData;
        next();
    });
};

Pokemon.update = (req, res, next) => {
    const id = req.body.id,
        name = req.body.name,
        description = req.body.description,
        image = req.body.image,
        type = req.body.type;
    db.one(
        'UPDATE pokemon SET name = $1, description = $2, image = $3, type = $4 WHERE id = $5 returning id', [name, description, image, type, id]
    ).then((editedPokemonData) => {
        res.locals.editedPokemonData = editedPokemonData;
        next();
    }); 
};

Pokemon.destroy = (req, res, next) => {
    const id = numericParam(req.params, "pokemonId");
    db.none(
        'DELETE FROM pokemon WHERE id = $1', [id]
    ).then(() => {
        res.locals.destroyedPokemonData = "maybe something could go here";
        next();
    });
};

module.exports = Pokemon;