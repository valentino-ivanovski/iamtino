import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import IamTino from './components/IamTino.jsx';
import StickyText from './components/StickyText.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';

function App() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fixed inset-0 bg-black p-1.5 md:p-1.5"> {/* Full-screen black frame with responsive padding */}
      <div className="relative w-full h-full rounded-lg md:rounded-lg overflow-hidden bg-white dark:bg-black">
        <div className="absolute inset-0 overflow-y-auto"> {/* Scrollable content area */}
          <div className="flex flex-col">
            <div id="HOME" className="flex flex-col items-center min-h-screen bg-white dark:bg-black">
              <Header />
              <IamTino />
              <StickyText />
            </div>
            <div id="PROJECTS" className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
              <Projects />
            </div>
            <div id="ABOUT" className="flex flex-col justify-center items-center min-h-screen bg-white dark:bg-black">
              <About />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;