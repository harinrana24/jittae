import React from 'react'

const About = () => {
  return (
  <section id="about" className='about' >
<h1>ABOUT</h1>
<div className="hero">
<div className="photo">
<img src="./profile-img.jpg" alt="My pho" />
</div>
<div className="portfolio-container">
      <div className="portfolio-info">
        <h3 className="portfolio-title">Ethical Hacker</h3>
        <p className="portfolio-subtitle">Pursuing Bachelor of Engineering in Computer Science from Chandigarh University.</p>
        <div className="portfolio-details">
          <div className="portfolio-detail">
            <strong>Birthday:</strong> 15 January 2000
          </div>
          <div className="portfolio-detail">
            <strong>Phone:</strong> +91 8700979172
          </div>
          <div className="portfolio-detail">
            <strong>City:</strong> Gurgaon, Haryana
          </div>
          <div className="portfolio-detail">
            <strong>Age:</strong> 20
          </div>
          <div className="portfolio-detail">
            <strong>Degree:</strong> Bachelor of Engineering
          </div>
          <div className="portfolio-detail">
            <strong>Email-ID:</strong> jitesh101.kumar@protonmail.com
          </div>
        </div>
        <p className="portfolio-bio">
          A Cyber Security Enthusiast, Bug Bounty Hunter, and a Technical Speaker on Bug Bounty & Cyber Security. Have Secured many Private and Indian Government websites from Serious Vulnerabilities.
        </p>
      </div>
    </div>
      </div>
    </section>


  )
}

export default About