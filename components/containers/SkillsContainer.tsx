import React from "react";
import { v4 as UUIDv4 } from "uuid";
import SkillCard from "../cards/SkillCard";
import skills from "../../data/skills.json";

function SkillsContainer() {
   const listStyle: React.CSSProperties = {
      listStyleType: "circle",
   };

   const skillsList = skills.map((skill) => <SkillCard skill={skill} key={UUIDv4()} />);

   return (<ul style={listStyle}>{skillsList}</ul>);
}

export default SkillsContainer;
