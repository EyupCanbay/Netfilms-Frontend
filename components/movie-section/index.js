import React from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "./styles.module.css";
        

function MovieSection({ title, movies }){
    return(
        <div className={Styles.MovieSection}>
            <h3 className={Styles.title}> { title } </h3>
                <div className={Styles.movies}>
                    {movies.map((movie)=>(
                        <div className={Styles.movie} key={movie.id}>
                            <Link href={`/movie/${movie.id}`}>
                            <Image
                            fill
                            unoptimized
                            alt={movie.title}
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                          />
                            </Link>
                        </div>
                    ))}
                </div>
            
        </div>
    )
}

export default MovieSection
