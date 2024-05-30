import React from "react";
import "./intro.css";
import bg from "../../assets/person.png";
import btnImg from "../../assets/resume.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">YA-HSUAN (Terry)</span>
          <br /> Website Designer
        </span>
        <p className="introPara">
          I am a skilled web designer with experience in creating <br />{" "}
          visually appealing and user friendly websites
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire ME" className="btnImg" />
            Hire Me
          </button>
        </Link>
        {/* <span>&#9866;</span>
        personal information
        <div className="intro-info">
          <a href="mailto:yy9451@rit.edu" target="_blank">
            <span class="material-symbols-outlined">mail</span>
            <span>yy9451@rit.edu</span>
          </a>
          <a
            href="https://www.linkedin.com/in/yahsuan-yang-terry"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin i-decorate-whit"></i>
            <p>/yahsuan-yang-terry</p>
          </a>
        </div> */}
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
};

export default Intro;
