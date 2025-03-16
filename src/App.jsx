import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import IamTino from './components/iamtino.jsx';
import StickyText from './components/stickyText.jsx';
import About from './components/About.jsx';

function App() {
  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = 'hidden';

    // Enable scrolling after 4.5 seconds
    const timer = setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 4500);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div id='HOME' className="flex flex-col items-center min-h-screen bg-white">
        <Header />
        <IamTino />
        <StickyText />
      </div>
      <div id='PROJECTS' className="flex flex-col items-center min-h-screen bg-red-400">
        
      </div>
      <div id='ABOUT' className="flex flex-col justify-center items-center min-h-screen bg-white dark:bg-black">
        <About />
      </div>
    </>
  );
}

export default App;