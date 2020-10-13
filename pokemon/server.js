require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const app = express()
const PORT = process.env.PORT || 3000

app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
	res.json({
		status: 200,
		msg: 'hello pokemon trainers',
	})
})

const pokemonController = require('./controllers/pokemon')
app.use('/pokemon', pokemonController)

app.listen(PORT, () => {
	console.log(`express listening on port ${PORT}`)
})