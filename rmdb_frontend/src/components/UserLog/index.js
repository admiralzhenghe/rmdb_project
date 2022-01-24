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
    setUpdating(true);
    let action = e.target.closest("section");
    let options = {
      watch: [watch, setWatch],
      like: [like, setLike],
      watchlist: [watchlist, setWatchlist],
    };
    if (action?.className) {
      let [option, setOption] = options[action.className];
      setOption(!option);
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
      <section className="watch">
        <div>{watch ? "Watched" : "Watch"}</div>
        <img src={watchIcon} alt="watch" />
      </section>
      <section className="like">
        <div>{like ? "Liked" : "Like"}</div>
        <img src={likeIcon} alt="like" />
      </section>
      <section className="watchlist">
        <div>Watchlist</div>
        <img src={watchlistIcon} alt="watchlist" />
      </section>
    </Wrapper>
  );
}
