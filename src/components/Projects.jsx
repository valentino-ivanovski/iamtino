import React from 'react';

const projects = [
  {
    title: "Mandelbrot Set Explorer",
    image: "src/assets/mandelbrot.png",
    description: "Mandelbrot set explorer made in Java, featuring a custom GUI which can run in sequential, parallel or distributed mode.",
  },
  {
      title: "Project 3",
      image: "src/assets/pokedex.png",
      description: "Glitchy portfolio showcase",
    },
    {
      title: "Project 5",
      image: "src/assets/realestate.png",
      description: "Distorted landing page concept",
    },
    {
      title: "Project 2",
      image: "src/assets/soundshift.png",
      description: "Unconventional e-commerce platform",
    },
  {
    title: "Project 4",
    image: "src/assets/todolist.png",
    description: "Raw social media dashboard",
  },
  {
    title: "Project 5",
    image: "src/assets/realestate.png",
    description: "Distorted landing page concept",
  },
  {
    title: "Project 6",
    image: "src/assets/pushups.png",
    description: "Anti-UI web application",
  },
];

function Projects() {
  return (
    <div className="w-screen overflow-x-auto">
      <div className="flex flex-nowrap gap-8 p-8 min-w-max">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="flex-shrink-0 w-[600px] flex flex-col items-center"
          >
            <div className="w-full h-[380px] bg-transparent mb-4 hover:scale-102 transition-transform duration-500">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center font-['Generic-G50'] text-black dark:text-white">
              <h3 className="text-2xl mb-2 tracking-wider">{project.title}</h3>
              <p className="text-lg opacity-100 max-w-md">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;