import React from 'react';
import CategoriesLoading from '@/components/categories/loading.js';
import FeatureMovieLoading from '@/components/featured-movie/loading.js';
import MoviesSectionLoading from '@/components/movie-section/loading.js';

function Loading(){
    return (
        <div>
        <FeatureMovieLoading/>
        <CategoriesLoading/>
        <MoviesSectionLoading/>
        <MoviesSectionLoading/>
        <MoviesSectionLoading/>

        </div>

    );
}

export default Loading;