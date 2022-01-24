import React from "react";
// Config
import { IMAGE_BASE_URL, PROFILE_SIZE } from "../../config";
// Router
import { Link } from "react-router-dom";
// Styles
import { Wrapper, Image, NoImage } from "./CreditsGrid.styles";

const CreditsGrid = ({ showing }) => {
  return (
    <Wrapper>
      {showing.map((movie) => (
        <Link
          key={movie.id}
          to={`/${movie.id}`}
          style={{ textDecoration: "none" }}
        >
          {movie.poster_path && (
            <Image
              src={`${IMAGE_BASE_URL}${PROFILE_SIZE}${movie.poster_path}`}
              alt="movie-thumb"
              title={movie.title}
            />
          )}
          {!movie.poster_path && (
            <NoImage>
              {movie.title}{" "}
              {movie.release_date ? `(${movie.release_date.slice(0, 4)})` : ""}
            </NoImage>
          )}
        </Link>
      ))}
    </Wrapper>
  );
};

export default CreditsGrid;
