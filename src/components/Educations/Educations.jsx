import React from "react";
import "./educations.css";
import educations from "../../assets/educations.json";
import TimelineItem from "../TimelineItem/TimelineItem";

const Educations = () => {
  return (
    <section id="educations">
      <h2>Educations</h2>
      <div className="timeline-container">
        {educations.map((data, id) => (
          <TimelineItem data={data} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Educations;
