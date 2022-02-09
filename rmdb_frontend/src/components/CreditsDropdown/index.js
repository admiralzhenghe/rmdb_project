import React from "react";
// Styles
import { Select } from "./CreditsDropdown.style";

const CreditsDropdown = ({ credits, jobs, handleSelect }) => {
  return (
    <Select onChange={(e) => handleSelect(e.target.value)}>
      {jobs.map((job) => (
        <option key={job} value={job}>
          {job.toUpperCase()} ({credits[job].length})
        </option>
      ))}
    </Select>
  );
};

export default CreditsDropdown;
