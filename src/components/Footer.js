import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="py-1">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="list-unstyled footer-links d-flex flex-wrap justify-content-center">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <ul className="list-unstyled">
              <li className="pt-2">
                <a href="mailto:udhaya06.n@gmail.com">
                  <span className="footer-icons mx-3">
                    <SiGmail />
                  </span>
                </a>
                <a href="https://github.com/Udhayabanu97">
                  <span className="footer-icons">
                    <BsGithub />
                  </span>
                </a>
                <a href="https://www.linkedin.com/in/udhaya-n/">
                  <span className="footer-icons mx-3">
                    <FaLinkedinIn />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-2">
        <p>&copy; 2024 Udhaya. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
