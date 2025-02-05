//about.jsx
// Akshay Santhosh
// 301499987
// 04.02.2025 (dd.mm.yyyy)

import React from 'react';
import '/components/CSS Folder/About.css'; // Import the CSS file for styling

export default function About() {
    return (
        <div className="about-containera">
            <section className="intro-sectiona">
                <h1>About Me</h1>
                <p>HELLO! I'M AKSHAY SANTHOSH, A GAME DEVELOPER.</p>
            </section>

            <section className="profile-sectiona">
                <img src="/Images/Profile.jpg" alt="Profile" className="profile-picturea" />
            </section>


            <section className="background-sectiona">
                <h2>Background</h2>
                <p>Ever since I was young, I've been fascinated by the power of games to transport players to new worlds and create unforgettable experiences. Now, as an Advanced Game Programming student at Centennial College, I'm turning that passion into a reality. I'm driven to learn the latest technologies and techniques, constantly pushing myself to improve my skills and create innovative, engaging games.</p>
            </section>
            <section className="skills-sectiona">
                <h2>Skills</h2>
                <ul>
                    <li>WEB PROGRAMMING</li>
                    <li>ENVIRONMENT DESIGN</li>
                    <li>LEVEL DESIGN</li>
                    <li>GAME MECHANICS</li>
                    <li>BLUEPRINT(VISUAL CODING)  </li>
                </ul>
            </section>
            <section className="interests-sectiona">
                <h2>Interests</h2>
                <p>So, I'm really into game programming, especially the technical side of things.  I've been diving deep into C++, which is my go-to language for game dev. I'm always digging into its advanced features to see how I can squeeze out the best performance for my games. I've also got a good handle on C# – I've used it a ton with Unity to build both 2D and 3D games. And lately, I've been getting into Java. I think it has a lot of potential for mobile game development, which is something I'm curious to explore more.</p>
                <p>One of the things that really fascinates me is physics systems. It's just mind-blowing how you can use code to bring a game world to life, you know? Simulating gravity, collisions, realistic character movement – that stuff is just so cool. I'm also super into AI programming.  There's something really satisfying about creating intelligent opponents and companions that can challenge and surprise players. Oh, and I can't forget about character animation. I think it's a crucial part of storytelling and making players feel connected to the game world. I'm really eager to get better at bringing characters to life through animation.</p>
                <p>When it comes to games I love to play, I'm a big fan of RPGs.  I love how they offer these huge worlds to explore and complex character progression systems. There's always something new to discover. I also have a soft spot for FPS games. The fast-paced action and the competitive side of things really get me going.  And I'm always up for a good puzzle game. I love the challenge of figuring out intricate puzzles and that 'aha!' moment when you finally crack the solution.</p>
            </section>

            <section className="Resume-sectiona">

                <h2>Resume</h2>
                <p>Download my resume <a href="/Documents/Akshay IT.pdf" target="_blank" rel="noopener noreferrer">here</a>.</p>

            </section>
        </div>
    );
}