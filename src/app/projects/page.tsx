import { personalProjects, schoolProjects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const sortByStatus = (a: { status?: string }, b: { status?: string }) => {
    if (a.status === 'In Progress' && b.status !== 'In Progress') return -1;
    if (a.status !== 'In Progress' && b.status === 'In Progress') return 1;
    return 0;
  };

  return (
    <section className="max-w-3xl mx-auto pt-4 px-4 sm:pt-10">
      <h1 className="text-3xl sm:text-4xl font-tinos mb-6 text-amaranth-purple">My Projects</h1>
      <p className="sm:text-lg mb-14">
        This page showcases some of my personal and school projects. 
        It’s still a work in progress, and I will be adding more of my previous projects over time.
      </p>

      <h2 className="text-3xl font-tinos mb-6 text-tyrian-purple">Personal Projects</h2>

      <div className="flex flex-col space-y-4">
        {personalProjects.sort(sortByStatus).map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>

      <h2 className="text-3xl font-tinos mt-10 mb-6 text-tyrian-purple">School Projects</h2>
      
      <div className="flex flex-col space-y-4">
        {schoolProjects.sort(sortByStatus).map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}
