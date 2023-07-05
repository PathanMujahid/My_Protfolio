import React from "react";
import "../Style/Home.css";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { Button } from "bootstrap";

const Home = () => {
  return (
    <>
      <div
        className="homebg d-flex flex-column justify-content-center "
        style={{ color: "white" }}
      >
        <div className="portfolio-title ">
          <h1>Welcome</h1>
          <p>I'm Developer </p>
          <div className="btn">
            <button>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/about"
              >
                About me
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
