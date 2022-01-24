import React from "react";
// Images
import like from "../../images/like.svg";
import watch from "../../images/watch.svg";
import watchlist from "../../images/watchlist.svg";
// Styles
import { Wrapper } from "./UserTracking.styles";

export default function UserTracking({ movie }) {
  return (
    <Wrapper>
      <div className="watch">
        <div className="title">Watch</div>
        <img src={watch} alt="watch" />
      </div>
      <div className="like">
        <div className="title">Like</div>
        <img src={like} alt="like" />
      </div>
      <div className="watchlist">
        <div className="title">Watchlist</div>
        <img src={watchlist} alt="watchlist" />
      </div>
    </Wrapper>
  );
}
