import React, { useEffect, useRef, useState } from "react";
// Images
import popcorn from "../../images/popcorn.svg";
// Styles
import { Wrapper } from "./UserRating.styles";

export default function UserRating({ movieLog, setMovieLog, setUpdating }) {
  const [previewPopcorn, setPreviewPopcorn] = useState(null);
  const [previewing, setPreviewing] = useState(false);

  const popcornRatingEl = useRef(null);
  const previousRating = useRef(movieLog.rating);

  const handleClick = (e) => {
    setUpdating(true);
    let rating = Number(
      e.currentTarget.closest("label").querySelector("input").value
    );
    // If the user clicks on the same rating twice, reset the rating to zero
    if (rating === previousRating.current) {
      setMovieLog({ ...movieLog, rating: 0 });
      previousRating.current = 0;
    } else {
      previousRating.current = rating;
      setMovieLog({ ...movieLog, rating });
    }
  };

  const handleMouseEnter = (e) => {
    setPreviewing(true);
    let previewRating = Number(e.currentTarget.previousElementSibling.value);
    setPreviewPopcorn(previewRating);
  };

  const handleMouseLeave = (e) => {
    // Reset the visible popcorns back to the logged amount or none
    setPreviewing(false);
  };

  // Update the number of visible popcorns based on where the user's mouse hovers
  useEffect(() => {
    if (previewing === true) {
      // Reset the ratings
      popcornRatingEl.current.childNodes.forEach((child) => {
        child.querySelector("img").classList.add("unselected");
      });
      for (let i = 0; i < previewPopcorn; i++) {
        popcornRatingEl.current.childNodes[i].children[1].classList.remove(
          "unselected"
        );
      }
    }
  }, [previewing, previewPopcorn]);

  // Update the number of visible popcorns based on the user's rating
  useEffect(() => {
    if (previewing === false) {
      // Reset the ratings
      popcornRatingEl.current.childNodes.forEach((child) => {
        child.querySelector("img").classList.add("unselected");
      });
      for (let i = 0; i < movieLog.rating; i++) {
        popcornRatingEl.current.childNodes[i].children[1].classList.remove(
          "unselected"
        );
      }
    }
  }, [movieLog.rating, previewing]);

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
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </label>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}
