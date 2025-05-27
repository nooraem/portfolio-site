import { personalProjects, schoolProjects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const sortByStatus = (a: { status?: string }, b: { status?: string }) => {
    if (a.status === 'In Progress' && b.status !== 'In Progress') return -1;
    if (a.status !== 'In Progress' && b.status === 'In Progress') return 1;
    return 0;
  };

  return (
    <section className="max-w-3xl mx-auto pt-4 px-2 sm:pt-10">
      <h1 className="font-tinos text-3xl sm:text-4xl mb-6 text-pink">
        My Projects
      </h1>

      <p className="sm:text-lg mb-12">
        This page showcases some of my personal and school projects. 
        It is still a work in progress, and I will be adding more of my previous projects over time.
      </p>

      <h2 className="font-tinos text-2xl sm:text-3xl mb-6 text-dark-pink">Personal Projects</h2>

      <div className="flex flex-col space-y-4">
        {personalProjects.sort(sortByStatus).map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>

      <h2 className="font-tinos text-2xl sm:text-3xl my-6 text-dark-pink">School Projects</h2>
      
      <div className="flex flex-col space-y-4">
        {schoolProjects.sort(sortByStatus).map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}
