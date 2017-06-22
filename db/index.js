const pgp = require('pg-promise')();


const cn = {
    host: 'localhost',
    port: 5432,
    database: 'pokemon_db',
    user: 'trevor'
}

const db = pgp(cn);


module.exports = db;
