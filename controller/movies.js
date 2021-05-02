const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getMovieByTitle = (request, response) => {
  const { title } = request.params
  const MovieByTitle = movies.filter((movies) => movies.title.toLowerCase().includes(title.toLowerCase()))

  return response.send(MovieByTitle)
}

module.exports = { getAllMovies, getMovieByTitle }
