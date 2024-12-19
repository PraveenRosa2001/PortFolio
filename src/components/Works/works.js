import React from 'react';
import './works.css';

const technicalSkillsData = [
  { name: "JavaScript", icon: "path_to_html_icon", percentage: 90 },
  { name: "HTML", icon: "path_to_css_icon", percentage: 85 },
  { name: "CSS", icon: "path_to_js_icon", percentage: 80 },
  { name: "React.js", icon: "path_to_php_icon", percentage: 70 },
  { name: "Next.js", icon: "path_to_react_icon", percentage: 75 },
  { name: "MongoDB", icon: "path_to_react_icon", percentage: 75 },
  { name: "Firestore", icon: "path_to_react_icon", percentage: 75 },
  { name: "MySQL", icon: "path_to_react_icon", percentage: 75 },
];

const professionalSkillsData = [
  { name: "Creativity", percentage: 90 },
  { name: "Communication", percentage: 80 },
  { name: "Problem Solving", percentage: 75 },
  { name: "Team Work", percentage: 90 },
  { name: "Accept Challenges", percentage: 90 },
];

const Skill = ({ name, icon, percentage }) => {
  return (
    <div className="skill">
      <img src={icon} alt={`${name} Icon`} />
      <span>{name}</span>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};


const ProfessionalSkill = ({ name, percentage }) => {
  return (
    <div className="professional-skill">
      <div className="circle">
        <div className="inner-circle">
          <span>{percentage}%</span>
        </div>
        <svg>
          <circle cx="50" cy="50" r="45"></circle>
          <circle
            cx="50"
            cy="50"
            r="45"
            style={{
              strokeDasharray: "282.6",
              strokeDashoffset: `${282.6 - (percentage / 100) * 282.6}`,
            }}
          ></circle>
        </svg>
      </div>
      <p>{name}</p>
    </div>
  );
};

const Works = () => {
  return (
    <section id="works">
      <h2 className="workTitle" >My Skills</h2>
      <span className="workDesc">
        Dive into my arsenal of skills, crafted through passion and experience. From designing seamless user interfaces to building robust web and mobile solutions, my toolkit is a blend of artistry and technical prowess.
      </span>

      <div className="worksImgs">

      <div className="technical-skills">
          <h3 className="technical-skills-title">Technical Skills</h3> 
          {technicalSkillsData.map((skill) => (
            <Skill
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              percentage={skill.percentage}
            />
          ))}
        </div>
        
        <div className="professional-skills-section">
          <h3 className="skills-title">Professional Skills</h3> 
          <div className="professional-skills">
            {professionalSkillsData.map((skill) => (
              <ProfessionalSkill
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>

        
        
      </div>
    </section>
  );
};

export default Works;
