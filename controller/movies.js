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

  return response.send(SearchEngine)
}

const saveNewMovie = (request, response) => {
  const {
    title, director, releseDate, rating, runtime, genres
  } = request.body

  if (!title || !director || !releseDate || !rating || !runtime || !genres) {
    return response.status(400).send('The Following fields are required: title, director, rating, etc')
  }

  const newMovie = {
    title, director, releseDate, rating, runtime, genres
  }

  movies.push(newMovie)

  return response.status(201).send(newMovie)
}



module.exports = {
  getAllMovies,
  getMovieByTitlesOrDirectors,
  saveNewMovie
}
