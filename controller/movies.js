const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getMovieByTitlesOrDirectors = (request, response) => {
  const { search } = request.params

  const SearchEngine = movies.filter((movies) => {
    return movies.title.toLowerCase().includes(search.toLowerCase()) ||
    movies.directors.find((director) => director.toLowerCase().includes(search.toLowerCase()))
  })

  if (!movies.length) return response.sendStatus(404)

  return response.send(SearchEngine)
}

module.exports = { getAllMovies, getMovieByTitlesOrDirectors }
