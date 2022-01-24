import React, { useEffect, useRef, useState } from "react";
// Context
import { useAuthContext } from "../../context/AuthContext";
// Images
import popcorn from "../../images/popcorn.svg";
// Styles
import { Wrapper } from "./UserRating.styles";

export default function UserRating({ movie, movieLog }) {
  const { tokens, user } = useAuthContext();
  const [rating, setRating] = useState(movieLog.rating);

  const popcornRatingEl = useRef(null);
  const previousRating = useRef(rating);

  const handleClick = (e) => {
    let rating = e.currentTarget.closest("label").querySelector("input").value;
    if (rating === previousRating.current) {
      setRating(0);
      previousRating.current = null;
    } else {
      previousRating.current = rating;
      setRating(Number(rating));
    }
  };

  // Update the number of visible popcorns based on the user's selection
  useEffect(() => {
    for (let i = 0; i < 6; i++) {
      popcornRatingEl.current.childNodes[i].children[1].classList.add(
        "unselected"
      );
    }
    for (let i = 0; i < rating; i++) {
      popcornRatingEl.current.childNodes[i].children[1].classList.remove(
        "unselected"
      );
    }
  }, [rating]);

  // Update the popcorn ratings in the database
  useEffect(() => {
    if (rating === previousRating.current) return;

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
        rating,
      }),
    });
  }, [rating]);

  return (
    <Wrapper>
      <div className="container">
        <div className="title">Rate</div>
        <div className="popcorn-rating" ref={popcornRatingEl}>
          {[...Array(6)].map((star, idx) => {
            return (
              <label key={idx}>
                <input type="hidden" name="rating" value={idx + 1} />
                <img
                  className="unselected"
                  src={popcorn}
                  alt="popcorn"
                  onClick={handleClick}
                />
              </label>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}
