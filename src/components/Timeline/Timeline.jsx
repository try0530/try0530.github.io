import React from "react";
import "./timeline.css";
import TimelineItem from "../TimelineItem/TimelineItem";

const Timeline = ({ timelineData }) => {
  return (
    <>
      {timelineData.length > 0 && (
        <div className="timeline-container">
          {timelineData.map((data) => (
            <TimelineItem data={data} />
          ))}
        </div>
      )}
    </>
  );
};

export default Timeline;
