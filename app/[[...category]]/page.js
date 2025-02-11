import React from "react";
import HomeContainer from "@/containers/home/index.js";
import Movies from "@/mocks/movie.json"

const API_URL = "https://api.themoviedb.org/3"

const getPopularMovies = async () => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.API_TOKEN}` 
      }
    }
  )
  return res.json()
}

const getFavMovies = async() => {
  const res = await fetch(`${API_URL}/movie/top_rated?language=en-US&page=1`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.API_TOKEN}` 
      }
    }
  )
  return res.json()
}

const getGenresFetch = async() => {
  const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en',
    {method: 'GET',
      headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_TOKEN}` 
      }
    }
  )
  return res.json();
}

const getSingleCategory = async(genreId) => {
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`,
  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_TOKEN}` 
    }
  }
)
return res.json()

}

async function Home({ params }) {
  let selectedCategory

  const topRatedPromise = getPopularMovies()
  const favMoviesPromise = getFavMovies()
  const genresPromise = getGenresFetch()

const [{results: popularMovies}, {results: favMovies}, {genres: categories} ] =
  await Promise.all([topRatedPromise, favMoviesPromise, genresPromise]);

  if(params.category?.length > 0){
    const { results } = await getSingleCategory(params.category[0]);    
    selectedCategory = results;
  }

  return (
    <HomeContainer 
      popularMovies={popularMovies}
      favMovies={favMovies}
      categories={categories}
      selectedCategory = {{
        id: params.category?.[0] ?? "",
        movies : selectedCategory ? selectedCategory.slice(0, 6) : []
      }}
    />
  );
}

export default Home