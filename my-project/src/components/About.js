import React from "react";
import bg from "../bg.jpg";
import { Link } from "react-router-dom";
import TeamData from "./TeamData";
import TeamCard from "./team";
import Footer from "../footer";
const About = () => {
  return (
    <>
      <div className="head-text">
        <div className="head-image">
          <img src={bg} alt="sorry" className="background" />
        </div>
        <div className="text-on-image">
          <div>
            <h3 style={{ fontWeight: 700, letterSpacing: "2px" }}>ABOUT US</h3>
          </div>
          <div>
            <Link className="home-link" to="/">
              Home
            </Link>{" "}
            / About Us
          </div>
        </div>
      </div>

      <div className="my-5">
        <div className="header">
          <div className="text">Our Teachers</div>
          <div className="underline"></div>
        </div>
      </div>
      <div className="card-container">
        <div className="cards">
          {TeamData.map((val, ind) => {
            return (
              <div className="card2">
                <div className="items shadow">
                  <TeamCard
                    key={ind}
                    img1={val.img1}
                    img2={val.img2}
                    img3={val.img3}
                    img4={val.img4}
                    cover={val.cover}
                    name={val.name}
                    work={val.work}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
export default About;
