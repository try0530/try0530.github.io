import React from "react";
import "./projectitem.css";
import ecommerce from "../../assets/ecommerce.jpg";

const ProjectItem = ({ data }) => {
  return (
    <div className="project-item">
      {/* <img src={data.img} alt="" />  沒有辦法抓到圖片，不知道為什麼*/}
      <img src={ecommerce} alt="" />
      <div className="project-details">
        <h4 className="project-name">{data.name}</h4>
        <p className="project-desc">{data.desc}</p>
        <div className="project-skills">
          <ul>
            {data.skills.map((skill, id) => (
              <li key={id}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="project-links">
          <a href={data.github} target="_blank" rel="noreferrer">
            Github
          </a>
          <a href={data.live} target="_blank" rel="noreferrer">
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
