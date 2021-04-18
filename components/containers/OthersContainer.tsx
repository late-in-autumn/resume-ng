import React from "react";
import { v4 as UUIDv4 } from "uuid";
import OtherCard from "../cards/OtherCard";
import others from "../../data/others.json";

function ProjectsContainer() {
   const listStyle: React.CSSProperties = {
      listStyleType: "circle",
   };

   const othersList = others.map((entry) => <OtherCard entry={entry} key={UUIDv4()} />);

   return (<ul style={listStyle}>{othersList}</ul>);
}

export default ProjectsContainer;
