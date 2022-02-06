import React, { useEffect, useState } from "react";
// Component
import ThumbnailPanel from "../ThumbnailPanel";
import Spinner from "../Spinner";
// Config
import { IMAGE_BASE_URL, PROFILE_SIZE } from "../../config";
// Context
import { useAuthContext } from "../../context/AuthContext";
// Images
import popcorn from "../../images/popcorn.svg";
// Router
import { Link } from "react-router-dom";
// Styles
import { Wrapper, Grid } from "./Films.styles";

export default function Films() {
  const { tokens } = useAuthContext();
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(true);

  // Query for all films watched by the user
  useEffect(() => {
    const API_URL = "http://127.0.0.1:8000/api/get-movies/";
    const getMovies = async () => {
      let response = await fetch(`${API_URL}watch`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokens.access}`,
        },
      });
      let data = await response.json();
      setState(data);
      setLoading(false);
    };
    getMovies();
  }, []);

  const handleMouseEnter = (e) => {
    let thumbPanel = e.currentTarget.querySelector(".thumb-panel");
    thumbPanel.style.display = "block";
  };

  const handleMouseLeave = (e) => {
    let thumbPanel = e.currentTarget.querySelector(".thumb-panel");
    thumbPanel.style.display = "none";
  };

  if (loading) return <Spinner />;

  return (
    <Wrapper>
      <div className="container">
        <section className="description">WATCHED</section>
        <Grid>
          {state.map((movie) => (
            <div key={movie.movieId}>
              <div
                className="thumb-container"
                key={movie.movieId}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link to={`/${movie.movieId}`}>
                  <img
                    className="thumb"
                    src={IMAGE_BASE_URL + PROFILE_SIZE + movie.posterPath}
                    alt=""
                    title={movie.title}
                  />
                </Link>
                <ThumbnailPanel className="thumb-panel" movie={movie} />
              </div>
              <div className="popcorn-container">
                {[...Array(movie.rating)].map((a, idx) => (
                  <img
                    className="popcorn"
                    src={popcorn}
                    alt=""
                    key={`${movie.movieId}-${idx}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </Grid>
      </div>
    </Wrapper>
  );
}
