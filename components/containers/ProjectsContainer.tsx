import React from "react";
import { v4 as UUIDv4 } from "uuid";
import ProjectCard from "../cards/ProjectCard";
import projects from "../../data/projects.json";

function ProjectsContainer() {
   const listStyle: React.CSSProperties = {
      listStyleType: "circle",
   };

   const projectsList = projects.map((project) => <ProjectCard project={project} key={UUIDv4()} />);

   return (<ul style={listStyle}>{projectsList}</ul>);
}

export default ProjectsContainer;
