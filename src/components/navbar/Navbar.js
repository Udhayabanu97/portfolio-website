import React, { useState } from "react";
import { DiCssdeck } from "react-icons/di";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`navbar-container ${isActive ? "active" : ""}`}>
      <nav className="navbar navbar-expand-lg mt-1">
        <div className="container">
          <div className="navbar-brand text-light ms-4">
            <span className="logo">
              <DiCssdeck />
            </span>
            Portfolio
          </div>
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            {isActive ? (
              <ImCross className="text-light" />
            ) : (
              <GiHamburgerMenu className="text-light" />
            )}
          </button>
          <div
            className={`collapse navbar-collapse ${
              isActive ? "show" : ""
            } justify-content-center`}
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#education">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
