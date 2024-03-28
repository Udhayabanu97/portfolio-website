import React from "react";
import aboutImage from "../assets/about-image.svg";

const About = () => {
  return (
    <section id="about" className="pb-2">
      <div className="container">
        <div className="row my-4">
          <div className="col-lg-6 text-center">
            <img
              src={aboutImage}
              alt="Udhaya Profile"
              className="img-fluid rounded"
              style={{ height: "430px", width: "500px" }}
            />
          </div>
          <div className="col-lg-6 py-5">
            <h2 className="section-title mb-4">
              About <span className="text-styled">Me</span>
            </h2>
            <div className="about-text">
              <p>
                I'm a driven Front-End Developer specializing in HTML, CSS,
                JavaScript, Bootstrap, Material UI, React Router, TypeScript,
                and React.js. With a passion for crafting engaging user
                interfaces, I thrive on collaborating with dynamic teams to
                deliver exceptional web experiences.
              </p>
              <p>
                I've embarked on numerous projects, each meticulously crafted to
                showcase my proficiency and creativity. From building intuitive
                user interfaces to implementing dynamic functionalities, I
                strive to deliver solutions that not only meet but exceed
                expectations
              </p>
              <p>
                With a passion for crafting visually appealing and user-friendly
                interfaces, I am eager to contribute to dynamic teams and take
                on new challenges in the world of web development.
              </p>
            </div>
            <section className="py-3">
              <a
                href="mailto:udhaya06.n@gmail.com"
                className="btn btn-resume fs-5 px-4"
              >
                Hire Me
              </a>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
