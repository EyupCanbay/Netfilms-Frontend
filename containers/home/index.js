import React from "react";
import Movies from "@/mocks/movie.json"
import Genres from "@/mocks/genres.json"
import { FeaturedMovie } from "@/components/featured-movie";
import Categories from "@/components/categories";
import MovieSection from "@/components/movie-section";

function HomeContainer({ selectedCategory }) {
    return (
      <div>
        <FeaturedMovie movie={Movies.results[0]}/>
        <Categories categories={Genres.genres.slice(0, 5)}/>
        
        {(selectedCategory.movies.length > 0) && (
          <MovieSection 
            title={Genres.genres.find(
              (genre)=> genre.id.toString() === selectedCategory.id.toString()
            ).name}
            movies={selectedCategory.movies}
        />
        )}
        <MovieSection 
        title="Popular Films"
        movies={Movies.results.slice(1, 7)}
        />
        <MovieSection 
        title="Best Films"
        movies={Movies.results.slice(7, 13)}
        />
      </div>
  );
}

export default HomeContainer