import styled from "styled-components";

export const Wrapper = styled.div`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  position: relative;
  width: 150px;

  &:hover {
    background: grey;
  }

  .username {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;

    img {
      filter: invert(1);
      width: 20px;
    }
  }

  .dropdown-links-container {
    background: grey;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    position: absolute;
    top: 100%;
    right: 0px;
    z-index: 2;

    .dropdown-links {
      display: flex;
      flex-direction: column;
      list-style: none;
      margin: 0;
      padding: 0;
      width: 150px;
    }

    li,
    .link {
      color: white;
      cursor: pointer;
      padding: 0.5rem 0;
      padding-left: 1rem;

      &:hover {
        background: var(--medGrey);
      }
    }

    li:last-child {
      &:hover {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
  }
`;
