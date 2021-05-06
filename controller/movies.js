const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getMovieByTitlesAndDirectors = (request, response) => {
  const { searchbox } = request.params

  const SearchEngine = movies.filter((movies) => {
    return movies.title.toLowerCase().includes(searchbox.toLowerCase() || movies.directors.find()
  })

  // return response.send(MovieByTitle)
  return response.send(SearchEngine)
}

module.exports = { getAllMovies, getMovieByTitlesAndDirectors }
