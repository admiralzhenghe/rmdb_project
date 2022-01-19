import React from "react";
// Prop Types
import PropTypes from "prop-types";
// Router
import { Link } from "react-router-dom";
// Styles
import { Wrapper, Content } from "./BreadCrumb.styles";

const BreadCrumb = ({ movieTitle }) => (
  <Wrapper>
    <Content>
      <Link to="/" style={{ textDecoration: "none" }}>
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{movieTitle}</span>
    </Content>
  </Wrapper>
);

BreadCrumb.propTypes = {
  movieTitle: PropTypes.string,
};

export default BreadCrumb;
