import React, { useEffect, useState } from "react";
// Context
import { useAuthContext } from "../../context/AuthContext";
// Images
import likeIcon from "../../images/like.svg";
import watchIcon from "../../images/watch.svg";
import watchlistIcon from "../../images/watchlist.svg";
// Styles
import { Wrapper } from "./ThumbnailPanel.styles";

export default function ThumbnailPanel({ movie, className }) {
  const { tokens, user } = useAuthContext();
  const [watch, setWatch] = useState(movie.watch);
  const [like, setLike] = useState(movie.like);
  const [watchlist, setWatchlist] = useState(movie.watchlist);
  const [updating, setUpdating] = useState(false);

  // Update the movie log in the database
  useEffect(() => {
    // If the user does not update the movie's log, do not trigger an API POST
    if (!updating) return;
    const API_URL = "http://127.0.0.1:8000/api/update-movie/";
    fetch(`${API_URL}${movie.movieId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokens.access}`,
      },
      body: JSON.stringify({
        user: user.pk,
        movieId: movie.movieId,
        title: movie.title,
        posterPath: movie.posterPath,
        watch,
        like,
        watchlist,
        rating: movie.rating,
      }),
    });
    setUpdating(false);
  }, [watch, like, watchlist]);

  const handleClick = (e) => {
    let button = e.target.closest("img");
    if (button) {
      switch (button.alt) {
        case "watch":
          watch
            ? button.removeAttribute("id")
            : button.setAttribute("id", "selected");
          // If Watch is being set to True and Watchlist is already True, then set Watchlist to false
          if (!watch === true && watchlist) setWatchlist(false);
          setWatch(!watch);
          setUpdating(true);
          break;
        case "like":
          like
            ? button.removeAttribute("id")
            : button.setAttribute("id", "selected");
          setLike(!like);
          setUpdating(true);
          break;
        case "watchlist":
          watchlist
            ? button.removeAttribute("id")
            : button.setAttribute("id", "selected");
          setWatchlist(!watchlist);
          setUpdating(true);
          break;
        default:
          return;
      }
    }
  };

  return (
    <Wrapper className={className}>
      <div className="icons-container" onClick={handleClick}>
        <img
          className="icons"
          id={watch ? "selected" : ""}
          src={watchIcon}
          alt="watch"
        />
        <img
          className="icons"
          id={like ? "like-selected" : ""}
          src={likeIcon}
          alt="like"
        />
        <img
          className="icons"
          id={watchlist ? "selected" : ""}
          src={watchlistIcon}
          alt="watchlist"
        />
      </div>
    </Wrapper>
  );
}
