import React from "react";

function EducationCard(props) {
   const listItemStyle: React.CSSProperties = {
      width: "100%",
   };
   const nameStyle: React.CSSProperties = {
      fontSize: "1.2em",
      fontWeight: "bolder",
   };
   const durationStyle: React.CSSProperties = {
      float: "right",
   };

   return (
      <li style={listItemStyle}>
         <span>
            <span style={nameStyle}>{props.school.name}</span>
              ,&nbsp;
               <span>{props.school.location}</span>
         </span>
         <span style={durationStyle}>{props.school.duration}</span>
         <br />
         <span>{props.school.degree}</span>
      </li>
   );
}

export default EducationCard;
