import React from "react";
// Components
import UserLog from "../UserLog";
import UserRating from "../UserRating";
// Styles
import { Wrapper } from "./UserPanel.styles";

export default function UserPanel({
  movie,
  movieLog,
  setMovieLog,
  updating,
  setUpdating,
}) {
  return (
    <Wrapper>
      <UserLog
        movieLog={movieLog}
        setMovieLog={setMovieLog}
        updating={updating}
        setUpdating={setUpdating}
      />
      <UserRating
        movieLog={movieLog}
        setMovieLog={setMovieLog}
        updating={updating}
        setUpdating={setUpdating}
      />
      <div className="tmdb-rating">
        <div className="title">TMDB Rating</div>
        <div className="tmdb-rating-number">{movie.vote_average}</div>
      </div>
    </Wrapper>
  );
}
