import styled from "styled-components";

export const Wrapper = styled.button`
  background: var(--darkGrey);
  border: none;
  border-radius: 30px;
  color: var(--white);
  cursor: pointer;
  display: block;
  font-size: var(--fontBig);
  height: 40px;
  width: 25% auto;
  min-width: 200px;
  margin: 20px auto;

  :hover {
    opacity: 0.8;
  }
`;
