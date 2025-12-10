import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "react-fast-marquee";
import MandelbrotImage from "../assets/untitled folder/mandelbrot.webp";
import PokedexImage from "../assets/untitled folder/pokedex.webp";
import RealEstateImage from "../assets/untitled folder/realestate.webp";
import SoundshiftImage from "../assets/untitled folder/soundshift.webp";
import PushupsImage from "../assets/untitled folder/pushups.webp";
import YachtImage from "../assets/untitled folder/yacht.webp";
import OneRoofing from "../assets/untitled folder/one.webp";
import Isa from "../assets/untitled folder/isa.webp";
import ilovemybike from "../assets/untitled folder/bike.avif";

const projects = [
  {
    title: "Soundshift",
    image: SoundshiftImage,
    description: "Music discovery platform with user profiles, recommendations, and YouTube embedding.",
    link: "https://soundshlft.vercel.app",
  },
  {
    title: "Isa's Kombucha",
    image: Isa,
    description: "Official redesign of Isa's Kombucha site using Next.js, Tailwind CSS, and Framer Motion.",
    link: "https://isa-kombucha.vercel.app",
  },
  {
    title: "I 💚 MY BIKE",
    image: ilovemybike,
    description: "Online bike store with product listings, cart, and checkout using React and Supabase.",
    link: "https://ilovemybike.vercel.app",
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
    title: "Real Estate Landing Page",
    image: RealEstateImage,
    description: "Responsive real estate page with modern design using HTML, CSS, and JS.",
    link: "https://luxestate-project.netlify.app",
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
    title: "Evil Pushup Challenge",
    image: PushupsImage,
    description: "MacOS app for hourly pushup tracking with timer, notifications, and progress.",
    link: "https://github.com/valentino-ivanovski/pushupApp",
  },
];

function Projects() {
  const [width, setWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(40);
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carousel = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    if (carousel.current && !isAutoScroll) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      carousel.current.scrollLeft = scrollPosition;
    }
  }, [carousel, isAutoScroll, scrollPosition]);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      let newWidth = Math.min(Math.max(windowWidth / 35, 35), 45);
      setCardWidth(newWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDrag = (e, info) => {
    if (carousel.current) {
      setScrollPosition(carousel.current.scrollLeft - info.offset.x);
    }
  };

  const handleMarqueeUpdate = () => {
    if (carousel.current) {
      setScrollPosition(carousel.current.scrollLeft);
    }
  };

  const toggleAutoScroll = () => {
    setIsAutoScroll(!isAutoScroll);
  };

  const renderProjectCard = (project, index) => (
    <motion.div
      key={index}
      className="min-w-[20rem] min-h-[25rem] p-2 ml-10"
      style={{
        width: `${cardWidth}vw`,
        minWidth: "500px",
        maxWidth: "500px",
        maxHeight: "600px",
      }}
    >
      <div className="flex flex-col items-center border border-gray-300 dark:border-gray-500 rounded-lg bg-white dark:bg-black p-6">
        <div
          className="w-full mb-3"
          style={{
            aspectRatio: "625 / 380",
            maxHeight: "300px",
          }}
        >
          <img
            onClick={() => window.open(project.link, "_blank")}
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-contain rounded-md select-none dark:brightness-85 ${
              isAutoScroll ? "cursor-default" : "cursor-pointer"
            }`}
            loading="lazy"
            draggable={false}
          />
        </div>
        <div className="text-center text-lg font-['Generic-G50'] text-black dark:text-white">
          <h3
            className={`mb-2 pb-0 tracking-wider dark:brightness-85 select-none ${
              isAutoScroll ? "cursor-default" : "cursor-grab"
            }`}
            style={{
              fontSize: `${Math.min(cardWidth / 20, 1.5)}rem`,
            }}
          >
            {project.title}
          </h3>
          <p
            className={`opacity-100 mb-2 max-w-md dark:brightness-85 select-none ${
              isAutoScroll ? "cursor-default" : "cursor-grab"
            }`}
            style={{
              fontSize: `${Math.min(cardWidth / 25, 1.125)}rem`,
            }}
          >
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
    exit: { opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  return (
    <div className="relative w-screen flex flex-col justify-center min-h-screen overflow-hidden p-0 sm:p-0">
      <AnimatePresence mode="wait">
        {isAutoScroll ? (
          <motion.div
            key="marquee"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Marquee
              speed={50}
              gradient={false}
              onCycleComplete={handleMarqueeUpdate}
              className="flex will-change-transform"
            >
              {projects.map((project, index) => renderProjectCard(project, index))}
            </Marquee>
          </motion.div>
        ) : (
          <motion.div
            key="carousel"
            ref={carousel}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            drag={!isMobile ? "x" : false}
            dragConstraints={!isMobile ? { right: 0, left: -width } : undefined}
            dragTransition={!isMobile ? { bounceDamping: 30 } : undefined}
            dragElastic={!isMobile ? 0.5 : undefined}
            onDrag={!isMobile ? handleDrag : undefined}
            className={`flex will-change-transform ${
              !isMobile ? "cursor-grab active:cursor-grabbing" : "overflow-x-auto"
            }`}
            style={{
              scrollSnapType: isMobile ? "x mandatory" : undefined,
              WebkitOverflowScrolling: isMobile ? "touch" : undefined,
            }}
          >
            {projects.map((project, index) => renderProjectCard(project, index))}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex justify-center mt-4">
        <p
          onClick={toggleAutoScroll}
          className="text-black dark:text-white underline cursor-pointer hover:opacity-80 transition-opacity duration-200"
        >
          {isAutoScroll ? "Auto-Scroll: ON" : "Auto-Scroll: OFF"}
        </p>
      </div>
    </div>
  );
}

export default Projects;