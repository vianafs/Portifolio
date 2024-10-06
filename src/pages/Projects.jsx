import { Link } from 'react-router-dom';
import projectsmahindra from '../assets/images/projectsmahindra.jpeg';
import aguaviva from '../assets/images/aguaviva.jpeg';

function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Challenge Mahindra',
      description: 'Project on Formula E carried out in partnership with Tech Mahindra.',
      img: projectsmahindra,
      githubLink: 'https://vianafs.github.io/challenge/'
    },
    {
      id: 2,
      name: 'Global Solution',
      description: 'Environmental aid project in partnership with Ocean Brazil 2024.',
      img: aguaviva, 
      githubLink: 'https://vianafs.github.io/GS/'
    }
  ];

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold text-white text-center mb-8">My Projects</h1>
      <div className="flex justify-around flex-wrap">
        {projects.map((project) => (
          <div key={project.id} className="border-2 border-gray-500 rounded-lg p-4 w-[350px] m-4">
            <img
              src={project.img}
              alt={project.name}
              className="w-[300px] h-[200px] object-cover"
            />
            <p className="mt-4 text-white text-center">{project.name}</p>
            <Link to={`/projects/${project.id}`}>
              <button className="border-2 border-blue-500 text-white mt-4 px-4 py-2 rounded-lg w-full">
                See Details
              </button>
            </Link>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <button className="border-2 border-green-500 text-white mt-4 px-4 py-2 rounded-lg w-full">
                Check in GitHub
              </button>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Projects;
