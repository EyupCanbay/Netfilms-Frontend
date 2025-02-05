import React from "react";
import MovieContainer from "@/containers/movie";
import Movies from "@/mocks/movie.json"
import { notFound } from "next/navigation";

async function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
}

async function MoviePage({ params }) {
    const movieDetail = Movies.results.find((movie) => movie.id.toString() === params.id.toString());
    if(!movieDetail) {
        notFound();
    }

    return(
        <MovieContainer movie={movieDetail} isCompact={false}/>
    )
}

export default MoviePage