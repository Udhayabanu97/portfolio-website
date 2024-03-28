import React from "react";

const educationData = [
  {
    id: "secondarySchool",
    name: "Nirmala matriculation school",
    education: "SECONDARY SCHOOL",
    grade: "86%",
    year: "2017 - 2018",
  },
  {
    id: "highSchool",
    name: "APS Academy Matric HR Sec School",
    education: "HIGH SCHOOL",
    major: "(computer/maths)",
    grade: "78%",
    year: "2019 - 2020",
  },
  {
    id: "college",
    name: "Auxilium college of arts and science for woman",
    education: "BACHELOR OF SCIENCE",
    major: "(Computers)",
    grade: "8.30 CGPA",
    year: "2020 - 2023",
  },
];

const Education = () => {
  return (
    <div id="education" className="py-5">
      <div className="container">
        <h2 className="section-title mb-4 text-center">Education</h2>

        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            {educationData.map((education) => (
              <div key={education.id} className="mb-4">
                <div className="card-container">
                  <div className="timeline-circle"></div>

                  <div className="card text-light border-0 shadow">
                    <div className="card-body">
                      <h3>{education.year}</h3>
                      {education.education && (
                        <h5>
                          {education.education} <span>{education.major}</span>
                        </h5>
                      )}
                      <h6 className="card-text my-2">{education.name}</h6>
                      <div className="card-text mt-4">
                        <span>Grade:</span> {education.grade}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
