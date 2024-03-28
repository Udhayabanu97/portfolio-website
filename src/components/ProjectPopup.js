import React, { useEffect, useRef } from "react";
import { RxCross1 } from "react-icons/rx";

const ProjectPopup = ({ project, onClose }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="project-popup-overlay bg-dark">
      <div ref={popupRef} className="project-popup card text-light">
        <button className="btn btn-close" onClick={onClose}>
          <RxCross1 />
        </button>
        <div className="row no-gutters">
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            <div className="card-img-container">
              <img
                src={project.imageSrc}
                className="card-img img-fluid"
                alt={project.title}
                style={{ width: "auto", height: "250px" }}
              />
              <div className="black-box"></div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p className="card-text">{project.description}</p>
              <p className="card-text">Technologies - {project.Technologies}</p>
              <p className="card-text">Type - {project.type}</p>
              <p className="card-text">
                View -{" "}
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.projectLink}
                </a>
              </p>
              <p className="card-text">
                Github -{" "}
                <a
                  href={project.GithubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;
