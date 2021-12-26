import React from "react";
// Component
import ReadMore from "../ReadMore";
// Config
import { IMAGE_BASE_URL, PROFILE_SIZE } from "../../config";
// Styled
import { Wrapper, Image, NoImage } from "./Bio.styles";

export const Bio = ({ person, loading }) => {
  if (!loading) {
    return (
      <Wrapper>
        <div className="container">
          {person.profile_path ? (
            <Image
              src={`${IMAGE_BASE_URL}${PROFILE_SIZE}${person.profile_path}`}
              alt="profile-thumb"
            />
          ) : (
            <NoImage>
              <p>No Image</p>
            </NoImage>
          )}
          <ReadMore biography={person.biography} />
        </div>
      </Wrapper>
    );
  }
};

export default Bio;
