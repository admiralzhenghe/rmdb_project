import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 20px;
`;

export const Content = styled.div`
  background: var(--medGrey);
  border-radius: 50px;
  color: var(--white);
  margin: 0 auto;
  width: 100%;
  max-width: var(--maxWidth);
  position: relative;
  height: 55px;

  img {
    position: absolute;
    top: 14px;
    left: 15px;
    width: 30px;
  }

  input {
    background: transparent;
    border: none;
    border-radius: 15px;
    color: var(--white);
    font-size: var(--fontBig);
    height: 40px;
    width: 97.5%;
    margin: 8px 0;
    outline: none;
    padding: 0 0 0 60px;
    position: absolute;
    left: 0;
  }
`;
