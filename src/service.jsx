//service.jsx
// Akshay Santhosh
// 301499987
// 04.02.2025 (dd.mm.yyyy)

import React from 'react';
import '/components/CSS Folder/Service.css'; // Import the CSS file for styling

export default function Service() {
    return (
        <div className="service-container">
            <section className="intro-section">
                <h1>Our Services</h1>
                <p>We offer a range of services to meet your needs.</p>
            </section>
            <section className="services-section">
                <div className="service-item">
                    <h2>Web Developement</h2>
                    <p>A highly motivated and skilled web developer proficient in front-end and back-end technologies.  Experienced in building dynamic and responsive websites using HTML, CSS, JavaScript, PHP, React, and databases like MySQL (via phpMyAdmin) and MongoDB.  Passionate about creating user-friendly and visually appealing web experiences.</p>
                </div>
                <div className="service-item">
                    <h2>Game Developement</h2>
                    <p>Versatile game developer with a strong foundation in both engine development and asset creation.  I have hands-on experience with Unreal Engine 5 and Unity, developing gameplay mechanics, implementing game logic, and optimizing performance.  My artistic skills include 2D and 3D asset creation using GIMP and Blender, with a focus on creating seamless tile textures for world building.  Proficient in using Git for version control and collaboration.</p>
                </div>
                <div className="service-item">
                    <h2>Software Developement</h2>
                    <p>Collaborative software developer with excellent communication skills and a proven ability to work effectively in team environments.  Proficient in C, C++, Java, and Python, I contribute to all phases of the software development lifecycle, from requirements gathering to deployment and maintenance.  Adept at translating technical concepts to non-technical audiences</p>
                </div>
                {/* Add more services as needed */}
            </section>
        </div>
    );
}