import React from "react";
import sparkleImage from "../../assets/projects/sparkle.PNG";
import passwordImage from "../../assets/projects/password-manager.PNG";
import recipeImage from "../../assets/projects/recipesesame.PNG";
import codeImage from "../../assets/projects/code-quiz.PNG";
import noteImage from "../../assets/projects/note-taker.PNG";
import bloggerImage from "../../assets/projects/tech-blogger.PNG";
import weatherImage from "../../assets/projects/weather-dashboard.PNG";
import workforceImage from "../../assets/projects/workforce.JPG";

function Portfolio() {
  return (
    <section className="my-5 background-img">
      <h1 id="about">Projects I Currently Completed</h1>
      <div className="container">
        <div className="card mb-3">
          <a href="https://sparkle-safe.herokuapp.com/">
            <img
              src={sparkleImage}
              className="card-img-top img-thumbnail"
              alt="Screenshot of the password-manager"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">
              Sparkle Safe is a collaborated project with Patrick Abernathy and
              Thomas Upchurch. It is full stack application that uses
              Javascript, Node, Bcrypt, Express, Concurrently, Mongoose, Dotenv,
              Graphql, JWT, Apollo-Server, React.
            </h5>
            <p className="card-text">
              To create a website that keeps an archive of your jewelry for
              insurance purposes. You are able to input various information on
              the site to help keep track of your belongings if anything happens
              to them.
            </p>
          </div>
        </div>
        <div className="card mb-3">
          <a href="https://password-manager-gadaell.herokuapp.com/">
            <img
              src={passwordImage}
              className="card-img-top img-thumbnail"
              alt="Screenshot of the password-manager"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">
              Password-Manager App. Full-Stack application collaborated with
              Patrick Abernathy and Daniel Zamanillo. Packages we uses: Node Js,
              Express, Handlebars, Sequelize, Bcrypt, Crypto JS
            </h5>
            <p className="card-text">
              Online security and safety is more important than ever. When you
              are home, you lock our door. When you are in your car, you put on
              our seatbelt. When you are online, you use Virtual Guardian. With
              Virtual Guardian, you can login into your account to create
              records of all your online usernames and passwords. By having all
              of their records in one place, users to use unique passwords for
              all of their online accounts, minimizing the damage of one leaked
              password. Simply sign-up, add your passwords and relax knowing
              Virtual Guardian is on your side.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <a href="https://github.com/gadaell/Recipe-Sesame">
              <img
                src={recipeImage}
                className="card-img-top img-thumbnail"
                alt="Screenshot of the Recipe-Generator Project"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">
                Recipe Generator was a collaborated project with Michael Hodges
                and Daniel Love. We used the following packages: HTML, CSS,
                JavaScript, Bootstrap
              </h5>
              <p className="card-text">
                App that you can use to generate random recipes based on
                available ingredients and give you a random quote of the day.
              </p>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card">
                <a href="https://github.com/gadaell/Code-Quiz">
                  <img
                    src={codeImage}
                    className="card-img-top img-thumbnail other-projects"
                    alt="screen shot of the code quiz app"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">
                    Code-Quiz was built using HTML, CSS and Javascript.
                  </h5>
                  <p className="card-text">
                    A website that keeps quiz your basic coding knowledge.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <a href="https://github.com/gadaell/Note-Taker">
                  <img
                    src={noteImage}
                    className="card-img-top img-thumbnail other-projects"
                    alt="screenshot of the note-taker app"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">
                    The note-taker application was built and used the following
                    packages: HTML, CSS, JavaScript, Node, Heroku
                  </h5>
                  <p className="card-text">
                    A website that able to write and save notes and to organize
                    my thoughts and keep track of tasks I need to complete.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <a href="https://github.com/gadaell/Tech-blogger">
                  <img
                    src={bloggerImage}
                    className="card-img-top"
                    alt="screenshot of the tech-blogger app"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">
                    Tech-Blogger is a full-Stack application that is bulit using
                    MySQL2, Sequelize, Javascript, Handlebars w/ user, Dotenv
                    Authentication incorporating Express-Sessions and BCRYPT
                  </h5>
                  <p className="card-text">
                    To create a CMS-style blog site that the user can publish
                    articles, blog posts, and my thoughts and opinions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <a href="https://github.com/gadaell/Weather-Dashboard">
                  <img
                    src={weatherImage}
                    className="card-img-top"
                    alt="screenshot of the weather-dashboard app"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">
                    Weather dashboard was built using HTMl, CSS, and Javascript
                  </h5>
                  <p className="card-text">
                    A website that generates the weather of different cities. It
                    will displays the Temperature, Wind, UV Index and Humidity.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <a href="https://github.com/gadaell/Track-My-Workforce">
                  <img
                    src={workforceImage}
                    className="card-img-top"
                    alt="screenshot of the Track-My-Workforce app"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">
                    Track-My-Workforce was built using JavaScript, Node, SQL2,
                    Express, Inquirer,and Console.table
                  </h5>
                  <p className="card-text">
                    A command line application that to track and manage
                    departments, roles, and employees so the employer can
                    organize and plan the business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
