import { useState } from 'react';
import { Project } from '@nexplore/mina-core';
import './App.module.css';

export function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchProjects = async () => {
    const response = await fetch('/v1/projects');
    const projects = await response.json();
    setProjects(projects);
    setLoading(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (projects.length === 0) {
    return (
      <div>
        <button onClick={fetchProjects}>Fetch projects</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.name}>
            <b>{project.name}</b> - {project.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
