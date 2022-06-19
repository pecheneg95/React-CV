import React from "react";

import "./App.css";
import "./normolize.css";

import avatar from "./assets/img/photoProfile.png";
import apiGitHub from "./assets/img/project_apigithub.png";
import christmas from "./assets/img/project_christmas.png";

import iconPhone from "./assets/icons/phone_icon.svg";
import iconMail from "./assets/icons/mail_icon.svg";
import iconGitHub from "./assets/icons/github_logo.svg";
import iconTelegram from "./assets/icons/telegram_icon.svg";
import iconDiscord from "./assets/icons/discord_icon.svg";
import iconLinkedIn from "./assets/icons/linkedin_icon.svg";

import iconHTML from "./assets/icons/html_icon.svg";
import iconCSS from "./assets/icons/css_icon.svg";
import iconJavaScript from "./assets/icons/javascript_icon.svg";
import iconReact from "./assets/icons/react_icon.svg";
import iconNode from "./assets/icons/node_icon.svg";
import iconGit from "./assets/icons/git_icon.svg";
import iconHTTP from "./assets/icons/http_icon.png";

function App() {
  return (
    <main className="main">
      <aside className="aside">
        <img className="avatar" alt="my avatar" src={avatar}></img>
        <div className="contact aside-block">
          <h2 className="aside-header">CONTACT</h2>
          <ul className="contact-list">
            <li className="contact-list-item">
              <img
                className="contact-icon"
                alt="phone icons"
                src={iconPhone}
              ></img>
              +375-25-520-06-83
            </li>
            <li className="contact-list-item">
              <img
                className="contact-icon"
                alt="mail icons"
                src={iconMail}
              ></img>
              pechera20@gmail.com
            </li>
            <li className="contact-list-item">
              <img
                className="contact-icon"
                alt="gitHub icons"
                src={iconGitHub}
              ></img>
              <a
                href="https://github.com/pecheneg95"
                target="_blank"
                rel="noopener noreferrer"
              >
                pecheneg95
              </a>
            </li>
            <li className="contact-list-item">
              <img
                className="contact-icon"
                alt="telegram icons"
                src={iconTelegram}
              ></img>
              @pecheneg95
            </li>
            <li className="contact-list-item">
              <img
                className="contact-icon"
                alt="discord icons"
                src={iconDiscord}
              ></img>
              Pecheneg95#2758
            </li>
            <li className="contact-list-item">
              <img
                className="contact-icon"
                alt="linkedIn icons"
                src={iconLinkedIn}
              ></img>
              <a
                href="linkedin.com/in/artsiom-piachora"
                target="_blank"
                rel="noopener noreferrer"
              >
                Artsiom Piachora
              </a>
            </li>
          </ul>
        </div>
        <div className="skills aside-block">
          <h2 className="aside-header">SKILLS</h2>
          <ul className="skills-list">
            <li className="skills-list-item">
              <div className="skill-description">
                <img
                  className="skills-icon"
                  alt="phone icons"
                  src={iconHTML}
                ></img>
                HTML
              </div>
              <div className="bar">
                <div className="bar-active"></div>
                <div className="bar-active"></div>
                <div className="bar-active"></div>
                <div className="bar-active"></div>
                <div className="bar-none"></div>
              </div>
            </li>
            <li className="skills-list-item">
              <div className="skill-description">
                <img
                  className="skills-icon"
                  alt="mail icons"
                  src={iconCSS}
                ></img>
                CSS
              </div>
              <div className="bar">
                <div className="bar-active"></div>
                <div className="bar-active"></div>
                <div className="bar-active"></div>
                <div className="bar-active"></div>
                <div className="bar-none"></div>
              </div>
            </li>
            <li className="skills-list-item">
              <div className="skill-description">
                <img
                  className="skills-icon"
                  alt="gitHub icons"
                  src={iconJavaScript}
                ></img>
                JavaScript
              </div>
              <div className="bar">
                <div className="bar-active"></div>
                <div className="bar-active"></div>
                <div className="bar-active"></div>
                <div className="bar-none"></div>
                <div className="bar-none"></div>
              </div>
            </li>
            <li className="skills-list-item">
              <div className="skill-description">
                <img
                  className="skills-icon"
                  alt="react icons"
                  src={iconReact}
                ></img>
                React
              </div>
              <div className="bar">
                <div className="bar-active"></div>
                <div className="bar-active"></div>
                <div className="bar-none"></div>
                <div className="bar-none"></div>
                <div className="bar-none"></div>
              </div>
            </li>
            <li className="skills-list-item">
              <div className="skill-description">
                <img
                  className="skills-icon"
                  alt="discord icons"
                  src={iconNode}
                ></img>
                Node.js
              </div>
              <div className="bar">
                <div className="bar-active"></div>
                <div className="bar-none"></div>
                <div className="bar-none"></div>
                <div className="bar-none"></div>
                <div className="bar-none"></div>
              </div>
            </li>
            <li className="skills-list-item">
              <div className="skill-description">
                <img
                  className="skills-icon"
                  alt="linkedin icons"
                  src={iconGit}
                ></img>
                Git
              </div>
              <div className="bar">
                <div className="bar-active"></div>
                <div className="bar-active"></div>
                <div className="bar-active"></div>
                <div className="bar-none"></div>
                <div className="bar-none"></div>
              </div>
            </li>
            <li className="skills-list-item">
              <div className="skill-description">
                <img
                  className="skills-icon"
                  alt="linkedin icons"
                  src={iconHTTP}
                ></img>
                HTTP
              </div>
              <div className="bar">
                <div className="bar-active"></div>
                <div className="bar-none"></div>
                <div className="bar-none"></div>
                <div className="bar-none"></div>
                <div className="bar-none"></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="language aside-block">
          <h2 className="aside-header">LANGUAGE</h2>
          <ul className="language-list">
            <li className="language-list-item">
              English - A2 (Pre-Intermediate)
            </li>
            <li className="language-list-item">Russian - Native speaker</li>
            <li className="language-list-item">Belarusian - Native speaker</li>
          </ul>
        </div>
      </aside>
      <section className="section">
        <div className="name-block">
          <p className="first-name">ARTSIOM</p>
          <p className="last-name">PIACHORA</p>
          <p className="proffesion">Junior Software Engineer</p>
        </div>
        <div className="profile section-block">
          <h2 className="section-header">ABOUT ME</h2>
          <p className="my-description">
            I'm junior software engineer. Сurrently I'm focused on front-end,
            but also I interested in back-end technologies. I'm motivated and
            ready to devote myself to career development. Also, i like to work
            in a team and passionated about learning new things. I'm fond of
            walking, books, anime and computer games.
          </p>
        </div>
        <div className="education section-block">
          <h2 className="section-header">EDUCATION</h2>
          <p>Polotsk State University</p>
          <p>Faculty of Civil Engineering (graduated in 2017)</p>
        </div>
        <div className="courses section-block">
          <h2 className="section-header">COURSES</h2>
          <p>RS School – JavaScript/Front-end 2021Q3 (stage 1-2)</p>
        </div>
        <div className="projects section-block">
          <h2 className="section-header">PROJECTS EXAMPLES</h2>
          <div className="projects-list">
            <div className="projects-item">
              <h3>Christmas decorations</h3>
              <div className="project">
                <a
                  className="project-link"
                  href="https://pecheneg95-christmas-task.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project-img"
                    src={christmas}
                    alt="project preview"
                  ></img>
                </a>
                <p className="project-description">
                  Filter, sort, search and select toys to decorate a Christmas
                  tree by draaging toys to the tree. Pick you background and a
                  tree. Merry Christmas!
                </p>
              </div>
            </div>
            <div className="projects-item">
              <h3>Api GitHub</h3>
              <div className="project">
                <a
                  className="project-link"
                  href="https://pecheneg95-startupsummer2022.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project-img"
                    src={apiGitHub}
                    alt="project preview"
                  ></img>
                </a>
                <p className="project-description">
                  Allows you to find a gitHub user and view a list of their
                  repositories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
