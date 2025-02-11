import React from "react";
import HomeContainer from "@/containers/home/index.js";
import { 
  getPopularMovies,
  getFavMovies,
  getGenresFetch,
  getSingleCategory
}  from "@/services/movie"; 

async function Home({ params }) {
  let selectedCategory

  const [{results: popularMovies}, {results: favMovies}, {genres: categories} ] =
    await Promise.all([getPopularMovies(), getFavMovies(), getGenresFetch()]);

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