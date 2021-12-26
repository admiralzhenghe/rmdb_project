import React from "react";
// Component
import Bio from "../Bio";
import Credits from "../Credits";
import { Wrapper, Content } from "./Person.styles";
// Hook
import { usePersonFetch } from "../../hooks/usePersonFetch";
// Router
import { useParams } from "react-router";
import Spinner from "../Spinner";

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
