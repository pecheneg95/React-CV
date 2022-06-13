import React from "react";
import avatar from "./assets/photoProfile.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="navigation">
          <ul className="navigation-list">
            <li className="navigation-list-item">
              <a className="navigation-list-link">Contacts</a>
            </li>
            <li className="navigation-list-item">
              <a className="navigation-list-link">About Me</a>
            </li>
            <li className="navigation-list-item">
              <a className="navigation-list-link">Skills</a>
            </li>
            <li className="navigation-list-item">
              <a className="navigation-list-link">Code example</a>
            </li>
            <li className="navigation-list-item">
              <a className="navigation-list-link">Project</a>
            </li>
            <li className="navigation-list-item">
              <a className="navigation-list-link">Education</a>
            </li>
            <li className="navigation-list-item">
              <a className="navigation-list-link">Language</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="mainPage">
        <section className="profile">
          <img className="avatar" src={avatar} alt="My profile photo"></img>
          <div className="profile-text">
            <h1>Artsiom Piachora</h1>
            <p>JUNIOR FRONT-END DEVELOPER</p>
          </div>
        </section>
        <section className="contacts">
          <h2>Contacts</h2>
          <ul class="contacts-list">
            <li>Phone: +375 25 520-06-83</li>
            <li>E-mail: pechera20@gmail.com</li>
            <li>
              GitHub: <a href="https://github.com/Pecheneg95">Pecheneg95</a>
            </li>
            <li>Telegramm: ***</li>
            <li>Discord: ***</li>
            <li>Linkedin: ***</li>
          </ul>
        </section>
        <section className="about">
          <h2>About Me</h2>
          <p>
            I am 27 years old, married, I have a daughter. I work in the
            construction industry as a pre-production engineer. During the time
            that I spent in this area, I realized that there will not be much
            growth in it and the stage of stagnation is already beginning. I
            have always liked everything related to mathematics, physics,
            algorithms and computers, in this regard, I decided to change my
            life path and move along the path of a front-end developer. I think
            my perseverance, determination, sociability and extraordinary mind
            will help me on this path.
          </p>
        </section>
        <section className="skills">
          <h2>Skills</h2>
          <ul class="skills-list">
            <li><img></img>HTML</li>
            <li><img></img>CSS</li>
            <li><img></img>JS</li>
            <li><img></img>React</li>
            <li><img></img>Git</li>
            <li><img></img>Node.js</li>
            <li><img></img>HTTP</li>
          </ul>
        </section>
        <section className="code"></section>
        <section className="project"></section>
        <section className="education"></section>
        <section className="language"></section>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
