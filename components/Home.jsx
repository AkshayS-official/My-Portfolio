//Home.jsx
// Akshay Santhosh
// 301499987
// 04.02.2025 (dd.mm.yyyy)

import React from 'react';
import { useLocation } from 'react-router-dom';
import '/components/CSS Folder/Home.css'; // Corrected import path

const HomePage = () => {
  const location = useLocation();
  const successMessage = location.state?.successMessage;
  return (
    <div className="home-containerh">
      <div className="content-wrapperh"> {/* Added content wrapper for centering */}
        {successMessage && (
          <div className="success-message">
            {successMessage}
          </div>
        )}
        <section className="intro-sectionh">
          <h1>Welcome to My Portfolio</h1>
          <p>Hello! I'm Akshay Santhosh, a Game Developer.</p>
          {/* Consider adding a brief, impactful tagline here */}
        </section>

        <section className="profile-sectionh">
          <img src="/Images/Profile.jpg" alt="Profile" className="profile-pictureh" />
          {/* You could add a short bio or introduction paragraph here */}
        </section>

        <section className="mission-sectionh"> {/* Corrected className */}
          <h2>Mission Statement</h2>
          <p>This portfolio showcases my journey as a game programmer, highlighting my skills and projects as I continually learn and evolve in the exciting world of game development.</p>
        </section>

        <section className="skills-sectionh">
          <h2>Skills</h2>
          <ul className="skills-listh">
            <li>WEB PROGRAMMING</li>
            <li>ENVIRONMENT DESIGN</li>
            <li>LEVEL DESIGN</li>
            <li>GAME MECHANICS</li>
            <li>BLUEPRINT(VISUAL CODING)  </li>
          </ul>
        </section>

        <section className="projects-sectionh">
          <h2>Projects</h2>
          <div className="project-listh">
            <div className="project-itemh">
              <h3>DINE IN JUPITER</h3>
              <p>My first major solo project, a food ordering website inspired by Swiggy. Developed from concept to completion, this project includes key features such as user registration and login, restaurant browsing, menu display, order placement, payment processing, and order tracking.</p>
              {/* Consider adding a project image or video thumbnail */}
            </div>
            <div className="project-itemh">
              <h3>WAREHOUSE WRECKAGE</h3>
              <p>A solo project developed in Unreal Engine. This small-scale game features a cannon-shooting challenge within a detailed warehouse setting. The player controls a cannon to shoot at various targets, with realistic projectile physics and interactive elements. Key development areas include cannon control implementation, projectile trajectory and physics, target design and interaction, and environmental design.</p>
              {/* Consider adding a project image or video thumbnail */}
            </div>
            {/* Add more projects */}
          </div>
        </section>
      </div> {/* Close content wrapper */}
    </div>
  );
};

export default HomePage;