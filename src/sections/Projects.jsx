import React from 'react'
import Project from '../components/Project.jsx'
import { myProjects } from '../constants/index.js'
export default function Projects() {
  return (
   <section className="relative c-space section-spacing">
    <h2 className="text-heading">My Projects</h2>
   <div className="bg-gradient-to-r from-transparent via-neutral-700 mt-12 h-[1px] w-full">
    </div>
    {myProjects.map((project) => (<Project key={project.id} {...project}/>)) }
   </section>
  );
}
