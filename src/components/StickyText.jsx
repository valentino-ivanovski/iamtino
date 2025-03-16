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
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 sm:left-36 sm:transform-none rounded-md p-3 backdrop-blur-md z-50 cursor-default flex pb-3 pt-3 text-sm dark:text-white text-center sm:text-left text-black
        transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <p>
        VALENTINO IVANOVSKI <br />
        JUNIOR SOFTWARE DEVELOPER <br />
        {currentTime.toLocaleString()}
      </p>
    </div>
  );
}

export default StickyText;