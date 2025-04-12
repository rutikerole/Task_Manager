import React from "react";
import { FaCode, FaLaptopCode, FaUserAlt } from "react-icons/fa";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-container">
      <h2>About Me</h2>

      <div className="about-content">
        <div className="about-text">
          <p>
            Hello, I'm Rutik Erole, a passionate web developer who loves
            building web applications using modern technologies like React, Node.js, and more. 
            I enjoy tackling complex problems and turning ideas into fully functional software.
          </p>
          <p>
            I'm always learning and exploring new technologies to improve my skill set and stay
            up-to-date with the latest trends in web development.
          </p>
        </div>

        <div className="skills">
          <h3>Skills & Technologies</h3>
          <div className="skills-list">
            <div className="skill-item">
              <FaCode className="skill-icon" />
              <p>Frontend Development</p>
            </div>
            <div className="skill-item">
              <FaLaptopCode className="skill-icon" />
              <p>Backend Development</p>
            </div>
            <div className="skill-item">
              <FaUserAlt className="skill-icon" />
              <p>Problem Solving</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
