import { useParams } from 'react-router-dom';
import projectsmahindra from '../assets/images/projectsmahindra.jpeg';
import aguaviva from '../assets/images/aguaviva.jpeg';

function ProjectDetail() {
  const { id } = useParams();
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

  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <p className="text-white text-center">Project not found!</p>;
  }

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold text-white text-center mb-8">{project.name}</h1>
      <div className="flex flex-col items-center">
        <img src={project.img} alt={project.name} className="w-[400px] h-[300px] object-cover mb-8" />
        <p className="text-white text-center">{project.description}</p>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <button className="border-2 border-green-500 text-white mt-4 px-4 py-2 rounded-lg">
            Check in GitHub
          </button>
        </a>
      </div>
    </main>
  );
}

export default ProjectDetail;
