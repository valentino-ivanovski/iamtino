import { useState, useEffect } from "react";

function StickyText() {
  const [visible, setVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed translate-y-0 sm:translate-y-3 sm:bottom-8 left-1/2 transform -translate-x-1/2 sm:left-36 sm:transform-none rounded-md p-2 sm:p-3 backdrop-blur-md z-50 cursor-default flex flex-col items-center sm:items-start text-xs sm:text-sm dark:text-white dark:brightness-85 text-black
        transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <p className="text-center pt-1 sm:text-left">
        VALENTINO IVANOVSKI
        <br />
        <span className="hidden sm:inline">JUNIOR SOFTWARE DEVELOPER</span>
        <br className="hidden sm:block" />
        {currentTime.toLocaleString()}
      </p>
    </div>
  );
}

export default StickyText;