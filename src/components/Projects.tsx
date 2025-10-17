import { personalProjects, work } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const sortByStatus = (a: { status?: string }, b: { status?: string }) => {
    if (a.status === 'In Progress' && b.status !== 'In Progress') return -1;
    if (a.status !== 'In Progress' && b.status === 'In Progress') return 1;
    return 0;
  };

  return (
    <div className="mx-auto w-10/12 lg:w-4xl py-10 content-center space-y-10">
      <div className="divider divider-start font-mono">
        <h2>Projects</h2>
      </div>

      <div className="flex flex-col space-y-2">
        {personalProjects.sort(sortByStatus).map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>

      <div className="divider divider-start font-mono">
        <h2 className="font-mono">Other Work</h2>
      </div>

      <div className="flex flex-col space-y-2">
        {work.sort(sortByStatus).map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
}
