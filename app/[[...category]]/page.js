import React from "react";
import HomeContainer from "@/containers/home/index.js";
import Movies from "@/mocks/movie.json"

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function Home({ params }) {

  await delay(1000);
  let selectedCategory
  if(params.category?.length > 0){
    selectedCategory = true;
  }
  return (
    <HomeContainer 
      selectedCategory = {{
        id: params.category?.[0] ?? "",
        movies : selectedCategory ? Movies.results.slice(0, 7) : []
      }}
    />
  );
}

export default Home