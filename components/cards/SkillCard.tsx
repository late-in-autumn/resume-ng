import React from "react";
import { v4 as UUIDv4 } from "uuid";

function SkillCard(props) {
   const listItemStyle: React.CSSProperties = {
      width: "100%",
   };
   const skillItemStyle: React.CSSProperties = {
      display: "inline",
      paddingTop: "3px",
      paddingRight: "10px",
      paddingBottom: "3px",
      paddingLeft: "10px",
      marginTop: "0px",
      marginRight: "5px",
      marginBottom: "0px",
      marginLeft: "5px",
      backgroundColor: "#222222",
      borderRadius: "3px",
      color: "#ffffff",
      fontSize: "0.8em",
      fontWeight: "lighter",
   };
   const skillTypeStyle: React.CSSProperties = {
      fontSize: "1.2em",
      fontWeight: "bolder",
   };

   const skillItems = props.skill.items.map((name) => (
      <span key={UUIDv4()}>
         <div style={skillItemStyle}>{name}</div>
&nbsp;
      </span>
   ));

   return (

      <li style={listItemStyle}>
         <span style={skillTypeStyle}>{props.skill.type}</span>
         <span>
            :&nbsp;
               {skillItems}
         </span>
      </li>
   );
}

export default SkillCard;
