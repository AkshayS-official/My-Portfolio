//project.jsx
// Akshay Santhosh
// 301499987
// 04.02.2025 (dd.mm.yyyy)

import React from 'react';
import '/components/CSS Folder/Project.css'; // Import the CSS file for styling

export default function Project() {
    return (
        <div className="project-container">
            <section className="intro-section">
                <h1>My Projects</h1>
                <p>Here are some of the projects I've worked on.</p>
            </section>
            <section className="projects-section">
                <div className="project-item">
                    <img src="/Images/dine-in-jupiter.png" alt="Dine In Jupiter" className="project-image" style={{ width: '330px', height: '215px' }} /> {/* Added image */}
                    <h2>DINE IN JUPITER</h2>
                    <p>Dine in Jupiter: My first major solo project, a food ordering website inspired by Swiggy. Developed from concept to completion, this project includes key features such as user registration and login, restaurant browsing, menu display, order placement, payment processing, and order tracking.</p>
                </div>
                <div className="project-item">
                    <img src="/Images/Ware-house-wreckage.png" alt="Warehouse Wreckage" className="project-image" style={{ width: '330px', height: '215px' }} /> {/* Added image */}
                    <h2>WAREHOUSE WRECKAGE</h2>
                    <p>Warehouse Wreckage: A solo project developed in Unreal Engine. This small-scale game features a cannon-shooting challenge within a detailed warehouse setting. The player controls a cannon to shoot at various targets, with realistic projectile physics and interactive elements. Key development areas include cannon control implementation, projectile trajectory and physics, target design and interaction, and environmental design.</p>
                </div>
                <div className="project-item">
                    <img src="/Images/Obstacle-Assault.png" alt="Obstacle Assault" className="project-image" style={{ width: '330px', height: '215px' }} /> {/* Added image */}
                    <h2>OBSTACLE ASSULT</h2>
                    <p>Obstacle Assault: A 3D obstacle course game developed independently in Unreal Engine. This project involved designing a challenging environment with various 3D obstacles, importing and integrating a 3D human character model, and implementing gameplay mechanics using C++ and visual scripting (Blueprints). The player must control the character to overcome obstacles, jump gaps, and reach the goal.</p>
                </div>
                {/* Add more projects as needed */}
            </section>
        </div>
    );
}