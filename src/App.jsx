// src/App.jsx
import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header.jsx'; // Relative path
import IamTino from './components/IamTino.jsx'; // Relative path
import StickyText from './components/StickyText.jsx'; // Relative path
import About from './components/About.jsx'; // Relative path
import Projects from './components/Projects.jsx'; // Relative path

function App() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on refresh
  }, []);

  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  return (
    <div className="flex flex-col">
      <div id="HOME" className="flex flex-col items-center h-[calc(var(--vh)_*_100)] bg-white">
        <Header />
        <IamTino />
        <StickyText />
      </div>
      <div id="PROJECTS" className="flex items-center justify-center h-[calc(var(--vh)_*_100)] bg-white dark:bg-black">
        <Projects />
      </div>
      <div id="ABOUT" className="flex flex-col justify-center items-center h-[calc(var(--vh)_*_100)] bg-white dark:bg-black">
        <About />
      </div>
    </div>
  );
}

export default App;