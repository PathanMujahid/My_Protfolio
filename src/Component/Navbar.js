import React from "react";
import "../Style/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark border-bottom border-bottom-dark"
        data-bs-theme="dark"
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link
              to="/education"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <a class="navbar-brand">Portfolio</a>
            </Link>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{ gap: "1rem" }}>
              <Link
                to="/education"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <li class="nav-item">
                  <a class="nav-link">Education</a>
                </li>
              </Link>
              <li class="nav-item">
                <a class="nav-link">Skills</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Projects
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/">
                  Interest
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
