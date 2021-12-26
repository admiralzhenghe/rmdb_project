import React from "react";
// Component
import Actor from "./Actor";
import BreadCrumb from "./BreadCrumb";
import Grid from "./Grid";
import MovieInfo from "./MovieInfo";
import Spinner from "./Spinner";
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
// Hook
import { useMovieFetch } from "../hooks/useMovieFetch";
// Router
import { useParams } from "react-router-dom";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>"Error!"</div>;

  return (
    <>
      <BreadCrumb movieTitle={movie.title}></BreadCrumb>
      <MovieInfo movie={movie} />
      <Grid>
        {movie.actors.map((actor) => (
          <Actor
            key={actor.credit_id}
            id={actor.id}
            character={actor.character}
            name={actor.name}
            imageUrl={
              actor.profile_path &&
              `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            }
          />
        ))}
      </Grid>
    </>
  );
};

export default Movie;
