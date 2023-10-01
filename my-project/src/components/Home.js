import React, { useState } from "react";
import { Link } from "react-router-dom";
import pic2 from "../bg1.png";
import HomeCard from "./HomeCard";
import HomeCardData from "./HomeCardData";
import pic3 from "../about-1.jpg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import HomeCourseData from "./HomeCourseData";
import Footer from "../footer";
import HomeCourse from "./HomeCourse";
const Home = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <div className="head-text">
        <div className="head-image">
          <div>
            <img src={pic2} className="background2" />
          </div>
          <div className="text-on-img  animated">
            <h1 className="brand-name">MR Learning</h1>
            <div>
              <h4>
                Unlimited access to 700+ world-class courses, hands-on projects,
                and job-ready certificate programs - all included in your
                subscription
              </h4>
            </div>

            <div className="mt-3">
              <p className="home-text">₹4,878/month, cancel anytime</p>
              <Link to="/service" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card-container">
          <div className="cards">
            {HomeCardData.map((val, ind) => {
              return (
                <div className="card">
                  <HomeCard
                    key={ind}
                    img={val.img}
                    title={val.title}
                    desc={val.desc}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <section className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about-image">
                <img src={pic3} className="main-img" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-content">
                <h4 className="about-title">
                  We Have Experienced Professionals & We Do Our Best To Achieve
                  Your Goal. Your Happiness Is Our First Priority.
                </h4>
                <p className="about-para">
                  <span>
                    Nam aperiam autem nesciunt perferendis id. Lorem ipsum dolor
                    sit, amet consectetur adipisicing elit. Quas nulla sequi
                    pariatur quam animi ipsum molestias assumenda cumque.
                  </span>
                  <ScrollTrigger
                    onEnter={() => setCounterOn(true)}
                    onExit={() => setCounterOn(false)}
                  >
                    <div className="card-container2">
                      <div className="cards">
                        <h2>
                          {counterOn && (
                            <CountUp
                              start={0}
                              end={1000}
                              duration={2}
                              delay={0}
                              className="number"
                            />
                          )}
                          <span className="color1">+</span>
                          <h6>Benefited Students</h6>
                        </h2>
                        <h2>
                          {counterOn && (
                            <CountUp
                              start={0}
                              end={12}
                              duration={2}
                              delay={0}
                              className="number2"
                            />
                          )}
                          <span className="color2">+</span>
                          <h6>Years of Experience</h6>
                        </h2>
                        <h2>
                          {counterOn && (
                            <CountUp
                              start={0}
                              end={7}
                              duration={2}
                              delay={0}
                              className="number3"
                            />
                          )}
                          <span className="color3">+</span>
                          <h6>Study Centres</h6>
                        </h2>
                      </div>
                    </div>
                  </ScrollTrigger>
                  <Link to="/service" class="btn btn-outline-success mt-3">
                    Read More
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-title text-center">
          <h4 className="about-title text2">
            We Do What We Love To Do. Find the Best
          </h4>
          <h4 className="text2"> Course To Fit Your Needs</h4>
        </div>
      </section>
      <div className="card-container3">
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

      <Footer />
    </>
  );
};
export default Home;
