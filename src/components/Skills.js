import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { SiNetlify } from "react-icons/si";
import htmlLogo from "../assets/html-logo.jpg";
import cssLogo from "../assets/css-logo.jpg";
import bootstrapLogo from "../assets/Bootstrap-logo.jpg";
import javascriptLogo from "../assets/javascript-logo.png";
import muiLogo from "../assets/mui-logo.png";
import reactLogo from "../assets/react-logo.png";
import typerscriptLogo from "../assets/typescript-logo.png";

const Skills = () => {
  return (
    <div>
      <section id="skills" className="py-5">
        <div className="container">
          <h2 className="section-title mb-4 text-center pb-4">Skills</h2>
          <div className="row">
            <div className="col-md-8 mb-4 text-center">
              <div className="row">
                {/* Row 1 */}
                <div className="col-md-4">
                  <div className="skill-logo">
                    <img
                      src={htmlLogo}
                      alt="HTML Logo"
                      className="img-fluid mb-2"
                      style={{
                        height: "55px",
                        width: "55px",
                      }}
                    />
                    <p className="text-light">HTML</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="skill-logo">
                    <img
                      src={cssLogo}
                      alt="CSS Logo"
                      className="img-fluid mb-2"
                      style={{ height: "65px", width: "60px" }}
                    />
                    <p className="text-light">CSS</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="skill-logo">
                    <img
                      src={bootstrapLogo}
                      alt="Bootstrap Logo"
                      className="img-fluid mb-2"
                      style={{ height: "50px", width: "50px" }}
                    />
                    <p className="text-light">Bootstrap</p>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="col-md-4">
                  <div className="skill-logo">
                    <img
                      src={javascriptLogo}
                      alt="JavaScript Logo"
                      className="img-fluid mb-2"
                      style={{ height: "50px", width: "50px" }}
                    />
                    <p className="text-light">JavaScript</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="skill-logo">
                    <img
                      src={muiLogo}
                      alt="Material-UI Logo"
                      className="img-fluid mb-2"
                      style={{ height: "50px", width: "50px" }}
                    />
                    <p className="text-light">Material-UI</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="skill-logo">
                    <img
                      src={reactLogo}
                      alt="React.js Logo"
                      className="img-fluid mb-2"
                      style={{ height: "55px", width: "60px" }}
                    />
                    <p className="text-light">React.js</p>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="col-md-12">
                  <div className="skill-logo">
                    <img
                      src={typerscriptLogo}
                      alt="TypeScript Logo"
                      className="img-fluid mb-2"
                      style={{ height: "50px", width: "50px" }}
                    />
                    <p className="text-light">TypeScript</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              {/* Additional Skills */}
              <h3 className="text-center mb-3">Additional Skills</h3>
              <ul className="list-unstyled">
                <li className="d-flex justify-content-center align-items-center me-4">
                  <span className="mx-2 text-danger">
                    <FaGitAlt />
                  </span>
                  Git
                </li>
                <li className="d-flex justify-content-center align-items-center ms-2">
                  <span className="mx-2 text-light">
                    <BsGithub />
                  </span>
                  GitHub
                </li>
                <li className="d-flex justify-content-center align-items-center ms-3">
                  <span className="mx-2 text-info">
                    <TbBrandVscode />
                  </span>
                  VSCode
                </li>
                <li className="d-flex justify-content-center align-items-center">
                  <span className="mx-2 logo-color">
                    <SiNetlify />
                  </span>
                  Netlify
                </li>
              </ul>

              {/* Familiar with */}
              <h3 className="mt-4 text-center mb-3">Familiar with</h3>
              <ul className="list-unstyled">
                <li className="d-flex justify-content-center align-items-center ms-4">
                  Frontend Development
                </li>
                <li className="d-flex justify-content-center align-items-center me-1">
                  Web Development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
