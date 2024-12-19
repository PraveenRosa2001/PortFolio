import React from "react";
import "./skills.css";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc">
        I am a skilled and passionate web designer with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML,CSS and JavaScript as well as design software such as Adobe
        Photoshop and Illustrator
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>
              <a
                href="https://www.figma.com/design/GNYihY13XWHqcfzYyDwMKR/Projects?node-id=0-1&p=f&t=sU5EruHhATjrVMmy-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website Design
              </a>
            </h2>
            <p>
              Crafted with precision and creativity, these website designs come
              to life through Figma.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>
              Innovative and user-centered, these app designs are brought to
              life with a seamless blend of functionality and style.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
