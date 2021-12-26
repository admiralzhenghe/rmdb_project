import React from "react";
// Component
import Button from "./Button";
import Grid from "./Grid";
import HeroImage from "./HeroImage";
import Search from "./Search";
import Spinner from "./Spinner";
import Thumb from "./Thumb";
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
// Hook
import { useHomeFetch } from "../hooks/useHomeFetch";
// Image
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, searchTerm, setSearchTerm, setIsLoadMore } =
    useHomeFetch();
  // Set the most popular movie as the hero image
  const [mostPopular] = state.results;
  return (
    <>
      {!searchTerm && mostPopular && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${mostPopular.backdrop_path}`}
          title={mostPopular.original_title}
          text={mostPopular.overview}
        />
      )}
      <Search setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? "Search Results" : "Popular Movies"}>
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            clickable
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {!loading && state.page < state.total_pages && (
        <Button text="Load More" callback={() => setIsLoadMore(true)} />
      )}
    </>
  );
};

export default Home;
