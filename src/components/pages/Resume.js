import React from "react";
import aellisResume from "../../assets/resume/aellis-resume.docx";

function Resume() {
  return (
    <div className="container">
      <section className="my-5 background-img ">
        <div className="d-flex justify-content-center">
          <h1 id="about">Click the button to download my Resume</h1>
        </div>
        <div className="d-flex justify-content-around ">
          <a href={aellisResume} download="aellisresume">
            <button className="resume-btn p-2" type="button">
              RESUME
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Resume;
