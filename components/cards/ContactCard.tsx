import React from "react";
import Obfuscate from "react-obfuscate";
import { v4 as UUIDv4 } from "uuid";

function ContactCard(props) {
   const linkStyle: React.CSSProperties = {
      textDecoration: "none",
      color: "#3173bb",
      margin: "0px",
      padding: "0px",
   };

   if (props.contact.isEmail) {
      return (
         <Obfuscate
            style={linkStyle}
            email={props.contact.value}
            subject="Contact from Online CV"
            linkText={UUIDv4()}
         >
            {props.contact.tag}
         </Obfuscate>
      );
   }

   return (
      <Obfuscate
         style={linkStyle}
         href={props.contact.value}
         rel="nofollow"
         target="_blank"
         linkText={UUIDv4()}
      >
         {props.contact.tag}
      </Obfuscate>
   );
}

export default ContactCard;
