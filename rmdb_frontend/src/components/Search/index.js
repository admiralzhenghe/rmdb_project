import React from "react";
// Hook
import { useState, useEffect, useRef } from "react";
// Image
import searchIcon from "../../images/search-icon.svg";
// Styles
import { Wrapper, Content } from "./Search.styles";

const Search = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  // Prevent useEffect from triggering useHomeFetch when component mounts
  const initial = useRef(true);

  useEffect(() => {
    // Skip initial render
    if (initial.current) {
      initial.current = false;
      return;
    }

    // Delay search
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
          placeholder="Search Movie"
        />
      </Content>
    </Wrapper>
  );
};

export default Search;
