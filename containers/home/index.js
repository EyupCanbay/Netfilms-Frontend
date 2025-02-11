import React from "react";
import { FeaturedMovie } from "@/components/featured-movie";
import Categories from "@/components/categories";
import MovieSection from "@/components/movie-section";

function HomeContainer({ 
  popularMovies = [], 
  favMovies=[], 
  categories=[], 
  selectedCategory }) {
  
    return (
      <div>
        <FeaturedMovie movie={popularMovies?.[0]}/>
        <Categories categories={categories.slice(0, 5)}/>
        
        {(selectedCategory.movies.length > 0) && (
          <MovieSection 
            title={categories.find(
              (genre)=> genre.id.toString() === selectedCategory.id.toString()
            ).name}
            movies={selectedCategory.movies}
        />
        )}
        <MovieSection 
        title="Popular Films"
        movies={popularMovies.slice(1, 7)}
        />
        <MovieSection 
        title="Best Films"
        movies={favMovies.slice(7, 13)}
        />
      </div>
  );
}

export default HomeContainer