import React from "react";
import { v4 as UUIDv4 } from "uuid";

function JobCard(props) {
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
   const positionStyle: React.CSSProperties = {
      fontStyle: "italic",
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

   const descriptionsList = props.job.descriptions.map((item) => <li key={UUIDv4()}>{item}</li>);

   return (
      <li style={listItemStyle}>
         <span>
            <span style={nameStyle}>
               <a
                  target="blank"
                  rel="nofollow"
                  href={props.job.employer.url}
                  style={linkStyle}
               >
                  {props.job.employer.name}
               </a>
            </span>
              ,&nbsp;
               <span>{props.job.employer.location}</span>
         </span>
         <br />
         <span>
            <span style={positionStyle}>{props.job.position}</span>
            <span style={durationStyle}>{props.job.duration}</span>
         </span>
         <br />
         <ul style={descriptionStyle}>{descriptionsList}</ul>
      </li>
   );
}

export default JobCard;
