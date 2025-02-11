const API_URL = "https://api.themoviedb.org/3/"

const fetchMovieApi = async(pathname, query = "") => {
    try{
        const res = await fetch(`${API_URL}${pathname}?api_key=${process.env.API_KEY}&${query}`)
        return res.json()

    }catch(error){
        throw new Error(error)
    }
    
}

const getPopularMovies = async () => {
    return fetchMovieApi('movie/popular', "")
}

const getFavMovies = async() => {
  return await fetchMovieApi('movie/top_rated')
}

const getGenresFetch = async() => {
  return await fetchMovieApi('genre/movie/list')
}

const getSingleCategory = async(genreId) => {
  return await fetchMovieApi('discover/movie', `with_genres=${genreId}`)
}

const getMovie = async(id) => {
  return fetchMovieApi(`movie/${id}`)
}

const getMovieVideo = async(movie_id) => {
  return fetchMovieApi(`movie/${movie_id}/videos`)
}
export {
    getPopularMovies,
    getFavMovies,
    getGenresFetch,
    getSingleCategory,
    getMovie,
    getMovieVideo
    }