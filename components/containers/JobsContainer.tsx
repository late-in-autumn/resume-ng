import React from "react";
import { v4 as UUIDv4 } from "uuid";
import JobCard from "../cards/JobCard";
import jobs from "../../data/jobs.json";

function EducationContainer() {
   const listStyle: React.CSSProperties = {
      listStyleType: "circle",
   };

   const jobsList = jobs.map((job) => <JobCard job={job} key={UUIDv4()} />);

   return (<ul style={listStyle}>{jobsList}</ul>);
}

export default EducationContainer;
