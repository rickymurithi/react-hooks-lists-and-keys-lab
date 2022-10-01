import React from "react";


function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/*a <span> for each technology in the technologies array */}
        { technologies.map((technologies, index) => {
          return <span key={index}> {technologies} </span> })}
            
      </div>
    </div>
  );
}

export default ProjectItem;
