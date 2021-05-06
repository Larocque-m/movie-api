const express = require('express')

const bodyParser = require('body-parser')
const { getAllMovies, getMovieByTitlesOrDirectors, saveNewMovie } = require('./controller/movies')

const app = express()

app.get('/movies', getAllMovies)

app.get('/movies/:search', getMovieByTitlesOrDirectors)

app.post('/', bodyParser.json(), saveNewMovie)

app.all('*', (request, response) => {
  return response.status(404).send('Sorry this is not working')
})

app.listen(1341, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1341...')
})
