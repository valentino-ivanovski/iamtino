import { useState, useEffect } from "react";

function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed top-15 sm:top-8 z-1000 dark:bg-[rgba(0,0,0,0.8)] flex flex-row pb-3 pt-3 bg-[rgba(255,255,255,0.8)]
        rounded-sm items-center justify-center backdrop-blur-sm w-sm sm:w-lg
        transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <nav className="flex flex-row justify-between gap-16 sm:gap-36 text-md mt-1">
        <ul className="cursor-pointer text-sm text-black dark:text-white" onClick={() => scrollToSection('HOME')}>HOME</ul>
        <ul className="cursor-pointer text-sm text-black dark:text-white" onClick={() => scrollToSection('PROJECTS')}>PROJECTS</ul>
        <ul className="cursor-pointer text-sm text-black dark:text-white" onClick={() => scrollToSection('CONTACT')}>CONTACT</ul>
      </nav>
    </div>
  );
}

export default Header;
