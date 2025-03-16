import React, { useState, useRef, useEffect } from "react";
import MandelbrotImage from "../assets/mandelbrot.png";
import PokedexImage from "../assets/pokedex.png";
import RealEstateImage from "../assets/realestate.png";
import SoundshiftImage from "../assets/soundshift.png";
import PushupsImage from "../assets/pushups.png";
import TodoListImage from "../assets/todolist.png";

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
    title: "Evil Pushup Challenge",
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
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const translateX = useRef(0);
  const lastScrollLeft = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrame;

    const smoothScroll = () => {
      if (isAutoScroll && !isUserScrolling) {
        translateX.current -= 1.5;
        scrollContainer.style.transform = `translateX(${translateX.current}px)`;

        const contentWidth = scrollContainer.scrollWidth / 2;
        if (Math.abs(translateX.current) >= contentWidth) {
          translateX.current = 0;
        }

        animationFrame = requestAnimationFrame(smoothScroll);
      }
    };

    if (isAutoScroll && !isUserScrolling) {
      animationFrame = requestAnimationFrame(smoothScroll);
    } else {
      scrollContainer.style.transform = "translateX(0)";
      scrollContainer.scrollLeft = lastScrollLeft.current;
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [isAutoScroll, isUserScrolling]);

  const handleScroll = () => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    if (!isAutoScroll) {
      lastScrollLeft.current = scrollContainer.scrollLeft;
    } else if (isAutoScroll && !isUserScrolling) {
      setIsUserScrolling(true);
    }
  };

  const handleScrollEnd = () => {
    if (isAutoScroll) {
      setTimeout(() => setIsUserScrolling(false), 500);
    }
  };

  const toggleAutoScroll = () => {
    setIsAutoScroll((prev) => {
      if (prev) {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
          scrollContainer.style.transform = "translateX(0)";
          scrollContainer.scrollLeft = lastScrollLeft.current;
        }
      }
      return !prev;
    });
  };

  const displayedProjects = isAutoScroll ? projects.concat(projects) : projects;

  return (
    <div className="relative w-screen overflow-hidden transform -translate-y-10 sm:-translate-y-0">
      {/* Scrolling Container */}
      <div className="w-full overflow-x-auto scrollbar-hide scroll-smooth">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onTouchEnd={handleScrollEnd}
          onMouseUp={handleScrollEnd}
          className="flex flex-nowrap scale-75 sm:scale-100 gap-8 p-0 transform will-change-transform transition-transform"
        >
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[625px] flex flex-col items-center border border-gray-300 dark:border-gray-500 rounded-lg bg-white dark:bg-black p-4 pb-7"
            >
              <div className="w-full h-[380px] mb-4">
                <img
                  onClick={() => window.open(project.link, "_blank")}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover cursor-pointer dark:brightness-85 rounded-md"
                />
              </div>
              <div className="text-center font-['Generic-G50'] text-black dark:text-white">
                <h3 className="text-2xl mb-2 cursor-default tracking-wider dark:brightness-85 dark:hover:text-gray-300">
                  {project.title}
                </h3>
                <p className="text-lg opacity-100 cursor-default max-w-md dark:brightness-85">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
          {/* Spacer for padding at the end when auto-scroll is off */}
          {!isAutoScroll && <div className="flex-shrink-0 w-8 h-1"></div>}
        </div>
      </div>

      {/* Pause Button Below Projects */}
      <div className="pt-4 text-center">
        <span
          onClick={toggleAutoScroll}
          className="underline cursor-pointer text-black dark:text-white transition-all duration-200"
        >
          AUTO-SCROLL: {isAutoScroll ? "ON" : "OFF"}
        </span>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -webkit-overflow-scrolling: touch;
        }
        .will-change-transform {
          will-change: transform;
        }
      `}</style>
    </div>
  );
}

export default Projects;