import React from "react";
import selfImage from "../../assets/header/portfolio.JPG";
function About() {
  return (
    <section className="my-6 background-img">
      <div className="container">
        <div className="row justify-content-center">
          <a href="https://github.com/gadaell"></a>
          <h1 className="m-5 about-txt">
            Welcome to my portfolio page. My name is A’Darius Ellis. I attended
            the University of Memphis and received my Bachelor of Science in
            Health Science. I recently graduated from the Trilogy Full stack
            Developer Bootcamp Program at Vanderbilt University. I have worked
            in the supply chain industry for 5 years. I started my career at
            FedEx World Hub in Memphis, TN and later went to ABF freight in
            2017. I started as a casual dock worker and later became an
            Assistant Operation Manager within the company. My experience
            includes management, client services, account management, staff
            training, process analysis improvements, performance optimization,
            recruiting, teamwork, and leadership. If you have any questions for
            me, please do not hesitate to contact me through the contact tab.
            Thank you and enjoy viewing my portfolio.
          </h1>
          <img className="img-fluid" src={selfImage} alt="A'D Ellis" />
        </div>
      </div>
    </section>
  );
}

export default About;
