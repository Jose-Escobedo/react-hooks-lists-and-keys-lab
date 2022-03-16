import React from "react";

function ProjectItem({ name, about, technologies }) {
  const techarr = technologies.map((technology) => {
    return <span>{technology}</span>;
  });
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{techarr}</div>
    </div>
  );
}

export default ProjectItem;
