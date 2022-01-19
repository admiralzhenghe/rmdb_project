import React from "react";
// Components
import { Wrapper } from "./ReadMore.styles";
// Hooks
import { useState } from "react";

const ReadMore = ({ biography }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleIsReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <Wrapper>
      <div>
        {isReadMore ? biography.slice(0, 240) + "... " : biography}
        <span onClick={toggleIsReadMore}>{isReadMore ? "more" : " x"}</span>
      </div>
    </Wrapper>
  );
};

export default ReadMore;
