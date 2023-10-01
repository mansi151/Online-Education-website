import React from "react";

const OnlineCourses = (props) => {
  return (
    <>
      {/* <Heading subtitle='COURSES' title='Browse Our Online Courses' /> */}

      <div className="box">
        <div className="img">
          <img src={props.cover} />
          <img src={props.hoverCover} alt="" className="show" />
        </div>
        <h1>{props.courseName}</h1>
        <span>{props.course}</span>
      </div>
    </>
  );
};

export default OnlineCourses;
