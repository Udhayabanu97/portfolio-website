import React, { useState } from "react";
import ProjectData from "../project-data/data";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import ProjectPopup from "./ProjectPopup";

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const maxProjectsToShow = 3;

  const handleShowAllClick = () => {
    setShowAllProjects(!showAllProjects);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    document.body.classList.add("popup-open");
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
    document.body.classList.remove("popup-open");
  };

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h1 className="section-title mb-4 text-center">Projects</h1>
        <div className="row">
          {ProjectData.slice(
            0,
            showAllProjects ? ProjectData.length : maxProjectsToShow
          ).map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6 my-5">
              <div className="project-card card">
                <img
                  className="card-img-top img-fluid"
                  src={project.imageSrc}
                  alt={project.title}
                />
                <div className="project-details">
                  <h5 className="card-title my-3">
                    Project-{project.id} Source
                  </h5>
                  <button
                    onClick={() => handleProjectClick(project)}
                    className="project-logo"
                  >
                    <FaArrowUpRightFromSquare />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {!showAllProjects && (
            <div className="d-flex justify-content-center mb-5">
              <button
                className="btn btn-outline-light mt-3 mb-5 fs-5"
                onClick={handleShowAllClick}
              >
                Show All Projects
              </button>
            </div>
          )}
          {showAllProjects && (
            <div className="d-flex justify-content-center mb-5">
              <button
                className="btn btn-outline-light mb-3 fs-5"
                onClick={handleShowAllClick}
              >
                Show Less
              </button>
            </div>
          )}
          {selectedProject && (
            <ProjectPopup
              project={selectedProject}
              onClose={handleClosePopup}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
