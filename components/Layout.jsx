//Layout.jsx
// Akshay Santhosh
// 301499987
// 04.02.2025 (dd.mm.yyyy)

import React from 'react';
import { Link } from 'react-router-dom';
import '/components/CSS Folder/Layout.css'; // Import the CSS file for styling

export default function Layout() {
    return (
        <header className="header">
            <div className="site-branding">
                <img src="/Images/Designer (2).png" alt="Logo" className="logo" /> {/* Add the logo image */}
                <h1 className="site-name">My Portfolio</h1>
            </div>
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/about">About</Link></li>
                    <li className="nav-item"><Link to="/service">Service</Link></li>
                    <li className="nav-item"><Link to="/project">Project</Link></li>
                    <li className="nav-item"><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}