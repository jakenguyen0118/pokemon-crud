const express        = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser     = require('body-parser');
const pgp = require('pg-promise')();

const app  = express();
const PORT = process.env.PORT || 8080;

// normal setup for express & mustache (if we want to go there)
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// body-parser setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/pokemon', require('./controllers/pokemon-controller'));

app.get('/', (req, res) => res.render('index'));

app.listen(PORT, () => console.log('Server is listening on port', PORT));
