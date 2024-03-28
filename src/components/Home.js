import React from "react";
import TypewriterComponent from "typewriter-effect";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

const Home = () => {
  return (
    <section id="home" className="home-section py-4 text-center">
      <div className="container mx-auto px-5">
        <div className="row align-items-center mx-4">
          <div className="col-lg-6 text-lg-start pt-5 col-sm-12">
            <h3>Hello, I'm</h3>
            <h1 className="display-4">Udhaya</h1>
            <h3>
              I am a{" "}
              <span className="text-loop">
                <TypewriterComponent
                  options={{
                    strings: ["Frontend Developer", "React.js Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                ></TypewriterComponent>
              </span>
            </h3>
            <p className="lead">
              A fresh graduate in BSc Computer Science, I specialize in crafting
              and launching dynamic websites with a focus on creating engaging
              user interfaces.
            </p>

            <a
              href="/path/to/your/resume.pdf"
              className="btn btn-resume btn-lg mb-3"
              download
            >
              Download Resume
            </a>
            <ul className="list-unstyled me-4">
              <li className="pt-4">
                <a href="mailto:udhaya06.n@gmail.com">
                  <span className="text-styled contact-logo me-3">
                    <SiGmail />
                  </span>
                </a>
                <a href="https://github.com/Udhayabanu97">
                  <span className="text-styled contact-logo">
                    <BsGithub />
                  </span>
                </a>
                <a href="https://www.linkedin.com/in/udhaya-n/">
                  <span className="text-styled contact-logo mx-3">
                    <FaLinkedinIn />
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 mt-5">
            <div className="image-container">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Udhaya Profile"
                className="img-fluid rounded-circle mb-4"
                style={{ width: "380px", height: "380px" }}
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
