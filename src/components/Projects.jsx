import React from 'react';

const projects = [
  {
    title: "Mandelbrot Set Explorer",
    image: "src/assets/mandelbrot.png",
    description: "Mandelbrot set explorer made in Java, featuring a custom GUI which can run in sequential, parallel or distributed mode.",
  },
  {
    title: "Project 2",
    image: "src/assets/soundshift.png",
    description: "Unconventional e-commerce platform",
  },
  {
    title: "Project 3",
    image: "path/to/image3.jpg",
    description: "Glitchy portfolio showcase",
  },
  {
    title: "Project 4",
    image: "path/to/image4.jpg",
    description: "Raw social media dashboard",
  },
  {
    title: "Project 5",
    image: "path/to/image5.jpg",
    description: "Distorted landing page concept",
  },
  {
    title: "Project 6",
    image: "path/to/image6.jpg",
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
            <div className="text-center font-['Generic-G50'] text-black dark:text-black">
              <h3 className="text-2xl mb-2 tracking-wider">{project.title}</h3>
              <p className="text-lg opacity-80 max-w-md">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;