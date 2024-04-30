import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experience } from './exp';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <h1>Work Experience</h1>
      <div>
        <VerticalTimeline>
          
          {experience.map((element) => {
           return( <VerticalTimelineElement
              key={element.id}
             className='work'
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              iconClassName='vertical-timeline-element-icon'
              icon={<img src={element.cLogo} alt="Company Logo" />}>
              
              <h3 className="vertical-timeline-element-title">
                {element.Position}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.CompanyName}
              </h5>
              <span>{element.Date}</span>

              <p id="description">{element.Summary}</p>
            </VerticalTimelineElement>
            )})}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Resume;
