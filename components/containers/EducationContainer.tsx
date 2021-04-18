import React from "react";
import { v4 as UUIDv4 } from "uuid";
import EducationCard from "../cards/EducationCard";
import schools from "../../data/schools.json";

function EducationContainer() {
   const listStyle: React.CSSProperties = {
      listStyleType: "circle",
   };

   const educationsList = schools.map((school) => <EducationCard school={school} key={UUIDv4()} />);

   return (<ul style={listStyle}>{educationsList}</ul>);
}

export default EducationContainer;
