import React, { useEffect, useState } from "react";
// Component
import ThumbnailPanel from "../ThumbnailPanel";
import Spinner from "../Spinner";
// Config
import { IMAGE_BASE_URL, PROFILE_SIZE } from "../../config";
// Context
import { useAuthContext } from "../../context/AuthContext";
// Router
import { Link } from "react-router-dom";
// Styles
import { Grid } from "../Films/Films.styles";
import { Wrapper } from "./Likes.styles";

export default function Likes() {
  const { tokens } = useAuthContext();
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(true);

  // Query for all films liked by the user
  useEffect(() => {
    const API_URL = "http://127.0.0.1:8000/api/get-movies/";
    const getMovies = async () => {
      let response = await fetch(`${API_URL}likes`, {
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
      <section className="description">LIKES</section>
      <Grid>
        {state.map((movie) => (
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
        ))}
      </Grid>
    </Wrapper>
  );
}
