import React from "react";
// Components
import Thumb from "../Thumb";
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
// Helper
import { calcTime, convertMoney } from "../../helpers";
// Image
import NoImage from "../../images/no_image.jpg";
// Router
import { Link } from "react-router-dom";
// Styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";

const MovieInfo = ({ movie }) => (
  <Wrapper backdrop={movie.backdrop_path}>
    <Content>
      <Thumb
        image={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
            : NoImage
        }
        clickable={false}
        alt="movie-thumb"
      />
      <Text rating={movie.vote_average}>
        <h1>
          {movie.title} ({movie.release_date.slice(0, 4)})
        </h1>
        <p>
          {movie.release_date} ·{" "}
          {movie.genres.map((genre) => genre.name).join(", ")} ·{" "}
          {calcTime(movie.runtime)}
        </p>
        <div className="rating-directors">
          <div>
            <div className="title">User Rating</div>
            <div className="rating">{movie.vote_average}</div>
          </div>
          <div className="director">
            <div className="title">
              Director{movie.directors.length > 1 ? "s" : ""}
            </div>
            {movie.directors.map((director) => (
              <Link
                key={director.credit_id}
                to={`/person/${director.id}`}
                style={{ textDecoration: "none " }}
              >
                <p>{director.name}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="tagline">{movie.tagline.toUpperCase()}</div>
        <div className="title">Overview</div>
        <p>{movie.overview}</p>
        <div className="title">Status</div>
        <p>{movie.status}</p>
        <div className="title">Budget</div>
        <p>{convertMoney(movie.budget)}</p>
        <div className="title">Revenue</div>
        <p>{convertMoney(movie.revenue)}</p>
      </Text>
    </Content>
  </Wrapper>
);

export default MovieInfo;
