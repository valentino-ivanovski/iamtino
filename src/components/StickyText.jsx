import { useState, useEffect } from "react";

function StickyText() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-8 z-50 cursor-default flex pb-3 pt-3 text-sm dark:text-white sm:text-left text-center text-black -translate-x-0 sm:-translate-x-140
        transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <p>
        VALENTINO IVANOVSKI <br />
        JUNIOR SOFTWARE DEVELOPER
      </p>
    </div>
  );
}

export default StickyText;
