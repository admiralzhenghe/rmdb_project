import React from "react";
// Router
import { Link } from "react-router-dom";
// Styles
import { Wrapper, Image, NoImage } from "./Actor.styles";

const Actor = ({ id, name, character, imageUrl }) => (
  <Wrapper>
    <Link style={{ textDecoration: "none" }} to={`/person/${id}`}>
      {imageUrl && <Image src={imageUrl} alt="actor-thumb"></Image>}
      {!imageUrl && <NoImage>No Image</NoImage>}
    </Link>
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
);

export default Actor;
