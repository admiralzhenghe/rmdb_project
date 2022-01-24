import React, { useEffect, useState } from "react";
// Components
import Thumb from "../Thumb";
import UserLog from "../UserLog";
import UserRating from "../UserRating";
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
// Context
import { useAuthContext } from "../../context/AuthContext";
// Helper
import { calcTime } from "../../helpers";
// Images
import NoImage from "../../images/no_image.jpg";
// Router
import { Link } from "react-router-dom";
// Styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";

const MovieInfo = ({ movie }) => {
  const { tokens, user } = useAuthContext();
  const [loading, setLoading] = useState(true);
  const [movieLog, setMovieLog] = useState({
    watch: false,
    like: false,
    watchlist: false,
    rating: 0,
  });

  // Create or update the movie log in the database
  useEffect(() => {
    if (loading) return;
    const API_URL = "http://127.0.0.1:8000/api/update-movie/";
    fetch(`${API_URL}${movie.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokens.access}`,
      },
      body: JSON.stringify({
        user: user.pk,
        movieId: movie.id,
        title: movie.title,
        posterPath: movie.poster_path,
        watch: movieLog.watch,
        like: movieLog.like,
        watchlist: movieLog.watchlist,
        rating: movieLog.rating,
      }),
    });
  }, [movieLog]);

  // On load, check if the user has logged the current movie
  useEffect(() => {
    if (!user) return;
    const API_URL = "http://127.0.0.1:8000/api/get-movie/";
    const getMovie = async () => {
      let response = await fetch(`${API_URL}${movie.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokens.access}`,
        },
      });
      try {
        let data = await response.json();
        setMovieLog({
          ...movieLog,
          watch: data.watch,
          like: data.like,
          watchlist: data.watchlist,
          rating: data.rating,
        });
      } catch {}
      setLoading(false);
    };
    getMovie();
  }, []);

  return (
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
          <h2>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h2>
          <p>
            {movie.release_date} ·{" "}
            {movie.genres.map((genre) => genre.name).join(", ")} ·{" "}
            {calcTime(movie.runtime)}
          </p>
          <div className="rating-directors">
            <div className="rating">
              <div className="title">TMDB Rating</div>
              <div className="tmdb-rating">{movie.vote_average}</div>
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
                  <p className="director-name">{director.name}</p>
                </Link>
              ))}
            </div>
          </div>
          {user && !loading && (
            <div className="user-panel">
              <UserLog movieLog={movieLog} setMovieLog={setMovieLog} />
              <UserRating movieLog={movieLog} setMovieLog={setMovieLog} />
            </div>
          )}
          <div className="tagline">{movie.tagline.toUpperCase()}</div>
          <div className="title">Overview</div>
          <p className="movie-overview">{movie.overview}</p>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default MovieInfo;
