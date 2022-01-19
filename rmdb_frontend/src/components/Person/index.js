import React from "react";
// Components
import Bio from "../Bio";
import Credits from "../Credits";
import Spinner from "../Spinner";
// Hooks
import { usePersonFetch } from "../../hooks/usePersonFetch";
// Router
import { useParams } from "react-router";
// Styles
import { Wrapper, Content } from "./Person.styles";

const Person = () => {
  const { personId } = useParams();
  const [person, credits, loading] = usePersonFetch(personId);
  if (loading) {
    return <Spinner />;
  }

  return (
    <Wrapper>
      <Content>
        <div className="credits">
          <Credits person={person} credits={credits} />
        </div>
        <div className="bio">
          <Bio person={person} loading={loading} />
        </div>
      </Content>
    </Wrapper>
  );
};

export default Person;
