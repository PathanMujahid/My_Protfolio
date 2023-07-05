import React from "react";
import "../Style/About.css";

const About = () => {
  return (
    <>
      <div className="about">
        <div className=" d-flex about_details  ">
          {/* <Paper variant="outlined d-flex" /> */}
          <h1 className="about_heading">About</h1>
          <p className="about_section ">
            Creative and people-oriented computer engineer challenging
            opportunity to work for an organization to enhance my knowledge,
            skills and techniques which can benefit the organization and myself.
          </p>

          {/* <Paper variant="outlined d-flex" square /> */}
        </div>
        <div>
          {/* <Paper> */}
          <img
            className="my_img"
            alt="my_img"
            src="https://i.postimg.cc/3wJzvP5y/portfolio.jpg"
          />
          {/* </Paper> */}
        </div>
      </div>
    </>
  );
};

export default About;
