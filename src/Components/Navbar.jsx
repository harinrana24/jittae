import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faFileAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll";

function Navbar() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (icon) => {
    setHoveredIcon(icon);
  };

  // const scrollToSection = (id) => {
  //   const section = document.getElementById(id);
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth' });
  //onClick={() => scrollToSection('contact')}
  //   }
  // };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-icons">
          <li>
            <Link to="home"  className={`icon ${hoveredIcon === 'home' ? 'hovered' : ''}`} onMouseEnter={() => handleIconHover('home')}>
              <FontAwesomeIcon icon={faHome} />
              <span className="nav-text">Home</span>
            </Link>
          </li>
          <li>
            <Link to="about"  className={`icon ${hoveredIcon === 'about' ? 'hovered' : ''}`} onMouseEnter={() => handleIconHover('about')}>
              <FontAwesomeIcon icon={faUser} />
              <span className="nav-text">About</span>
            </Link>
          </li>
          <li>
            <Link to="resume" className={`icon ${hoveredIcon === 'resume' ? 'hovered' : ''}`} onMouseEnter={() => handleIconHover('resume')}>
              <FontAwesomeIcon icon={faFileAlt} />
              <span className="nav-text">Resume</span>
            </Link>
          </li>
          <li>
            <Link to="projects" className={`icon ${hoveredIcon === 'projects' ? 'hovered' : ''}`} onMouseEnter={() => handleIconHover('projects')}>
              <FontAwesomeIcon icon={faCode} />
              <span className="nav-text">Projects</span>
            </Link>
          </li>
          <li>
            <Link to="contact" className={`icon ${hoveredIcon === 'contact' ? 'hovered' : ''}`} onMouseEnter={() => handleIconHover('contact')}>
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="nav-text">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
