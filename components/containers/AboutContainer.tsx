import React from "react";
import about from "../../data/about.json";

function AboutContainer() {
   return (<p>{about.text}</p>);
}

export default AboutContainer;
