import { useState, useEffect } from "react";

function StickyText() {
  const [visible, setVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p
      className={`fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 sm:left-36 sm:transform-none z-50 cursor-default flex flex-col items-center sm:items-start text-xs sm:text-sm text-center text-white mix-blend-difference
        transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      VALENTINO IVANOVSKI
      <br />
      <span className="hidden sm:inline">JUNIOR SOFTWARE DEVELOPER</span>
      <br className="hidden sm:block" />
      {currentTime.toLocaleString()}
    </p>
  );
}

export default StickyText;