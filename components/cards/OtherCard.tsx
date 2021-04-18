import React from "react";

function OtherCard(props) {
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
   const descriptionStyle: React.CSSProperties = {
      fontWeight: "lighter",
   };
   const durationStyle: React.CSSProperties = {
      float: "right",
   };

   if (props.entry.url) {
      return (
         <li style={listItemStyle}>
            <span style={nameStyle}>
               <a target="_blank" rel="nofollow noreferrer" href={props.entry.url} style={linkStyle}>
                  {props.entry.title}
               </a>
            </span>
            <span style={durationStyle}>{props.entry.duration}</span>
            <br />
            <span style={descriptionStyle}>{props.entry.description}</span>
         </li>
      );
   }

   return (
      <li style={listItemStyle}>
         <span style={nameStyle}>{props.entry.title}</span>
         <span style={durationStyle}>{props.entry.duration}</span>
         <br />
         <span style={descriptionStyle}>{props.entry.description}</span>
      </li>
   );
}

export default OtherCard;
