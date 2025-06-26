import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';
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
    image: Isa,
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true, speed: 1 })
  ]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [cardWidth, setCardWidth] = useState(40);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;
    const playOrStop = autoScroll.isPlaying() ? autoScroll.stop : autoScroll.play;
    playOrStop();
    setIsPlaying(!isPlaying);
  }, [emblaApi, isPlaying]);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;
    setIsPlaying(autoScroll.isPlaying());
    emblaApi
      .on('autoScroll:play', () => setIsPlaying(true))
      .on('autoScroll:stop', () => setIsPlaying(false))
      .on('reInit', () => setIsPlaying(autoScroll.isPlaying()));
  }, [emblaApi]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <div className="relative w-screen flex flex-col justify-center min-h-screen overflow-hidden p-0 sm:p-0 max-w-5xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y -ml-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center border border-gray-300 dark:border-gray-500 rounded-lg bg-white dark:bg-black p-6 mx-2 sm:mx-4 flex-[0_0_45%]"
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
        </div>
      </div>

      <div className="grid grid-cols-[auto_1fr_auto] gap-3 mt-6 items-center">
        <div className="grid grid-cols-2 gap-2">
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-500 text-gray-700 dark:text-white disabled:text-gray-400 cursor-pointer"
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-500 text-gray-700 dark:text-white disabled:text-gray-400 cursor-pointer"
          />
        </div>
        <button
          onClick={toggleAutoplay}
          className="justify-self-end bg-transparent border-2 border-gray-500 rounded-xl text-gray-700 dark:text-white font-bold text-sm px-6 py-2 cursor-pointer"
        >
          {isPlaying ? 'Stop' : 'Start'}
        </button>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .flex-[0_0_45%] {
            flex: 0 0 80%;
          }
        }
      `}</style>
    </div>
  );
}

export default Projects;