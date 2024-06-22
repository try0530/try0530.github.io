import React from "react";
import "./projects.css";
import ProjectItem from "../ProjectItem/ProjectItem";

import projects from "../../assets/projects.json";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projectsTitle">Projects</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect. I am excited to bring my skills and
        experience to help businesses.
      </span>
      {projects.length > 0 && (
        <div className="project-container">
          {projects.map((data, id) => (
            <ProjectItem data={data} key={id} />
          ))}
        </div>
      )}
      {/* <div className="worksImgs">
        <img src={Portfolio1} alt="" className="worksImg" />
        <img src={Portfolio2} alt="" className="worksImg" />
        <img src={Portfolio3} alt="" className="worksImg" />
        <img src={Portfolio4} alt="" className="worksImg" />
        <img src={Portfolio5} alt="" className="worksImg" />
        <img src={Portfolio6} alt="" className="worksImg" />
      </div> */}
    </section>
  );
};

export default Projects;
