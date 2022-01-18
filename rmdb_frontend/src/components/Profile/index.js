import React from "react";
// Styled
import { Wrapper } from "./Profile.styles";

export default function Profile({ username }) {
  return (
    <Wrapper>
      <div>{username.toUpperCase()}</div>
    </Wrapper>
  );
}
