import React from "react";
// Router
import { Link } from "react-router-dom";
// Styles
import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, movieTitle, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="movie-thumb" title={movieTitle}></Image>
      </Link>
    ) : (
      <Image src={image} alt="movie-thumb" title={movieTitle}></Image>
    )}
  </div>
);

export default Thumb;
