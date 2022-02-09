import { useState } from "react";
// Components
import CreditsGrid from "../CreditsGrid";
import CreditsDropdown from "../CreditsDropdown";
// Styles
import { Content, Wrapper } from "./Credits.style";

const Credits = ({ person, credits }) => {
  let keys = Object.keys(credits);
  // Only show select options for previously held jobs
  let jobs = keys.filter((key) => credits[key].length > 0);
  // Sort jobs by the most number of credits
  jobs = jobs.sort((a, b) => credits[b].length - credits[a].length);
  // Set the default job credits during the initial render
  const [showing, setShowing] = useState(jobs[0]);

  const handleSelect = (job) => {
    setShowing(job);
  };

  return (
    <Wrapper>
      <Content>
        <div className="job-type">
          <div>
            FILMS{" "}
            {showing === "actor"
              ? "STARRING"
              : showing === "director"
              ? "DIRECTED BY"
              : showing === "producer"
              ? "PRODUCED BY"
              : "WRITTEN BY"}
          </div>
          <div className="name">{person.name}</div>
        </div>
        <CreditsDropdown
          credits={credits}
          jobs={jobs}
          handleSelect={handleSelect}
        />
        <CreditsGrid showing={credits[showing]} />
      </Content>
    </Wrapper>
  );
};

export default Credits;
