import React from "react";
// Styled
import { Wrapper } from "./ProfileDropdown.styles";

export default function ProfileDropdown({ username }) {
  return (
    <Wrapper>
      <div>{username.toUpperCase()}</div>
    </Wrapper>
  );
}
