import { useState, useEffect } from "react";

function Header() {
  const [visible, setVisible] = useState(false);
  const [atTop, setAtTop] = useState(true);

  // Handle visibility after 3.5s
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll position detection
  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      className={`fixed top-8 z-1000 flex flex-row pb-3 pt-3
        rounded-sm items-center justify-center w-80 sm:w-lg
        transition-all duration-600 bg-white dark:bg-black
        ${atTop ? "shadow-none" : "shadow-md dark:shadow-none"} ${
          visible ? "" : "hidden pointer-events-none"
        }`}
    >
      <nav className="flex flex-row justify-between gap-13 sm:gap-16 sm:gap-36 text-md mt-1">
        <ul
          className="cursor-pointer dark:brightness-85 text-sm text-black dark:text-white"
          onClick={() => scrollToSection("HOME")}
        >
          HOME
        </ul>
        <ul
          className="cursor-pointer dark:brightness-85 text-sm text-black dark:text-white"
          onClick={() => scrollToSection("PROJECTS")}
        >
          PROJECTS
        </ul>
        <ul
          className="cursor-pointer dark:brightness-85 text-sm text-black dark:text-white"
          onClick={() => scrollToSection("ABOUT")}
        >
          ABOUT
        </ul>
      </nav>
    </div>
  );
}

export default Header;