import React from "react";
import "./intro.css";
import bg from "../../assets/person.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <div className="introdetail">
          <span className="hello">Hello, I'm</span>
          <h1 className="introName">YA-HSUAN (Terry) YANG</h1>
          <h4>Front-End developer</h4>
          <h4>
            Human Computer Interaction, MS | Rochester Institute of Technology
          </h4>
          <p>&#9866;</p>
          {/* personal information */}
          <div className="header-info-detail">
            <a href="mailto:yy9451@rit.edu" target="_blank" rel="noreferrer">
              <i className="fa-regular fa-envelope i-decorate-white"></i>
              <span>yy9451@rit.edu</span>
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/yahsuan-yang-terry/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin i-decorate-white"></i>
              <span>/yahsuan-yang-terry</span>
            </a>
          </div>
        </div>
      </div>
      <div className="intro-img">
        <img src={bg} alt="" className="bg" />
      </div>
    </section>
  );
};

export default Intro;
