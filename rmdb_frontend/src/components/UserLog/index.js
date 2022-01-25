import React, { useEffect, useRef, useState } from "react";
// Images
import likeIcon from "../../images/like.svg";
import watchIcon from "../../images/watch.svg";
import watchlistIcon from "../../images/watchlist.svg";
// Styles
import { Wrapper } from "./UserLog.styles";

export default function UserLog({ movieLog, setMovieLog, setUpdating }) {
  const [watch, setWatch] = useState(movieLog.watch);
  const [like, setLike] = useState(movieLog.like);
  const [watchlist, setWatchlist] = useState(movieLog.watchlist);

  const actionEl = useRef(null);

  const handleClick = (e) => {
    let action = e.target.closest("section");
    if (action?.className) {
      setUpdating(true);
      let options = {
        watch: [watch, setWatch],
        like: [like, setLike],
        watchlist: [watchlist, setWatchlist],
      };
      let [option, setOption] = options[action.className];
      // If Watch is set to true and Watchlist is already true, then set Watchlist to false
      if (action.className === "watch") {
        if (!watch === true && watchlist === true) setWatchlist(false);
      }
      setOption(!option);
    }
  };

  const handleMouseEnter = (e) => {
    let options = { watch, like, watchlist };
    let option = e.currentTarget.className;
    // If the current option is true, then change the target's innerText to "Remove" on mouse hover
    if (options[option]) {
      e.currentTarget.querySelector("div").innerText = "Remove";
    }
  };

  const handleMouseLeave = (e) => {
    let option = e.currentTarget.className;
    switch (option) {
      case "watch":
        e.currentTarget.querySelector("div").innerText = watch
          ? "Watched"
          : "Watch";
        break;
      case "like":
        e.currentTarget.querySelector("div").innerText = like
          ? "Liked"
          : "Like";
        break;
      case "watchlist":
        e.currentTarget.querySelector("div").innerText = "Watchlist";
        break;
      default:
        return;
    }
  };

  // If the movie is logged or updated, re-render its movie log
  useEffect(() => {
    let options = [watch, like, watchlist];
    actionEl.current.querySelectorAll("img").forEach((img, idx) => {
      if (options[idx]) {
        if (idx === 1) img.classList.add("like-selected");
        else img.classList.add("selected");
      } else {
        // Remove all classes
        img.classList.remove(...img.classList);
      }
    });
    setMovieLog({ ...movieLog, watch, like, watchlist });
  }, [watch, like, watchlist]);

  return (
    <Wrapper ref={actionEl} onClick={handleClick}>
      <section
        className="watch"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>{watch ? "Watched" : "Watch"}</div>
        <img src={watchIcon} alt="watch" />
      </section>
      <section
        className="like"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>{like ? "Liked" : "Like"}</div>
        <img src={likeIcon} alt="like" />
      </section>
      <section
        className="watchlist"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>Watchlist</div>
        <img src={watchlistIcon} alt="watchlist" />
      </section>
    </Wrapper>
  );
}
