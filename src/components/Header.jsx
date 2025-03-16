import { useState, useEffect } from "react";

function Header() {
  const [visible, setVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false); // New state to track scrolling

  // Handle visibility after 3.5s
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll detection
  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setIsScrolling(true); // Set scrolling to true when scroll starts

      // Clear previous timeout and set a new one
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false); // Set scrolling to false after 250ms of no scrolling
      }, 250); // Adjust this delay as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout); // Clean up timeout on unmount
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const top = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed top-13 sm:top-8 z-1000 dark:bg-[rgba(0,0,0,0.7)] flex flex-row pb-3 pt-3 bg-[rgba(255,255,255,0.7)]
        rounded-sm items-center justify-center backdrop-blur-sm w-sm sm:w-lg
        transition-all duration-400 ${
          isScrolling ? "shadow-[0px_2px_8px_rgba(0,0,0,0.1)]" : "shadow-none"
        } ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <nav className="flex flex-row justify-between gap-16 sm:gap-36 text-md mt-1">
        <ul
          className="cursor-pointer text-sm text-black dark:text-white"
          onClick={() => scrollToSection("HOME")}
        >
          HOME
        </ul>
        <ul
          className="cursor-pointer text-sm text-black dark:text-white"
          onClick={() => scrollToSection("PROJECTS")}
        >
          PROJECTS
        </ul>
        <ul
          className="cursor-pointer text-sm text-black dark:text-white"
          onClick={() => scrollToSection("ABOUT")}
        >
          ABOUT
        </ul>
      </nav>
    </div>
  );
}

export default Header;