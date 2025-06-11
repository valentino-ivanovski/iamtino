import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [visible, setVisible] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

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
    <AnimatePresence>
      {visible && (
        <motion.div
          className={`fixed top-8 z-1000 flex flex-row pb-3 pt-3
            rounded-md items-center justify-center w-80 sm:w-lg
            bg-white mix-blend-difference`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
          <nav className="flex flex-row justify-between gap-13 sm:gap-16 sm:gap-36 text-md mt-1">
            <motion.ul
              className="cursor-pointer text-sm text-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => scrollToSection("HOME")}
            >
              HOME
            </motion.ul>
            <motion.ul
              className="cursor-pointer text-sm text-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => scrollToSection("PROJECTS")}
            >
              PROJECTS
            </motion.ul>
            <motion.ul
              className="cursor-pointer text-sm text-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => scrollToSection("ABOUT")}
            >
              ABOUT
            </motion.ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Header;