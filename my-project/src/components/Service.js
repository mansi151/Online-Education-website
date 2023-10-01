import React from "react";
import HomeCourse from "./HomeCourse";
import HomeCourseData from "./HomeCourseData";
import bg from "../bg.jpg";
import { Link } from "react-router-dom";
import OnlineCourses from "./OnlineCourse";
import online from "./OtherCourse";
import Footer from "../footer";
const Service = () => {
  return (
    <div>
      <div className="head-text">
        <div className="head-image">
          <img src={bg} alt="sorry" className="background" />
        </div>
        <div className="text-on-image">
          <div>
            <h3 style={{ fontWeight: 700, letterSpacing: "2px" }}>
              COURSE DETAILS
            </h3>
          </div>
          <div>
            <Link className="home-link" to="/">
              Home
            </Link>{" "}
            / Course Details
          </div>
        </div>
      </div>
      <div className="my-5">
        <div className="header">
          <div className="text">Our Courses</div>
          <div className="underline"></div>
        </div>
      </div>

      <div className="card-container">
        <div className="cards">
          {HomeCourseData.map((val, ind) => {
            return (
              <div className="card2">
                <HomeCourse
                  key={ind}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  price={val.price}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="my-5">
        <div className="header">
          <div className="text">Online Cources</div>
          <div className="underline"></div>
        </div>
      </div>
      <section className="online">
        <div className="cards">
          {online.map((val, ind) => {
            return (
              <div className="card2">
                <OnlineCourses
                  key={ind}
                  cover={val.cover}
                  hoverCover={val.hoverCover}
                  courseName={val.courseName}
                  course={val.course}
                />
              </div>
            );
          })}
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Service;
