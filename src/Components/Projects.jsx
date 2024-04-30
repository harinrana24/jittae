import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { projects } from './projects.js';

const Projects = () => {
  const navigate = useNavigate();

  const detail = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <section id='projects' className='projects'>
      <div className="projects-container" data-aos="fade-up">
        <div className="section-title">
          <h1>Projects</h1>
        </div>
        <div className="projects-list">
          {projects.map((proj) => (
            <div className="project-item app" key={proj.id}> {/* Added key prop */}
              <div className="project-link">
                <img onClick={() => detail(proj.id)} src={proj.image} className="project-image" alt={proj.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
