import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from './projects.js';

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const foundProject = projects.find(proj => proj.id === parseInt(id));
    setProject(foundProject);
  }, [id]);

  const goBack = () => {
    navigate("/");
  };

  const toggleSection = section => {
    setActiveSection(activeSection === section ? null : section);
  };

  if (!project) {
    return (
      <div>
        <div>Project not found or loading...</div>
      </div>
    );
  }

  return (
    <div className='' >
      <div className="show-details-container">
        <h1>Project Details</h1>
        <p className="show-quote">A taste of the extraordinary in every project.</p>
        <div className="show-detail-view">
          <div className="show-image-container">
            <img src={project.image} alt={project.name} className="show-project-image" />
          </div>
          <div className="show-project-info">
            <h2>{project.name}</h2>
            <p className="show-description">{project.description}</p>
            <p className="show-github">
              GitHub Repository: <a target='_blank' href={project.github}>{project.github}</a>
            </p>
            <button onClick={goBack} className="show-go-back-button">
              Go Back
            </button>
          </div>
        </div>
        <div className="show-dropdown-container">
          <div className="show-dropdown">
            <button className="show-dropbtn" onClick={() => toggleSection('features')}>
              Features
            </button>
            <div className={`show-dropdown-content ${activeSection === 'features' ? 'active' : ''}`}>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="show-dropdown">
            <button className="show-dropbtn" onClick={() => toggleSection('installation')}>
              Installation
            </button>
            <div className={`show-dropdown-content ${activeSection === 'installation' ? 'active' : ''}`}>
              <ul>
                {project.installation.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
          {project.usage && (
            <div className="show-dropdown">
              <button className="show-dropbtn" onClick={() => toggleSection('usage')}>
                Usage
              </button>
              <div className={`show-dropdown-content ${activeSection === 'usage' ? 'active' : ''}`}>
                {typeof project.usage === 'string' ? (
                  <p>{project.usage}</p>
                ) : (
                  <ul>
                    {Object.entries(project.usage).map(([key, value], index) => (
                      <li key={index}>
                        <strong>{value}</strong> 
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
