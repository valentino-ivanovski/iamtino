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
  const [cardWidth, setCardWidth] = useState(40); // Initial width in vw
  const animationFrame = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on render
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      let newWidth = Math.min(Math.max(windowWidth / 35, 35), 45); // Scale between 35vw and 45vw
      setCardWidth(newWidth);
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let startTime = null;
    const duration = 50000; // Duration for one full loop in ms (adjust for speed)

    const smoothScroll = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;

      if (isAutoScroll && !isUserScrolling) {
        const contentWidth = scrollContainer.scrollWidth / 2; // Half, since content is duplicated
        const translateX = -(progress * contentWidth) % contentWidth; // Continuous loop
        scrollContainer.style.transform = `translateX(${translateX}px)`;

        // Reset startTime for seamless looping
        if (progress >= 1) startTime = timestamp;
      }

      animationFrame.current = requestAnimationFrame(smoothScroll);
    };

    if (isAutoScroll && !isUserScrolling) {
      scrollContainer.style.transition = 'none'; // No transition for CSS animation
      animationFrame.current = requestAnimationFrame(smoothScroll);
    } else {
      scrollContainer.style.transform = "translateX(0)";
      scrollContainer.scrollLeft = 0;
    }

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [isAutoScroll, isUserScrolling, cardWidth]);

  const handleScroll = () => {
    if (isAutoScroll && !isUserScrolling) {
      setIsUserScrolling(true);
    }
  };

  const handleScrollEnd = () => {
    if (isAutoScroll) {
      setTimeout(() => setIsUserScrolling(false), 300); // Reduced delay for responsiveness
    }
  };

  const toggleAutoScroll = () => {
    setIsAutoScroll((prev) => !prev);
  };

  const displayedProjects = isAutoScroll ? projects.concat(projects) : projects;

  return (
    <div className="relative w-screen flex flex-col justify-center min-h-screen overflow-hidden p-0 sm:p-0">
      {/* Scrolling Container */}
      <div className="w- overflow-x-auto scrollbar-hide scroll-smooth">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onTouchEnd={handleScrollEnd}
          onMouseUp={handleScrollEnd}
          className="inline-flex flex-nowrap gap-2 sm:gap-8 p-0 sm:p-5 w-full will-change-transform"
        >
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center border border-gray-300 dark:border-gray-500 mb-4 sm:mb-0 rounded-lg bg-white dark:bg-black p-6 sm:p-6"
              style={{
                width: `${cardWidth}vw`,
                minWidth: "500px",
                maxWidth: "500px",
                maxHeight: "600px",
              }}
            >
              <div
                className="w-full mb-3 sm:mb-4"
                style={{
                  aspectRatio: "625 / 380",
                  maxHeight: "300px",
                }}
              >
                <img
                  onClick={() => window.open(project.link, "_blank")}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain cursor-pointer dark:brightness-85 rounded-md"
                  loading="lazy"
                />
              </div>
              <div className="text-center font-['Generic-G50'] text-black dark:text-white">
                <h3
                  className="mb-2 cursor-default tracking-wider dark:brightness-85 dark:hover:text-gray-300"
                  style={{
                    fontSize: `${Math.min(cardWidth / 20, 1.5)}rem`,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="opacity-100 cursor-default max-w-md dark:brightness-85"
                  style={{
                    fontSize: `${Math.min(cardWidth / 25, 1.125)}rem`,
                  }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pause Button Below Projects */}
      <div className="mt-4 sm:mt-6 text-center">
        <span
          onClick={toggleAutoScroll}
          className="underline cursor-pointer text-black dark:text-white dark:brightness-85 transition-all duration-200"
        >
          AUTO-SCROLL: {isAutoScroll ? "ON" : "OFF"}
        </span>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
          -webkit-overflow-scrolling: touch;
        }
        .will-change-transform {
          will-change: transform;
          transform: translateZ(0); /* Force GPU acceleration */
        }
        @media (max-width: 640px) {
          .inline-flex {
            gap: 8px; /* Smaller gap in phone mode */
            padding: 0 8px;
          }
          .flex-shrink-0 {
            padding: 8px; /* Reduced padding in phone mode */
          }
        }
      `}</style>
    </div>
  );
}

export default Projects;