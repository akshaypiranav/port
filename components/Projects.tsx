import { useEffect, useState } from 'react';
import Link from 'next/link';
interface Project {
  id: string;
  projectName: string;
  githubLink: string;
  stackUsed: string;
  imageLink: string; 
  error : string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://portt-c5edc-default-rtdb.firebaseio.com/.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data) {
          // Convert the object to an array of project objects
          const projectList: Project[] = Object.keys(data).map(key => ({ id: key, ...data[key] }));
          setProjects(projectList);
        } else {
          setProjects([]);
        }
      } catch (error) {
        setError("Error");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div className='display-4 text-center fw-bold'>Loading Projects...</div>;
  }

  if (error) {
    return <div className='display-4 text-center fw-bold'>Firebase Access Denied !!</div>;
  }

  if (projects.length === 0) {
    return <div className='display-4 text-center fw-bold'>No projects found.</div>;
  }

  return (
    <div className="container mt-5 mb-5" >
      <h1 className="text fw-bold mb-5">Projects</h1>
      {projects.map((project) => (
      <div className="row justify-content-center mt-4">
          <div key={project.id} className="col-md-6 col-sm-6 col-xs-6 col-lg-6">
            <img src={project.imageLink} width={300} height={300} alt="" className="img-fluid rounded d-block mx-auto" />
            <h5 className="text-center mt-2">{project.projectName}</h5>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-6 col-lg-6 mt-4">
            <Link href={project.githubLink} target='_blank'>
            <h4 className="text">{project.projectName}</h4>
            </Link>
            <h5>Stack Used: {project.stackUsed}</h5>
          </div>

      </div>
              ))}
    </div>
  );
};

export default Projects;
