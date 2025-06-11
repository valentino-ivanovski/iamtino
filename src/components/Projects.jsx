import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import MandelbrotImage from "../assets/untitled folder/mandelbrot.webp";
import PokedexImage from "../assets/untitled folder/pokedex.webp";
import RealEstateImage from "../assets/untitled folder/realestate.webp";
import SoundshiftImage from "../assets/untitled folder/soundshift.webp";
import PushupsImage from "../assets/untitled folder/pushups.webp";
import TodoListImage from "../assets/untitled folder/todolist.webp";
import YachtImage from "../assets/untitled folder/yacht.webp";
import OneRoofing from "../assets/untitled folder/one.webp";
import Isa from "../assets/untitled folder/isa.webp";

const projects = [
  {
    title: "Isa's Kombucha",
    image: YachtImage,
    description: "Official redesign of Isa's Kombucha site using Next.js, Tailwind CSS, and Framer Motion.",
    link: "https://isa-kombucha.vercel.app",
  },
  {
    title: "Yacht Moment",
    image: YachtImage,
    description: "Next.js yacht rental site with responsive design, slideshows, forms, and SEO.",
    link: "https://yachtmoment.com",
  },
  {
    title: "One Roofing Services",
    image: OneRoofing,
    description: "Next.js roofing site with forms, galleries, responsive layout, and SEO.",
    link: "https://one-roofing.vercel.app",
  },
  {
    title: "Mandelbrot Set Explorer",
    image: MandelbrotImage,
    description: "Java GUI for exploring the Mandelbrot Set in sequential, parallel, or distributed mode.",
    link: "https://github.com/valentino-ivanovski/mandelbrotset.v1",
  },
  {
    title: "Pokédex in React",
    image: PokedexImage,
    description: "React Pokédex with search, pagination, and Pokémon details using PokéAPI.",
    link: "https://tino-pokedex.netlify.app",
  },
  {
    title: "Real Estate Landing Page",
    image: RealEstateImage,
    description: "Responsive real estate page with modern design using HTML, CSS, and JS.",
    link: "https://luxestate-project.netlify.app",
  },
  {
    title: "Soundshift",
    image: SoundshiftImage,
    description: "Music discovery platform with user profiles, recommendations, and YouTube embedding.",
    link: "https://github.com/valentino-ivanovski/Soundshift",
  },
  {
    title: "Evil Pushup Challenge",
    image: PushupsImage,
    description: "MacOS app for hourly pushup tracking with timer, notifications, and progress.",
    link: "https://github.com/valentino-ivanovski/pushupApp",
  },
];

function Projects() {
  const controls = useAnimationControls();
  const containerRef = useRef(null);
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  const [cardWidth, setCardWidth] = useState(40); // Initial width in vw

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
    if (!containerRef.current) return;
    const scrollContainer = containerRef.current;
    const contentWidth = scrollContainer.scrollWidth / 2;

    if (isAutoScroll) {
      controls.start({
        x: [0, -contentWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 50,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
      controls.set({ x: 0 });
    }
  }, [isAutoScroll, cardWidth, controls]);

  const toggleAutoScroll = () => {
    setIsAutoScroll((prev) => !prev);
  };

  const displayedProjects = isAutoScroll ? projects.concat(projects) : projects;

  return (
    <div className="relative w-screen flex flex-col justify-center min-h-screen overflow-hidden p-0 sm:p-0">
      {/* Scrolling Container */}
      <div className={`${isAutoScroll ? "overflow-hidden" : "overflow-x-auto"} scrollbar-hide scroll-smooth`}>
        <motion.div
          ref={containerRef}
          animate={controls}
          className="inline-flex flex-nowrap gap-2 sm:gap-8 p-0 sm:p-5 w-full will-change-transform"
          style={{ x: 0 }}
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
              <div className="text-center text-lg font-['Generic-G50'] text-black dark:text-white">
                <h3
                  className="mb-2 pb-0 cursor-default tracking-wider dark:brightness-85 dark:hover:text-gray-300"
                  style={{
                    fontSize: `${Math.min(cardWidth / 20, 1.5)}rem`,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="opacity-100 mb-2 cursor-default max-w-md dark:brightness-85"
                  style={{
                    fontSize: `${Math.min(cardWidth / 25, 1.125)}rem`,
                  }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
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