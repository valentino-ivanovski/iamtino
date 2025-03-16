// src/App.jsx
import React, { useEffect } from 'react';
import './App.css';
import Header from 'src/components/Header.jsx';
import IamTino from 'src/components/iamtino.jsx';
import StickyText from 'src/components/stickyText.jsx';
import About from 'src/components/About.jsx';
import Projects from 'src/components/Projects.jsx';

function App() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col">
      <div id='HOME' className="flex flex-col items-center min-h-screen bg-white">
        <Header />
        <IamTino />
        <StickyText />
      </div>
      <div id='PROJECTS' className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
        <Projects />
      </div>
      <div id='ABOUT' className="flex flex-col justify-center items-center min-h-screen bg-white dark:bg-black">
        <About />
      </div>
    </div>
  );
}

export default App;