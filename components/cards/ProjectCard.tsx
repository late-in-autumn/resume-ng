import React from "react";

function ProjectCard(props) {
   const listItemStyle: React.CSSProperties = {
      width: "100%",
   };
   const nameStyle: React.CSSProperties = {
      fontSize: "1.2em",
      fontWeight: "bolder",
   };
   const linkStyle: React.CSSProperties = {
      textDecoration: "none",
      color: "#3173bb",
   };
   const durationStyle: React.CSSProperties = {
      float: "right",
   };
   const descriptionStyle: React.CSSProperties = {
      listStyleType: "disc",
      color: "#444444",
      paddingTop: "4px",
      paddingRight: "0px",
      paddingBottom: "4px",
      fontWeight: "lighter",
      fontSize: "0.9em",
   };

   if (props.project.url) {
      return (
         <li style={listItemStyle}>
            <span>
               <span style={nameStyle}>
                  <a
                     target="blank"
                     rel="nofollow"
                     href={props.project.url}
                     style={linkStyle}
                  >
                     {props.project.title}
                  </a>
               </span>
               <span style={durationStyle}>{props.project.duration}</span>
            </span>
            <br />
            <span>
               <span style={descriptionStyle}>{props.project.description}</span>
            </span>
         </li>
      );
   }

   return (
      <li style={listItemStyle}>
         <span>
            <span style={nameStyle}>{props.project.title}</span>
            <span style={durationStyle}>{props.project.duration}</span>
         </span>
         <br />
         <span>
            <span style={descriptionStyle}>{props.project.description}</span>
         </span>
      </li>
   );
}

export default ProjectCard;
