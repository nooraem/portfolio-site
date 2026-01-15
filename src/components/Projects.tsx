"use client";

import { useEffect, useState } from "react";
import ProjectCard from '@/components/ProjectCard';
import Link from "next/link";
import Badge from "./Badge";

type Project = {
  id: string;
  name: string;
  status?: string;
  tags?: string[];
  repo_url?: string;
  link?: string;
  description?: string;
  images?: string[];
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  const sortByStatus = (a: { status?: string }, b: { status?: string }) => {
    if (a.status !== 'In Progress' && b.status === 'In Progress') return -1;
    if (a.status === 'In Progress' && b.status !== 'In Progress') return 1;
    return 0;
  };

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/projects", { cache: "no-store" });
      setProjects(await res.json());
    })();
  }, []);

  return (
    <div className="content-center space-y-4 mx-auto w-8/9 sm:w-7/9 lg:w-12/16 xl:w-10/16 2xl:w-8/16 3xl:w-6/16 transition-colors duration-400">
      <h2 className="text-accent">
        Projects
      </h2>

      <p className="text-sm leading-6">
        Here you can view a selection of my previous projects. (There are still some projects missing from this section)
      </p>

      <div className="columns-1 md:columns-2 space-y-4">
        <div className="custom-card transition-colors duration-400">
          <div className="space-x-1 mb-3">
            <Badge badge="Photoshop" variant="tag" />  
            <Badge badge="Illustrator" variant="tag" /> 
          </div>
          
          <h3>Graphic Design</h3>

          <p className="text-xs font-extralight">
            Various designs that I&apos;ve created as a hobby—logos, ads, and more.
          </p>

          <div className="flex justify-end gap-2">
            <Link
              href="/projects/graphic-design"
              target="_self"
              className="btn btn-xs text-accent"
            >
              View designs
            </Link>
          </div>
        </div>

        {projects.sort(sortByStatus).map((project) => (
          <div key={project.id}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}
