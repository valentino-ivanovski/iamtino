import React, { useState, useRef } from 'react';
// Import images
import MandelbrotImage from '../assets/mandelbrot.png';
import PokedexImage from '../assets/pokedex.png';
import RealEstateImage from '../assets/realestate.png';
import SoundshiftImage from '../assets/soundshift.png';
import PushupsImage from '../assets/pushups.png';
import TodoListImage from '../assets/todolist.png';

const projects = [
  {
    title: "Mandelbrot Set Explorer",
    image: MandelbrotImage,
    description: "Mandelbrot set explorer made in Java, featuring a custom GUI which can run in sequential, parallel or distributed mode.",
    link: "https://github.com/valentino-ivanovski/mandelbrotset.v1",
  },
  {
    title: "Pokédex in React",
    image: PokedexImage,
    description: "Pokédex recreated in React, featuring a search bar, pagination and a detailed view of each Pokémon. Data fetched from PokéAPI.",
    link: "https://tino-pokedex.netlify.app",
  },
  {
    title: "Real Estate Landing Page",
    image: RealEstateImage,
    description: "Made with HTML, CSS and JavaScript. Features a responsive modern and professional design.",
    link: "https://luxestate-project.netlify.app",
  },
  {
    title: "Soundshift",
    image: SoundshiftImage,
    description: "Music discovery platform with user creation, music recommendations and suggestions, YouTube music embedding and much more.",
    link: "https://github.com/valentino-ivanovski/Soundshift",
  },
  {
    title: "Evil Puhsup Challenge",
    image: PushupsImage,
    description: "MacOS menu bar app that helps you do pushups every hour featuring a timer, notifications and progress tracking. Made with Swift and SwiftUI.",
    link: "https://github.com/valentino-ivanovski/pushupApp",
  },
  {
    title: "To-do List",
    image: TodoListImage,
    description: "Just a simple to-do list application made with React.",
    link: "https://todotino.netlify.app",
  },
];

function Projects() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const duplicatedProjects = [...projects, ...projects];

  const toggleScroll = () => {
    setIsPaused(prev => !prev);
  };

  return (
    <div className="w-screen overflow-hidden">
      <div 
        ref={scrollRef}
        className={`flex flex-nowrap gap-8 p-8 min-w-max animate-infinite-scroll ${isPaused ? 'paused' : ''}`}
      >
        {duplicatedProjects.map((project, index) => (
          <div 
            key={index}
            className="flex-shrink-0 w-[600px] flex flex-col items-center"
          >
            <div className="w-full h-[380px] bg-transparent mb-4 transition-transform duration-500">
              <img 
                onClick={() => window.open(project.link, "_blank")}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover cursor-pointer dark:brightness-85"
              />
            </div>
            <div className="text-center font-['Generic-G50'] text-black dark:text-white">
              <h3 
                className="text-2xl mb-2 cursor-default tracking-wider dark:brightness-85 dark:hover:text-gray-300"
              >
                {project.title}
              </h3>
              <p className="text-lg opacity-100 cursor-default max-w-md dark:brightness-85">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 text-center">
        <span
          onClick={toggleScroll}
          className="underline cursor-pointer text-black dark:text-white"
        >
          AUTO-SCROLL: {isPaused ? 'OFF' : 'ON'}
        </span>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
        }

        .animate-infinite-scroll.paused {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default Projects;