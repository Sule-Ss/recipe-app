import React from "react";
import aboutImage from "../assets/about.jpg"

function About() {
  return (
    <div className="aboutContainer">
      <img src={aboutImage} alt="" className="aboutImage"/>

      <div className="aboutParag">
      <h1>
        About Software Developer <span>Şule S.</span>
      </h1>
        <h2>Hi, I'am Şule ! </h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          I know JS, ReactJS, Django, NodeJS, MongoDB, SQL, Python, AWS Services...
        </h4>
      </div>
    </div>
  );
}

export default About;
