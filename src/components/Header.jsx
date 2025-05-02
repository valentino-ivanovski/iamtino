import { useState, useEffect } from "react";

function Header() {
  const [visible, setVisible] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [isHidden, setIsHidden] = useState(false);
  const [isPhoneMode, setIsPhoneMode] = useState(window.innerWidth <= 640);

  // Handle visibility after 3.5s
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  // Handle resize to detect phone mode
  useEffect(() => {
    const handleResize = () => {
      setIsPhoneMode(window.innerWidth <= 640);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle scroll position and section detection
  useEffect(() => {
    let scrollTimeout = null;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setAtTop(currentScrollY === 0);

      // In phone mode, check if scrolled past the HOME section
      if (isPhoneMode && visible) {
        const homeSection = document.getElementById("HOME");
        if (homeSection) {
          const homeBottom = homeSection.getBoundingClientRect().bottom + window.scrollY;
          if (currentScrollY > homeBottom) {
            // Scrolled past the HOME section
            setIsHidden(true);
          } else {
            // Within or above the HOME section
            setIsHidden(false);
          }
        }
      }

      // Reset hidden state after scrolling stops
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(() => {
        if (isPhoneMode && visible) {
          setIsHidden(false); // Show header when scrolling stops
        }
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [isPhoneMode, visible]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const top = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top,
      behavior: "smooth",
    });
    // Ensure header is visible after clicking a nav link in phone mode
    if (isPhoneMode) {
      setIsHidden(false);
    }
  };

  return (
    <div
      className={`fixed top-8 z-1000 flex flex-row pb-3 pt-3
        rounded-sm items-center justify-center w-80 sm:w-lg
        transition-all duration-600 bg-white/70 backdrop-blur-lg dark:bg-black/70 dark:backdrop-blur-lg
        ${atTop ? "shadow-none" : "shadow-md dark:shadow-none"} ${
          visible ? "" : "hidden pointer-events-none"
        } ${isPhoneMode && isHidden ? "-translate-y-20 opacity-0 pointer-events-none" : "translate-y-0 opacity-100"}`}
    >
      <nav className="flex flex-row justify-between gap-13 sm:gap-36 text-md mt-1">
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