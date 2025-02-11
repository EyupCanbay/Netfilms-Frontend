import React from "react";
import MovieContainer from "@/containers/movie";
import Movies from "@/mocks/movie.json"
import { notFound } from "next/navigation";



const getMovie = async(id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}language=en-US`,
    {       
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2IzZDBlZGJhZTZkMmRhNzg2NWRiNjM1ODU0YzQ5MyIsIm5iZiI6MTcwNzIxMjY4My4wOTYsInN1YiI6IjY1YzFmZjhiOTU5MGUzMDE2MWIxZDVlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FfmDo7Mt-RCR1n7U1FNuPfENRv4Aa-BC8FD8hGTtE9s'
            }
        }
    )
    return res.json()
}


async function MoviePage({ params }) {
    const movieDetail = await getMovie(params.id)
    console.log(movieDetail)
    if(!movieDetail) {
        notFound();
    }

    return(
        <MovieContainer movie={movieDetail} isCompact={false}/>
    )
}

export default MoviePage